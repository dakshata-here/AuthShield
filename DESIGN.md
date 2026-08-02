# AuthShield — UI/UX Design Specification

## 1. Design Goal

Create AuthShield as a **premium, elegant, trustworthy banking-security platform**.

The interface should feel like a combination of:
- Modern digital banking
- Cybersecurity
- AI intelligence
- Premium SaaS

The design must impress hackathon judges through **visual polish, clarity, smooth interactions, and strong storytelling**, not through excessive effects.

Avoid a generic banking template. AuthShield should have a distinctive visual identity.

---

## 2. Brand Personality

AuthShield should feel:

- Secure
- Premium
- Intelligent
- Trustworthy
- Modern
- Calm
- Privacy-focused
- Professional

Avoid:
- Overly flashy neon cyberpunk styling
- Excessive gradients
- Too many colors
- Cluttered dashboards
- Heavy animations
- Cartoon-like visuals

---

## 3. Color Palette

### Primary Colors

**Midnight Navy**
```text
#0B1220
```
Use for:
- Main background
- Navigation
- Hero sections
- Large security panels

**Deep Navy**
```text
#111827
```
Use for:
- Cards
- Dashboard sections
- Input containers

**Royal Blue**
```text
#2563EB
```
Use for:
- Primary buttons
- Active navigation
- Links
- Important actions

**Electric Blue**
```text
#3B82F6
```
Use sparingly for:
- Highlights
- Interactive states
- AI/security accents

### Background

**Soft White**
```text
#F8FAFC
```

Use for light dashboard sections where appropriate.

### Security Status Colors

**Success**
```text
#22C55E
```

**Warning**
```text
#F59E0B
```

**Danger**
```text
#EF4444
```

**Info**
```text
#06B6D4
```

Use these only for meaningful security states.

---

## 4. Typography

Use **Inter** as the primary font.

Fallback:
```text
Inter, system-ui, sans-serif
```

### Typography Scale

Hero heading:
```text
48–64px
font-weight: 700
```

Page heading:
```text
32–40px
font-weight: 700
```

Section heading:
```text
22–28px
font-weight: 600
```

Body:
```text
15–16px
font-weight: 400
```

Small labels:
```text
12–14px
font-weight: 500
```

Risk scores and important numbers:
```text
32–48px
font-weight: 700
```

Use generous line-height and whitespace.

---

## 5. Logo / Brand

Create a simple premium AuthShield identity.

Suggested concept:

**Shield + subtle authentication/key symbol**

Logo should be:
- Minimal
- Geometric
- Recognizable
- Professional

Brand text:

```text
AuthShield
```

Optional tagline:

```text
Security that adapts to you.
```

---

## 6. Landing Page

The landing page should immediately communicate the product.

### Hero

Headline:

```text
Security that adapts to you.
```

Supporting text:

```text
Passwordless banking authentication powered by adaptive
risk intelligence and privacy-first security.
```

Primary CTA:

```text
Get Started
```

Secondary CTA:

```text
Explore Security
```

### Hero Visual

Show an elegant animated security dashboard/card containing:

```text
SECURITY STATUS
Protected

Risk Score
18 / 100

Trusted Device
✓

Passkey
✓ Enabled
```

Use subtle animated glow/particles around the security visualization.

Do not make the hero look like a generic AI landing page.

---

## 7. Login Page

Create a clean split-screen or centered premium authentication layout.

Left side:
- AuthShield branding
- Short security statement
- Minimal security illustration

Right side:
- Login card
- Email/identifier field
- Continue button
- Login with Passkey button
- OTP fallback
- Security reassurance

Example:

```text
Welcome back

Secure access without passwords.

[ Continue ]

[ Continue with Passkey ]

Use another verification method
```

---

## 8. Registration Page

Keep registration simple.

Fields:
- Name
- Email
- Phone
- Verification

Then guide the user through Passkey setup.

Use a progress indicator:

```text
01 Account
02 Verify
03 Passkey
04 Complete
```

---

## 9. Dashboard

The dashboard is the most important screen for the hackathon demo.

### Header

Show:
- AuthShield logo
- Navigation
- Notification icon
- User profile

### Main Security Card

Large card:

```text
Your account is protected

Security Score

92
/100

Excellent
```

Add a circular progress indicator.

### Quick Actions

Cards/buttons:

```text
Transfer Money
Security Center
Trusted Devices
Login History
```

---

## 10. Risk Visualization

Create an elegant risk score component.

Example:

```text
RISK SCORE

18

LOW RISK
```

Use a smooth circular gauge.

When risk increases:

```text
72

HIGH RISK
```

The component should clearly communicate the reason.

---

## 11. AI Security Assistant

This should be a standout feature.

Create a dedicated assistant panel with a subtle AI glow.

Title:

```text
AuthShield Intelligence
```

Example:

```text
Why did you request additional verification?

We detected:
• New device
• Unusual login time
• Different location

Risk Score
78 / 100

For your protection, additional verification
was requested.
```

Include a button:

```text
Why is this risky?
```

and optionally:

```text
How can I improve my security?
```

The AI explanation should feel helpful, not robotic.

---

## 12. Security Center

