import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const css = readFileSync("app/globals.css", "utf8").replace('@import "tailwindcss";', "");
const siteUrl = "https://portfolio-luan-one.vercel.app/";
const phone = "5521979231817";
const whatsapp =
  "Olá! Conheci a Vulan pelo site e gostaria de conversar sobre a criação de um site para meu negócio.";
const caseUrl = "https://alquimiadobonsai.com";

const html = String.raw;

const services = [
  ["Landing Page", "Página única para apresentar uma empresa, serviço, produto ou campanha e direcionar o visitante para uma ação."],
  ["Site Institucional", "Presença digital completa para empresas que precisam apresentar serviços, estrutura, diferenciais e contato."],
  ["Catálogo", "Estrutura para apresentar produtos, serviços ou itens disponíveis, com opção estática ou painel administrativo."],
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Vulan",
      url: siteUrl,
      email: "mailto:luanspctrabalho@gmail.com",
      founder: {
        "@type": "Person",
        name: "Luan Salles",
        jobTitle: "Desenvolvedor web",
      },
      areaServed: ["Brasil"],
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}#service`,
      name: "Criação de sites para negócios",
      provider: {
        "@id": `${siteUrl}#organization`,
      },
      serviceType: ["Landing pages", "Sites institucionais", "Sites com catálogo"],
    },
  ],
};

function serviceCards() {
  return services
    .map(([title, text]) => html`<article class="service"><h3>${title}</h3><p>${text}</p></article>`)
    .join("");
}

