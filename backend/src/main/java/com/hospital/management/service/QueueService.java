package com.hospital.management.service;

import com.hospital.management.entity.PatientEntity;
import com.hospital.management.exception.QueueEmptyException;
import com.hospital.management.model.Patient;
import com.hospital.management.model.QueueStatusResponse;
import com.hospital.management.repository.PatientRepository;
import org.springframework.stereotype.Service;
import java.util.Comparator;
import java.util.PriorityQueue;
import java.util.Queue;
import java.util.ArrayList;
import java.util.List;

@Service
public class QueueService {

    private final Queue<Patient> patientQueue;
    private final PatientRepository patientRepository;

    public QueueService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;

        // PriorityQueue with emergency + waiting-time logic
        this.patientQueue = new PriorityQueue<>((p1, p2) -> {

            long p1Score = (p1.getEmergencyLevel() * 10) + p1.getWaitingTimeInMinutes();
            long p2Score = (p2.getEmergencyLevel() * 10) + p2.getWaitingTimeInMinutes();

            // Higher score first
            if (p1Score != p2Score) {
                return Long.compare(p2Score, p1Score);
            }

            // Tie-breaker: earlier arrival first
            return p1.getArrivalTime().compareTo(p2.getArrivalTime());
        });
    }

    // Register patient
    public Patient registerPatient(String name, int age, String symptoms, int emergencyLevel) {

        // Save to DB
        PatientEntity entity = new PatientEntity(name, age, symptoms, emergencyLevel);
        PatientEntity saved = patientRepository.save(entity);

        // Add to priority queue (DSA logic)
        Patient patient = new Patient(
                saved.getId(),
                saved.getName(),
                saved.getAge(),
                saved.getSymptoms(),
                saved.getEmergencyLevel()
        );

        patientQueue.add(patient);
        return patient;
    }

    public Patient getNextPatient() {
        if (patientQueue.isEmpty()) {
            throw new QueueEmptyException("No patients in queue");
        }
        return patientQueue.peek();
    }

    public Patient serveNextPatient() {
        if (patientQueue.isEmpty()) {
            throw new QueueEmptyException("No patients to serve");
        }
        return patientQueue.poll();
    }


    // ✅ SERVE MULTIPLE PATIENTS (THIS WAS MISSING)
    public List<Patient> serveMultiplePatients(int doctorsAvailable) {

        List<Patient> servedPatients = new ArrayList<>();

        while (doctorsAvailable > 0 && !patientQueue.isEmpty()) {
            servedPatients.add(patientQueue.poll());
            doctorsAvailable--;
        }

        return servedPatients;
    }

    // Queue status API
    public QueueStatusResponse getQueueStatus() {

        List<Patient> snapshot = new ArrayList<>(patientQueue);
        int totalPatients = snapshot.size();

        snapshot.sort((p1, p2) -> {
            long s1 = (p1.getEmergencyLevel() * 10) + p1.getWaitingTimeInMinutes();
            long s2 = (p2.getEmergencyLevel() * 10) + p2.getWaitingTimeInMinutes();
            if (s1 != s2) return Long.compare(s2, s1);
            return p1.getArrivalTime().compareTo(p2.getArrivalTime());
        });

        List<Patient> nextPatients = snapshot.stream()
                .limit(5)
                .toList();

        Patient longestWaitingPatient = snapshot.stream()
                .min(Comparator.comparing(Patient::getArrivalTime))
                .orElse(null);

        int highestEmergencyLevel = snapshot.stream()
                .mapToInt(Patient::getEmergencyLevel)
                .max()
                .orElse(0);

        return new QueueStatusResponse(
                totalPatients,
                nextPatients,
                longestWaitingPatient,
                highestEmergencyLevel
        );
    }

    // Optional explanation logic
    public String explainNextPatient(Patient patient) {
        if (patient == null) return "No patients in queue";

        return "Selected due to emergency level "
                + patient.getEmergencyLevel()
                + " and waiting time "
                + patient.getWaitingTimeInMinutes()
                + " minutes";
    }
    
    public void incrementWaitingTime() {
        List<Patient> temp = new ArrayList<>();

        while (!patientQueue.isEmpty()) {
            Patient p = patientQueue.poll();
            p.incrementWaitingTime();
            temp.add(p);
        }

        patientQueue.addAll(temp);
    }

}