Create a visually rich security page.

Sections:

### Security Health
```text
92 / 100
Excellent
```

### Authentication
```text
✓ Passkey enabled
✓ Recovery method configured
```

### Devices
```text
✓ 2 trusted devices
⚠ 1 new device
```

### Recent Alerts
Display security events using clean timeline cards.

---

## 13. Trusted Devices

Display devices as elegant cards.

Example:

```text
MacBook Pro
Trusted Device
Pune
Active now

[ Manage ]
```

Another:

```text
Windows Laptop
New Device
Mumbai
2 hours ago

[ Review ]
```

Use device icons and status badges.

---

## 14. Login History

Use a clean timeline/table.

Columns:

```text
Device
Location
Time
Authentication
Risk
Status
```

Example:

```text
MacBook    Pune     10:20 AM    Passkey     18    ✓
Windows    Mumbai   2:15 AM     OTP + QR     82    ⚠
```

---

## 15. Transaction Page

Make transaction security visually obvious.

Before confirmation:

```text
Transfer Money

Amount
₹50,000

Recipient
Rahul Sharma

Transaction Risk
34 / 100

Authentication Required
Passkey + QR
```

For high-risk transactions:

```text
Transaction Risk
88 / 100

Additional verification required

✓ Passkey
→ QR Approval
→ OTP
```

Use a clear security stepper.

---

## 16. Adaptive Authentication Screen

This should be a major hackathon showcase.

When risk increases, show:

```text
Additional verification required

We've detected unusual activity.

Risk Score
82 / 100

Why?
• New device
• New location
• Unusual login time

Required:
✓ Passkey
→ QR Approval
→ OTP
```

Animate the steps smoothly as they are completed.

---

## 17. QR Authentication

Create a premium QR verification screen.

Center:
- QR code
- Countdown
- Device name
- Verification status

Example:

```text
Approve on your trusted device

Scan this QR code using your AuthShield app.

Expires in 01:42
```

---

## 18. Security Alerts

Use severity-based cards.

Low:
```text
✓ Login successful
```

Warning:
```text
⚠ New device detected
```

Critical:
```text
! Suspicious login blocked
```

Each alert should include:
- What happened
- Why it matters
- What AuthShield did
- Recommended action

---

## 19. Animations & Interactions

Use **Framer Motion** or CSS transitions.

Animations should be:
- Smooth
- Fast
- Subtle
- Purposeful

Recommended:
- Page fade/slide transitions
- Card hover effects
- Button micro-interactions
- Risk gauge animation
- Security score animation
- AI assistant appearance
- Authentication step transitions
- Toast notifications

Avoid:
- Excessive bouncing
- Long animations
- Distracting background animations

---

## 20. Cards & Components

Use:
- 12–20px border radius
- Subtle borders
- Soft shadows
- Consistent spacing

Dark cards:

```text
background: #111827
border: 1px solid rgba(255,255,255,0.08)
```

Light cards:

```text
background: #FFFFFF
border: 1px solid #E5E7EB
```

Buttons should have rounded corners but should not look overly pill-shaped.

---

## 21. Icons

Use **Lucide React** icons.

Recommended icons:
- Shield
- Fingerprint
- Smartphone
- Laptop
- MapPin
- Clock
- AlertTriangle
- CheckCircle
- Lock
- KeyRound
- QrCode
- Bot
- Activity
- ArrowUpRight

Keep icon style consistent.

---

## 22. Responsive Design

The website must work well on:

- Desktop
- Laptop
- Tablet
- Mobile

Desktop should be the primary hackathon presentation experience.

Do not simply shrink desktop UI on mobile. Reorganize cards and navigation appropriately.

---

## 23. Dark / Light Theme

Primary experience:
**Dark premium security theme**

Optional:
**Light dashboard theme**

Dark mode should use Midnight Navy rather than pure black.

Avoid pure white text everywhere. Use hierarchy:

- Primary text: #F8FAFC
- Secondary text: #94A3B8
- Muted text: #64748B

---

## 24. Visual Storytelling for Judges

The UI should make the AuthShield concept obvious within seconds.

A judge should immediately understand:

```text
Passwordless
      ↓
Risk Detection
      ↓
Adaptive Authentication
      ↓
AI Explanation
      ↓
Secure Transaction
```

Use the dashboard to visually connect these concepts.

---

## 25. Hackathon Presentation Mode

Add polished demo states that can be triggered using mock data.

### Normal Login
```text
Risk: 18
LOW
Passkey
✓ Approved
```

### Suspicious Login
```text
Risk: 82
HIGH
New Device + New Location + Unusual Time
Passkey + OTP + QR
```

### High-Value Transaction
```text
Risk: 88
CRITICAL
Passkey + QR + OTP
```

The transitions between these states should be visually impressive and easy to demonstrate.

---

## 26. Final Design Rule

AuthShield should look like a **real premium banking-security product**, not a college project.

Prioritize:

**Elegance > clutter**

**Clarity > excessive effects**

**Trust > flashy visuals**

**Smooth interaction > unnecessary animation**

**Consistent design > random components**

The final website should feel polished enough that a judge could imagine AuthShield as a real banking security product.
