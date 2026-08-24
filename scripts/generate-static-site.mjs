import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const css = readFileSync("app/globals.css", "utf8").replace('@import "tailwindcss";', "");
const siteUrl = "https://portfolio-luan-one.vercel.app/";
const phone = "5521979231817";
const email = "luanspctrabalho@gmail.com";
const caseUrl = "https://alquimiadobonsai.com";
const whatsapp =
  "Olá! Conheci a Vulan pelo site e gostaria de conversar sobre a criação de um site para meu negócio.";

const html = String.raw;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Vulan",
      url: siteUrl,
      email: `mailto:${email}`,
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

function whatsappUrl(message = whatsapp) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function header() {
  return html`<header class="topbar">
    <a class="brand" href="/" aria-label="Vulan"><span class="brand-mark">V</span><span>VULAN</span></a>
    <nav class="nav" aria-label="Navegação principal">
      <a href="/">Início</a><a href="/servicos">Serviços</a><a href="/projetos">Projetos</a><a href="/sobre">Sobre</a><a href="/contato">Contato</a>
    </nav>
    <a class="btn btn-primary header-cta" href="/orcamento">Pedir orçamento</a>
  </header>`;
}

function footer() {
  return html`<footer class="wrap footer">
    <div><strong>VULAN</strong><p>Sites pensados para negócios.</p><p><a href="mailto:${email}">${email}</a></p></div>
    <nav aria-label="Links do rodapé">
      <a href="/servicos">Serviços</a><a href="/projetos">Projetos</a><a href="/sobre">Sobre</a><a href="/orcamento">Orçamento</a><a href="/contato">Contato</a><a href="/politica-de-privacidade">Política de Privacidade</a><a href="/termos-de-uso">Termos de Uso</a><a href="${whatsappUrl()}" target="_blank" rel="noreferrer">WhatsApp</a>
    </nav>
    <p class="footer-copy">© 2026 Vulan. Todos os direitos reservados.</p>
  </footer>`;
}

function shell({ title, description, body, canonical = siteUrl }) {
  return html`<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:site_name" content="Vulan" />
    <meta property="og:image" content="${siteUrl}alquimia-bonsai-1180.jpg" />
    <meta property="og:image:width" content="1180" />
    <meta property="og:image:height" content="533" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="icon" href="/favicon-vulan.svg" type="image/svg+xml" />
    <style>${css}</style>
    <script type="application/ld+json">${JSON.stringify(structuredData)}</script>
  </head>
  <body>${header()}${body}${footer()}</body>
</html>`;
}

function budgetForm() {
  return html`<form class="budget-form" data-budget-form>
    <input class="hp-field" name="companyUrl" tabindex="-1" autocomplete="off" aria-hidden="true" />
    <div class="form-grid">
      <label>Nome*<input name="name" required autocomplete="name" /></label>
      <label>Empresa / negócio*<input name="business" required /></label>
      <label>WhatsApp*<input name="whatsapp" required inputmode="tel" /></label>
      <label>E-mail<input name="email" type="email" autocomplete="email" /></label>
    </div>
    <div class="form-grid">
      <label>O que você precisa?<select name="need"><option>Landing Page</option><option>Site Institucional</option><option>Catálogo</option><option>Catálogo com painel administrativo</option><option>Ainda não sei</option></select></label>
      <label>Seu negócio já possui site?<select name="hasSite"><option>Não</option><option>Sim</option></select></label>
    </div>
    <label>Principal objetivo do novo site<textarea name="goal" required></textarea></label>
    <div class="form-grid">
      <label>Quando gostaria de publicar?<select name="deadline"><option>Assim que possível</option><option>Dentro de 30 dias</option><option>1-2 meses</option><option>Sem prazo definido</option></select></label>
      <label>Faixa de investimento<select name="budget"><option>Até R$1.000</option><option>R$1.000-2.000</option><option>R$2.000-4.000</option><option>Acima de R$4.000</option><option>Ainda não sei</option></select></label>
    </div>
    <button class="btn btn-primary" type="submit">Enviar pelo WhatsApp</button>
    <p class="form-note" data-form-note>Ao enviar, o WhatsApp abre com a mensagem pronta para envio.</p>
  </form>
  <script>
    document.querySelectorAll("[data-budget-form]").forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const data = new FormData(form);
        if (data.get("companyUrl")) return;
        const message = [
          "Olá! Quero solicitar um orçamento com a Vulan.",
          "",
          "Nome: " + (data.get("name") || "Não informado"),
          "Empresa: " + (data.get("business") || "Não informado"),
          "WhatsApp: " + (data.get("whatsapp") || "Não informado"),
          "E-mail: " + (data.get("email") || "Não informado"),
          "Tipo de projeto: " + (data.get("need") || "Não informado"),
          "Possui site: " + (data.get("hasSite") || "Não informado"),
          "Objetivo: " + (data.get("goal") || "Não informado"),
          "Prazo: " + (data.get("deadline") || "Não informado"),
          "Faixa de investimento: " + (data.get("budget") || "Não informado"),
        ].join("\\n");
        const note = form.querySelector("[data-form-note]");
        if (note) note.textContent = "Recebemos seu projeto. A Vulan vai analisar as informações e retornar pelo contato informado.";
        window.open("https://wa.me/${phone}?text=" + encodeURIComponent(message), "_blank", "noreferrer");
      });
    });
  </script>`;
}

