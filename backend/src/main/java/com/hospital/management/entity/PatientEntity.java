package com.hospital.management.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "patients")
public class PatientEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private int age;
    private String symptoms;
    private int emergencyLevel;

    private LocalDateTime arrivalTime;

    public PatientEntity() {
    }

    public PatientEntity(String name, int age, String symptoms, int emergencyLevel) {
        this.name = name;
        this.age = age;
        this.symptoms = symptoms;
        this.emergencyLevel = emergencyLevel;
        this.arrivalTime = LocalDateTime.now();
    }

    // Getters & Setters

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

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setSymptoms(String symptoms) {
        this.symptoms = symptoms;
    }

    public void setEmergencyLevel(int emergencyLevel) {
        this.emergencyLevel = emergencyLevel;
    }

    public void setArrivalTime(LocalDateTime arrivalTime) {
        this.arrivalTime = arrivalTime;
    }
}
