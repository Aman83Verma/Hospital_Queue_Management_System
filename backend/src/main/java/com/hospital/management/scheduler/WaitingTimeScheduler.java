package com.hospital.management.scheduler;

import com.hospital.management.model.Patient;
import com.hospital.management.service.QueueService;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class WaitingTimeScheduler {

    private final QueueService queueService;

    public WaitingTimeScheduler(QueueService queueService) {
        this.queueService = queueService;
    }

    // runs every 1 minute
    @Scheduled(fixedRate = 60000)
    public void updateWaitingTime() {
        queueService.incrementWaitingTime();
    }
}
