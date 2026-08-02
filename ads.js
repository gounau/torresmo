// ================================================================
// ads.js - VERSÃO DE DEBUG COM LOGS
// ================================================================
console.log('🟢 [ads.js] Script carregado com sucesso!');

(function() {
  'use strict';

  console.log('🔵 [ads.js] IIFE executada.');

  // ============================================================
  // LISTA DE ANÚNCIOS
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
  ];

  console.log('📦 [ads.js] Anúncios carregados:', anuncios);

  // ============================================================
  // ESCOLHE ANÚNCIO
  // ============================================================
  function escolherAnuncio() {
    if (anuncios.length === 0) {
      console.warn('⚠️ [ads.js] Nenhum anúncio disponível!');
      return null;
    }
    var indice = Math.floor(Math.random() * anuncios.length);
    console.log('🎯 [ads.js] Anúncio escolhido (índice ' + indice + '):', anuncios[indice]);
    return anuncios[indice];
  }

  // ============================================================
  // CRIA O BANNER
  // ============================================================
  function criarBanner(anuncio) {
    if (!anuncio) {
      console.error('❌ [ads.js] Anúncio inválido ao criar banner.');
      return null;
    }

    console.log('🛠️ [ads.js] Criando banner para:', anuncio.titulo);

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

    // Imagem
    var imgDiv = document.createElement('div');
    imgDiv.style.cssText = 'flex: 0 0 65px;';
    imgDiv.innerHTML = '<img src="' + anuncio.imagem + '" alt="Produto" style="width:100%; height:auto; border-radius:8px; display:block;" loading="lazy">';

    // Texto
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

    // Ações
    var acoesDiv = document.createElement('div');
    acoesDiv.style.cssText = 'display: flex; align-items: center; gap: 10px; flex: 0 0 auto;';

    if (anuncio.logo) {
      var logo = document.createElement('img');
      logo.src = anuncio.logo;
      logo.alt = 'Logo';
      logo.style.cssText = 'height: 28px; width: auto; display: block;';
      logo.loading = 'lazy';
      acoesDiv.appendChild(logo);
    }

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

    banner.appendChild(imgDiv);
    banner.appendChild(textoDiv);
    banner.appendChild(acoesDiv);

    console.log('✅ [ads.js] Banner criado com sucesso.');
    return banner;
  }

  // ============================================================
  // INSERE O BANNER (VERSÃO SIMPLES – SEMPRE NO BODY)
  // ============================================================
  function inserirBanner(banner) {
    if (!banner) {
      console.error('❌ [ads.js] Tentativa de inserir banner nulo.');
      return;
    }

    // Verifica se já existe um banner com o mesmo ID
    if (document.getElementById(banner.id)) {
      console.warn('⚠️ [ads.js] Banner já existe na página, não vou duplicar.');
      return;
    }

    console.log('📌 [ads.js] Inserindo banner no body...');
    document.body.appendChild(banner);
    console.log('✅ [ads.js] Banner inserido com sucesso!');
  }

  // ============================================================
  // FUNÇÃO PRINCIPAL
  // ============================================================
  function executar() {
    console.log('⏳ [ads.js] Executando função principal...');

    var anuncio = escolherAnuncio();
    if (!anuncio) {
      console.warn('⚠️ [ads.js] Nenhum anúncio disponível. Abortando.');
      return;
    }

    var banner = criarBanner(anuncio);
    if (banner) {
      inserirBanner(banner);
    } else {
      console.error('❌ [ads.js] Falha ao criar o banner.');
    }
  }

  // ============================================================
  // INICIALIZAÇÃO
  // ============================================================
  console.log('🔄 [ads.js] Verificando estado do DOM...');

  if (document.readyState === 'loading') {
    console.log('⏳ [ads.js] DOM ainda carregando, aguardando DOMContentLoaded...');
    document.addEventListener('DOMContentLoaded', function() {
      console.log('📢 [ads.js] Evento DOMContentLoaded disparado.');
      setTimeout(executar, 1000);
    });
  } else {
    console.log('✅ [ads.js] DOM já carregado. Executando com delay de 1s...');
    setTimeout(executar, 1000);
  }

})();
