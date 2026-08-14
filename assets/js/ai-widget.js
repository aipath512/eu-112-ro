/*!
 * AI Assistant floating widget — self-contained (injects its own CSS).
 * Include on any page with:
 *   <script>
 *     window.AI_WIDGET_CONFIG = {
 *       accent: "#c90016",              // theme accent color
 *       accent2: "#ef001c",             // secondary/gradient accent (optional, defaults to accent)
 *       bg: "#0b0b0b",                  // panel background
 *       fontBody: "Inter, sans-serif",  // body font stack
 *       apiBase: "https://eu-ai-act-conversation-worker-test.aipath512.workers.dev/search?q=",
 *       lang: "ro",                     // default language sent to &lang=
 *       assistantPage: "/assistant.html",
 *       siteName: "EU AI Act Ready",
 *       greeting: "Întreabă orice despre EU AI Act."
 *     };
 *   </script>
 *   <script src="/assets/js/ai-widget.js" defer></script>
 */
(function () {
  "use strict";
  var cfg = Object.assign({
    accent: "#c90016",
    accent2: null,
    bg: "#0b0b0b",
    fontBody: "Inter, Arial, sans-serif",
    apiBase: "https://eu-ai-act-conversation-worker-test.aipath512.workers.dev/search?q=",
    lang: "ro",
    assistantPage: "/assistant.html",
    siteName: "AI Assistant",
    greeting: "Cu ce te pot ajuta?"
  }, window.AI_WIDGET_CONFIG || {});
  cfg.accent2 = cfg.accent2 || cfg.accent;

  var CSS = `
  #aiw-btn{position:fixed;bottom:22px;right:22px;width:60px;height:60px;border-radius:50%;
    background:#25D366;border:none;cursor:pointer;
    box-shadow:0 4px 18px rgba(0,0,0,.45),0 0 0 0 #25D36666;z-index:99998;
    display:flex;align-items:center;justify-content:center;transition:transform .18s ease;
    animation:aiw-pulse 2.6s ease-in-out infinite;}
  #aiw-btn:hover{transform:scale(1.07);}
  #aiw-btn svg{width:28px;height:28px;fill:#fff;}
  @keyframes aiw-pulse{
    0%{box-shadow:0 4px 18px rgba(0,0,0,.45),0 0 0 0 #25D36655;}
    70%{box-shadow:0 4px 18px rgba(0,0,0,.45),0 0 0 12px #25D36600;}
    100%{box-shadow:0 4px 18px rgba(0,0,0,.45),0 0 0 0 #25D36600;}
  }
  #aiw-panel{position:fixed;bottom:96px;right:22px;width:368px;max-width:92vw;height:520px;
    max-height:76vh;background:#0B141A;border:1px solid #2a3942;border-radius:12px;
    box-shadow:0 16px 44px rgba(0,0,0,.6);display:none;flex-direction:column;overflow:hidden;
    z-index:99999;font-family:${cfg.fontBody};}
  #aiw-panel.aiw-open{display:flex;}
  #aiw-head{background:#008069;color:#ffffff;
    padding:12px 16px;display:flex;align-items:center;justify-content:space-between;}
  #aiw-head .aiw-head-left{display:flex;align-items:center;gap:10px;}
  #aiw-head .aiw-logo{width:36px;height:36px;border-radius:50%;flex-shrink:0;
    background:#ffffff;
    display:flex;align-items:center;justify-content:center;}
  #aiw-head .aiw-logo svg{width:19px;height:19px;fill:#008069;}
  #aiw-head .aiw-title{font-weight:600;font-size:15px;letter-spacing:.01em;line-height:1.2;}
  #aiw-head .aiw-subtitle{font-size:11px;color:#d4f0ea;display:flex;align-items:center;gap:5px;margin-top:2px;}
  #aiw-head .aiw-ai-badge{display:inline-flex;align-items:center;gap:3px;background:rgba(255,255,255,.18);
    color:#ffffff;border:1px solid rgba(255,255,255,.35);border-radius:20px;padding:1px 7px 1px 5px;
    font-size:9px;font-weight:700;letter-spacing:.03em;text-transform:uppercase;}
  #aiw-head .aiw-ai-badge svg{width:9px;height:9px;fill:#4ade80;}
  #aiw-head .aiw-actions{display:flex;gap:2px;}
  #aiw-head button{background:transparent;border:none;color:#ffffff;cursor:pointer;opacity:.9;
    padding:5px;display:flex;align-items:center;border-radius:6px;}
  #aiw-head button:hover{opacity:1;background:rgba(255,255,255,.15);}
  #aiw-body{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:8px;
    background:#0B141A;}
  .aiw-row{display:flex;align-items:flex-end;gap:8px;max-width:88%;}
  .aiw-row.aiw-row-user{align-self:flex-end;flex-direction:row-reverse;}
  .aiw-avatar{display:none;}
  .aiw-msg{padding:7px 9px 8px 10px;border-radius:8px;font-size:13.8px;line-height:1.4;
    white-space:pre-wrap;box-shadow:0 1px 1px rgba(0,0,0,.3);position:relative;}
  .aiw-msg.aiw-bot{background:#202C33;color:#e9edef;border-top-left-radius:2px;}
  .aiw-msg.aiw-user{background:#005C4B;color:#e9edef;border-top-right-radius:2px;}
  .aiw-msg.aiw-loading{background:#202C33;color:#8696a0;font-style:italic;border-top-left-radius:2px;}
  #aiw-disclosure{padding:7px 16px;background:#2a2410;
    font-size:10.5px;color:#e0c467;text-align:center;line-height:1.4;}
  #aiw-inputrow{display:flex;gap:8px;padding:10px 12px;background:#1f2c34;
    align-items:center;}
  #aiw-input{flex:1;background:#2a3942;border:none;
    border-radius:22px;padding:10px 16px;color:#e9edef;font-size:13.8px;font-family:${cfg.fontBody};
    resize:none;outline:none;box-shadow:0 1px 2px rgba(0,0,0,.2);}
  #aiw-input::placeholder{color:#8696a0;}
  #aiw-send{background:#00A884;border:none;border-radius:50%;width:42px;height:42px;
    color:#0B141A;cursor:pointer;display:flex;align-items:center;justify-content:center;
    flex-shrink:0;transition:transform .12s;}
  #aiw-send:hover{transform:scale(1.06);background:#02c39a;}
  @media (max-width:480px){#aiw-panel{right:8px;left:8px;width:auto;bottom:88px;}
    #aiw-btn{right:16px;bottom:16px;}}
  `;
  var styleEl = document.createElement("style");
  styleEl.textContent = CSS;
  document.head.appendChild(styleEl);

  var USER_ICON = '<svg viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5z"/></svg>';
  var BOT_ICON = '<svg viewBox="0 0 24 24"><path d="M12 2a1 1 0 0 1 1 1v1.06A8.004 8.004 0 0 1 20 12v1a2 2 0 0 1-2 2h-.17A4 4 0 0 1 14 18h-4a4 4 0 0 1-3.83-3H6a2 2 0 0 1-2-2v-1a8.004 8.004 0 0 1 7-7.94V3a1 1 0 0 1 1-1zm-3 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/></svg>';

  var btn = document.createElement("button");
  btn.id = "aiw-btn";
  btn.setAttribute("aria-label", cfg.siteName + " — Asistent AI");
  btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.07-1.35C8.53 21.5 10.22 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.1 14.15c-.22.62-1.28 1.2-1.76 1.24-.48.05-.87.36-2.95-.62-2.5-1.19-4.1-3.74-4.23-3.92-.13-.18-1-1.34-1-2.55s.63-1.8.85-2.05c.22-.25.5-.31.66-.31.17 0 .33 0 .48.01.15.01.35-.06.55.42.2.48.68 1.65.74 1.77.06.12.1.27.02.44-.08.17-.13.27-.25.42-.13.15-.27.33-.38.44-.13.13-.26.27-.11.53.15.26.65 1.07 1.4 1.74.97.86 1.78 1.13 2.04 1.26.26.13.41.11.56-.07.15-.18.65-.76.82-1.02.17-.26.34-.22.57-.13.23.09 1.47.69 1.72.82.25.13.42.19.48.3.06.11.06.63-.16 1.25z"/></svg>';

  var panel = document.createElement("div");
  panel.id = "aiw-panel";
  panel.innerHTML =
    '<div id="aiw-head">' +
      '<div class="aiw-head-left">' +
        '<div class="aiw-logo"><svg viewBox="0 0 24 24">' + BOT_ICON.replace(/<svg[^>]*>|<\/svg>/g,'') + '</svg></div>' +
        '<div>' +
          '<div class="aiw-title">EU AI ACT — ' + cfg.siteName + '</div>' +
          '<div class="aiw-subtitle"><span class="aiw-ai-badge"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>Chatbot AI</span></div>' +
        '</div>' +
      '</div>' +
      '<div class="aiw-actions">' +
        '<button id="aiw-expand" title="Deschide pe pagină întreagă" aria-label="Full page">' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3H3v6M15 21h6v-6M21 3l-7 7M3 21l7-7"/></svg>' +
        '</button>' +
        '<button id="aiw-close" title="Închide" aria-label="Close">' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>' +
        '</button>' +
      '</div>' +
    '</div>' +
    '<div id="aiw-disclosure">Ești în dialog cu un asistent AI, nu cu o persoană. Răspunsurile sunt orientative, nu constituie consultanță juridică.</div>' +
    '<div id="aiw-body"></div>' +
    '<div id="aiw-inputrow">' +
      '<textarea id="aiw-input" rows="1" placeholder="' + cfg.greeting + '"></textarea>' +
      '<button id="aiw-send" aria-label="Trimite">' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg>' +
      '</button>' +
    '</div>';

  document.addEventListener("DOMContentLoaded", function () {
    document.body.appendChild(btn);
    document.body.appendChild(panel);
    var body = panel.querySelector("#aiw-body");
    var input = panel.querySelector("#aiw-input");

    function escapeHtml(s) {
      var d = document.createElement("div");
      d.textContent = s;
      return d.innerHTML;
    }

    function linkify(escapedText) {
      // Turns bare URLs (already HTML-escaped) into clickable, safe <a> tags.
      var urlPattern = /(https?:\/\/[^\s<]+[^\s<.,;:!?)"'\]])/g;
      return escapedText.replace(urlPattern, function (url) {
        return '<a href="' + url + '" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:underline;">' + url + '</a>';
      });
    }

    function addMsg(text, cls, sources) {
      var row = document.createElement("div");
      row.className = "aiw-row" + (cls === "user" ? " aiw-row-user" : "");
      var avatar = document.createElement("div");
      avatar.className = "aiw-avatar";
      avatar.innerHTML = '<svg viewBox="0 0 24 24">' + (cls === "user" ? USER_ICON : BOT_ICON).replace(/<svg[^>]*>|<\/svg>/g,'') + '</svg>';
      var d = document.createElement("div");
      d.className = "aiw-msg aiw-" + cls;

      var html = linkify(escapeHtml(text));

      // If the API returned a separate sources/citations field, append it as a distinct, visible list.
      if (sources && sources.length) {
        var list = sources.map(function (s) {
          if (typeof s === "string") {
            return /^https?:\/\//.test(s)
              ? '<a href="' + escapeHtml(s) + '" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:underline;">' + escapeHtml(s) + '</a>'
              : escapeHtml(s);
          }
          var label = escapeHtml(s.title || s.name || s.url || "sursă");
          return s.url
            ? '<a href="' + escapeHtml(s.url) + '" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:underline;">' + label + '</a>'
            : label;
        }).join("<br>");
        html += '<div style="margin-top:7px;padding-top:6px;border-top:1px solid rgba(255,255,255,.15);font-size:11.5px;opacity:.85;"><b>Surse:</b><br>' + list + '</div>';
      }

      d.innerHTML = html;
      row.appendChild(avatar);
      row.appendChild(d);
      body.appendChild(row);
      body.scrollTop = body.scrollHeight;
      return d;
    }

    var opened = false;
    btn.addEventListener("click", function () {
      opened = !opened;
      panel.classList.toggle("aiw-open", opened);
      if (opened && !body.dataset.greeted) {
        addMsg(cfg.greeting, "bot");
        body.dataset.greeted = "1";
      }
    });
    panel.querySelector("#aiw-close").addEventListener("click", function () {
      opened = false;
      panel.classList.remove("aiw-open");
    });
    panel.querySelector("#aiw-expand").addEventListener("click", function () {
      window.location.href = cfg.assistantPage;
    });

    async function ask() {
      var q = input.value.trim();
      if (!q) return;
      addMsg(q, "user");
      input.value = "";
      var loading = addMsg("...", "loading");
      try {
        var resp = await fetch(cfg.apiBase + encodeURIComponent(q) + "&lang=" + cfg.lang);
        var data = await resp.json();
        loading.remove();
        var answer = data.generated_answer || data.answer || "Nu am găsit un răspuns clar — reformulează întrebarea.";
        var sources = data.sources || data.citations || data.references || data.links || null;
        addMsg(answer, "bot", sources);
      } catch (e) {
        loading.remove();
        addMsg("A apărut o eroare de conexiune. Încearcă din nou.", "bot");
      }
    }
    panel.querySelector("#aiw-send").addEventListener("click", ask);
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); ask(); }
    });
  });
})();
