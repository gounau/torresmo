// ================================================================
// ads.js - Container de Anúncios Dinâmico para DooPlay
// ================================================================

(function() {
  'use strict';

  // ============================================================
  // LISTA DE ANÚNCIOS (adicione quantos quiser)
  // Cada anúncio é um objeto com: imagem, titulo, descricao, link, logo (opcional)
  // ============================================================
  var anuncios = [
    {
      id: 'anuncio1',
      imagem: 'https://down-br.img.susercontent.com/file/sg-11134201-7rd5j-luq2ixcw0w6o88@resize_w900_nl.webp',
      titulo: '🔥 OFERTA IMPERDÍVEL!',
      descricao: '50ml SPF50 + Madagascar Centella Protetor Solar Facial PA + Hyalu-cica Soro Hidratante Sunblock Anti-UV Cuidados Com A Pele Coreana',
      link: 'https://s.shopee.com.br/3g2YWeAKnb',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg'
    }
    // Adicione mais anúncios aqui, exemplo:
    // {
    //   id: 'anuncio2',
    //   imagem: 'URL_DA_IMAGEM',
    //   titulo: '⚡ PROMOÇÃO RELÂMPAGO',
    //   descricao: 'Descrição do produto 2',
    //   link: 'https://s.shopee.com.br/outro-link',
    //   logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg'
    // }
  ];

  // ============================================================
  // CONFIGURAÇÕES
  // ============================================================
  var POSICAO = 'antes-do-player'; // opções: 'antes-do-player', 'depois-do-player', 'sidebar'
  var DELAY_MS = 1500; // tempo em ms para aguardar o player carregar

  // ============================================================
  // FUNÇÃO PARA ESCOLHER UM ANÚNCIO ALEATÓRIO
  // ============================================================
  function escolherAnuncio() {
    if (anuncios.length === 0) return null;
    var indice = Math.floor(Math.random() * anuncios.length);
    return anuncios[indice];
  }

  // ============================================================
  // FUNÇÃO PARA CRIAR O BANNER A PARTIR DE UM OBJETO ANÚNCIO
  // ============================================================
  function criarBanner(anuncio) {
    if (!anuncio) return null;

    var banner = document.createElement('div');
    banner.id = 'banner-shopee-' + anuncio.id;
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

    // Imagem do produto
    var imgDiv = document.createElement('div');
    imgDiv.style.cssText = 'flex: 0 0 65px;';
    imgDiv.innerHTML = '<img src="' + anuncio.imagem + '" alt="Produto" style="width:100%; height:auto; border-radius:8px; display:block;" loading="lazy">';

    // Texto (título + descrição)
    var textoDiv = document.createElement('div');
    textoDiv.style.cssText = 'flex: 1; min-width: 150px;';

    var titulo = document.createElement('div');
    titulo.style.cssText = 'font-size: 16px; font-weight: 800; color: #ee4d2d; line-height: 1.2; letter-spacing: -0.3px;';
    titulo.textContent = anuncio.titulo;

    var descricao = document.createElement('div');
    descricao.style.cssText = 'font-size: 11px; color: #2d2d3f; line-height: 1.4; margin-top: 2px; font-weight: 500; word-wrap: break-word;';
    descricao.textContent = anuncio.descricao;

    textoDiv.appendChild(titulo);
    textoDiv.appendChild(descricao);

    // Logo + Botão
    var acoesDiv = document.createElement('div');
    acoesDiv.style.cssText = 'display: flex; align-items: center; gap: 10px; flex: 0 0 auto;';

    // Logo (se existir)
    if (anuncio.logo) {
      var logo = document.createElement('img');
      logo.src = anuncio.logo;
      logo.alt = 'Logo';
      logo.style.cssText = 'height: 28px; width: auto; display: block;';
      logo.loading = 'lazy';
      acoesDiv.appendChild(logo);
    }

    // Botão
    var botao = document.createElement('a');
    botao.href = anuncio.link;
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
    acoesDiv.appendChild(botao);

    // Monta o banner
    banner.appendChild(imgDiv);
    banner.appendChild(textoDiv);
    banner.appendChild(acoesDiv);

    return banner;
  }

  // ============================================================
  // FUNÇÃO PARA INSERIR O BANNER NA POSIÇÃO CORRETA
  // ============================================================
  function inserirBanner(banner) {
    if (!banner) return;

    // Evita duplicidade
    if (document.getElementById(banner.id)) return;

    // Tenta encontrar o player do DooPlay
    var player = document.querySelector('.doo-player, #player, .video-player, iframe, .entry-content iframe, .content iframe');
    var container = null;

    if (POSICAO === 'antes-do-player' && player) {
      // Insere antes do player
      player.parentNode.insertBefore(banner, player);
    } else if (POSICAO === 'depois-do-player' && player) {
      // Insere depois do player
      if (player.nextSibling) {
        player.parentNode.insertBefore(banner, player.nextSibling);
      } else {
        player.parentNode.appendChild(banner);
      }
    } else if (POSICAO === 'sidebar') {
      // Tenta encontrar a sidebar
      var sidebar = document.querySelector('#sidebar, .sidebar, .widget-area');
      if (sidebar) {
        sidebar.insertBefore(banner, sidebar.firstChild);
      } else {
        document.body.appendChild(banner);
      }
    } else {
      // Fallback: insere antes do conteúdo principal
      var main = document.querySelector('#main, .main-content, .entry-content, .content');
      if (main) {
        main.insertBefore(banner, main.firstChild);
      } else {
        document.body.appendChild(banner);
      }
    }
  }

  // ============================================================
  // FUNÇÃO PRINCIPAL - EXECUTA APÓS O DOM E UM DELAY
  // ============================================================
  function executar() {
    var anuncio = escolherAnuncio();
    if (!anuncio) {
      console.warn('Nenhum anúncio configurado no ads.js');
      return;
    }
    var banner = criarBanner(anuncio);
    if (banner) {
      inserirBanner(banner);
    }
  }

  // ============================================================
  // INICIALIZAÇÃO - AGUARDA O DOM E O PLAYER
  // ============================================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(executar, DELAY_MS);
    });
  } else {
    setTimeout(executar, DELAY_MS);
  }

})();
