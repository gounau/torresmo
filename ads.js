// ============================================================
// ads.js - Pop-up intersticial com banner afiliado Shopee
// ============================================================

(function() {
  'use strict';

  // ===== CONFIGURAÇÕES =====
  const LINK_AFILIADO = 'https://s.shopee.com.br/3g2YWeAKnb';
  const IMAGEM_PRODUTO = 'https://http2.mlstatic.com/D_NQ_NP_2X_934517-MLU75092948983_032024-F.webp';
  const NOME_PRODUTO = 'SKIN1004 Madagascar Centella Hyalu-Cica';
  const PRECO = 'R$ 89,90';
  const PRECO_ORIGINAL = 'R$ 129,90';
  const AVALIACAO = '★★★★★ (4.8 • 2.3k avaliações)';
  const BADGE = '⭐ Mais Vendido';

  // Tempo em ms para exibir o pop-up (0 = imediato)
  const DELAY_EXIBICAO = 2000;

  // ===== CRIAÇÃO DO POP-UP =====
  function criarPopUp() {
    // 1. Overlay (fundo escuro)
    const overlay = document.createElement('div');
    overlay.id = 'popup-shopee-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 999999;
      backdrop-filter: blur(4px);
      animation: popupFadeIn 0.3s ease;
    `;

    // 2. Card do banner
    const card = document.createElement('div');
    card.id = 'popup-shopee-card';
    card.style.cssText = `
      background: #fff;
      border-radius: 24px;
      max-width: 440px;
      width: 92%;
      max-height: 90vh;
      overflow-y: auto;
      padding: 8px;
      box-shadow: 0 25px 60px rgba(0,0,0,0.5);
      animation: popupSlideUp 0.4s ease;
      position: relative;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    `;

    // 3. Botão de fechar (X)
    const btnFechar = document.createElement('button');
    btnFechar.id = 'popup-shopee-fechar';
    btnFechar.innerHTML = '✕';
    btnFechar.style.cssText = `
      position: absolute;
      top: 12px;
      right: 16px;
      background: none;
      border: none;
      font-size: 28px;
      font-weight: 300;
      color: #999;
      cursor: pointer;
      z-index: 10;
      transition: color 0.2s;
      line-height: 1;
    `;
    btnFechar.onmouseover = () => btnFechar.style.color = '#333';
    btnFechar.onmouseout = () => btnFechar.style.color = '#999';
    btnFechar.onclick = fecharPopUp;

    // 4. Conteúdo do banner (HTML)
    const bannerHTML = `
      <div class="banner-inner" style="padding:20px 20px 25px; text-align:center;">
        <!-- Badge -->
        <div style="display:inline-block; background:#ffd700; color:#1a1a2e; font-size:11px; font-weight:700; padding:4px 14px; border-radius:50px; text-transform:uppercase; letter-spacing:0.8px; margin-bottom:12px;">
          ${BADGE}
        </div>

        <!-- Imagem -->
        <div style="width:100%; max-width:220px; margin:0 auto 16px; border-radius:16px; background:#f0f4f8; padding:10px; box-shadow:inset 0 2px 8px rgba(0,0,0,0.04); transition:transform 0.4s ease;">
          <img src="${IMAGEM_PRODUTO}" alt="Protetor Solar SKIN1004" style="width:100%; height:auto; display:block; border-radius:12px;" loading="lazy" onerror="this.src='https://placehold.co/400x400/1a1a2e/white?text=SKIN1004+SPF50'">
        </div>

        <!-- Nome -->
        <h3 style="font-size:15px; font-weight:700; color:#1a1a2e; line-height:1.4; margin:0 0 6px; letter-spacing:-0.2px;">
          ${NOME_PRODUTO}
        </h3>
        <p style="font-size:13px; color:#6c757d; margin:0 0 12px; font-weight:400;">
          Protetor Solar Facial SPF50+ PA++++ • 50ml
        </p>

        <!-- Avaliação -->
        <div style="font-size:14px; color:#f5a623; margin:0 0 14px; letter-spacing:2px;">
          ${AVALIACAO}
        </div>

        <!-- Preço -->
        <div style="font-size:22px; font-weight:800; color:#ee4d2d; margin:0 0 6px; letter-spacing:-0.5px;">
          ${PRECO} <span style="font-size:14px; font-weight:400; color:#999; text-decoration:line-through; margin-left:8px;">${PRECO_ORIGINAL}</span>
        </div>

        <!-- Botão -->
        <a href="${LINK_AFILIADO}" target="_blank" rel="noopener noreferrer" class="banner-botao" style="display:inline-block; background:#ee4d2d; color:#fff; font-size:16px; font-weight:700; padding:14px 40px; border-radius:50px; text-decoration:none; transition:all 0.3s ease; box-shadow:0 4px 15px rgba(238,77,45,0.35); letter-spacing:0.5px; border:none; cursor:pointer; width:100%; max-width:280px; margin-top:6px;" onmouseover="this.style.background='#d43d1f'; this.style.transform='scale(1.03)'" onmouseout="this.style.background='#ee4d2d'; this.style.transform='scale(1)'">
          🛒 Comprar na Shopee
        </a>

        <!-- Contador de cliques -->
        <div style="font-size:12px; color:#adb5bd; margin-top:14px; border-top:1px solid #e9ecef; padding-top:14px; width:100%;">
          👀 <span id="contador-cliques">0</span> pessoas já clicaram hoje
        </div>
      </div>
    `;

    card.innerHTML = bannerHTML;
    card.prepend(btnFechar);

    overlay.appendChild(card);
    document.body.appendChild(overlay);

    // Impede scroll
    document.body.style.overflow = 'hidden';

    // Fecha ao clicar no overlay (fora do card)
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) fecharPopUp();
    });

    // Fecha com ESC
    document.addEventListener('keydown', function handler(e) {
      if (e.key === 'Escape') {
        fecharPopUp();
        document.removeEventListener('keydown', handler);
      }
    });

    // Inicializa o contador
    inicializarContador();
  }

  // ===== FUNÇÃO PARA FECHAR =====
  function fecharPopUp() {
    const overlay = document.getElementById('popup-shopee-overlay');
    if (overlay) {
      overlay.style.transition = 'opacity 0.3s ease';
      overlay.style.opacity = '0';
      setTimeout(() => {
        overlay.remove();
        document.body.style.overflow = '';
      }, 300);
    }
  }

  // ===== CONTADOR DE CLIQUES (localStorage) =====
  function inicializarContador() {
    const STORAGE_KEY = 'banner_shopee_doramas_cliques';
    const DATA_KEY = 'banner_shopee_doramas_data';
    const hoje = new Date().toDateString();
    let contador = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);
    const dataSalva = localStorage.getItem(DATA_KEY);

    if (dataSalva !== hoje) {
      contador = 0;
      localStorage.setItem(STORAGE_KEY, '0');
      localStorage.setItem(DATA_KEY, hoje);
    }

    const el = document.getElementById('contador-cliques');
    if (el) el.textContent = contador;

    // Sobrescreve a função global contarClique (usada no onclick do botão)
    window.contarClique = function(event) {
      const atual = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);
      const novo = atual + 1;
      localStorage.setItem(STORAGE_KEY, String(novo));
      localStorage.setItem(DATA_KEY, new Date().toDateString());
      const elCont = document.getElementById('contador-cliques');
      if (elCont) elCont.textContent = novo;
    };

    // Adiciona o onclick no botão (caso o link já tenha sido criado)
    const botao = document.querySelector('.banner-botao');
    if (botao) {
      botao.addEventListener('click', window.contarClique);
    }
  }

  // ===== ADICIONA ANIMAÇÕES CSS =====
  function adicionarEstilos() {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes popupFadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes popupSlideUp {
        from { transform: translateY(40px) scale(0.95); opacity: 0; }
        to { transform: translateY(0) scale(1); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  }

  // ===== INICIALIZAÇÃO =====
  adicionarEstilos();

  // Exibe o pop-up após o delay
  setTimeout(criarPopUp, DELAY_EXIBICAO);

})();
