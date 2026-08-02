# AuthShield — Architecture Document

## 1. Web Flow

### User Authentication Flow
Landing Page
→ Register / Login
→ Passkey Authentication
→ Risk Engine
→ Low Risk: Login
→ Medium/High Risk: OTP and/or QR
→ Security Dashboard

### Suspicious Login Flow
Login Attempt
→ Collect security context (device, approximate location, time, network)
→ Risk Engine
→ Risk Score
→ Adaptive Authentication
→ AI Security Assistant explains the decision
→ Allow / Request Verification / Block

### Transaction Flow
Dashboard
→ Transfer Page
→ Enter mock transaction details
→ Transaction Risk Engine
→ Determine authentication level
→ Passkey / QR / OTP
→ Approve or Reject
→ Transaction History

### Device Management Flow
Dashboard
→ Trusted Devices
→ View devices
→ Trust / Remove device
→ Logout device or all devices

---

## 2. High-Level Architecture

```text
                    ┌─────────────────────┐
                    │      React UI       │
                    │  Tailwind CSS       │
                    └──────────┬──────────┘
                               │ REST API
                               ▼
                    ┌─────────────────────┐
                    │   Node.js + Express │
                    │      Backend API     │
                    └──────────┬──────────┘
                               │
          ┌────────────────────┼────────────────────┐
          ▼                    ▼                    ▼
 ┌────────────────┐   ┌────────────────┐   ┌──────────────────┐
 │ Authentication │   │   Risk Engine  │   │ Transaction      │
 │ Passkey / OTP  │   │ Login Risk     │   │ Risk Engine      │
 │ QR / Sessions  │   │ Analysis       │   │                 │
 └───────┬────────┘   └───────┬────────┘   └────────┬─────────┘
         │                    │                     │
         └────────────────────┼─────────────────────┘
                              ▼
                    ┌─────────────────────┐
                    │      MongoDB        │
                    │ Users / Devices /   │
                    │ Logs / Transactions │
                    └─────────────────────┘
                              │
                              ▼
                    ┌─────────────────────┐
                    │ AI Security Assistant│
                    │ Risk explanations    │
                    └─────────────────────┘
```

---

## 3. Frontend Architecture

Use React with a feature-based structure.

Main frontend areas:
- Authentication
- Dashboard
- Security
- Devices
- Login History
- Transactions
- Security Assistant
- Profile/Settings

Frontend responsibilities:
- Render UI
- Form validation
- Call backend APIs
- Display risk scores and alerts
- Handle authentication states
- Provide responsive banking UI

---

## 4. Backend Architecture

Use Node.js + Express.

Backend layers:

### Routes
Define API endpoints.

### Controllers
Receive requests and return responses.

### Services
Contain business logic such as:
- Authentication
- Risk calculation
- Device management
- Transactions
- AI explanations

### Models
MongoDB data models.

### Middleware
Handle:
- Authentication
- Authorization
- Validation
- Rate limiting
- Error handling

---

## 5. Risk Engine Architecture

The risk engine should initially be rule-based.

Example factors:

```text
New Device       +25
New Location     +20
Unusual Time     +15
Suspicious VPN   +20
High Transaction +20
Known Device     -20
Known Location   -15
```

Normalize the final result to 0–100.

Risk levels:

```text
0–30   LOW
31–60  MEDIUM
61–80  HIGH
81–100 CRITICAL
```

The engine returns:

```text
{
  riskScore,
  riskLevel,
  factors,
  requiredAuthentication
}
```

---

## 6. Authentication Architecture

### Passkeys
Use WebAuthn for passwordless authentication.

### OTP
Use OTP for:
- Account verification
- Recovery
- Additional high-risk authentication

### QR
Use QR approval as an additional authentication factor.

### Sessions
Use secure server-side session/token handling.

Do not store raw biometric information.

---

## 7. Folder and File Structure

