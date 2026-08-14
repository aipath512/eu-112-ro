# EU-112.ro — Pachet Complet de Upload (v3)

**Schimbări față de v2:** faq.html are poarta de email ACTIVĂ implicit (nu OFF ca în v2), cu comutator de dezactivare rapidă disponibil pe pagină. stats.html are secțiune nouă „Poarta de email" — rata de refuz (câți văd poarta vs. câți lasă emailul).

## 1. EU-112-RO (github.com/aipath512/eu-112)

Deschide folderul `1-EU-112-RO-github-aipath512-eu-112/` — conține TOT ce merge pe acel repo.

**Pași:**
1. Mergi pe https://github.com/aipath512/eu-112
2. Click „Add file" → „Upload files"
3. Deschide folderul pe calculator și trage TOT conținutul lui (fișierele + subfolderele `assets/`, `.well-known/`, `ro-modules/`) direct în fereastra de upload din browser
4. **ATENȚIE:** fișierul `_redirects` nu are extensie — verifică să nu i se adauge `.txt` la upload
5. Commit changes → Cloudflare Pages redeployează automat (~1-2 min)

**Ce conține (8 pagini HTML):**
- `index.html` — pagina principală, panou de 8 statistici, buton „Ask anything…", widget AI (stil WhatsApp dark)
- `faq.html` — 1000 de întrebări-răspunsuri, freemium (răspunsuri blurate până la email)
- `faq-hub.html` — index public, 100 categorii, tabel termene, secțiune „De ce EU-112"
- `cazuri-de-utilizare.html` — 100 de cazuri de utilizare AI, pe roluri și industrii, filtrabile
- `thank-you.html` — după captarea emailului, ofertă spre eu-ai-act.ro
- `stats.html` — dashboard intern de trafic (noindex)
- `intentii.html` — redirect 301 către faq.html
- `intents.json` — 1000 intenții clasificate TOF/MOF/BOF

**Fișiere tehnice:** `_redirects`, `robots.txt`, `sitemap.xml`, `llms.txt`

**Foldere:**
- `assets/` — widget AI (ai-widget.js) + og-image
- `.well-known/agent-card.json` — placeholder A2A (fără worker funcțional)
- `ro-modules/` — 70 de documente Governance traduse RO, 10 module

Toate paginile au: footer unificat (quick links + contact), meniu actualizat, meta SEO/AEO complet (canonical, OG, Twitter, hreflang ro/x-default), schema.org (Organization/WebSite/WebPage/BreadcrumbList/FAQPage), semnătură de autor pe paginile principale.

## 2. EU-AI-ACT-RO update (github.com/aipath512/eu-ai-act-ro)

Un singur `index.html` — adaugă linkuri către eu-112.ro (navigație + Contact) cu UTM și script de contorizare a vizitatorilor primiți de acolo.

## 3. Referință (NU se urcă nicăieri)

- `er/` — dicționarul ERE + SQL pregătit pentru D1 (regulament, Omnibus v2, 1000 Q&A, ERE, 70 documente = 1740 rânduri)
- `omnibus/` — SQL Omnibus v1 și v2
- `exemple/` — REG-001 completat ca exemplu

## După upload — pașii rămași

1. Confirmă în Cloudflare Pages → Settings → Builds că `aipath512/eu-112` e repo-ul conectat la domeniu
2. Rulează cele 5 SQL-uri din `3-REFERINTA/` în consola D1 (`eu-ai-act-db`)
3. Vectorizează (bge-m3 + Vectorize `eu-ai-act-vectors`) — manual
4. Cloudflare Web Analytics — trimite tag-ul dacă vrei să-l adaug
