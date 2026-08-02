// ================================================================
// ads.js - Funciona no <head> ou no <body>
// ================================================================

(function () {
  "use strict";

  var config = window._adConfig || {};
  var ads = Array.isArray(config.ads) ? config.ads : [];
  var mode = config.mode || "random";
  var template = config.template || "card";

  if (ads.length === 0) {
    document.write("<!-- AdSystem: nenhum anúncio configurado -->");
    return;
  }

  var CSS_ID = "_ad-system-styles";

  function injectStyles() {
    if (document.getElementById(CSS_ID)) return;

    var css =
      ".ads-card{" +
        "background:#ffffff;" +
        "border:1px solid #e2e8f0;" +
        "border-radius:14px;" +
        "box-shadow:0 10px 25px rgba(15,23,42,0.06);" +
        "max-width:800px;" +
        "margin:16px auto;" +
        "padding:16px;" +
        "display:flex;" +
        "align-items:center;" +
        "gap:16px;" +
        "position:relative;" +
        "overflow:hidden;" +
        "font-family:'Segoe UI',system-ui,Arial,sans-serif;" +
        "box-sizing:border-box;" +
      "}" +
      ".ads-card::before{" +
        "content:'';" +
        "position:absolute;" +
        "top:0;" +
        "left:0;" +
        "width:4px;" +
        "height:100%;" +
        "background:#ea580c;" +
      "}" +
      ".ads-tag{" +
        "position:absolute;" +
        "top:12px;" +
        "right:-32px;" +
        "background:#ea580c;" +
        "color:#fff;" +
        "font-size:10px;" +
        "font-weight:800;" +
        "text-transform:uppercase;" +
        "letter-spacing:0.5px;" +
        "padding:4px 36px;" +
        "transform:rotate(45deg);" +
        "box-shadow:0 2px 6px rgba(234,88,12,0.25);" +
      "}" +
      ".ads-thumb{" +
        "flex:0 0 80px;" +
        "height:80px;" +
        "border-radius:10px;" +
        "overflow:hidden;" +
        "background:#f1f5f9;" +
      "}" +
      ".ads-thumb img{" +
        "width:100%;" +
        "height:100%;" +
        "object-fit:cover;" +
        "display:block;" +
      "}" +
      ".ads-body{" +
        "flex:1;" +
        "min-width:0;" +
      "}" +
      ".ads-title{" +
        "font-size:17px;" +
        "font-weight:800;" +
        "color:#0f172a;" +
        "line-height:1.25;" +
        "margin:0 0 4px;" +
      "}" +
      ".ads-desc{" +
        "font-size:13px;" +
        "color:#475569;" +
        "line-height:1.45;" +
        "margin:0 0 8px;" +
      "}" +
      ".ads-price{" +
        "font-size:18px;" +
        "font-weight:800;" +
        "color:#ea580c;" +
      "}" +
      ".ads-actions{" +
        "flex:0 0 auto;" +
        "display:flex;" +
        "align-items:center;" +
        "gap:12px;" +
      "}" +
      ".ads-logo{" +
        "height:26px;" +
        "width:auto;" +
        "display:block;" +
      "}" +
      ".ads-cta{" +
        "background:#ea580c;" +
        "color:#fff;" +
        "font-size:14px;" +
        "font-weight:700;" +
        "padding:10px 22px;" +
        "border-radius:50px;" +
        "text-decoration:none;" +
        "white-space:nowrap;" +
        "box-shadow:0 4px 14px rgba(234,88,12,0.28);" +
        "transition:background .2s ease,transform .15s ease,box-shadow .2s ease;" +
        "display:inline-block;" +
      "}" +
      ".ads-cta:hover{" +
        "background:#c2410c;" +
        "transform:translateY(-1px);" +
        "box-shadow:0 6px 18px rgba(234,88,12,0.35);" +
      "}" +
      ".ads-cta:focus-visible{" +
        "outline:3px solid #fed7aa;" +
        "outline-offset:2px;" +
      "}" +
      ".ads-compact{" +
        "background:linear-gradient(135deg,#fff8f5 0%,#ffe8e0 100%);" +
        "border-radius:12px;" +
        "padding:10px 14px;" +
        "display:flex;" +
        "align-items:center;" +
        "justify-content:space-between;" +
        "gap:10px;" +
        "border:1px solid #f0d0c8;" +
        "max-width:800px;" +
        "margin:10px auto;" +
        "flex-wrap:wrap;" +
        "box-shadow:0 4px 12px rgba(238,77,45,0.12);" +
        "font-family:'Segoe UI',Arial,sans-serif;" +
        "box-sizing:border-box;" +
      "}" +
      ".ads-compact .ads-thumb-compact{" +
        "flex:0 0 65px;" +
      "}" +
      ".ads-compact .ads-thumb-compact img{" +
        "width:100%;" +
        "height:auto;" +
        "border-radius:8px;" +
        "display:block;" +
      "}" +
      ".ads-compact .ads-text{" +
        "flex:1;" +
        "min-width:150px;" +
      "}" +
      ".ads-compact .ads-title-compact{" +
        "font-size:16px;" +
        "font-weight:800;" +
        "color:#ee4d2d;" +
        "line-height:1.2;" +
        "letter-spacing:-0.3px;" +
      "}" +
      ".ads-compact .ads-desc-compact{" +
        "font-size:11px;" +
        "color:#2d2d3f;" +
        "line-height:1.4;" +
        "margin-top:2px;" +
        "font-weight:500;" +
        "word-wrap:break-word;" +
      "}" +
      ".ads-compact .ads-cta-compact{" +
        "background:#ee4d2d;" +
        "color:#fff;" +
        "font-size:14px;" +
        "font-weight:700;" +
        "padding:9px 20px;" +
        "border-radius:50px;" +
        "text-decoration:none;" +
        "white-space:nowrap;" +
        "display:inline-block;" +
        "box-shadow:0 4px 12px rgba(238,77,45,0.3);" +
      "}" +
      ".ads-banner{" +
        "position:relative;" +
        "max-width:800px;" +
        "margin:16px auto;" +
        "border-radius:14px;" +
        "overflow:hidden;" +
        "display:block;" +
        "text-decoration:none;" +
        "background:#0f172a;" +
        "font-family:'Segoe UI',system-ui,Arial,sans-serif;" +
        "box-sizing:border-box;" +
      "}" +
      ".ads-banner img{" +
        "width:100%;" +
        "height:auto;" +
        "display:block;" +
        "opacity:.95;" +
      "}" +
      ".ads-banner-overlay{" +
        "position:absolute;" +
        "bottom:0;" +
        "left:0;" +
        "right:0;" +
        "padding:20px 18px;" +
        "background:linear-gradient(to top,rgba(15,23,42,0.9),rgba(15,23,42,0));" +
        "color:#fff;" +
      "}" +
      ".ads-banner-title{" +
        "font-size:18px;" +
        "font-weight:800;" +
        "margin:0 0 4px;" +
      "}" +
      ".ads-banner-desc{" +
        "font-size:13px;" +
        "margin:0;" +
        "opacity:.9;" +
      "}" +
      "@media (max-width:520px){" +
        ".ads-card{flex-direction:column;align-items:flex-start;padding:14px;}" +
        ".ads-thumb{width:100%;height:160px;flex:auto;}" +
        ".ads-actions{width:100%;justify-content:space-between;}" +
        ".ads-compact{flex-direction:row;}" +
        ".ads-compact .ads-thumb-compact{flex:0 0 55px;}" +
        ".ads-compact .ads-cta-compact{padding:8px 14px;font-size:13px;}" +
      "}";

    var style = document.createElement("style");
    style.id = CSS_ID;
    style.textContent = css;
    document.head.appendChild(style);
  }

  function pickAd() {
    if (ads.length === 1) return ads[0];

    if (mode === "sequential") {
      var idx = parseInt(sessionStorage.getItem("_adIndex") || "0", 10) % ads.length;
      sessionStorage.setItem("_adIndex", String(idx + 1));
      return ads[idx];
    }

    if (mode === "first") return ads[0];

    return ads[Math.floor(Math.random() * ads.length)];
  }

  function escapeHtml(text) {
    return String(text || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function renderCard(ad) {
    var tag = ad.tag ? '<span class="ads-tag">' + escapeHtml(ad.tag) + "</span>" : "";
    var logo = ad.logo
      ? '<img src="' + escapeHtml(ad.logo) + '" alt="" class="ads-logo" loading="lazy">'
      : "";
    var price = ad.preco ? '<div class="ads-price">' + escapeHtml(ad.preco) + "</div>" : "";

    var wrapper = document.createElement("div");
    wrapper.className = "ads-card";
    wrapper.innerHTML =
      tag +
      '<div class="ads-thumb"><img src="' +
      escapeHtml(ad.imagem) +
      '" alt="' +
      escapeHtml(ad.titulo) +
      '" loading="lazy"></div>' +
      '<div class="ads-body">' +
      '<h3 class="ads-title">' +
      escapeHtml(ad.titulo) +
      "</h3>" +
      '<p class="ads-desc">' +
      escapeHtml(ad.descricao) +
      "</p>" +
      price +
      "</div>" +
      '<div class="ads-actions">' +
      logo +
      '<a href="' +
      escapeHtml(ad.link) +
      '" class="ads-cta" target="_blank" rel="noopener noreferrer" aria-label="Comprar ' +
      escapeHtml(ad.titulo) +
      '">Comprar</a>' +
      "</div>";

    return wrapper;
  }

  function renderCompact(ad) {
    var logo = ad.logo
      ? '<img src="' + escapeHtml(ad.logo) + '" alt="" class="ads-logo" loading="lazy">'
      : "";
    var wrapper = document.createElement("div");
    wrapper.className = "ads-compact";
    wrapper.innerHTML =
      '<div class="ads-thumb-compact"><img src="' +
      escapeHtml(ad.imagem) +
      '" alt="' +
      escapeHtml(ad.titulo) +
      '" loading="lazy"></div>' +
      '<div class="ads-text">' +
      '<div class="ads-title-compact">' +
      escapeHtml(ad.titulo) +
      "</div>" +
      '<div class="ads-desc-compact">' +
      escapeHtml(ad.descricao) +
      "</div>" +
      "</div>" +
      '<div class="ads-actions">' +
      logo +
      '<a href="' +
      escapeHtml(ad.link) +
      '" class="ads-cta-compact" target="_blank" rel="noopener noreferrer">Comprar</a>' +
      "</div>";

    return wrapper;
  }

  function renderBanner(ad) {
    var wrapper = document.createElement("a");
    wrapper.href = escapeHtml(ad.link);
    wrapper.className = "ads-banner";
    wrapper.target = "_blank";
    wrapper.rel = "noopener noreferrer";
    wrapper.setAttribute(
      "aria-label",
      "Comprar " + escapeHtml(ad.titulo)
    );
    wrapper.innerHTML =
      '<img src="' +
      escapeHtml(ad.imagem) +
      '" alt="" loading="lazy">' +
      '<div class="ads-banner-overlay">' +
      '<div class="ads-banner-title">' +
      escapeHtml(ad.titulo) +
      "</div>" +
      '<div class="ads-banner-desc">' +
      escapeHtml(ad.descricao) +
      "</div>" +
      "</div>";

    return wrapper;
  }

  function insertAd(element) {
    injectStyles();

    if (document.body) {
      document.body.appendChild(element);
      return;
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", function () {
        document.body.appendChild(element);
      });
    } else {
      document.body.appendChild(element);
    }
  }

  function render() {
    var ad = pickAd();
    var element;

    if (template === "compact") {
      element = renderCompact(ad);
    } else if (template === "banner") {
      element = renderBanner(ad);
    } else {
      element = renderCard(ad);
    }

    insertAd(element);
  }

  render();
})();
