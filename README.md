# 🏥 Hospital Queue Management System

A full‑stack **Hospital Queue Management System** designed to replace traditional FIFO (First‑In‑First‑Out) patient handling with a **priority‑based triage system**.  
Patients are dynamically prioritized based on **emergency severity** and **real‑time waiting duration**, closely simulating real‑world hospital workflows.

---

## 📌 Table of Contents
- [Overview](#-overview)
- [Problem Statement](#-problem-statement)
- [Solution Approach](#-solution-approach)
- [Key Features](#-key-features)
- [System Architecture](#-system-architecture)
- [Technology Stack](#-technology-stack)
- [Modules Description](#-modules-description)
- [Backend Implementation](#-backend-implementation)
- [Frontend Implementation](#-frontend-implementation)
- [DSA & Algorithmic Concepts Used](#-dsa--algorithmic-concepts-used)
- [API Endpoints](#-api-endpoints)
- [Project Setup & Run](#-project-setup--run)
- [Future Enhancements](#-future-enhancements)
- [Learning Outcomes](#-learning-outcomes)
- [Conclusion](#-conclusion)

---

## 🔍 Overview

The **Hospital Queue Management System** is a real‑world inspired application that helps hospital staff manage patient queues efficiently.  
Unlike traditional queue systems, this project uses **priority‑based scheduling** to ensure that critical patients are served first while still accounting for waiting time fairness.

This project focuses heavily on:
- **Data Structures & Algorithms**
- **Backend logic correctness**
- **Real‑world simulation**
- **Clean full‑stack architecture**

---

## ❗ Problem Statement

Traditional hospital queue systems often follow a **FIFO approach**, which can lead to:
- Delays for critically ill patients
- Inefficient use of medical staff
- Manual queue management errors
- Lack of transparency in patient serving order

---

## 💡 Solution Approach

This system solves the above problems by:
- Using a **Priority Queue (Heap)** to manage patients
- Assigning priority based on:
  - Emergency Level (severity)
  - Waiting Time (dynamically increasing)
- Providing **triage explanations** for transparency
- Automating waiting time updates to reflect real conditions

---

## ✨ Key Features

- 🏥 Priority‑based patient queue management  
- 🚑 Emergency‑aware triage system  
- ⏱ Real‑time waiting time increment  
- 📊 Live queue status dashboard  
- 🧠 Triage explanation for next patient  
- 👨‍⚕️ Staff registration & login  
- 🖥 Responsive frontend dashboard  
- 🔄 Serve single or multiple patients  
- 📦 Clean modular backend design  

---

## 🏗 System Architecture

Frontend (React)
|
| REST APIs (JSON)
v
Backend (Spring Boot)
|
| JPA / Hibernate
v
MySQL Database

yaml
Copy code

- Frontend handles UI & user interaction
- Backend manages business logic & queue algorithms
- Database stores staff and patient records

---

## 🛠 Technology Stack

### Backend
- Java
- Spring Boot
- Spring Web
- Spring Data JPA
- MySQL
- Maven

### Frontend
- React
- JavaScript (ES6+)
- Plain CSS (No UI framework)

### Tools
- Postman (API testing)
- Git & GitHub
- IntelliJ IDEA / VS Code

---

## 🧩 Modules Description

### 1️⃣ Staff Module
- Staff registration
- Staff login
- Session handling (frontend‑based)

### 2️⃣ Patient Module
- Register patient
- Store patient details
- Assign emergency level

### 3️⃣ Queue Management Module
- Priority‑based queue handling
- Dynamic waiting time updates
- Serve next or multiple patients

### 4️⃣ Triage Module
- Explains why a patient is selected next
- Improves transparency and trust

---

## ⚙ Backend Implementation

### Core Components
- `PatientController` – Exposes REST APIs
- `QueueService` – Contains queue logic
- `PatientEntity` – Database entity
- `PriorityQueue` – Core DSA structure

### Special Logic
- Custom comparator based on:
  - Emergency level
  - Waiting time
  - Arrival time (tie‑breaker)

---

## 🎨 Frontend Implementation

### Pages
- Landing Page
- Login & Register
- Dashboard
- Patient Registration
- Serve Multiple Patients

### UX Improvements
- Loading indicators
- Error messages
- Empty state handling
- Responsive layout

---

## 🧠 DSA & Algorithmic Concepts Used

- Priority Queue (Heap)
- Custom Comparator
- Time‑based state updates
- Queue simulation
- Edge case handling
- Complexity optimization

---

## 🔌 API Endpoints

### Patient APIs
```http
POST   /patients/register
GET    /patients/status
GET    /patients/next
POST   /patients/serve
POST   /patients/serve-multiple
GET    /patients/next-explanation
Auth APIs
http
Copy code
POST   /auth/register
POST   /auth/login
▶ Project Setup & Run
Backend Setup
bash
Copy code
cd backend
mvn clean install
mvn spring-boot:run
Backend runs on:

arduino
Copy code
http://localhost:8080
Frontend Setup
bash
Copy code
cd frontend
npm install
npm run dev
Frontend runs on:

arduino
Copy code
http://localhost:5173
🚀 Future Enhancements
Role‑based access control

Password encryption (BCrypt)

Appointment scheduling

Real‑time notifications

Analytics & reporting dashboard

Deployment using Docker & Cloud

🎓 Learning Outcomes
Through this project, I gained hands‑on experience in:

Applying DSA concepts to real‑world problems

Designing scalable backend services

Building full‑stack applications

Writing clean and maintainable code

Debugging frontend‑backend integration issues

Thinking like a software engineer, not just a coder

🏁 Conclusion
The Hospital Queue Management System is a practical, algorithm‑driven solution that demonstrates how data structures, backend logic, and frontend design can work together to solve real‑world problems.
This project reflects industry‑level thinking and serves as a strong foundation for full‑stack and backend roles.

👤 Author
Aman Verma
💻 Java | Spring Boot | React | DSA
