package com.hospital.management.controller;

import com.hospital.management.model.Patient;
import com.hospital.management.model.PatientRequest;
import com.hospital.management.model.QueueStatusResponse;
import com.hospital.management.model.ServeMultipleRequest;
import com.hospital.management.service.QueueService;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patients")
public class PatientController {

    private final QueueService queueService;

    public PatientController(QueueService queueService) {
        this.queueService = queueService;
    }

    @PostMapping("/register")
    public Patient registerPatient(@Valid @RequestBody PatientRequest request) {
        return queueService.registerPatient(
                request.getName(),
                request.getAge(),
                request.getSymptoms(),
                request.getEmergencyLevel()
        );
    }

    @GetMapping("/status")
    public QueueStatusResponse getQueueStatus() {
        return queueService.getQueueStatus();
    }

    @GetMapping("/next")
    public Patient getNextPatient() {
        return queueService.getNextPatient();
    }

    @PostMapping("/serve-multiple")
    public List<Patient> serveMultiplePatients(
            @Valid @RequestBody ServeMultipleRequest request) {

        return queueService.serveMultiplePatients(
                request.getDoctorsAvailable()
        );
    }

    @PostMapping("/serve")
    public Patient servePatient() {
        return queueService.serveNextPatient();
    }
}
