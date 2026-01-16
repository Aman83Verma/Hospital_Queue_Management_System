package com.hospital.management.model;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

public class PatientRequest {

    @NotBlank(message = "Name is required")
    private String name;

    @Min(value = 0, message = "Age must be non-negative")
    private int age;

    @NotBlank(message = "Symptoms are required")
    private String symptoms;

    @Min(value = 1, message = "Emergency level must be at least 1")
    private int emergencyLevel;

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public String getSymptoms() {
        return symptoms;
    }

    public int getEmergencyLevel() {
        return emergencyLevel;
    }
}
