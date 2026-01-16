package com.hospital.management.model;

public class TriageResponse {

    private Patient patient;
    private String reason;

    public TriageResponse(Patient patient, String reason) {
        this.patient = patient;
        this.reason = reason;
    }

    public Patient getPatient() {
        return patient;
    }

    public String getReason() {
        return reason;
    }
}
