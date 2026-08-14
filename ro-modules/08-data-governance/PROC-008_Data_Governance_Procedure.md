# PROC-008

# Procedura de Guvernanță a Datelor

---

## Informații Document

| Câmp | Valoare |
|--------|-------|
| ID Document | PROC-008 |
| Titlu | Procedura de Guvernanță a Datelor |
| Repository | RRVI™ |
| Modul | 08 – Guvernanță Date |
| Firma | {{COMPANY_NAME}} |
| Versiune | 1.0.0 |
| Status | Aprobat |

---

# 1. Scop

Această procedură definește cum {{COMPANY_NAME}} guvernează, documentează, revizuiește și menține datele folosite de sistemele de Inteligență Artificială pe tot parcursul ciclului lor de viață.

Obiectivul este să asigure că datele folosite de sistemele AI rămân exacte, complete, sigure, trasabile și conforme cu Regulamentul (UE) 2024/1689 (EU AI Act) și Regulamentul (UE) 2016/679 (GDPR).

---

# 2. Domeniu de Aplicare

Această procedură se aplică:

- sistemelor AI dezvoltate intern;
- sistemelor AI achiziționate extern;
- sistemelor AI de tip proof-of-concept;
- sistemelor AI de producție;
- datelor structurate și nestructurate;
- seturilor de date operaționale, de validare și de referință.

---

# 3. Responsabilități

## Director General

- aprobă modificările majore de Guvernanță a Datelor, unde e cazul.

---

## Responsabilul de Guvernanță AI

Responsabil pentru:

- coordonarea activităților de Guvernanță a Datelor;
- menținerea Registrului de Guvernanță a Datelor;
- inițierea revizuirilor periodice.

---

## Responsabilul de Date

Responsabil pentru:

- aprobarea utilizării datelor;
- asigurarea calității datelor;
- raportarea problemelor legate de date.

---

## Responsabilul de Sistem AI

Responsabil pentru:

- documentarea surselor de date;
- identificarea limitărilor datelor;
- menținerea documentației tehnice.

---

## Responsabilul de Conformitate

Responsabil pentru:

- monitorizarea conformității cu EU AI Act și GDPR;
- sprijinirea auditurilor și inspecțiilor.

---

# 4. Procedura

## Pasul 1 — Identificarea Sistemului AI

Se localizează sistemul AI în:

REG-001_AI_System_Inventory_Register.md

---

## Pasul 2 — Determinarea Rolului (Provider / Deployer)

Se verifică rolul firmei pentru acest sistem AI (conform REG-001), pentru a determina tipul corect de date de documentat:

- **Provider** → date de antrenare, validare, testare;
- **Deployer** → date de intrare, inclusiv conținutul din prompturi sau documente lipite direct în asistenți AI.

---

## Pasul 3 — Identificarea Surselor de Date

Se documentează:

- sistemele sursă;
- seturile de date interne;
- seturile de date externe;
- date publice;
- date introduse manual (inclusiv prompturi și documente lipite în asistenți AI).

---

## Pasul 4 — Evaluarea Calității Datelor

Se evaluează:

- exactitatea;
- completitudinea;
- consecvența;
- relevanța;
- actualitatea;
- integritatea.

Se înregistrează limitările identificate.

---

## Pasul 5 — Evaluarea Protecției Datelor

Se verifică:

- prelucrarea legală;
- controalele de acces;
- confidențialitatea;
- cerințele de retenție;
- minimizarea datelor;
- necesitatea unei DPIA (Art. 35 GDPR) — dacă prelucrarea prezintă risc ridicat pentru drepturile persoanelor;
- necesitatea unei AIDF (Art. 27 EU AI Act) — dacă sistemul e high-risk și firma e deployer.

---

## Pasul 6 — Înregistrarea Informațiilor de Guvernanță

Se actualizează:

REG-008_Data_Governance_Register.md

Se înregistrează:

- sursa de date;
- responsabilul;
- clasificarea;
- evaluarea calității;
- data revizuirii.

---

## Pasul 7 — Corectarea Problemelor

Acolo unde sunt identificate deficiențe:

- se documentează problema;
- se implementează acțiuni corective;
- se verifică eficacitatea;
- se actualizează documentația.

---

## Pasul 8 — Revizuire

Guvernanța Datelor se revizuiește ori de câte ori:

- se schimbă sursele de date;
- se schimbă sistemele AI;
- se modifică legislația;
- apar incidente semnificative.

---

# 5. Înregistrări

Această procedură produce:

- Registrul de Guvernanță a Datelor;
- Dovezile de Guvernanță a Datelor;
- Declarația de Guvernanță a Datelor.

---

# 6. Referințe

- Regulamentul (UE) 2024/1689 (EU AI Act), Articolul 10, Articolul 27
- Regulamentul (UE) 2016/679 (GDPR), Articolul 35
- DOD-008 Politica de Guvernanță a Datelor
- REG-001 Registrul de Inventar al Sistemelor AI
- REG-008 Registrul de Guvernanță a Datelor
- EVID-008 Dovezile de Guvernanță a Datelor
- DEC-008 Declarația de Guvernanță a Datelor

---

# 7. Aprobare

Întocmit de

{{RESPONSIBLE_PERSON}}

Firma

{{COMPANY_NAME}}

Status

Aprobat