function writePage(path, content) {
  const filePath = path.endsWith(".html") ? `site/${path}` : `site/${path}/index.html`;
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, content);
}

const home = shell({
  title: "Vulan | Criação de Sites para Negócios",
  description:
    "A Vulan cria sites profissionais para pequenos e médios negócios, com desenvolvimento personalizado, processo simples e foco nos objetivos de cada empresa.",
  body: html`<main id="inicio">
    <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <section id="conteudo" class="hero wrap">
      <div class="hero-copy">
        <p class="eyebrow">Criação de sites para negócios</p>
        <h1>Sites profissionais pensados para o seu negócio, sem complicação.</h1>
        <p class="lead">A Vulan cria sites modernos, rápidos e adaptados à realidade de cada empresa, cuidando do processo da estrutura à publicação.</p>
        <div class="hero-actions"><a class="btn btn-primary" href="/orcamento">Pedir orçamento</a><a class="btn btn-secondary" href="#projetos">Ver projetos</a></div>
      </div>
      <div class="hero-board" aria-label="Resumo do serviço"><div class="browser-card main-card"><span>vulan.com.br</span><strong>Sites pensados para negócios.</strong></div><div class="hero-proof"><span>Mobile</span><span>WhatsApp</span><span>SEO básico</span></div><div class="line-chart" aria-hidden="true"><span></span><span></span><span></span></div></div>
    </section>

    <section class="section wrap value"><div class="section-head"><p class="eyebrow">Proposta de valor</p><h2>Seu negócio merece mais do que simplesmente estar na internet.</h2><p>Cada projeto começa entendendo a empresa, seus serviços, seus clientes e o objetivo do site. A partir disso, a Vulan transforma essas informações em uma presença digital clara, profissional e fácil de usar.</p></div><div class="pillar-grid"><article class="pillar"><h3>Pensado para o negócio</h3><p>Estrutura e conteúdo organizados conforme o que sua empresa precisa apresentar.</p></article><article class="pillar"><h3>Processo simples</h3><p>Você não precisa entender programação, hospedagem ou infraestrutura.</p></article><article class="pillar"><h3>Desenvolvimento ágil</h3><p>Etapas claras, comunicação direta e prazo definido.</p></article></div></section>
    <section id="servicos" class="section wrap split"><div class="section-copy"><p class="eyebrow">Serviços</p><h2>Sites para apresentar, vender e receber contatos.</h2><p>A Vulan trabalha com formatos objetivos para empresas que precisam sair do improviso e organizar sua presença digital.</p></div><div class="service-list"><article class="service"><h3>Landing Page</h3><p>Página única para apresentar uma empresa, serviço, produto ou campanha e direcionar o visitante para uma ação.</p></article><article class="service"><h3>Site Institucional</h3><p>Presença digital completa para empresas que precisam apresentar serviços, estrutura, diferenciais e contato.</p></article><article class="service"><h3>Catálogo</h3><p>Estrutura para apresentar produtos, serviços ou itens disponíveis, com opção estática ou painel administrativo.</p></article></div></section>
    <section id="projetos" class="section case-section"><div class="wrap case-showcase"><div class="case-heading"><div><p class="eyebrow">Case principal</p><h2>Alquimia do Bonsai</h2><p>Presença digital para uma marca dedicada a bonsais, conteúdo educativo e catálogo de produtos.</p></div><a class="btn btn-primary" href="${caseUrl}" target="_blank" rel="noreferrer">Visitar projeto</a></div><div class="case-browser"><div class="browser-bar"><span>alquimiadobonsai.com</span></div><div class="case-preview"><img src="/alquimia-bonsai-1180.jpg" alt="Página inicial do site Alquimia do Bonsai no desktop" /></div><div class="case-strip"><span>Site publicado</span><span>Catálogo</span><span>Vídeos</span><span>WhatsApp</span></div><div class="case-fallback"><div><strong>Projeto no ar</strong><p>Abra o site real para navegar pela versão completa.</p></div><a class="btn btn-secondary" href="${caseUrl}" target="_blank" rel="noreferrer">Abrir site</a></div></div></div></section>
    <section class="section wrap process"><div class="section-head"><p class="eyebrow">Como funciona</p><h2>Do primeiro contato à publicação.</h2></div><div class="steps six"><article class="step"><span>1</span><h3>Conversa inicial</h3><p>A Vulan entende o negócio, objetivo e necessidades do projeto.</p></article><article class="step"><span>2</span><h3>Proposta</h3><p>São definidos escopo, prazo e investimento.</p></article><article class="step"><span>3</span><h3>Publicação</h3><p>Após aprovação e pagamento final, o site é publicado.</p></article></div></section>
    <section id="sobre" class="section wrap about"><div><p class="eyebrow">Sobre a Vulan</p><h2>Tecnologia sem transformar o seu projeto em complicação.</h2><p>A Vulan nasceu para ajudar negócios a construírem uma presença digital profissional de forma mais simples.</p></div><div class="founder"><div class="founder-mark">LS</div><div><h3>Quem está por trás da Vulan</h3><p>A Vulan foi fundada por Luan Salles, desenvolvedor web e estudante de Ciência da Computação.</p></div></div></section>
    <section id="orcamento" class="section wrap budget-section"><div class="section-head"><p class="eyebrow">Orçamento</p><h2>Conte um pouco sobre o projeto.</h2><p>As informações ajudam a Vulan entender o escopo, prazo e tipo de site adequado para o seu negócio.</p></div>${budgetForm()}</section>
    <section id="contato" class="section final-cta"><div class="wrap"><p class="eyebrow">Próximo passo</p><h2>Vamos tirar o seu site do papel?</h2><p>Conte um pouco sobre o seu negócio e receba uma proposta pensada para o seu projeto.</p><div class="hero-actions"><a class="btn btn-primary" href="/orcamento">Pedir orçamento</a><a class="btn btn-secondary" href="${whatsappUrl()}" target="_blank" rel="noreferrer">Falar pelo WhatsApp</a></div></div></section>
  </main>`,
});

