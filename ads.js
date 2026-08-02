<!-- ============================================ -->
<!-- BANNER AFILIADO SHOPEE - PROTETOR SOLAR SKIN1004 -->
<!-- COLE ESTE CÓDIGO ONDE QUISER EXIBIR O BANNER -->
<!-- ============================================ -->

<div id="banner-afiliado-shopee">
  <style>
    /* --- ESTILOS DO BANNER --- */
    #banner-afiliado-shopee {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      max-width: 400px;
      margin: 20px auto;
      background: linear-gradient(145deg, #ffffff, #f8f9fa);
      border-radius: 20px;
      box-shadow: 0 8px 30px rgba(0,0,0,0.12);
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.5);
    }

    #banner-afiliado-shopee:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(0,0,0,0.18);
    }

    .banner-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px 20px 25px;
      text-align: center;
    }

    /* --- IMAGEM DO PRODUTO --- */
    .banner-imagem {
      width: 100%;
      max-width: 220px;
      height: auto;
      border-radius: 16px;
      margin-bottom: 16px;
      background: #f0f4f8;
      padding: 10px;
      box-shadow: inset 0 2px 8px rgba(0,0,0,0.04);
      transition: transform 0.4s ease;
    }

    #banner-afiliado-shopee:hover .banner-imagem {
      transform: scale(1.03);
    }

    .banner-imagem img {
      width: 100%;
      height: auto;
      display: block;
      border-radius: 12px;
    }

    /* --- TEXTO --- */
    .banner-titulo {
      font-size: 15px;
      font-weight: 700;
      color: #1a1a2e;
      line-height: 1.4;
      margin: 0 0 6px 0;
      letter-spacing: -0.2px;
    }

    .banner-subtitulo {
      font-size: 13px;
      color: #6c757d;
      margin: 0 0 12px 0;
      font-weight: 400;
    }

    .banner-preco {
      font-size: 22px;
      font-weight: 800;
      color: #ee4d2d;
      margin: 0 0 6px 0;
      letter-spacing: -0.5px;
    }

    .banner-preco span {
      font-size: 14px;
      font-weight: 400;
      color: #999;
      text-decoration: line-through;
      margin-left: 8px;
    }

    .banner-rating {
      font-size: 14px;
      color: #f5a623;
      margin: 0 0 14px 0;
      letter-spacing: 2px;
    }

    .banner-rating small {
      color: #999;
      font-size: 12px;
      letter-spacing: 0;
    }

    /* --- BOTÃO --- */
    .banner-botao {
      display: inline-block;
      background: #ee4d2d;
      color: #fff;
      font-size: 16px;
      font-weight: 700;
      padding: 14px 40px;
      border-radius: 50px;
      text-decoration: none;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(238, 77, 45, 0.35);
      letter-spacing: 0.5px;
      border: none;
      cursor: pointer;
      width: 100%;
      max-width: 280px;
    }

    .banner-botao:hover {
      background: #d43d1f;
      transform: scale(1.03);
      box-shadow: 0 6px 25px rgba(238, 77, 45, 0.5);
    }

    .banner-botao:active {
      transform: scale(0.97);
    }

    /* --- SELO / BADGE --- */
    .banner-badge {
      display: inline-block;
      background: #ffd700;
      color: #1a1a2e;
      font-size: 11px;
      font-weight: 700;
      padding: 4px 14px;
      border-radius: 50px;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      margin-bottom: 12px;
    }

    /* --- CONTADOR DE CLICK (OPCIONAL) --- */
    .banner-contador {
      font-size: 12px;
      color: #adb5bd;
      margin-top: 14px;
      border-top: 1px solid #e9ecef;
      padding-top: 14px;
      width: 100%;
    }

    /* --- RESPONSIVO --- */
    @media (max-width: 480px) {
      #banner-afiliado-shopee {
        max-width: 100%;
        margin: 12px 8px;
        border-radius: 16px;
      }
      .banner-inner {
        padding: 16px 16px 20px;
      }
      .banner-imagem {
        max-width: 160px;
      }
      .banner-titulo {
        font-size: 14px;
      }
      .banner-preco {
        font-size: 20px;
      }
      .banner-botao {
        font-size: 15px;
        padding: 13px 20px;
      }
    }
  </style>

  <!-- ===== CONTEÚDO DO BANNER ===== -->
  <div class="banner-inner">

    <!-- SELO DESTAQUE -->
    <div class="banner-badge">⭐ Mais Vendido</div>

    <!-- IMAGEM DO PRODUTO -->
    <div class="banner-imagem">
      <img 
        src="https://http2.mlstatic.com/D_NQ_NP_2X_934517-MLU75092948983_032024-F.webp" 
        alt="Protetor Solar SKIN1004 Madagascar Centella Hyalu-Cica SPF50+"
        loading="lazy"
        onerror="this.src='https://placehold.co/400x400/1a1a2e/white?text=SKIN1004+SPF50'"
      >
    </div>

    <!-- NOME DO PRODUTO -->
    <h3 class="banner-titulo">
      SKIN1004 Madagascar Centella Hyalu-Cica
    </h3>
    <p class="banner-subtitulo">
      Protetor Solar Facial SPF50+ PA++++ • 50ml
    </p>

    <!-- AVALIAÇÃO -->
    <div class="banner-rating">
      ★★★★★ <small>(4.8 • 2.3k avaliações)</small>
    </div>

    <!-- PREÇO -->
    <div class="banner-preco">
      R$ 89,90 <span>R$ 129,90</span>
    </div>

    <!-- BOTÃO DE COMPRA -->
    <a 
      href="https://s.shopee.com.br/3g2YWeAKnb" 
      target="_blank" 
      rel="noopener noreferrer" 
      class="banner-botao"
      id="botao-shopee-doramas"
      onclick="contarClique(event)"
    >
      🛒 Comprar na Shopee
    </a>

    <!-- CONTADOR DE CLICKS (OPCIONAL) -->
    <div class="banner-contador">
      👀 <span id="contador-cliques">0</span> pessoas já clicaram hoje
    </div>

  </div>
