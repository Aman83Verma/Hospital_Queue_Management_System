package com.hospital.management.repository;

import com.hospital.management.entity.StaffEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StaffRepository extends JpaRepository<StaffEntity, Long> {
    Optional<StaffEntity> findByEmail(String email);
}
