# DOD-006

# Politica de Documentație Tehnică

---

## Informații Document

| Câmp | Valoare |
|--------|-------|
| ID Document | DOD-006 |
| Titlu | Politica de Documentație Tehnică |
| Repository | RRVI™ |
| Modul | 06 – Documentație Tehnică |
| Firma | {{COMPANY_NAME}} |
| Versiune | 1.0.0 |
| Status | Aprobat |

---

# 1. Scop

Scopul acestei politici este de a stabili cerințele obligatorii pentru crearea, menținerea și păstrarea Documentației Tehnice a sistemelor de Inteligență Artificială utilizate, dezvoltate, implementate sau integrate de {{COMPANY_NAME}}, conform Articolului 11 și Anexei IV din Regulamentul (UE) 2024/1689 (EU AI Act).

---

# 2. Domeniu de Aplicare

Această politică se aplică:

- tuturor sistemelor AI cu risc ridicat identificate în Inventarul Sistemelor AI;
- sistemelor AI dezvoltate intern de {{COMPANY_NAME}} (rol de provider);
- sistemelor AI achiziționate și utilizate de {{COMPANY_NAME}} (rol de deployer);
- documentației primite de la furnizori terți.

---

# 3. Distincția Provider / Deployer

Nivelul de documentație tehnică diferă în funcție de rolul organizației.

## 3.1 Dacă {{COMPANY_NAME}} este Provider

{{COMPANY_NAME}} întocmește dosarul complet de documentație tehnică, conform Anexei IV, înainte de introducerea pe piață sau punerea în funcțiune a sistemului AI cu risc ridicat.

## 3.2 Dacă {{COMPANY_NAME}} este Deployer

{{COMPANY_NAME}} nu întocmește dosarul complet din Anexa IV, dar:

- păstrează documentația și instrucțiunile de utilizare primite de la furnizor;
- documentează propriul mod de utilizare a sistemului (scop, context, date de intrare, supraveghere umană aplicată);
- păstrează dovada că sistemul este utilizat conform instrucțiunilor furnizorului.

---

# 4. Conținutul Documentației Tehnice (Anexa IV, pentru Provider)

Dosarul complet include cel puțin:

1. **Descriere generală** a sistemului AI — scop preconizat, furnizor, versiuni, formă de punere la dispoziție (software, integrat în hardware etc.), descrierea hardware-ului pe care rulează, interacțiunea cu alte sisteme.
2. **Descriere detaliată a elementelor sistemului și a procesului de dezvoltare** — metode și pași de dezvoltare, arhitectura sistemului, cerințe de calcul, specificații de proiectare, logica algoritmilor, deciziile de proiectare cheie, capabilități și limitări de performanță.
3. **Informații despre datele folosite** — cerințele privind seturile de date de antrenare, validare și testare, proveniența datelor, metodologia de etichetare, procesele de curățare a datelor.
4. **Informații privind monitorizarea, funcționarea și controlul sistemului** — capabilități și limitări de acuratețe, măsuri de supraveghere umană, specificații privind datele de intrare.
5. **Descrierea măsurilor de management al riscului** — conform sistemului de management al riscului aplicat.
6. **Descrierea modificărilor relevante** aduse sistemului pe parcursul ciclului de viață.
7. **Lista standardelor armonizate aplicate**, integral sau parțial, sau descrierea soluțiilor adoptate pentru îndeplinirea cerințelor, dacă nu s-au aplicat standarde armonizate.
8. **Declarația UE de conformitate**, dacă e cazul.
9. **Planul de monitorizare post-comercializare.**

---

# 5. Cerințe de Păstrare

Documentația tehnică se păstrează pe o perioadă de cel puțin **10 ani** de la data introducerii pe piață sau a punerii în funcțiune a sistemului AI cu risc ridicat, pentru a fi disponibilă autorităților naționale competente la cerere.

Deployerii păstrează documentația primită de la furnizor pe aceeași perioadă, cât timp au sistemul AI sub controlul lor.

---

# 6. Actualizarea Documentației

Documentația tehnică se actualizează ori de câte ori:

- se modifică scopul preconizat al sistemului;
- se modifică arhitectura sau logica sistemului;
- se schimbă sursele sau tipurile de date folosite;
- apar constatări noi în urma monitorizării post-comercializare;
- se schimbă clasificarea de risc.

---

# 7. Roluri și Responsabilități

## Director General

Aprobă această politică.

## Responsabilul de Guvernanță AI

- coordonează întocmirea și menținerea documentației tehnice;
- verifică completitudinea față de Anexa IV (pentru rol de provider);
- menține Registrul de Documentație Tehnică.

## Responsabilii de Sisteme AI

- furnizează informațiile tehnice necesare;
- raportează modificările relevante.

## Responsabilul de Conformitate

- validează alinierea cu Articolul 11 și Anexa IV;
- sprijină inspecțiile de reglementare.

---

# 8. Conformitate

Respectarea acestei politici este obligatorie.

Documentația tehnică incompletă sau neactualizată poate duce la neconformitate de reglementare la o inspecție sau un audit.

---

# 9. Referințe

- Regulamentul (UE) 2024/1689 (EU AI Act), Articolul 11, Anexa IV
- REG-001 Registrul de Inventar al Sistemelor AI
- REG-002 Registrul de Clasificare a Riscului
- REG-005 Registrul de Evaluare a Sistemelor AI cu Risc Ridicat
- REG-006 Registrul de Documentație Tehnică

---

# 10. Aprobare

Întocmit de

{{RESPONSIBLE_PERSON}}

Firma

{{COMPANY_NAME}}

Status

Aprobat
