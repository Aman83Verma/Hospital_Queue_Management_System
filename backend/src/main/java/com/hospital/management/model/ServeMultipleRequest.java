package com.hospital.management.model;

import jakarta.validation.constraints.Min;

public class ServeMultipleRequest {

    @Min(value = 1, message = "Doctors available must be at least 1")
    private int doctorsAvailable;

    public int getDoctorsAvailable() {
        return doctorsAvailable;
    }

    public void setDoctorsAvailable(int doctorsAvailable) {
        this.doctorsAvailable = doctorsAvailable;
    }
}
