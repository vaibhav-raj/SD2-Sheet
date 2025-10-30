
# 🧩 Brute-Force Protected Login Application (LoginRadius Assessment)

## 👤 Author
Vaibhav Raj
📧 vaibhav.raj524@gmail.com


## 🚀 Overview
This project implements a **secure login system** protected against **brute-force attacks** at both the *user* and *IP* levels.  
It was developed as part of the **LoginRadius Take-Home Assessment**.

The application enforces:
- User-level suspension after repeated failed login attempts.
- IP-level blocking to prevent distributed brute-force attempts.
- Persistent tracking of failed attempts even after restarts.

---

## 🏗️ Architecture & Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React (Vite) |
| **Backend** | Node.js (Express) |
| **Database** | MongoDB Atlas |
| **Hosting** | Backend → Render, Frontend → Vercel |
| **Testing** | Jest + mongodb-memory-server |
| **Logging** | Winston logger |

---

## 🔐 Core Features

### 1️⃣ User-Level Suspension
- If a user enters the wrong password **more than 5 times within 5 minutes**,  
  their login gets **suspended for 15 minutes**.

### 2️⃣ IP-Level Blocking
- If a single IP address causes **50 failed login attempts across any users** within 5 minutes,  
  that IP is **temporarily blocked** from all further attempts.

### 3️⃣ Additional Highlights
- JWT-based authentication  
- Configurable lockout thresholds via environment variables  
- Clean, structured logging (info, warn, error, debug)  
- Health check endpoint for uptime monitoring (`/api/v1/health`)  
- Persistent MongoDB-based tracking of failures and suspensions  

---

## ⚙️ Environment Variables

Create a `.env` file (based on `.env.example`):

```env
PORT=4000
MONGO_URI=<your_mongodb_atlas_uri>
JWT_SECRET=supersecretkey
JWT_EXPIRES_IN=1d

USER_WINDOW_MINUTES=5
USER_FAILED_THRESHOLD=5
USER_SUSPEND_MINUTES=15

IP_THRESHOLD=50
IP_SUSPEND_MINUTES=60

````

---

## 🧠 Architecture Design

```plaintext
Frontend (React) → Backend (Express API) → MongoDB Atlas
                        |
                ├── User Suspension Logic
                ├── IP Block Logic
                ├── JWT Auth & Validation
                ├── Winston Logging
                └── Unit Tests (Jest)
```

### Data Models:

* **User** → Stores credentials and suspension timestamp
* **FailedLoginAttempt** → Tracks failed login attempts per user and IP
* **IPBlock** → Tracks temporarily blocked IPs

---

## ⚙️ Setup Instructions

### 🖥️ Backend Setup

```bash
git clone https://github.com/yourusername/brute-force-protected-login-radius.git
cd backend
npm install
cp .env.example .env
```

Run locally:

```bash
npm start
```

Test:

```bash
npm test
```

### 🌐 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🌍 Deployment Details

| Component                | Platform | URL                                                                    |
| ------------------------ | -------- | ---------------------------------------------------------------------- |
| **Backend (API)**        | Render   | [https://loginradius.onrender.com](https://loginradius.onrender.com) |
| **Frontend (React App)** | Vercel   | [https://your-frontend.vercel.app](https://your-frontend.vercel.app)   |

**Health Check URL:**

```
https://your-backend.onrender.com/api/v1/health
```

---

## 🧪 Testing

Command:

```bash
npm test
```

### Unit Test Coverage:

* ✅ Successful login
* 🚫 User suspension after 5 failed attempts
* 🚫 IP block after 50 failed attempts
* ♻️ Clear failed attempts on successful login

Tests are implemented using **Jest** and **mongodb-memory-server**, ensuring isolated and repeatable test runs.

---

## 🧩 Design Decisions

* **Sliding time window** for fairness (`createdAt >= now - 5 min`)
* **Winston logger** for consistent structured logging
* **MongoDB** persistence ensures security state survives server restarts
* **Configurable environment variables** for all thresholds and durations
* **Centralized error handling** with custom `AuthError` class

---

## 🧠 AI Usage Report

| Section                                              | AI Tool | Contribution                                                             |
| ---------------------------------------------------- | ------- | ------------------------------------------------------------------------ |
| **Backend Architecture & Auth Logic**                | ChatGPT | ~40% (assisted with brute-force logic, error handling, and logger setup) |
| **Frontend (React Login Form)**                      | ChatGPT | ~50% (assisted with layout and validation handling)                      |
| **Test Cases (Jest)**                                | ChatGPT | ~80% (AI-generated structure and logic, refined manually)                |
| **Documentation (README, comments)**                 | ChatGPT | ~90% (proofreading and formatting)                                       |
| **Manual Work (integration, debugging, deployment)** | Self    | ~8–10 hours                                                              |

### ⏱️ Time Summary

| Task                         | Time Spent     |
| ---------------------------- | -------------- |
| Backend & DB setup           | 4 hrs          |
| Frontend (React)             | 2 hrs          |
| Testing (Jest + mocks)       | 2 hrs          |
| Deployment (Render + Vercel) | 1 hr           |
| Documentation + AI Report    | 1 hr           |
| **Total**                    | **≈ 10 hours** |

---

## 🧾 Optional: Screenshots

| Example            | Description                                      |
| ------------------ | ------------------------------------------------ |
| ✅ Successful Login | User logged in with valid credentials            |
| 🚫 User Suspended  | Message: *Account suspended for 15 minutes*      |
| 🚫 IP Blocked      | Message: *Too many failed attempts from this IP* |
| 🧪 Jest Output     | Unit tests passing successfully                  |

---

## ✅ Conclusion

This project demonstrates **robust brute-force protection** with clear modular structure, comprehensive logging, and real-time feedback.
All logic is easily configurable and production-ready.


