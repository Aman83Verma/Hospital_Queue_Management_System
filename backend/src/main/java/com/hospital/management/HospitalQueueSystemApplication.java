package com.hospital.management;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class HospitalQueueSystemApplication {
    public static void main(String[] args) {
        SpringApplication.run(HospitalQueueSystemApplication.class, args);
    }
}
