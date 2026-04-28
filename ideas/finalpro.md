# Intelligent Health Records Platform
## Project Context & Master Specification

---

## 1. Project Overview

This project is an **Intelligent, Consent-Driven Digital Health Record Platform** designed to function like a **DigiLocker for medical data**, but with far stronger privacy, consent, and security controls.

The platform enables:
- Citizens to **own and manage their complete medical history**
- Healthcare providers to **access patient data strictly via explicit consent**
- Future integration of **AI-powered clinical decision support (provider-side only)**

The system is designed to be:
- **Patient-owned**
- **Consent-first**
- **Audit-driven**
- **Security-by-design**
- **Scalable from MVP → National deployment**

---

## 2. Core Principles (Non-Negotiable)

1. Patients own their medical data
2. No provider can view data without explicit consent
3. Consent is:
   - Purpose-bound
   - Time-bound
   - Scope-bound
4. All access is logged and auditable
5. Security is enforced technically, not contractually
6. Providers cannot override system rules
7. Emergency access is highly restricted and logged
8. AI is used only on provider-side, never patient-side
9. Citizens use the platform free of charge
10. Providers pay for access, processing, and analytics

---

## 3. Target Users

### Citizen / Patient
- Individuals
- Families (dependents, elderly, children)
- Newborns (medical data starts at birth)

### Healthcare Providers
- Hospitals
- Clinics
- Diagnostic labs
- Doctors
- Nurses
- Lab technicians
- Administrative staff

---

## 4. Technology Stack

### Frontend
- React Native (Expo) for mobile
- React / Next.js for provider dashboard
- Secure token storage (Expo SecureStore)

### Backend
- Django
- Django REST Framework
- JWT Authentication (SimpleJWT)
- Role-Based Access Control (RBAC)
- Service-layer consent enforcement

### Database
- PostgreSQL (Supabase-hosted)
- Structured relational schema
- Audit-grade logging

### Object Storage
- AWS S3 (medical files, reports, scans)
- Backend-only access
- File URLs stored in DB

### Infrastructure
- Backend hosting: Render / Fly.io
- HTTPS enforced
- Environment-variable driven secrets

---

## 5. High-Level Architecture
Mobile App (Citizen)
|
| HTTPS + JWT
v
Django REST API
|
| Prisma-like ORM (Django ORM)
v
Supabase PostgreSQL
|
v
AWS S3 (Medical Files)

Providers access the same backend via a **separate web dashboard**, governed by stricter permissions.

---

## 6. Citizen (Patient) Side – Core Features

### Authentication & Identity
- Signup / login (email + password)
- JWT-based authentication
- Secure token storage
- Account recovery

### Personal Health Records
- Upload past medical records
- Categorize records (labs, scans, prescriptions)
- Timeline-based health view

### Family Management
- Add dependents
- Manage elderly parents
- Split family members into independent accounts later

### Consent Management
- View active provider consents
- Approve / reject consent requests
- Modify consent scope
- Revoke access instantly

### Transparency & Trust
- View access audit logs
- See which provider accessed what, when, and why

---

## 7. Healthcare Provider Side – Feature Set

### 7.1 Provider Account & Identity Management
- Hospital / clinic onboarding
- Provider verification
- Department & specialty management
- Staff accounts:
  - Doctor
  - Nurse
  - Lab Technician
  - Admin
- Role-based permissions
- Secure login with MFA-ready design

### 7.2 Patient Discovery & Consent Requests
- Search patient by:
  - Health ID
  - Email / phone
- Initiate consent request:
  - Purpose
  - Data scope
  - Duration
- Track consent status:
  - Pending
  - Approved
  - Rejected
  - Revoked

### 7.3 Consent-Aware Patient Record Access
- Strictly read-only unless allowed
- Access only approved record types
- Visual consent indicators:
  - Scope
  - Expiry
- Automatic access blocking on revocation

### 7.4 Medical Record Creation & Updates
- Add diagnosis notes
- Upload prescriptions
- Upload lab results
- Upload imaging reports
- Provider-authored records:
  - Owned by patient
  - Immutable by patient
  - Editable only by originating provider (audit-tracked)

### 7.5 Prescription Management
- Digital prescriptions
- Dosage, duration, notes
- Status:
  - Active
  - Completed
  - Discontinued
- Printable / downloadable

### 7.6 Lab & Diagnostic Integration
- Upload lab reports
- Attach diagnostic files
- Link to visits
- Associate ordering physician

### 7.7 Appointment & Visit Records
- Visit summaries
- Observations
- Follow-up recommendations
- Visit history (consented only)

### 7.8 Access Audit & Compliance
- Immutable audit logs
- View:
  - Who accessed which patient
  - When and why
- Compliance alerts
- Exportable logs

### 7.9 Emergency Access (Break-Glass)
- Emergency access request
- Mandatory justification
- Time-limited, read-only access
- Automatic escalation
- Full audit trail
- Patient notified post-access

### 7.10 Interoperability & External APIs
- Secure APIs for:
  - Fetching authorized records
  - Submitting new records
- Token-based authentication
- Consent-enforced APIs
- Revocable at patient level

### 7.11 Analytics & Insights
- Provider-side analytics:
  - Visit volume
  - Consent approval rates
  - Record creation trends
- Only anonymized, aggregated data
- No individual patient profiling

### 7.12 Security & Trust Enforcement
- RBAC everywhere
- IP & device-level checks
- Session timeouts
- Encrypted transmission
- Zero-trust enforcement

---

## 8. Authentication & Security Design

- Email-based authentication
- Password hashing (PBKDF2)
- JWT access tokens (short-lived)
- Refresh tokens
- HTTPS-only communication
- Environment-based secrets
- Backend-only S3 access
- Rate limiting hooks
- Audit logging for all sensitive actions

---

## 9. Development Strategy (2-Person Team)

### Phase 1 – MVP
- Citizen auth
- Provider auth
- Consent system
- Read-only provider access
- Audit logging

### Phase 2
- Record creation
- Prescriptions
- Lab uploads
- Family management

### Phase 3
- Emergency access
- Provider analytics
- Interoperability APIs

---

## 10. Monetization Model

- Citizen side: Free
- Provider side:
  - Subscription-based access
  - Pay-per-use AI processing
  - Analytics dashboards
  - API access fees

---

## 11. Long-Term Vision

- Nationwide adoption
- Integration with public health systems
- AI-assisted diagnosis (provider-only)
- International interoperability
- Compliance with:
  - HIPAA
  - GDPR
  - ABDM (India)

---

## 12. Project Status

- Concept: Fully defined
- Architecture: Locked
- Stack: Locked
- MVP scope: Identified
- Next step: Step-by-step backend implementation

---

**This document represents the single source of truth for the project.**