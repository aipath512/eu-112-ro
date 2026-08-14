# WI-010

# Instrucțiune de Lucru — Raportare Incidente AI

---

## Informații Document

| Câmp | Valoare |
|--------|-------|
| ID Document | WI-010 |
| Titlu | Instrucțiune de Lucru — Raportare Incidente AI |
| Repository | RRVI™ |
| Modul | 10 – Raportare Incidente |
| Firma | {{COMPANY_NAME}} |
| Versiune | 1.0.0 |
| Status | Aprobat |

---

# 1. Scop

Această Instrucțiune de Lucru oferă îndrumări detaliate pentru identificarea, înregistrarea, investigarea și închiderea incidentelor de Inteligență Artificială din {{COMPANY_NAME}}.

Obiectivul este să asigure că fiecare incident legat de AI este gestionat consecvent, documentat obiectiv, raportat la timp autorităților unde e cerut de lege, și rezolvat corespunzător.

---

# 2. Condiții Prealabile

Înainte de a procesa un incident, se verifică dacă:

- Sistemul AI există în Inventarul Sistemelor AI;
- incidentul a fost raportat;
- există suficiente informații pentru a începe investigația;
- Responsabilul Sistemului AI a fost notificat.

---

# 3. Informații Necesare

Se colectează următoarele informații:

- ID Incident
- Data și Ora
- ID Sistem AI
- Nume Sistem AI
- Cel care a raportat
- Descrierea Incidentului
- Gravitatea (Grav conform Art. 73 / Minor)
- Data Luării la Cunoștință a legăturii cauzale
- Termenul de Notificare Aplicabil (15/2/10 zile, dacă e grav)
- Impactul de Business
- Impactul de Reglementare
- Acțiunea Corectivă
- Status
- Data Închiderii

---

# 4. Instrucțiuni de Lucru

## Pasul 1

Se primește raportul de incident.

Se alocă un ID unic de Incident.

---

## Pasul 2

Se identifică sistemul AI afectat.

Se deschide:

REG-001_AI_System_Inventory_Register.md

Se localizează Sistemul AI corespunzător.

---

## Pasul 3

Se clasifică incidentul.

Se determină mai întâi dacă îndeplinește criteriile de **incident grav** conform Articolului 73:

- deces sau vătămare gravă a sănătății;
- perturbare gravă și ireversibilă a infrastructurii critice;
- încălcare a obligațiilor de protejare a drepturilor fundamentale;
- prejudicii grave aduse bunurilor sau mediului.

Dacă e grav, se înregistrează data luării la cunoștință și se calculează termenul aplicabil (15/2/10 zile).

Dacă e minor, se clasifică: Ridicat / Mediu / Minor.

Se evaluează:

- impactul operațional;
- impactul de business;
- impactul de conformitate;
- impactul de securitate.

---

## Pasul 4

Se colectează Dovezile.

Se păstrează:

- jurnale;
- capturi de ecran;
- prompturi AI;
- răspunsuri AI;
- alerte de monitorizare;
- informații de configurare;
- declarații ale martorilor, unde e cazul.

---

## Pasul 5

Se investighează.

Se determină:

- cauza principală;
- sistemele afectate;
- datele afectate;
- utilizatorii afectați;
- implicațiile de reglementare.

---

## Pasul 6

Dacă e incident grav — se transmite notificarea.

Se notifică autoritatea de supraveghere a pieței, în termenul aplicabil.

Dacă {{COMPANY_NAME}} e deployer, se informează imediat providerul (Art. 26 alin. 5).

Dacă implică date personale, se evaluează separat notificarea GDPR de 72h.

---

## Pasul 7

Se implementează Acțiunile Corective.

Se documentează:

- acțiunea corectivă;
- persoana responsabilă;
- data finalizării;
- rezultatul verificării.

---

## Pasul 8

Se actualizează Registrul.

Se deschide:

REG-010_Incident_Reporting_Register.md

Se înregistrează:

- ID Incident;
- Sistemul AI;
- gravitatea;
- termenul aplicabil și respectarea lui;
- statusul;
- data închiderii.

---

## Pasul 9

Se închide Incidentul.

Se verifică:

- acțiunile corective finalizate;
- dovezile stocate;
- conducerea informată;
- documentația actualizată.

---

# 5. Controale de Calitate

Se verifică dacă:

✓ ID-ul Incidentului este alocat.

✓ Sistemul AI este identificat.

✓ Gravitatea este clasificată corect (Grav Art. 73 / Minor).

✓ Dacă e grav, notificarea a fost transmisă în termen.

✓ Dovezile sunt păstrate.

✓ Cauza principală este documentată.

✓ Acțiunea corectivă este finalizată.

✓ Registrul a fost actualizat.

✓ Închiderea a fost aprobată.

---

# 6. Rezultate

Această instrucțiune actualizează:

- REG-010 Registrul de Raportare a Incidentelor
- EVID-010 Dovezile de Raportare a Incidentelor
- DEC-010 Declarația de Raportare a Incidentelor

---

# 7. Referințe

- Regulamentul (UE) 2024/1689 (EU AI Act), Articolul 73
- DOD-010 Politica de Raportare a Incidentelor AI
- PROC-010 Procedura de Raportare a Incidentelor AI
- REG-001 Registrul de Inventar al Sistemelor AI
- REG-009 Registrul de Logging și Monitorizare

---

# 8. Aprobare

Întocmit de

{{RESPONSIBLE_PERSON}}

Firma

{{COMPANY_NAME}}

Status

Aprobat