```text
AuthShield/
│
├── README.md
├── PRD.md
├── ARCHITECTURE.md
├── .env.example
├── .gitignore
├── package.json
│
├── frontend/
│   ├── package.json
│   ├── index.html
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       │
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── ProtectedRoute.jsx
│       │   ├── RiskBadge.jsx
│       │   ├── SecurityAlert.jsx
│       │   └── Loading.jsx
│       │
│       ├── pages/
│       │   ├── Login.jsx
│       │   ├── Register.jsx
│       │   ├── OTPVerification.jsx
│       │   ├── QRAuthentication.jsx
│       │   ├── Dashboard.jsx
│       │   ├── SecurityDashboard.jsx
│       │   ├── LoginHistory.jsx
│       │   ├── TrustedDevices.jsx
│       │   ├── Transactions.jsx
│       │   ├── SecurityAssistant.jsx
│       │   └── Profile.jsx
│       │
│       ├── services/
│       │   └── api.js
│       │
│       ├── hooks/
│       ├── context/
│       ├── utils/
│       └── assets/
│
├── backend/
│   ├── package.json
│   ├── server.js
│   │
│   └── src/
│       ├── config/
│       │   └── db.js
│       │
│       ├── routes/
│       │   ├── auth.routes.js
│       │   ├── user.routes.js
│       │   ├── device.routes.js
│       │   ├── security.routes.js
│       │   └── transaction.routes.js
│       │
│       ├── controllers/
│       │   ├── auth.controller.js
│       │   ├── user.controller.js
│       │   ├── device.controller.js
│       │   ├── security.controller.js
│       │   └── transaction.controller.js
│       │
│       ├── services/
│       │   ├── auth.service.js
│       │   ├── otp.service.js
│       │   ├── qr.service.js
│       │   ├── risk.service.js
│       │   ├── transactionRisk.service.js
│       │   └── ai.service.js
│       │
│       ├── models/
│       │   ├── User.js
│       │   ├── Device.js
│       │   ├── LoginHistory.js
│       │   ├── SecurityEvent.js
│       │   └── Transaction.js
│       │
│       ├── middleware/
│       │   ├── auth.middleware.js
│       │   ├── validation.middleware.js
│       │   ├── rateLimit.middleware.js
│       │   └── error.middleware.js
│       │
│       └── utils/
│           ├── riskCalculator.js
│           └── securityLogger.js
│
└── docs/
    └── demo-flow.md
```

---

## 8. Tech Stack

### Frontend
- React
- JavaScript
- Tailwind CSS
- React Router

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- WebAuthn / Passkeys
- OTP
- QR authentication
- Secure sessions

### AI
- AI API for security explanations
- Rule-based risk engine for the MVP

### Development
- VS Code
- Git / GitHub
- Postman

---

## 9. API Structure

Suggested endpoints:

```text
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/passkey/register
POST   /api/auth/passkey/login
POST   /api/auth/verify-otp
POST   /api/auth/logout
POST   /api/auth/logout-all

GET    /api/user/profile
PUT    /api/user/profile

GET    /api/devices
POST   /api/devices/trust
DELETE /api/devices/:id

GET    /api/security/dashboard
GET    /api/security/login-history
GET    /api/security/alerts
GET    /api/security/score

POST   /api/risk/login
POST   /api/risk/transaction

GET    /api/transactions
POST   /api/transactions

POST   /api/assistant/explain
```

---

## 10. Data Flow

```text
User Action
    ↓
React Frontend
    ↓
Express API
    ↓
Authentication / Risk / Transaction Service
    ↓
MongoDB
    ↓
Risk Result
    ↓
Adaptive Authentication
    ↓
Frontend
    ↓
User sees result + explanation
```

---

## 11. Development Priority

Build in this order:

1. Project setup
2. React frontend
3. Express backend
4. MongoDB connection
5. User registration
6. Login/session system
7. Passkey integration
8. OTP verification
9. Dashboard
10. Device management
11. Login history
12. Risk engine
13. Adaptive authentication
14. Security alerts
15. AI Security Assistant
16. Transaction risk engine
17. QR authentication
18. Security Health Score
19. Continuous authentication
20. Final hackathon demo

---

## 12. Architecture Principle

Keep the project modular so authentication, risk analysis, transactions, AI explanations, and UI can be developed independently but communicate through clear APIs.

Start with a working MVP before implementing advanced features.