const page = html`<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Vulan | Criação de Sites para Negócios</title>
    <meta name="description" content="A Vulan cria sites profissionais para pequenos e médios negócios, com desenvolvimento personalizado, processo simples e foco nos objetivos de cada empresa." />
    <link rel="canonical" href="${siteUrl}" />
    <meta property="og:title" content="Vulan | Criação de Sites para Negócios" />
    <meta property="og:description" content="Sites profissionais pensados para o seu negócio, sem complicação." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${siteUrl}" />
    <meta property="og:site_name" content="Vulan" />
    <meta property="og:image" content="${siteUrl}alquimia-bonsai-1180.jpg" />
    <meta property="og:image:width" content="1180" />
    <meta property="og:image:height" content="533" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="icon" href="/favicon-vulan.svg" type="image/svg+xml" />
    <style>${css}</style>
    <script type="application/ld+json">${JSON.stringify(structuredData)}</script>
  </head>
  <body>
    <main id="inicio">
      <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header class="topbar">
        <a class="brand" href="#inicio" aria-label="Vulan"><span class="brand-mark">V</span><span>VULAN</span></a>
        <nav class="nav" aria-label="Navegação principal">
          <a href="#inicio">Início</a><a href="#servicos">Serviços</a><a href="#projetos">Projetos</a><a href="#sobre">Sobre</a><a href="#contato">Contato</a>
        </nav>
        <a class="btn btn-primary header-cta" href="#orcamento">Pedir orçamento</a>
      </header>

      <section id="conteudo" class="hero wrap">
        <div class="hero-copy">
          <p class="eyebrow">Criação de sites para negócios</p>
          <h1>Sites profissionais pensados para o seu negócio, sem complicação.</h1>
          <p class="lead">A Vulan cria sites modernos, rápidos e adaptados à realidade de cada empresa, cuidando do processo da estrutura à publicação.</p>
          <div class="hero-actions"><a class="btn btn-primary" href="#orcamento">Pedir orçamento</a><a class="btn btn-secondary" href="#projetos">Ver projetos</a></div>
        </div>
        <div class="hero-board" aria-label="Resumo do serviço"><div class="browser-card main-card"><span>vulan.com.br</span><strong>Sites pensados para negócios.</strong></div><div class="mini-card">Mobile</div><div class="mini-card orange">WhatsApp</div><div class="line-chart" aria-hidden="true"><span></span><span></span><span></span></div></div>
      </section>

      <section class="section wrap value">
        <div class="section-head"><p class="eyebrow">Proposta de valor</p><h2>Seu negócio merece mais do que simplesmente estar na internet.</h2><p>Cada projeto começa entendendo a empresa, seus serviços, seus clientes e o objetivo do site.</p></div>
        <div class="pillar-grid"><article class="pillar"><h3>Pensado para o negócio</h3><p>Estrutura e conteúdo organizados conforme o que sua empresa precisa apresentar.</p></article><article class="pillar"><h3>Processo simples</h3><p>Você não precisa entender programação, hospedagem ou infraestrutura.</p></article><article class="pillar"><h3>Desenvolvimento ágil</h3><p>Etapas claras, comunicação direta e prazo definido.</p></article></div>
      </section>

      <section id="servicos" class="section wrap split"><div class="section-copy"><p class="eyebrow">Serviços</p><h2>Sites para apresentar, vender e receber contatos.</h2><p>A Vulan trabalha com formatos objetivos para empresas que precisam sair do improviso e organizar sua presença digital.</p></div><div class="service-list">${serviceCards()}</div></section>

      <section id="projetos" class="section case-section"><div class="wrap case-showcase"><div class="case-heading"><div><p class="eyebrow">Case principal</p><h2>Alquimia do Bonsai</h2><p>Presença digital para uma marca dedicada a bonsais, conteúdo educativo e catálogo de produtos.</p></div><a class="btn btn-primary" href="${caseUrl}" target="_blank" rel="noreferrer">Visitar projeto</a></div><div class="case-browser"><div class="browser-bar"><span>alquimiadobonsai.com</span></div><iframe class="case-frame" src="${caseUrl}" title="Site Alquimia do Bonsai" loading="lazy"></iframe></div></div></section>

      <section class="section wrap process"><div class="section-head"><p class="eyebrow">Como funciona</p><h2>Do primeiro contato à publicação.</h2></div><div class="steps six"><article class="step"><span>1</span><h3>Conversa inicial</h3><p>A Vulan entende o negócio, objetivo e necessidades do projeto.</p></article><article class="step"><span>2</span><h3>Proposta</h3><p>São definidos escopo, prazo e investimento.</p></article><article class="step"><span>3</span><h3>Publicação</h3><p>Após aprovação e pagamento final, o site é publicado.</p></article></div></section>

      <section id="sobre" class="section wrap about"><div><p class="eyebrow">Sobre a Vulan</p><h2>Tecnologia sem transformar o seu projeto em complicação.</h2><p>A Vulan nasceu para ajudar negócios a construírem uma presença digital profissional de forma mais simples.</p></div><div class="founder"><div class="founder-mark">LS</div><div><h3>Quem está por trás da Vulan</h3><p>A Vulan foi fundada por Luan Salles, desenvolvedor web e estudante de Ciência da Computação.</p></div></div></section>

      <section id="orcamento" class="section wrap budget-section"><div class="section-head"><p class="eyebrow">Orçamento</p><h2>Conte um pouco sobre o projeto.</h2><p>Solicite um orçamento pelo WhatsApp com as principais informações do seu site.</p><a class="btn btn-primary" href="https://wa.me/${phone}?text=${encodeURIComponent(whatsapp)}" target="_blank" rel="noreferrer">Pedir orçamento</a></div></section>

      <section id="contato" class="section final-cta"><div class="wrap"><p class="eyebrow">Próximo passo</p><h2>Vamos tirar o seu site do papel?</h2><p>Conte um pouco sobre o seu negócio e receba uma proposta pensada para o seu projeto.</p><div class="hero-actions"><a class="btn btn-primary" href="#orcamento">Pedir orçamento</a><a class="btn btn-secondary" href="https://wa.me/${phone}?text=${encodeURIComponent(whatsapp)}" target="_blank" rel="noreferrer">Falar pelo WhatsApp</a></div></div></section>

      <footer class="wrap footer"><div><strong>VULAN</strong><p>Sites pensados para negócios.</p></div><nav><a href="#servicos">Serviços</a><a href="#projetos">Projetos</a><a href="#sobre">Sobre</a><a href="#orcamento">Orçamento</a><a href="/politica-de-privacidade">Política de Privacidade</a><a href="/termos-de-uso">Termos de Uso</a></nav><p>© 2026 Vulan. Todos os direitos reservados. Desenvolvido pela Vulan.</p></footer>
    </main>
  </body>
</html>`;

mkdirSync("site", { recursive: true });
writeFileSync("site/index.html", page);
