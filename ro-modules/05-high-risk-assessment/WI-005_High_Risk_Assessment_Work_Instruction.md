# WI-005

# Instrucțiune de Lucru — Evaluare Sisteme AI cu Risc Ridicat

---

## Informații Document

| Câmp | Valoare |
|--------|-------|
| ID Document | WI-005 |
| Titlu | Instrucțiune de Lucru — Evaluare Sisteme AI cu Risc Ridicat |
| Repository | RRVI™ |
| Modul | 05 – Evaluare Risc Ridicat |
| Firma | {{COMPANY_NAME}} |
| Versiune | 1.0.0 |
| Status | Aprobat |

---

# 1. Scop

Această Instrucțiune de Lucru oferă îndrumări detaliate pentru determinarea dacă un sistem de Inteligență Artificială se califică drept Sistem AI cu Risc Ridicat conform Regulamentului (UE) 2024/1689 (EU AI Act).

Obiectivul este să asigure o evaluare documentată, obiectivă și repetabilă pentru fiecare sistem AI.

---

# 2. Condiții Prealabile

Înainte de a începe evaluarea, se verifică dacă:

- Sistemul AI există în Inventarul Sistemelor AI;
- scopul preconizat este documentat;
- furnizorul a fost identificat;
- există suficiente informații tehnice.

---

# 3. Informații Necesare

Se colectează următoarele informații:

- ID Sistem AI
- Nume Sistem AI
- Furnizor
- Scop Preconizat
- Proces de Business
- Mediu de Implementare
- Utilizatori
- Supraveghere Umană
- Date de Intrare
- Date de Ieșire
- Funcție de Siguranță (dacă e cazul)

---

# 4. Instrucțiuni de Lucru

## Pasul 1

Se deschide:

REG-001_AI_System_Inventory_Register.md

Se localizează sistemul AI.

---

## Pasul 2

Se revizuiește scopul preconizat.

Se determină:

- de ce există sistemul AI;
- cine îl folosește;
- ce proces de business susține;
- dacă afectează persoane fizice.

---

## Pasul 3

Se evaluează Anexa I.

Se determină dacă sistemul AI este o componentă de siguranță a unui produs reglementat.

Se înregistrează rezultatul.

---

## Pasul 4

Se evaluează Anexa III.

Se determină dacă sistemul AI aparține uneia din categoriile de Risc Ridicat definite în Anexa III.

Se înregistrează rezultatul.

---

## Pasul 5

Se evaluează Modificarea Substanțială.

Se determină dacă modificările efectuate de {{COMPANY_NAME}} ar putea schimba clasificarea de reglementare.

Se înregistrează rezultatul.

---

## Pasul 6

Se determină Clasificarea Finală.

Se atribuie una din următoarele:

- Sistem AI cu Risc Ridicat
- Sistem AI fără Risc Ridicat
- Evaluare în Așteptare

Se documentează justificarea.

---

## Pasul 7

Se actualizează Registrul.

Se deschide:

REG-005_High_Risk_Assessment_Register.md

Se înregistrează:

- rezultatul evaluării;
- justificarea;
- evaluatorul;
- data evaluării.

---

## Pasul 8

Se colectează Dovezile.

Dovezile justificative se stochează în:

EVID-005_High_Risk_Assessment_Evidence.md

---

## Pasul 9

Revizuire.

Evaluarea se repetă ori de câte ori:

- se schimbă scopul preconizat;
- se schimbă furnizorul;
- se schimbă funcționalitatea;
- se modifică cerințele de reglementare.

---

# 5. Controale de Calitate

Se verifică dacă:

✓ Sistemul AI există.

✓ Scopul Preconizat este documentat.

✓ Furnizorul este identificat.

✓ Evaluarea Anexei I este completă.

✓ Evaluarea Anexei III este completă.

✓ Determinarea Risc Ridicat este documentată.

✓ Justificarea este înregistrată.

✓ Data Evaluării este înregistrată.

✓ Evaluatorul este identificat.

---

# 6. Rezultate

Această instrucțiune actualizează:

- REG-005 Registrul de Evaluare Risc Ridicat
- EVID-005 Dovezile de Evaluare Risc Ridicat
- DEC-005 Declarația de Evaluare Risc Ridicat

---

# 7. Referințe

- DOD-005 Politica de Evaluare Risc Ridicat
- PROC-005 Procedura de Evaluare Risc Ridicat
- REG-001 Registrul de Inventar al Sistemelor AI
- Regulamentul (UE) 2024/1689 (EU AI Act)

---

# 8. Aprobare

Întocmit de

{{RESPONSIBLE_PERSON}}

Firma

{{COMPANY_NAME}}

Status

Aprobat
