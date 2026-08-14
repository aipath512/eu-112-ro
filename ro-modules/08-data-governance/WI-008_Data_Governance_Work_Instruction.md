# WI-008

# Instrucțiune de Lucru — Guvernanță Date

---

## Informații Document

| Câmp | Valoare |
|--------|-------|
| ID Document | WI-008 |
| Titlu | Instrucțiune de Lucru — Guvernanță Date |
| Repository | RRVI™ |
| Modul | 08 – Guvernanță Date |
| Firma | {{COMPANY_NAME}} |
| Versiune | 1.0.0 |
| Status | Aprobat |

---

# 1. Scop

Această Instrucțiune de Lucru oferă îndrumări detaliate pentru identificarea, documentarea, revizuirea și menținerea datelor folosite de sistemele de Inteligență Artificială din {{COMPANY_NAME}}.

Obiectivul este să asigure că sistemele AI folosesc date fiabile, sigure și bine guvernate pe tot parcursul ciclului lor de viață operațional.

---

# 2. Condiții Prealabile

Înainte de a efectua activități de Guvernanță a Datelor, se verifică dacă:

- Sistemul AI există în Inventarul Sistemelor AI;
- Responsabilul Sistemului AI a fost desemnat;
- sursele de date sunt cunoscute;
- scopul preconizat a fost documentat.

---

# 3. Informații Necesare

Se colectează următoarele informații:

- ID Sistem AI
- Nume Sistem AI
- Responsabil de Date
- Sursa de Date
- Categoria de Date
- Clasificarea Datelor
- Date Personale (Da/Nu)
- Nivelul de Calitate a Datelor
- Perioada de Retenție a Datelor
- Data Revizuirii

---

# 4. Instrucțiuni de Lucru

## Pasul 1

Se deschide:

REG-001_AI_System_Inventory_Register.md

Se localizează sistemul AI.

---

## Pasul 2

Se identifică toate sursele de date.

Se documentează:

- baze de date interne;
- servicii cloud;
- fișiere încărcate;
- API-uri;
- seturi de date publice;
- informații introduse manual (inclusiv prompturi și documente lipite în asistenți AI).

---

## Pasul 3

Se clasifică datele.

Se identifică dacă datele sunt:

- Publice;
- Interne;
- Confidențiale;
- Restricționate;
- Date Personale;
- Date Personale Sensibile (dacă e cazul).

---

## Pasul 4

Se evaluează Calitatea Datelor.

Se verifică:

- exactitatea;
- completitudinea;
- consecvența;
- integritatea;
- relevanța;
- actualitatea.

Se documentează orice limitări.

---

## Pasul 5

Se verifică Controalele de Securitate.

Se confirmă:

- controlul accesului;
- autentificarea;
- autorizarea;
- criptarea, unde e cazul;
- procedurile de backup;
- politica de retenție.

---

## Pasul 6

Se actualizează Registrul.

Se deschide:

REG-008_Data_Governance_Register.md

Se înregistrează:

- sursa de date;
- responsabilul;
- clasificarea;
- data revizuirii;
- statusul.

---

## Pasul 7

Se colectează Dovezile Justificative.

Dovezile se stochează în:

EVID-008_Data_Governance_Evidence.md

Exemple:

- diagrame de flux al datelor;
- scheme de baze de date;
- specificații API;
- documentație de control al accesului;
- documentație GDPR;
- politici de securitate.

---

## Pasul 8

Revizuire.

Revizuirea Guvernanței Datelor se repetă ori de câte ori:

- se schimbă sursele de date;
- se schimbă sistemele AI;
- se modifică legislația;
- apar incidente de securitate.

---

# 5. Controale de Calitate

Se verifică dacă:

✓ Sursele de date sunt identificate.

✓ Responsabilul de Date este desemnat.

✓ Datele sunt clasificate.

✓ Calitatea datelor este evaluată.

✓ Controalele de securitate sunt documentate.

✓ Conformitatea GDPR a fost luată în considerare.

✓ Registrul a fost actualizat.

✓ Dovezile justificative au fost colectate.

✓ Data de revizuire este alocată.

---

# 6. Rezultate

Această instrucțiune actualizează:

- REG-008 Registrul de Guvernanță a Datelor
- EVID-008 Dovezile de Guvernanță a Datelor
- DEC-008 Declarația de Guvernanță a Datelor

---

# 7. Referințe

- Regulamentul (UE) 2024/1689 (EU AI Act)
- Regulamentul (UE) 2016/679 (GDPR)
- DOD-008 Politica de Guvernanță a Datelor
- PROC-008 Procedura de Guvernanță a Datelor
- REG-001 Registrul de Inventar al Sistemelor AI

---

# 8. Aprobare

Întocmit de

{{RESPONSIBLE_PERSON}}

Firma

{{COMPANY_NAME}}

Status

Aprobat
