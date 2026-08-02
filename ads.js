// ============================================================
// ads.js - Banner Afiliado Shopee (SKIN1004 Protetor Solar)
// ============================================================

(function() {
  'use strict';

  // ===== CONFIGURAÇÕES =====
  const LINK_AFILIADO = 'https://s.shopee.com.br/3g2YWeAKnb';
  const IMAGEM_PRODUTO = 'https://down-br.img.susercontent.com/file/sg-11134201-7rd5j-luq2ixcw0w6o88@resize_w900_nl.webp';
  const LOGO_SHOPEE = 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg';

  // ===== CRIA O BANNER =====
  function criarBanner() {
    // Container principal do banner
    var banner = document.createElement('div');
    banner.id = 'banner-shopee-doramas';
    banner.style.cssText = `
      background: linear-gradient(135deg, #fff8f5 0%, #ffe8e0 100%);
      border-radius: 12px;
      padding: 10px 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      font-family: 'Segoe UI', Arial, sans-serif;
      box-shadow: 0 4px 12px rgba(238, 77, 45, 0.12);
      border: 1px solid #f0d0c8;
      max-width: 760px;
      width: 100%;
      margin: 10px auto;
      flex-wrap: wrap;
      box-sizing: border-box;
    `;

    // ---- Imagem do produto ----
    var imgProduto = document.createElement('div');
    imgProduto.style.cssText = 'flex: 0 0 65px;';
    imgProduto.innerHTML = '<img src="' + IMAGEM_PRODUTO + '" alt="Protetor Solar Coreano" style="width:100%; height:auto; border-radius:8px; display:block;" loading="lazy">';

    // ---- Texto (título + descrição) ----
    var textoDiv = document.createElement('div');
    textoDiv.style.cssText = 'flex: 1; min-width: 150px;';

    var titulo = document.createElement('div');
    titulo.style.cssText = 'font-size: 16px; font-weight: 800; color: #ee4d2d; line-height: 1.2; letter-spacing: -0.3px;';
    titulo.textContent = '🔥 OFERTA IMPERDÍVEL!';

    var descricao = document.createElement('div');
    descricao.style.cssText = 'font-size: 11px; color: #2d2d3f; line-height: 1.4; margin-top: 2px; font-weight: 500; word-wrap: break-word;';
    descricao.textContent = '50ml SPF50 + Madagascar Centella Protetor Solar Facial PA + Hyalu-cica Soro Hidratante Sunblock Anti-UV Cuidados Com A Pele Coreana';

    textoDiv.appendChild(titulo);
    textoDiv.appendChild(descricao);

    // ---- Logo Shopee + Botão ----
    var acoesDiv = document.createElement('div');
    acoesDiv.style.cssText = 'display: flex; align-items: center; gap: 10px; flex: 0 0 auto;';

    // Logo Shopee
    var logo = document.createElement('img');
    logo.src = LOGO_SHOPEE;
    logo.alt = 'Shopee';
    logo.style.cssText = 'height: 28px; width: auto; display: block;';
    logo.loading = 'lazy';

    // Botão
    var botao = document.createElement('a');
    botao.href = LINK_AFILIADO;
    botao.target = '_blank';
    botao.rel = 'noopener noreferrer';
    botao.textContent = 'Comprar';
    botao.style.cssText = `
      background: #ee4d2d;
      color: #fff;
      font-size: 14px;
      font-weight: 700;
      padding: 9px 20px;
      border-radius: 50px;
      text-decoration: none;
      white-space: nowrap;
      transition: background 0.3s ease, transform 0.2s;
      box-shadow: 0 4px 12px rgba(238, 77, 45, 0.3);
      display: inline-block;
    `;
    botao.onmouseover = function() { this.style.background = '#d43d1f'; this.style.transform = 'scale(1.03)'; };
    botao.onmouseout = function() { this.style.background = '#ee4d2d'; this.style.transform = 'scale(1)'; };

    // Adiciona logo e botão ao container de ações
    acoesDiv.appendChild(logo);
    acoesDiv.appendChild(botao);

    // Monta o banner
    banner.appendChild(imgProduto);
    banner.appendChild(textoDiv);
    banner.appendChild(acoesDiv);

    // Insere o banner no site
    // Opção 1: substituir o local do script (se o script estiver no body)
    // Opção 2: adicionar ao final do body
    // Vamos usar a opção 2 (mais segura)
    document.body.appendChild(banner);
  }

  // ===== EXECUTA QUANDO O DOM ESTIVER PRONTO =====
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', criarBanner);
  } else {
    // DOM já carregado
    criarBanner();
  }

})();
