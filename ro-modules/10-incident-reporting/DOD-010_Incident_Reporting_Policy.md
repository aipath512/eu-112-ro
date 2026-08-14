# DOD-010

# Politica de Raportare a Incidentelor AI

---

## Informații Document

| Câmp | Valoare |
|--------|-------|
| ID Document | DOD-010 |
| Titlu | Politica de Raportare a Incidentelor AI |
| Repository | RRVI™ |
| Modul | 10 – Raportare Incidente |
| Firma | {{COMPANY_NAME}} |
| Versiune | 1.0.0 |
| Status | Aprobat |

---

# 1. Scop

Scopul acestei politici este de a stabili principiile și cerințele pentru identificarea, raportarea, înregistrarea, investigarea și rezolvarea incidentelor legate de sistemele de Inteligență Artificială utilizate, dezvoltate sau implementate de {{COMPANY_NAME}}.

Această politică sprijină conformitatea cu Regulamentul (UE) 2024/1689 (EU AI Act), Articolul 73, asigurând că incidentele legate de AI sunt gestionate consecvent, documentate obiectiv și raportate la timp autorităților competente, unde este cerut de lege.

---

# 2. Definiția Incidentului Grav (Articolul 73)

Un **incident grav** este un incident sau o defecțiune a unui sistem AI care, direct sau indirect, duce la oricare din următoarele:

- decesul unei persoane sau vătămarea gravă a sănătății unei persoane;
- o perturbare gravă și ireversibilă a gestionării sau funcționării unei infrastructuri critice;
- încălcarea obligațiilor prevăzute de dreptul Uniunii menite să protejeze drepturile fundamentale;
- prejudicii grave aduse bunurilor sau mediului.

{{COMPANY_NAME}} distinge clar între un incident grav (cu obligație de notificare legală) și un incident minor (gestionat intern, fără notificare obligatorie).

---

# 3. Termenele de Notificare (Articolul 73)

Când {{COMPANY_NAME}} identifică sau ia cunoștință de un incident grav legat de un sistem AI cu risc ridicat pe care îl operează, se aplică următoarele termene, calculate de la momentul luării la cunoștință a legăturii cauzale dintre sistemul AI și incident:

- **15 zile** — termenul standard de notificare către autoritatea de supraveghere a pieței.
- **2 zile** — termen redus pentru incidente care implică o încălcare gravă a obligațiilor de protejare a drepturilor fundamentale, definite ca fiind larg răspândite, sau un deces.
- **10 zile** — termen aplicabil în cazul decesului unei persoane, dacă evenimentul necesită investigație suplimentară înainte de raportarea completă.

