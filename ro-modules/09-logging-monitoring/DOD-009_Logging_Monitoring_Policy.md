# DOD-009

# Politica de Logging și Monitorizare

---

## Informații Document

| Câmp | Valoare |
|--------|-------|
| ID Document | DOD-009 |
| Titlu | Politica de Logging și Monitorizare |
| Repository | RRVI™ |
| Modul | 09 – Logging și Monitorizare |
| Firma | {{COMPANY_NAME}} |
| Versiune | 1.0.0 |
| Status | Aprobat |

---

# 1. Scop

Scopul acestei politici este de a stabili principiile și cerințele pentru logging-ul și monitorizarea sistemelor de Inteligență Artificială utilizate, dezvoltate sau implementate de {{COMPANY_NAME}}.

Această politică sprijină conformitatea cu Regulamentul (UE) 2024/1689 (EU AI Act), asigurând că activitățile sistemelor AI sunt înregistrate, monitorizate și păstrate corespunzător, pentru a sprijini guvernanța, investigarea incidentelor, îmbunătățirea continuă și inspecția de reglementare.

---

# 2. Domeniu de Aplicare

Această politică se aplică:

- sistemelor AI dezvoltate intern;
- sistemelor AI achiziționate extern;
- sistemelor AI de tip proof-of-concept;
- sistemelor AI de producție;
- infrastructurii AI suport;
- activităților operaționale legate de AI.

---

# 3. Cadrul Legal — Articolele 12, 19 și 26

Obligațiile de logging diferă în funcție de articol și de rolul organizației:

- **Articolul 12** (Provider) — sistemele AI cu risc ridicat trebuie proiectate cu capacitate tehnică de înregistrare automată a evenimentelor (loguri) pe toată durata de viață a sistemului.
- **Articolul 19** (Provider) — providerul păstrează logurile generate automat de sistem, pe care le controlează, pentru cel puțin perioada prevăzută de reglementare sau de legislația sectorială aplicabilă.
- **Articolul 26 alin. 5** (Deployer) — implementatorul păstrează logurile generate automat de sistemul AI, în măsura în care se află sub controlul său, pentru o perioadă de **cel puțin 6 luni**, cu excepția cazului în care legislația aplicabilă (inclusiv legislația privind protecția datelor personale) prevede altfel.

{{COMPANY_NAME}} identifică rolul său (provider/deployer) pentru fiecare sistem AI și aplică termenul de retenție corespunzător, nu unul generic.

---

# 4. Realitatea Tehnică a Logurilor pentru Instrumentele Comerciale

Pentru instrumentele AI comerciale folosite ca simplu abonament (de ex. ChatGPT, Gemini, Claude, Perplexity în varianta de consum), {{COMPANY_NAME}} NU presupune automat că logging-ul este activat sau exportabil.

Un abonament obișnuit, fără cont enterprise/API cu jurnalizare dedicată, de regulă **nu expune loguri accesibile și exportabile** de către utilizator.

{{COMPANY_NAME}} documentează, pentru fiecare sistem, coloana **„Jurnale Accesibile"** ca DA sau NU, verificat efectiv (nu presupus). Absența documentată a jurnalelor accesibile este o formă de diligență corectă; o căsuță lăsată necompletată sau afirmată greșit ca „Da" este o omisiune.

---

# 5. Stratul GDPR pe Loguri

Acolo unde logurile conțin date cu caracter personal (ex. conținutul interacțiunilor cu utilizatori, identificatori), {{COMPANY_NAME}} aplică suplimentar:

- o durată de păstrare justificată, nu nelimitată;
- controlul accesului la loguri (trasabilitate a accesului);
- informarea angajaților despre existența logging-ului;
- interzicerea evaluării individuale a angajaților exclusiv pe baza logurilor, fără bază legală și, unde e cazul, fără consultarea reprezentanților angajaților.

---

# 6. Declarația de Politică

{{COMPANY_NAME}} menține mecanisme adecvate de logging și monitorizare pentru toate sistemele AI, proporțional cu scopul preconizat, contextul operațional și riscurile asociate.

Logurile sunt protejate împotriva modificării neautorizate și păstrate conform termenelor din Secțiunea 3, nu conform unui termen generic uniform.

---

# 7. Obiective de Logging

Logging-ul trebuie să permită:

- trasabilitatea operațiunilor AI;
- reconstituirea evenimentelor semnificative;
- investigarea incidentelor;
- monitorizarea operațională;
- monitorizarea de securitate;
- verificarea conformității.

---

# 8. Obiective de Monitorizare

Monitorizarea trebuie să detecteze:

- comportamentul anormal al AI;
- defecțiuni de sistem;
- evenimente de securitate;
- degradarea performanței;
- modificări de configurare;
- anomalii operaționale.

---

# 9. Roluri și Responsabilități

## Director General

Aprobă această politică.

---

## Responsabilul de Guvernanță AI

Responsabil pentru:

- supravegherea activităților de logging;
- revizuirea rapoartelor de monitorizare;
- asigurarea conformității cu Art. 12/19/26.

---

## Responsabilul de Sistem AI

Responsabil pentru:

- verificarea reală (nu presupusă) a disponibilității logurilor;
- implementarea logging-ului unde e posibil;
- menținerea controalelor de monitorizare.

---

## Responsabilul de Conformitate

Responsabil pentru:

- sprijinirea auditurilor;
- verificarea retenției corecte pe rol (provider/deployer);
- revizuirea dovezilor de conformitate.

---

# 10. Cerințe de Revizuire

Această politică se revizuiește:

- anual;
- după modificări semnificative ale sistemelor AI;
- după incidente majore;
- după actualizări de reglementare;
- înainte de inspecțiile de reglementare.

---

# 11. Conformitate

Respectarea acestei politici este obligatorie.

Controalele de logging și monitorizare rămân operaționale pe tot parcursul ciclului de viață al fiecărui sistem AI.

---

# 12. Referințe

- Regulamentul (UE) 2024/1689 (EU AI Act), Articolele 12, 19, 26
- Regulamentul (UE) 2016/679 (GDPR)
- DOD-001 Politica de Inventar al Sistemelor AI
- DOD-002 Politica de Clasificare a Riscului
- REG-009 Registrul de Logging și Monitorizare

---

# 13. Aprobare

Întocmit de

{{RESPONSIBLE_PERSON}}

Firma

{{COMPANY_NAME}}

Status

Aprobat
