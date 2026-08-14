# WI-009

# Instrucțiune de Lucru — Logging și Monitorizare

---

## Informații Document

| Câmp | Valoare |
|--------|-------|
| ID Document | WI-009 |
| Titlu | Instrucțiune de Lucru — Logging și Monitorizare |
| Repository | RRVI™ |
| Modul | 09 – Logging și Monitorizare |
| Firma | {{COMPANY_NAME}} |
| Versiune | 1.0.0 |
| Status | Aprobat |

---

# 1. Scop

Această Instrucțiune de Lucru oferă îndrumări detaliate pentru implementarea, operarea și revizuirea controalelor de logging și monitorizare pentru sistemele de Inteligență Artificială folosite de {{COMPANY_NAME}}.

Obiectivul este să asigure că activitățile sistemelor AI rămân trasabile, auditabile și monitorizate continuu pe tot parcursul ciclului lor de viață operațional.

---

# 2. Condiții Prealabile

Înainte de a implementa logging și monitorizare, se verifică dacă:

- Sistemul AI există în Inventarul Sistemelor AI;
- Responsabilul Sistemului AI a fost desemnat;
- cerințele de logging au fost definite;
- responsabilitățile de monitorizare au fost alocate.

---

# 3. Informații Necesare

Se colectează următoarele informații:

- ID Sistem AI
- Nume Sistem AI
- Responsabilul Sistemului AI
- Locația Jurnalelor (dacă există și sunt accesibile)
- Instrumentul de Monitorizare
- Tipurile de Evenimente
- Perioada de Retenție (conform rolului: Art. 19 provider / Art. 26 minim 6 luni deployer)
- Frecvența Revizuirii
- Evaluatorul Responsabil

---

# 4. Instrucțiuni de Lucru

## Pasul 1

Se deschide:

REG-001_AI_System_Inventory_Register.md

Se localizează sistemul AI.

---

## Pasul 2

Se verifică real disponibilitatea jurnalelor.

Nu se presupune că un abonament comercial (ChatGPT, Gemini, Claude, Perplexity fără cont enterprise/API) oferă jurnale accesibile — se verifică efectiv în contul/platforma respectivă.

---

## Pasul 3

Se configurează Logging-ul, unde e tehnic posibil.

Se asigură înregistrarea, unde e cazul, a:

- autentificării utilizatorilor;
- cererilor către AI;
- răspunsurilor AI;
- modificărilor de configurare;
- activităților administratorului;
- evenimentelor de securitate;
- erorilor de aplicație;
- defecțiunilor de sistem.

---

## Pasul 4

Se configurează Monitorizarea.

Se monitorizează:

- disponibilitatea sistemului;
- timpul de răspuns;
- utilizarea resurselor;
- defecțiunile serviciului AI;
- activitatea neobișnuită;
- alertele de securitate.

---

## Pasul 5

Se revizuiesc Jurnalele (acolo unde există și sunt accesibile).

Se verifică:

- completitudinea jurnalelor;
- exactitatea marcajelor temporale;
- evenimentele anormale;
- eșecurile repetate;
- activitățile neautorizate.

Se documentează observațiile semnificative.

---

## Pasul 6

Se actualizează Registrul.

Se deschide:

REG-009_Logging_Monitoring_Register.md

Se înregistrează:

- statusul jurnalelor accesibile (verificat real);
- statusul monitorizării;
- evaluatorul;
- data revizuirii;
- observațiile.

---

## Pasul 7

Se colectează Dovezile Justificative.

Dovezile se stochează în:

EVID-009_Logging_Monitoring_Evidence.md

Exemple:

- extrase de jurnal;
- dashboard-uri de monitorizare;
- alerte de sistem;
- capturi de ecran;
- rapoarte de incident;
- rapoarte de audit.

---

## Pasul 8

Revizuire Periodică.

Logging-ul și monitorizarea se revizuiesc ori de câte ori:

- se schimbă sistemele AI;
- se schimbă infrastructura;
- apar incidente de securitate;
- se modifică cerințele de reglementare.

---

# 5. Controale de Calitate

Se verifică dacă:

✓ Disponibilitatea reală a jurnalelor a fost verificată (nu presupusă).

✓ Monitorizarea este funcțională.

✓ Sincronizarea timpului este corectă.

✓ Evenimentele de securitate sunt înregistrate, unde e posibil.

✓ Erorile sunt înregistrate, unde e posibil.

✓ Jurnalele sunt protejate împotriva modificării.

✓ Perioada de retenție este definită conform rolului (provider/deployer).

✓ Registrul a fost actualizat.

✓ Dovezile justificative au fost colectate.

---

# 6. Rezultate

Această instrucțiune actualizează:

- REG-009 Registrul de Logging și Monitorizare
- EVID-009 Dovezile de Logging și Monitorizare
- DEC-009 Declarația de Logging și Monitorizare

---

# 7. Referințe

- Regulamentul (UE) 2024/1689 (EU AI Act), Articolele 12, 19, 26
- DOD-009 Politica de Logging și Monitorizare
- PROC-009 Procedura de Logging și Monitorizare
- REG-001 Registrul de Inventar al Sistemelor AI

---

# 8. Aprobare

Întocmit de

{{RESPONSIBLE_PERSON}}

Firma

{{COMPANY_NAME}}

Status

Aprobat
