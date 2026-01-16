package com.hospital.management.model;

import java.time.Duration;
import java.time.LocalDateTime;

public class Patient {

    private Long id;
    private String name;
    private int age;
    private String symptoms;
    private int emergencyLevel; // 1 = Low, 5 = Critical
    private LocalDateTime arrivalTime;
    private int waitingTimeInMinutes;

    public Patient(Long id, String name, int age, String symptoms, int emergencyLevel) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.symptoms = symptoms;
        this.emergencyLevel = emergencyLevel;
        this.arrivalTime = LocalDateTime.now();
        this.waitingTimeInMinutes = waitingTimeInMinutes;
    }
    
    public long getWaitingTimeInMinutes() {
        return Duration.between(arrivalTime, LocalDateTime.now()).toMinutes();
    }

    // Getters
    public Long getId() {
        return id;
    }

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

    public LocalDateTime getArrivalTime() {
        return arrivalTime;
    }
    
    public void incrementWaitingTime() {
        this.waitingTimeInMinutes++;
    }

}
