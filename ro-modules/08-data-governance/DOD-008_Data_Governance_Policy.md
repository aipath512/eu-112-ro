# DOD-008

# Politica de Guvernanță a Datelor

---

## Informații Document

| Câmp | Valoare |
|--------|-------|
| ID Document | DOD-008 |
| Titlu | Politica de Guvernanță a Datelor |
| Repository | RRVI™ |
| Modul | 08 – Guvernanță Date |
| Firma | {{COMPANY_NAME}} |
| Versiune | 1.0.0 |
| Status | Aprobat |

---

# 1. Scop

Scopul acestei politici este de a stabili principiile și cerințele pentru guvernanța datelor folosite de sistemele de Inteligență Artificială în cadrul {{COMPANY_NAME}}.

Această politică sprijină conformitatea cu Regulamentul (UE) 2024/1689 (EU AI Act) și cu Regulamentul (UE) 2016/679 (GDPR), asigurând că datele folosite pe tot parcursul ciclului de viață AI sunt gestionate responsabil, sigur, exact și legal.

---

# 2. Distincția Provider / Deployer pentru Guvernanța Datelor

Nivelul de guvernanță a datelor diferă în funcție de rolul organizației — Articolul 10 din EU AI Act (guvernanța datelor de antrenare) se adresează în principal **furnizorului (provider)**, nu implementatorului (deployer).

## 2.1 Dacă {{COMPANY_NAME}} este Provider

{{COMPANY_NAME}} documentează seturile de date de **antrenare, validare și testare** folosite pentru dezvoltarea sistemului AI: proveniența, metodologia de colectare, criteriile de calitate, reprezentativitatea și posibilele prejudecăți (bias).

## 2.2 Dacă {{COMPANY_NAME}} este Deployer

{{COMPANY_NAME}} NU documentează datele de antrenare ale furnizorului (nu are acces la ele și nu răspunde pentru ele), ci documentează **datele de intrare** pe care le introduce propriu-zis în sistemul AI:

- ce date introduce (texte, documente, imagini, întrebări);
- inclusiv **conținutul din prompturi sau documente lipite** direct în asistenți AI (ChatGPT, Claude, Gemini etc.) ca sursă de date de declarat;
- baza legală pentru fiecare categorie de date introdusă;
- locul de găzduire/procesare al furnizorului (UE/afara UE);
- posibilele prejudecăți introduse prin selecția datelor proprii.

---

# 3. Domeniu de Aplicare

Această politică se aplică:

- sistemelor AI dezvoltate intern;
- sistemelor AI achiziționate extern;
- sistemelor AI de producție;
- sistemelor AI de tip proof-of-concept;
- datelor structurate și nestructurate;
- datelor de antrenare, validare și operaționale, unde e cazul.

---

# 4. Declarația de Politică

{{COMPANY_NAME}} implementează măsuri adecvate de Guvernanță a Datelor pentru toate sistemele AI.

Datele se gestionează pentru a asigura:

- calitate;
- integritate;
- disponibilitate;
- confidențialitate;
- trasabilitate;
- prelucrare legală.

---

# 5. Principii de Guvernanță a Datelor

Datele folosite de sistemele AI trebuie să fie:

- exacte;
- complete;
- relevante;
- actuale;
- protejate împotriva accesului neautorizat;
- păstrate conform politicilor firmei;
- prelucrate conform legislației aplicabile.

---

# 6. Obiective de Calitate a Datelor

{{COMPANY_NAME}}:

- identifică sursele de date;
- documentează fluxurile de date;
- monitorizează calitatea datelor;
- identifică limitările datelor;
- corectează erorile identificate;
- revizuiește periodic calitatea datelor.

---

# 7. DPIA vs. AIDF — Două Evaluări Distincte

{{COMPANY_NAME}} distinge clar între cele două tipuri de evaluări de impact, care nu se substituie una pe alta:

- **DPIA** (Evaluarea Impactului asupra Protecției Datelor, Art. 35 GDPR) — obligatorie când prelucrarea datelor personale prezintă risc ridicat pentru drepturile persoanelor.
- **AIDF** (Evaluarea Impactului asupra Drepturilor Fundamentale, Art. 27 EU AI Act) — obligatorie pentru anumiți deployeri de sisteme AI cu risc ridicat, indiferent dacă implică sau nu date personale.

Un sistem AI cu risc ridicat care prelucrează și date personale poate necesita **ambele** evaluări, separat, fiecare cu domeniul ei de aplicare.

---

# 8. Roluri și Responsabilități

## Director General

Aprobă această politică.

---

## Responsabilul de Guvernanță AI

Responsabil pentru:

- coordonarea Guvernanței Datelor;
- revizuirea calității datelor;
- menținerea documentației de guvernanță.

---

## Responsabilul de Date

Responsabil pentru:

- asigurarea calității datelor;
- aprobarea utilizării datelor;
- raportarea problemelor legate de date.

---

## Responsabilul de Sistem AI

Responsabil pentru:

- documentarea datelor folosite de sistemele AI (de antrenare, dacă e provider; de intrare, dacă e deployer);
- identificarea limitărilor datelor;
- sprijinirea revizuirilor.

---

## Responsabilul de Conformitate

Responsabil pentru:

- monitorizarea conformității de reglementare;
- sprijinirea auditurilor și inspecțiilor.

---

# 9. Cerințe de Revizuire

Această politică se revizuiește:

- anual;
- după modificări semnificative ale sistemelor AI;
- după modificări ale surselor de date;
- după actualizări de reglementare;
- înainte de inspecțiile de reglementare.

---

# 10. Conformitate

Respectarea acestei politici este obligatorie.

Controalele de Guvernanță a Datelor se implementează proporțional cu sistemul AI, scopul preconizat și riscurile asociate.

---

# 11. Referințe

- Regulamentul (UE) 2024/1689 (EU AI Act), Articolul 10 (guvernanța datelor), Articolul 27 (AIDF)
- Regulamentul (UE) 2016/679 (GDPR), Articolul 35 (DPIA)
- DOD-001 Politica de Inventar al Sistemelor AI
- DOD-002 Politica de Clasificare a Riscului
- REG-008 Registrul de Guvernanță a Datelor

---

# 12. Aprobare

Întocmit de

{{RESPONSIBLE_PERSON}}

Firma

{{COMPANY_NAME}}

Status

Aprobat