Momentul de la care încep să curgă termenele este **momentul luării la cunoștință a legăturii cauzale** dintre sistemul AI și incidentul grav (coloana „Prisă la Cunoștință" din registru), nu momentul producerii efective a incidentului, dacă acesta a fost diferit.

---

# 4. Obligația Deployerului de a Informa Providerul

Conform Articolului 26 alin. (5), {{COMPANY_NAME}}, în calitate de deployer al unui sistem AI cu risc ridicat, are obligația să:

- informeze imediat providerul sau distribuitorul despre incidentul grav identificat;
- suspende utilizarea sistemului AI dacă există motive să considere că utilizarea în conformitate cu instrucțiunile poate duce la un risc, până la clarificarea situației cu providerul.

---

# 5. Coordonarea cu Termenul GDPR de 72 de Ore

Dacă incidentul implică și o încălcare a securității datelor cu caracter personal, se aplică simultan și separat termenul de **72 de ore** pentru notificarea autorității de protecție a datelor (ANSPDCP), conform Articolului 33 GDPR.

Cele două notificări (EU AI Act către autoritatea de supraveghere a pieței, GDPR către autoritatea de protecție a datelor) sunt **distincte** și nu se substituie una pe alta — pot fi necesare ambele, pentru același eveniment, către autorități diferite.

---

# 6. Domeniu de Aplicare

Această politică se aplică:

- sistemelor AI dezvoltate intern;
- sistemelor AI achiziționate extern;
- sistemelor AI de tip proof-of-concept;
- sistemelor AI de producție;
- infrastructurii AI;
- personalului care folosește sisteme AI în numele {{COMPANY_NAME}}.

---

# 7. Declarația de Politică

{{COMPANY_NAME}} stabilește și menține un proces de Raportare a Incidentelor pentru toate sistemele AI.

Fiecare incident legat de AI este:

- identificat;
- clasificat (grav / minor);
- raportat (intern, și către autorități dacă e cazul, cu respectarea termenelor de la Secțiunea 3);
- documentat;
- investigat;
- rezolvat;
- revizuit.

---

# 8. Principii de Management al Incidentelor

Managementul incidentelor asigură:

- detectare rapidă;
- raportare la timp, cu respectarea termenelor legale;
- investigare obiectivă;
- analiza cauzei principale;
- acțiuni corective;
- acțiuni preventive;
- documentare completă.

---

# 9. Categorii de Incidente

Incidentele pot include:

- outputuri AI incorecte;
- incidente de securitate;
- probleme de calitate a datelor;
- defecțiuni de sistem;
- eșecuri de supraveghere umană;
- acces neautorizat;
- neconformitate de reglementare;
- întreruperea serviciului;
- **incidente grave conform Art. 73** (deces, vătămare gravă, perturbare de infrastructură critică, încălcare a drepturilor fundamentale, prejudicii grave).

---

# 10. Roluri și Responsabilități

## Director General

Aprobă acțiunile corective majore și confirmă notificarea autorităților, unde e cerută.

---

## Responsabilul de Guvernanță AI

Responsabil pentru:

- coordonarea managementului incidentelor;
- revizuirea rapoartelor de incident;
- menținerea Registrului de Incidente;
- monitorizarea termenelor de notificare (15/2/10 zile).

---

## Responsabilul de Sistem AI

Responsabil pentru:

- raportarea incidentelor;
- informarea providerului, dacă {{COMPANY_NAME}} e deployer;
- sprijinirea investigațiilor;
- implementarea acțiunilor corective.

---

## Utilizatorii AI

Responsabili pentru:

- raportarea imediată a suspiciunilor de incident AI;
- păstrarea dovezilor relevante;
- cooperarea în timpul investigațiilor.

---

## Responsabilul de Conformitate

Responsabil pentru:

- evaluarea impactului de reglementare;
- verificarea încadrării ca incident grav conform Art. 73;
- coordonarea cu notificarea GDPR de 72h, dacă e cazul;
- sprijinirea auditurilor și inspecțiilor;
- monitorizarea tendințelor de incidente.

---

# 11. Cerințe de Revizuire

Această politică se revizuiește:

- anual;
- după incidente semnificative;
- după actualizări de reglementare;
- după modificări majore ale sistemelor AI;
- înainte de inspecțiile de reglementare.

---

# 12. Conformitate

Respectarea acestei politici este obligatorie.

Neraportarea incidentelor AI semnificative, în termenele prevăzute de Articolul 73, poate duce la sancțiuni de reglementare, pe lângă acțiunile corective și revizuirea de conformitate.

---

# 13. Referințe

- Regulamentul (UE) 2024/1689 (EU AI Act), Articolul 73, Articolul 26 alin. (5)
- Regulamentul (UE) 2016/679 (GDPR), Articolul 33
- DOD-001 Politica de Inventar al Sistemelor AI
- DOD-002 Politica de Clasificare a Riscului
- DOD-009 Politica de Logging și Monitorizare
- REG-010 Registrul de Raportare a Incidentelor

---

# 14. Aprobare

Întocmit de

{{RESPONSIBLE_PERSON}}

Firma

{{COMPANY_NAME}}

Status

Aprobat