writePage("index.html", home);
writePage("orcamento", shell({
  title: "Orçamento | Vulan",
  description: "Solicite um orçamento para criação de site com a Vulan.",
  canonical: `${siteUrl}orcamento`,
  body: html`<main class="simple-page budget-page wrap"><article><p class="eyebrow">Orçamento</p><h1>Conte um pouco sobre o projeto.</h1><p>Preencha as informações principais para a Vulan entender o escopo, prazo e tipo de site adequado para o seu negócio.</p></article>${budgetForm()}</main>`,
}));
writePage("servicos", shell({ title: "Serviços | Vulan", description: "Landing pages, sites institucionais e sites com catálogo para pequenos e médios negócios.", canonical: `${siteUrl}servicos`, body: html`<main class="simple-page wrap"><article><p class="eyebrow">Serviços</p><h1>Sites para negócios que precisam se apresentar melhor.</h1><p>A Vulan desenvolve landing pages, sites institucionais e sites com catálogo. Cada projeto começa pelo objetivo da empresa e pelo que o visitante precisa entender para entrar em contato.</p><p><a class="btn btn-primary" href="/orcamento">Pedir orçamento</a></p></article></main>` }));
writePage("projetos", shell({ title: "Projetos | Vulan", description: "Cases e projetos publicados pela Vulan.", canonical: `${siteUrl}projetos`, body: html`<main class="simple-page wrap"><article><p class="eyebrow">Projetos</p><h1>Cases com problema, solução e entrega real.</h1><div class="service"><h2>Alquimia do Bonsai</h2><p>Site institucional, catálogo, conteúdo educativo, vídeos, WhatsApp e painel administrativo.</p><a class="btn btn-secondary" href="/projetos/alquimia-do-bonsai">Ver case</a></div></article></main>` }));
writePage("projetos/alquimia-do-bonsai", shell({ title: "Case Alquimia do Bonsai | Vulan", description: "Case comercial do site Alquimia do Bonsai desenvolvido pela Vulan.", canonical: `${siteUrl}projetos/alquimia-do-bonsai`, body: html`<main class="simple-page wrap"><article><p class="eyebrow">Case principal</p><h1>Alquimia do Bonsai</h1><h2>Necessidade</h2><p>Criar uma presença digital profissional para apresentar a marca, divulgar bonsais disponíveis e publicar conteúdos sem depender de alterações no código.</p><h2>Solução desenvolvida</h2><p>A Vulan criou uma estrutura com presença institucional, catálogo, administração de conteúdo, vídeos, WhatsApp e interface responsiva.</p><h2>Resultado</h2><p>A marca passou a possuir um ambiente próprio para apresentar produtos e conteúdos, com autonomia para atualizar informações principais pelo painel administrativo.</p><p><a class="btn btn-primary" href="${caseUrl}" target="_blank" rel="noreferrer">Visitar projeto</a></p></article></main>` }));
writePage("sobre", shell({ title: "Sobre | Vulan", description: "Conheça a Vulan e o fundador Luan Salles.", canonical: `${siteUrl}sobre`, body: html`<main class="simple-page wrap"><article><p class="eyebrow">Sobre</p><h1>Tecnologia sem transformar o seu projeto em complicação.</h1><p>A Vulan nasceu para ajudar negócios a construírem uma presença digital profissional de forma mais simples.</p><h2>Quem está por trás da Vulan</h2><p>A Vulan foi fundada por Luan Salles, desenvolvedor web e estudante de Ciência da Computação.</p></article></main>` }));
writePage("contato", shell({ title: "Contato | Vulan", description: "Entre em contato com a Vulan para conversar sobre seu site.", canonical: `${siteUrl}contato`, body: html`<main class="simple-page wrap"><article><p class="eyebrow">Contato</p><h1>Vamos conversar sobre o seu site.</h1><p>Envie uma mensagem pelo WhatsApp ou preencha o formulário de orçamento.</p><p><a class="btn btn-primary" href="${whatsappUrl()}" target="_blank" rel="noreferrer">Falar pelo WhatsApp</a></p><p><a href="mailto:${email}">${email}</a></p></article></main>` }));
writePage("politica-de-privacidade", shell({ title: "Política de Privacidade | Vulan", description: "Como a Vulan coleta e utiliza dados enviados pelo site.", canonical: `${siteUrl}politica-de-privacidade`, body: html`<main class="legal-page wrap"><article><p class="eyebrow">Legal</p><h1>Política de Privacidade</h1><p>O site pode coletar nome, empresa, WhatsApp, e-mail, cidade, segmento e informações enviadas voluntariamente para atendimento e orçamento.</p><h2>Finalidade</h2><p>Os dados são utilizados para atendimento, análise do projeto, elaboração de orçamento e contato comercial.</p><h2>Correção ou exclusão</h2><p>Solicitações podem ser enviadas para ${email}.</p></article></main>` }));
writePage("termos-de-uso", shell({ title: "Termos de Uso | Vulan", description: "Termos de uso do site institucional da Vulan.", canonical: `${siteUrl}termos-de-uso`, body: html`<main class="legal-page wrap"><article><p class="eyebrow">Legal</p><h1>Termos de Uso</h1><p>Este site apresenta serviços, informações comerciais, cases e canais de contato da Vulan.</p><h2>Resultados comerciais</h2><p>A Vulan desenvolve sites com boas práticas digitais, mas não garante vendas, faturamento, tráfego ou posicionamento específico em buscadores.</p></article></main>` }));
writePage("404.html", shell({ title: "Página não encontrada | Vulan", description: "Página não encontrada.", canonical: `${siteUrl}404`, body: html`<main class="simple-page wrap"><article><p class="eyebrow">404</p><h1>Página não encontrada.</h1><p>O endereço acessado não existe ou foi alterado.</p><p><a class="btn btn-primary" href="/">Voltar para a Vulan</a></p></article></main>` }));

copyFileSync("public/favicon-vulan.svg", "site/favicon-vulan.svg");
copyFileSync("public/alquimia-bonsai-1180.jpg", "site/alquimia-bonsai-1180.jpg");
copyFileSync("public/alquimia-bonsai-760.jpg", "site/alquimia-bonsai-760.jpg");
copyFileSync("public/alquimia-bonsai-mobile.jpg", "site/alquimia-bonsai-mobile.jpg");
copyFileSync("public/robots.txt", "site/robots.txt");
copyFileSync("public/sitemap.xml", "site/sitemap.xml");
