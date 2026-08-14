# PROC-010

# Procedura de Raportare a Incidentelor AI

---

## Informații Document

| Câmp | Valoare |
|--------|-------|
| ID Document | PROC-010 |
| Titlu | Procedura de Raportare a Incidentelor AI |
| Repository | RRVI™ |
| Modul | 10 – Raportare Incidente |
| Firma | {{COMPANY_NAME}} |
| Versiune | 1.0.0 |
| Status | Aprobat |

---

# 1. Scop

Această procedură definește cum {{COMPANY_NAME}} identifică, raportează, investighează, documentează și rezolvă incidentele legate de sistemele de Inteligență Artificială.

Obiectivul este să asigure că incidentele legate de AI sunt gestionate consecvent, acțiunile corective sunt implementate, termenele legale de notificare (Art. 73) sunt respectate, și se mențin dovezi obiective, conform Regulamentului (UE) 2024/1689 (EU AI Act).

---

# 2. Domeniu de Aplicare

Această procedură se aplică:

- sistemelor AI dezvoltate intern;
- sistemelor AI achiziționate extern;
- sistemelor AI de tip proof-of-concept;
- sistemelor AI de producție;
- infrastructurii AI;
- personalului care folosește sisteme AI.

---

# 3. Responsabilități

## Director General

Responsabil pentru aprobarea acțiunilor corective majore, unde e cerută, și confirmarea notificării autorităților.

---

## Responsabilul de Guvernanță AI

Responsabil pentru:

- coordonarea managementului incidentelor;
- revizuirea rapoartelor de incident;
- menținerea Registrului de Raportare a Incidentelor;
- calcularea și monitorizarea termenelor de notificare (15/2/10 zile, Art. 73).

---

## Responsabilul de Sistem AI

Responsabil pentru:

- raportarea incidentelor;
- informarea providerului, dacă {{COMPANY_NAME}} e deployer (Art. 26 alin. 5);
- sprijinirea investigațiilor;
- implementarea acțiunilor corective.

---

## Utilizatorii AI

Responsabili pentru:

- raportarea imediată a suspiciunilor de incident;
- păstrarea dovezilor disponibile;
- cooperarea în timpul investigațiilor.

---

## Responsabilul de Conformitate

Responsabil pentru:

- evaluarea impactului de reglementare;
- determinarea dacă incidentul este „grav" conform Art. 73;
- determinarea cerințelor de notificare, inclusiv coordonarea cu termenul GDPR de 72h dacă e cazul;
- sprijinirea auditurilor și inspecțiilor.

---

# 4. Procedura

## Pasul 1 — Detectarea Incidentului

Se identifică orice eveniment care implică un sistem AI și care poate afecta:

- disponibilitatea;
- integritatea;
- confidențialitatea;
- exactitatea;
- conformitatea;
- siguranța.

---

## Pasul 2 — Raportarea Incidentului

Se notifică imediat Responsabilul de Guvernanță AI.

Se înregistrează:

- data;
- ora;
- Sistemul AI;
- descrierea incidentului;
- cel care a raportat.

---

## Pasul 3 — Clasificarea Incidentului (Grav / Minor)

Se determină dacă incidentul se încadrează în definiția „incident grav" din Articolul 73:

- deces sau vătămare gravă a sănătății unei persoane;
- perturbare gravă și ireversibilă a unei infrastructuri critice;
- încălcarea obligațiilor de protejare a drepturilor fundamentale;
- prejudicii grave aduse bunurilor sau mediului.

Se înregistrează data luării la cunoștință a legăturii cauzale dintre sistemul AI și incident — de aici încep să curgă termenele legale.

---

## Pasul 4 — Determinarea Termenului de Notificare (dacă e grav)

Se determină termenul aplicabil:

- **15 zile** — termen standard;
- **2 zile** — încălcare gravă și larg răspândită a drepturilor fundamentale, sau deces;
- **10 zile** — deces care necesită investigație suplimentară.

Se notifică autoritatea de supraveghere a pieței în termenul aplicabil.

---

## Pasul 5 — Informarea Providerului (dacă {{COMPANY_NAME}} e Deployer)

Conform Art. 26 alin. (5), se informează imediat providerul sau distribuitorul. Se evaluează necesitatea suspendării utilizării sistemului până la clarificare.

---

## Pasul 6 — Coordonarea cu GDPR (dacă e cazul)

Dacă incidentul implică și date cu caracter personal, se evaluează separat necesitatea notificării ANSPDCP în 72h (Art. 33 GDPR) — independent de notificarea EU AI Act.

---

## Pasul 7 — Investigare

Se determină:

- cauza principală;
- sistemele afectate;
- datele afectate;
- utilizatorii afectați;
- acțiunile corective necesare.

---

## Pasul 8 — Corectare

Se implementează acțiunile corective.

Se verifică eficacitatea.

Se documentează finalizarea.

---

## Pasul 9 — Actualizarea Registrului

Se deschide:

REG-010_Incident_Reporting_Register.md

Se înregistrează:

- numărul incidentului;
- clasificarea (grav/minor);
- termenul de notificare aplicabil și respectarea lui;
- acțiunile corective;
- data închiderii.

---

## Pasul 10 — Revizuire

Incidentele se revizuiesc:

- după închidere;
- în timpul revizuirii de conducere;
- după modificări semnificative ale AI;
- înainte de inspecțiile de reglementare.

---

# 5. Înregistrări

Această procedură produce:

- Registrul de Raportare a Incidentelor;
- Dovezile de Raportare a Incidentelor;
- Declarația de Raportare a Incidentelor.

---

# 6. Referințe

- Regulamentul (UE) 2024/1689 (EU AI Act), Articolul 73, Articolul 26 alin. (5)
- Regulamentul (UE) 2016/679 (GDPR), Articolul 33
- DOD-010 Politica de Raportare a Incidentelor AI
- DOD-009 Politica de Logging și Monitorizare
- REG-010 Registrul de Raportare a Incidentelor
- EVID-010 Dovezile de Raportare a Incidentelor
- DEC-010 Declarația de Raportare a Incidentelor

---

# 7. Aprobare

Întocmit de

{{RESPONSIBLE_PERSON}}

Firma

{{COMPANY_NAME}}

Status

Aprobat
