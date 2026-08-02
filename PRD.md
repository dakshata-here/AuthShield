# AuthShield — Product Requirements Document

## 1. Project Overview
AuthShield is a privacy-first, passwordless banking authentication system. It replaces traditional password-only login with Passkeys/WebAuthn, OTP, QR authentication, and adaptive risk-based security.

The system should decide the required authentication level based on device, location, login time, session behavior, and transaction risk.

## 2. Target Users
- Banking customers who want secure passwordless login.
- Users accessing banking from multiple devices.
- Bank security teams monitoring suspicious activity.
- Bank administrators managing security events.

## 3. Core Features

### Authentication
- User registration and profile management.
- Passwordless login using Passkeys/WebAuthn.
- OTP/email verification as backup or additional verification.
- QR-based authentication.
- Trusted device recognition.
- Logout from all devices.

### Adaptive Authentication
Create a risk engine with a score from 0–100 using:
- New/unknown device
- New location
- Unusual login time
- VPN/suspicious network
- Device history
- Session behavior
- Transaction amount
- New beneficiary

Suggested levels:
- Low (0–30): Passkey
- Medium (31–60): Passkey + OTP/QR
- High (61–80): Passkey + OTP + QR
- Critical (81–100): Block/additional verification

## 4. AI Security Assistant
Explain why authentication was increased instead of showing generic alerts.

The assistant should explain:
- Risk score
- Risk factors
- Why additional authentication was required
- Recommended security actions

Example:
“We noticed a login from a new device in Mumbai at an unusual time. Because this differs from your normal activity, additional verification was requested.”

## 5. Transaction-Based Authentication
Use stronger authentication for higher-risk transactions.

Example:
- Normal activity: Passkey
- Medium-value transaction: Passkey + QR
- High-value transaction: Passkey + QR + OTP

Calculate transaction risk using amount, beneficiary, device, location, and session risk.

Use mock banking transactions only.

## 6. Continuous Authentication
Monitor safe session-level signals such as:
- Session activity
- Window focus changes
- Sudden network/session changes
- Unusual session behavior

If suspicious behavior is detected, lock sensitive actions and request Passkey verification.

Do not collect or store unnecessary personal or biometric data.

## 7. Security Dashboard
Include:
- Security Health Score
- Current risk level
- Recent login activity
- Trusted devices
- Suspicious login alerts
- Authentication methods
- Login history
- Security recommendations

Example:
Security Score: 92/100
- Passkey enabled
- Trusted device
- Recovery method configured
- New device detected

## 8. Privacy
Use WebAuthn/Passkeys wherever possible. Biometric information must remain on the user's device. The server should verify cryptographic authentication and must not store raw fingerprints or face data.

## 9. Main Pages
1. Landing/Login
2. Registration
3. Passkey Authentication
4. OTP Verification
5. QR Authentication
6. User Dashboard
7. Security Dashboard
8. Login History
9. Trusted Devices
10. Security Assistant
11. Transaction/Transfer Page
12. Security Settings/Profile

## 10. Suggested Tech Stack
Frontend:
- React
- JavaScript
- Tailwind CSS

Backend:
- Node.js
- Express.js

Database:
- MongoDB

Authentication:
- WebAuthn/Passkeys
- OTP
- QR authentication
- Secure sessions

AI:
- AI API for security explanations if available.
- Rule-based risk engine for the initial prototype.

## 11. MVP Priority

### Phase 1 — Core
- Registration
- Passwordless authentication
- Passkey
- OTP
- User dashboard
- Backend/database
- Session management

### Phase 2 — Security
- Device recognition
- Login history
- Risk engine
- Adaptive authentication
- Security alerts

### Phase 3 — Advanced
- AI Security Assistant
- QR authentication
- Transaction risk engine
- Security Health Score
- Continuous authentication
- Digital identity wallet

## 12. Hackathon Demo

Scenario 1 — Normal Login:
Trusted device + known location + low risk → Passkey → Login successful.

Scenario 2 — Suspicious Login:
New device + new location + unusual time + VPN → High risk → Passkey + OTP + QR → AI explains the decision.

Scenario 3 — High-Value Transaction:
Large transfer + new beneficiary + high risk → Passkey + QR + OTP → Transaction approved.

## 13. Final Goal
Build AuthShield as a working banking-security prototype, not only a UI mockup.

Core concept:
Passwordless Authentication + Adaptive Risk Engine + AI Security Explanation + Transaction Security + Privacy-First Design.

All major features should be connected through the frontend, backend, authentication system, risk engine, and database.
