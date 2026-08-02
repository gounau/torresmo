// ================================================================
// ads.js - Versão com document.write (mais compatível)
// ================================================================

(function() {
  'use strict';

  var anuncio = {
    imagem: 'https://down-br.img.susercontent.com/file/sg-11134201-7rd5j-luq2ixcw0w6o88@resize_w900_nl.webp',
    titulo: '🔥 OFERTA IMPERDÍVEL!',
    descricao: '50ml SPF50 + Madagascar Centella Protetor Solar Facial PA + Hyalu-cica Soro Hidratante Sunblock Anti-UV Cuidados Com A Pele Coreana',
    link: 'https://s.shopee.com.br/3g2YWeAKnb',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg'
  };

  var html = '';
  html += '<div style="background:linear-gradient(135deg,#fff8f5 0%,#ffe8e0 100%);border-radius:12px;padding:10px 14px;display:flex;align-items:center;justify-content:space-between;gap:10px;font-family:Segoe UI,Arial,sans-serif;box-shadow:0 4px 12px rgba(238,77,45,0.12);border:1px solid #f0d0c8;max-width:760px;width:100%;margin:10px auto;flex-wrap:wrap;box-sizing:border-box;">';
  html += '<div style="flex:0 0 65px;"><img src="' + anuncio.imagem + '" alt="Produto" style="width:100%;height:auto;border-radius:8px;display:block;" loading="lazy"></div>';
  html += '<div style="flex:1;min-width:150px;"><div style="font-size:16px;font-weight:800;color:#ee4d2d;line-height:1.2;letter-spacing:-0.3px;">' + anuncio.titulo + '</div><div style="font-size:11px;color:#2d2d3f;line-height:1.4;margin-top:2px;font-weight:500;word-wrap:break-word;">' + anuncio.descricao + '</div></div>';
  html += '<div style="display:flex;align-items:center;gap:10px;flex:0 0 auto;">';
  if (anuncio.logo) {
    html += '<img src="' + anuncio.logo + '" alt="Logo" style="height:28px;width:auto;display:block;" loading="lazy">';
  }
  html += '<a href="' + anuncio.link + '" target="_blank" rel="noopener noreferrer" style="background:#ee4d2d;color:#fff;font-size:14px;font-weight:700;padding:9px 20px;border-radius:50px;text-decoration:none;white-space:nowrap;transition:background 0.3s ease,transform 0.2s;box-shadow:0 4px 12px rgba(238,77,45,0.3);display:inline-block;" onmouseover="this.style.background=\'#d43d1f\';this.style.transform=\'scale(1.03)\'" onmouseout="this.style.background=\'#ee4d2d\';this.style.transform=\'scale(1)\'">Comprar</a>';
  html += '</div></div>';

  // Usa document.write para inserir o HTML exatamente onde a tag script está
  document.write(html);

})();
