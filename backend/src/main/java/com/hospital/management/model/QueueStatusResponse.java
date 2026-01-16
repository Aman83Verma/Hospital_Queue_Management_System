package com.hospital.management.model;

import java.util.List;

public class QueueStatusResponse {

    private int totalPatients;
    private List<Patient> nextPatients;
    private Patient longestWaitingPatient;
    private int highestEmergencyLevel;

    public QueueStatusResponse(int totalPatients,
                               List<Patient> nextPatients,
                               Patient longestWaitingPatient,
                               int highestEmergencyLevel) {
        this.totalPatients = totalPatients;
        this.nextPatients = nextPatients;
        this.longestWaitingPatient = longestWaitingPatient;
        this.highestEmergencyLevel = highestEmergencyLevel;
    }

    public int getTotalPatients() {
        return totalPatients;
    }

    public List<Patient> getNextPatients() {
        return nextPatients;
    }
    
    public Patient getLongestWaitingPatient() {
        return longestWaitingPatient;
    }

    public int getHighestEmergencyLevel() {
        return highestEmergencyLevel;
    }
}