</div>

<!-- ============================================ -->
<!-- JAVASCRIPT: CONTADOR DE CLIQUES (OPCIONAL)    -->
<!-- ============================================ -->
<script>
  (function() {
    // Chave para armazenar no localStorage
    const STORAGE_KEY = 'banner_shopee_doramas_cliques';
    const DATA_KEY = 'banner_shopee_doramas_data';

    function obterContador() {
      const hoje = new Date().toDateString();
      const dadosSalvos = localStorage.getItem(STORAGE_KEY);
      const dataSalva = localStorage.getItem(DATA_KEY);

      // Se mudou o dia, reseta o contador
      if (dataSalva !== hoje) {
        localStorage.setItem(STORAGE_KEY, '0');
        localStorage.setItem(DATA_KEY, hoje);
        return 0;
      }

      return parseInt(dadosSalvos || '0', 10);
    }

    function salvarContador(valor) {
      localStorage.setItem(STORAGE_KEY, String(valor));
      localStorage.setItem(DATA_KEY, new Date().toDateString());
    }

    function atualizarDisplay() {
      const el = document.getElementById('contador-cliques');
      if (el) {
        el.textContent = obterContador();
      }
    }

    // Função chamada ao clicar no botão
    window.contarClique = function(event) {
      const atual = obterContador();
      const novo = atual + 1;
      salvarContador(novo);

      // Atualiza o display
      const el = document.getElementById('contador-cliques');
      if (el) {
        el.textContent = novo;
      }

      // O link será aberto normalmente (target="_blank")
      // Não impedimos o evento para não bloquear o redirecionamento
    };

    // Inicializa o contador ao carregar a página
    document.addEventListener('DOMContentLoaded', function() {
      atualizarDisplay();
    });

    // Se o script for executado depois do DOM já carregado
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      atualizarDisplay();
    }
  })();
</script>
