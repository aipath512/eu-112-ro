# PROC-002

# Procedura de Clasificare a Riscului

---

## Informații Document

| Câmp | Valoare |
|--------|-------|
| ID Document | PROC-002 |
| Titlu | Procedura de Clasificare a Riscului |
| Repository | RRVI™ |
| Modul | 02 – Clasificare Risc |
| Firma | {{COMPANY_NAME}} |
| Versiune | 1.0.0 |
| Status | Aprobat |

---

# 1. Scop

Această procedură definește procesul folosit de {{COMPANY_NAME}} pentru clasificarea sistemelor de Inteligență Artificială conform Regulamentului (UE) 2024/1689 (EU AI Act).

Obiectivul este să asigure că fiecare sistem AI primește o clasificare de risc documentată și repetabilă înainte de implementarea operațională.

---

# 2. Domeniu de Aplicare

Această procedură se aplică:

- tuturor sistemelor AI înregistrate în Inventarul Sistemelor AI;
- sistemelor AI dezvoltate intern;
- serviciilor AI achiziționate extern;
- software-ului cu capabilități AI;
- implementărilor de tip proof-of-concept;
- implementărilor de producție.

---

# 3. Responsabilități

## Director General

- aprobă procesul general de clasificare.

---

## Responsabilul de Guvernanță AI

- coordonează clasificarea de risc;
- menține Registrul de Clasificare a Riscului;
- inițiază revizuirile.

---

## Responsabilul de Sistem AI

- furnizează informații tehnice și de business;
- sprijină procesul de evaluare;
- raportează modificările semnificative.

---

## Responsabilul de Conformitate

- verifică alinierea de reglementare;
- validează deciziile de clasificare;
- sprijină inspecțiile și auditurile.

---

# 4. Procedura

## Pasul 1 — Identificarea Sistemului AI

Se confirmă că sistemul AI este înregistrat în:

REG-001_AI_System_Inventory_Register.md

Dacă sistemul AI nu este înregistrat, se finalizează procesul de Inventar al Sistemelor AI înainte de a continua.

---

## Pasul 2 — Colectarea Informațiilor

Se colectează următoarele informații:

- ID Sistem AI;
- Nume Sistem AI;
- Furnizor;
- Scop Preconizat;
- Proces de Business;
- Utilizatori;
- Context de Implementare;
- Supraveghere Umană;
- Categorii de Date Prelucrate.

---

## Pasul 3 — Evaluarea Riscului

Se evaluează sistemul AI în raport cu categoriile din EU AI Act:

- Practici AI Interzise;
- Sisteme AI cu Risc Ridicat;
- Sisteme AI cu Risc Limitat;
- Sisteme AI cu Risc Minim.

---

## Pasul 4 — Înregistrarea Clasificării

Evaluarea se documentează în:

REG-002_Risk_Classification_Register.md

Se înregistrează:

- rezultatul clasificării;
- justificarea;
- persoana care a revizuit;
- data evaluării.

---

## Pasul 5 — Revizuire Independentă

Responsabilul de Guvernanță AI revizuiește evaluarea pentru completitudine și consecvență.

Unde e necesar, Responsabilul de Conformitate validează interpretarea de reglementare.

---

## Pasul 6 — Aprobare

Clasificarea aprobată devine clasificarea oficială a sistemului AI.

---

## Pasul 7 — Reevaluare

Clasificarea de risc se repetă ori de câte ori:

- se schimbă scopul preconizat;
- se schimbă modul de implementare;
- se schimbă furnizorul;
- se schimbă funcționalitatea;
- se modifică legislația;
- apar incidente semnificative.

---

# 5. Înregistrări

Această procedură produce:

- Registrul de Clasificare a Riscului;
- Dovezile de Clasificare a Riscului;
- Declarația de Clasificare a Riscului.

---

# 6. Referințe

- Regulamentul (UE) 2024/1689 (EU AI Act)
- DOD-002 Politica de Clasificare a Riscului
- REG-001 Registrul de Inventar al Sistemelor AI
- REG-002 Registrul de Clasificare a Riscului
- EVID-002 Dovezile de Clasificare a Riscului
- DEC-002 Declarația de Clasificare a Riscului

---

# 7. Aprobare

Întocmit de

{{RESPONSIBLE_PERSON}}

Firma

{{COMPANY_NAME}}

Status

Aprobat
