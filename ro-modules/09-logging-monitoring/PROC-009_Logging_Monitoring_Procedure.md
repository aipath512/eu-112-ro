# PROC-009

# Procedura de Logging și Monitorizare

---

## Informații Document

| Câmp | Valoare |
|--------|-------|
| ID Document | PROC-009 |
| Titlu | Procedura de Logging și Monitorizare |
| Repository | RRVI™ |
| Modul | 09 – Logging și Monitorizare |
| Firma | {{COMPANY_NAME}} |
| Versiune | 1.0.0 |
| Status | Aprobat |

---

# 1. Scop

Această procedură definește cum {{COMPANY_NAME}} colectează, protejează, revizuiește și menține jurnalele generate de sistemele de Inteligență Artificială.

Obiectivul este să asigure că operațiunile AI rămân trasabile, măsurabile și auditabile pe tot parcursul ciclului de viață al sistemului.

---

# 2. Domeniu de Aplicare

Această procedură se aplică:

- sistemelor AI dezvoltate intern;
- sistemelor AI achiziționate extern;
- sistemelor AI de producție;
- sistemelor AI de tip proof-of-concept;
- componentelor de infrastructură AI;
- serviciilor de monitorizare care sprijină sistemele AI.

---

# 3. Responsabilități

## Director General

Aprobă acțiunile corective majore rezultate din activitățile de monitorizare.

---

## Responsabilul de Guvernanță AI

Responsabil pentru:

- coordonarea activităților de logging;
- revizuirea rapoartelor de monitorizare;
- menținerea Registrului de Logging și Monitorizare.

---

## Responsabilul de Sistem AI

Responsabil pentru:

- verificarea reală (nu presupusă) a disponibilității jurnalelor;
- implementarea mecanismelor de logging unde e posibil;
- revizuirea evenimentelor operaționale;
- raportarea anomaliilor.

---

## Responsabilul de Conformitate

Responsabil pentru:

- verificarea retenției jurnalelor, diferențiat pe rol (provider Art. 19 / deployer Art. 26, minim 6 luni);
- sprijinirea auditurilor;
- revizuirea dovezilor de conformitate.

---

# 4. Procedura

## Pasul 1 — Identificarea Sistemului AI

Se localizează sistemul AI în:

REG-001_AI_System_Inventory_Register.md

---

## Pasul 2 — Determinarea Rolului și a Retenției Aplicabile

Se verifică rolul firmei (provider/deployer) pentru acest sistem și se aplică termenul de retenție corespunzător (Art. 19 pentru provider, minim 6 luni conform Art. 26 pentru deployer).

---

## Pasul 3 — Verificarea Reală a Disponibilității Jurnalelor

Pentru fiecare sistem AI, se verifică EFECTIV (nu se presupune) dacă jurnalele sunt accesibile și exportabile. Un abonament comercial obișnuit, fără cont enterprise/API, de regulă NU oferă acest lucru.

---

## Pasul 4 — Configurarea Logging-ului

Se asigură că jurnalele înregistrează, unde e cazul:

- identificatorul sistemului;
- marcajul temporal al evenimentului;
- utilizatorul sau contul de serviciu;
- operațiunea executată;
- răspunsul sistemului;
- mesajele de eroare;
- evenimentele de securitate.

---

## Pasul 5 — Configurarea Monitorizării

Se monitorizează:

- disponibilitatea;
- performanța;
- defecțiunile;
- activitatea neobișnuită;
- modificările de configurare;
- alertele de securitate.

---

## Pasul 6 — Revizuirea Jurnalelor

Jurnalele se revizuiesc:

- de rutină;
- după incidente;
- după modificări semnificative;
- înainte de inspecții.

Se înregistrează constatările semnificative.

---

## Pasul 7 — Actualizarea Registrului

Se deschide:

REG-009_Logging_Monitoring_Register.md

Se înregistrează:

- Sistemul AI;
- statusul jurnalelor accesibile (verificat real);
- statusul monitorizării;
- data revizuirii;
- evaluatorul.

---

## Pasul 8 — Corectarea Problemelor

Dacă sunt identificate deficiențe:

- se documentează problema;
- se investighează cauza;
- se implementează acțiuni corective;
- se verifică eficacitatea.

---

## Pasul 9 — Revizuire Periodică

Logging-ul și monitorizarea se revizuiesc ori de câte ori:

- se schimbă sistemele AI;
- se schimbă infrastructura;
- se modifică legislația;
- apar incidente semnificative.

---

# 5. Înregistrări

Această procedură produce:

- Registrul de Logging și Monitorizare;
- Dovezile de Logging și Monitorizare;
- Declarația de Logging și Monitorizare.

---

# 6. Referințe

- Regulamentul (UE) 2024/1689 (EU AI Act), Articolele 12, 19, 26
- DOD-009 Politica de Logging și Monitorizare
- REG-001 Registrul de Inventar al Sistemelor AI
- REG-009 Registrul de Logging și Monitorizare
- EVID-009 Dovezile de Logging și Monitorizare
- DEC-009 Declarația de Logging și Monitorizare

---

# 7. Aprobare

Întocmit de

{{RESPONSIBLE_PERSON}}

Firma

{{COMPANY_NAME}}

Status

Aprobat
