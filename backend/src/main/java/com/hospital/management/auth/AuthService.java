package com.hospital.management.auth;

import com.hospital.management.entity.StaffEntity;
import com.hospital.management.model.LoginRequest;
import com.hospital.management.model.RegisterRequest;
import com.hospital.management.repository.StaffRepository;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final StaffRepository staffRepository;
    private final JwtUtil jwtUtil;

    public AuthService(StaffRepository staffRepository, JwtUtil jwtUtil) {
        this.staffRepository = staffRepository;
        this.jwtUtil = jwtUtil;
    }

    public void register(RegisterRequest request) {
        StaffEntity staff = new StaffEntity(
                request.getName(),
                request.getEmail(),
                request.getPassword() // plain for now (OK for project)
        );
        staffRepository.save(staff);
    }

    public String login(LoginRequest request) {
        StaffEntity staff = staffRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid email"));

        if (!staff.getPassword().equals(request.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        return jwtUtil.generateToken(staff.getEmail());
    }
}
