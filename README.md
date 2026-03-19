# Gigshield-AI
AI-Powered Parametric Income Protection for Gig Workers

## 📌 Problem Statement
Gig workers such as delivery partners rely on daily income. External factors like heavy rain, poor air quality, and floods reduce their working hours, leading to 20–30% income loss.

Currently, there is no simple and fast system to compensate this loss.

## 👤 User Persona
**Rahul – Delivery Partner**
- Age: 26
- Daily income: ₹600
- Works 8–10 hours/day
- Problem:
  - Cannot work during bad weather
  - Loses daily earnings

👉 Needs quick and simple income protection without complex claims.

## 💡 Solution Overview
GigShield AI is a mobile-based parametric insurance platform that:
- Offers weekly subscription plans
- Monitors real-time weather & AQI
- Provides automatic payouts when conditions are met
- Uses AI for prediction and fraud detection

## ⚙️ Application Workflow
1. User registers on the app
2. Selects a weekly plan
3. System tracks:
   - Location
   - Weather data
   - AQI levels
4. If condition exceeds threshold
5. 💸 Automatic payout is credited

👉 No manual claims required

## 💰 Weekly Premium Model

| Plan     | Cost       | Payout    |
|----------|------------|-----------|
| Basic    | ₹20/week   | ₹200      |
| Standard | ₹40/week   | ₹500      |
| Premium  | ₹60/week   | ₹800      |

✔ Affordable ✔ Matches gig workers' earning cycle

## 🌐 Parametric Triggers
- 🌧️ Rainfall > 50 mm
- 🌫️ AQI > 300
- 🌊 Government flood alert

👉 Based on real-world data → automatic payouts

## 📱 Platform Choice: Mobile App
- Widely used by gig workers
- Enables real-time tracking
- Instant alerts & payouts
- Easy accessibility
## Installation
```
# Clone repo
git clone https://github.com/your-username/Gigshield-AI.git

# Navigate
cd Gigshield-AI

# Install dependencies
npm install
# Navigate to gigshield-frontend and gigshield-backend
npm start

# Run mobile app
npx expo start
# Demo email id
rahul@delivery.com
password123

```
## 🧠 AI/ML Integration
- **Risk Prediction:** Predict high-risk days using weather trends
- **Dynamic Pricing:** Adjust premiums based on location risk
- **Fraud Detection:** Analyze GPS & activity patterns

## 🛠️ Tech Stack
- Frontend: React Native (Expo)
- Backend: Node.js + Express
- Database: Supabase (PostgreSQL)
- APIs: Weather API, AQI API

## 🛡️ Adversarial Defense & Anti-Spoofing Strategy

### The Threat
A coordinated syndicate can use GPS-spoofing applications to fake their location inside a parametric trigger zone, tricking the system into issuing mass false payouts and draining the liquidity pool.

### 1. Differentiation — Genuine Worker vs Bad Actor

GigShield's AI layer does not rely on GPS alone. Every payout decision is scored against a **multi-signal trust model**:

- **Motion consistency:** A genuine worker caught in heavy rain will show low or erratic movement via the device accelerometer. A spoofed user sitting at home shows either zero motion or normal indoor activity patterns inconsistent with being on a delivery route.
- **Historical route fingerprint:** Each user builds a location history over time. The system flags claims where the reported location has never appeared in the user's past 30-day route data.
- **Device sensor cross-check:** Real weather exposure affects GPS signal quality, network handoffs between cell towers, and battery drain patterns. A spoofed location from a stable home environment produces clean, consistent sensor readings that contradict the claimed adverse conditions.
- **Session behaviour:** Genuine workers in bad weather typically open the app briefly to check status. Coordinated fraud rings often show simultaneous app sessions with identical interaction patterns across multiple accounts.

### 2. Data Points — Beyond GPS

The fraud detection model analyzes the following signals to identify coordinated rings:

| Signal | What It Reveals |
|--------|----------------|
| Accelerometer & gyroscope | Whether the device is actually in motion or stationary |
| Cell tower triangulation | Independent location verification separate from GPS |
| Network IP address | Multiple claims from the same IP or subnet indicate a shared location |
| Weather API cross-reference | Claimed location's actual weather must match the trigger threshold from a third-party source, not user-reported data |
| Claim timing correlation | If hundreds of claims fire within minutes of each other from the same city zone, it triggers a ring detection alert |
| Device fingerprint | Flags multiple accounts operating from the same physical device |
| Onboarding velocity | Accounts created in bulk shortly before a weather event are scored as high-risk |

### 3. UX Balance — Handling Flagged Claims Fairly

A genuine worker in a flood zone may have poor GPS signal, dropped network, and inconsistent sensor data — which could look suspicious. GigShield handles this with a **tiered review system** instead of instant rejection:

- **Green (auto-approved):** Trust score above threshold, all signals consistent → payout credited immediately, no friction.
- **Yellow (soft flag):** One or two signals are inconsistent but not conclusive → payout is held for a short review window (max 2 hours). Worker receives an in-app notification explaining the delay, not a rejection. A single additional verification step (e.g. a photo of current surroundings) resolves it instantly.
- **Red (hard flag):** Multiple high-confidence fraud signals present → payout withheld, case escalated to manual review. Worker is notified with a clear reason and an appeal option. No account suspension without human confirmation.

This ensures an honest worker experiencing a genuine network drop in bad weather is never permanently penalized — only briefly delayed — while coordinated fraud rings are caught at the pattern level before payouts are issued.

## 🗓️ Development Plan

**Week 1:**
- Research & ideation
- Define workflow
- UI/UX design

**Week 2:**
- Build prototype
- Simulate triggers
- Prepare demo

## 🧪 Prototype Scope (Phase 1)
- Basic mobile UI (login, plans, dashboard)
- Simulated trigger system (mock data)
- Dummy payout logic
- End-to-end workflow demo

👉 Focus: Concept validation, not full implementation

## 🎯 Conclusion
GigShield AI provides:
- Instant income protection
- Affordable weekly plans
- Automated, claim-free payouts

👉 A scalable solution for gig economy stability
