import { readFileSync, writeFileSync } from "node:fs";

const css = readFileSync("app/globals.css", "utf8").replace('@import "tailwindcss";', "");
const phone = "5521979231817";
const formUrl = "https://forms.gle/ebQXBwmDUHUt6zwn7";
const caseUrl = "https://alquimiadobonsai.com";
const portfolioUrl = "https://portfolio-luan-one.vercel.app/";
const githubUrl = "https://github.com/LuanSalles";
const linkedinUrl = "https://www.linkedin.com/in/luan-salles/";

const data = {
  pt: {
    lang: "pt-BR",
    title: "Luan Salles | Desenvolvimento web para sites profissionais",
    description: "Desenvolvimento de sites institucionais e landing pages para profissionais, empresas e pequenos negócios.",
    nav: ["Serviços", "Projeto", "Sobre", "Contato"],
    whatsapp: "WhatsApp",
    whatsappText: "Oi, Luan. Quero conversar sobre a criação de um site.",
    newTab: "abre em nova aba",
    status: "Idioma alterado para português.",
    hero: [
      "Desenvolvedor web",
      "Sites profissionais para pequenos negócios, profissionais e marcas.",
      "Criação de sites e landing pages com estrutura clara, versão mobile bem cuidada, contato por WhatsApp e publicação preparada para o cliente começar a divulgar.",
      "Quero criar meu site",
      "Ver projeto publicado",
      "Atendimento direto · Escopo combinado antes do início · Entrega publicada",
    ],
    trust: [
      "Como entrego",
      "Um site precisa ficar bonito, carregar bem e deixar o contato fácil.",
      ["Mobile primeiro", "Layout pensado para celular, sem depender de adaptações improvisadas."],
      ["Contato visível", "Botões para WhatsApp, formulário, redes e links importantes no fluxo certo."],
      ["Publicação organizada", "Entrega com domínio, hospedagem e ajustes finais combinados no escopo."],
    ],
    servicesTitle: "O que você pode contratar",
    servicesText: "Foco em sites que ajudam uma pessoa ou negócio a se apresentar melhor, explicar sua oferta e receber contatos com menos atrito.",
    servicesCta: "Falar sobre meu site",
    services: [
      ["Site institucional", "Para apresentar uma empresa, profissional, clínica, marca ou projeto com páginas essenciais, contato e aparência profissional."],
      ["Landing page", "Para divulgar uma oferta, curso, serviço, evento ou campanha com uma página direta e chamada clara para ação."],
      ["Ajustes em site existente", "Para melhorar organização, responsividade, textos, botões de contato e aparência de um site que já está no ar."],
    ],
    case: [
      "Projeto real publicado",
      "Alquimia do Bonsai",
      "Site institucional e comercial desenvolvido para a Alquimia do Bonsai, marca de Luane Salles e Alexandre Braga.",
      "A marca reunia livro, cursos, catálogo, conteúdos educativos, redes sociais e contatos em canais separados. Faltava uma presença digital única para organizar tudo e facilitar o caminho do visitante.",
      "O site concentra a apresentação da marca, loja, escola, vídeos, livro, materiais externos e contato em português e inglês, com navegação responsiva para computador e celular.",
      "Hoje o projeto está publicado em domínio próprio e pode ser usado para apresentar a marca, divulgar produtos e direcionar interessados para WhatsApp, Amazon, formulários e redes sociais.",
      "Abrir site ao vivo",
    ],
    caseBullets: [
      "Site responsivo em português e inglês",
      "Catálogo, favoritos e carrinho com dados locais",
      "Integração com WhatsApp, Google Drive, Amazon e redes sociais",
      "Organização de conteúdo, navegação, interface e publicação",
    ],
    technical: [
      "Projetos técnicos",
      "Também desenvolvo sistemas web",
      "Além de sites, desenvolvo aplicações com login, painel administrativo, banco de dados e regras de negócio. O FuteGestão CT é um sistema privado para gestão interna de centros de futevôlei.",
      "Ver GitHub",
    ],
    techTags: ["React", "Node.js", "Prisma", "PostgreSQL", "Autenticação"],
    about: [
      "Sobre",
      "Luan Salles",
      "Sou desenvolvedor web em Niterói/RJ, estudante de Ciência da Computação e tenho experiência anterior com suporte técnico. Essa base ajuda a transformar necessidades reais de clientes em sites organizados, fáceis de usar e possíveis de manter.",
    ],
    facts: ["Niterói/RJ", "Ciência da Computação", "JavaScript e React", "Suporte técnico"],
    processTitle: "Como o projeto acontece",
    steps: [
      ["1", "Conversa inicial", "Entendo o objetivo, o público, as referências e o que o site precisa resolver."],
      ["2", "Escopo e conteúdo", "Definimos páginas, textos, materiais, prazo, valor e responsabilidades antes do desenvolvimento."],
      ["3", "Criação e publicação", "Desenvolvo, reviso com você, ajusto o necessário e preparo o site para divulgação."],
    ],
    faqTitle: "Dúvidas comuns",
    faq: [
      ["Quanto custa um site?", "O valor é sob orçamento, porque depende de páginas, funcionalidades, prazo, conteúdo e custos externos."],
      ["O domínio e a hospedagem estão incluídos?", "Posso orientar a contratação e configurar a publicação. Custos de domínio, hospedagem e serviços externos são combinados à parte."],
      ["O que preciso enviar para começar?", "Textos, logo, fotos, referências e informações principais do negócio. Se ainda não tiver tudo, eu ajudo a organizar."],
      ["O site funciona no celular?", "Sim. A versão mobile é parte central do desenvolvimento."],
      ["O formulário detalhado é obrigatório?", "Não. Você pode chamar direto no WhatsApp. O formulário ajuda quando o projeto já tem mais informações."],
    ],
    contact: [
      "Contato",
      "Vamos organizar seu site?",
      "Chame no WhatsApp para uma conversa direta. Se preferir detalhar o projeto antes, use o formulário de orçamento.",
      "Preencher briefing",
      "Enviar pelo WhatsApp",
      "Oi, Luan. Quero conversar sobre a criação de um site.",
      "O formulário abaixo monta uma mensagem pronta para WhatsApp.",
    ],
    labels: ["Nome", "Tipo de site", "Mensagem"],
    placeholders: ["Seu nome", "Ex.: site para clínica, landing page, loja local", "Me conte o que você quer criar ou melhorar."],
    fallbacks: ["Não informado", "Ainda não definido", "Quero criar ou melhorar um site."],
    footer: "Luan Salles · Desenvolvimento de sites",
  },
  en: {
    lang: "en",
    title: "Luan Salles | Web development for professional websites",
    description: "Business website and landing page development for professionals, companies, and small businesses.",
    nav: ["Services", "Project", "About", "Contact"],
    whatsapp: "WhatsApp",
    whatsappText: "Hi, Luan. I want to talk about creating a website.",
    newTab: "opens in a new tab",
    status: "Language changed to English.",
    hero: [
      "Web developer",
      "Professional websites for small businesses, professionals, and brands.",
      "Website and landing page development with clear structure, careful mobile layout, WhatsApp contact, and publishing ready for the client to start sharing.",
      "I need a website",
      "View published project",
      "Direct contact · Scope defined before starting · Published delivery",
    ],
    trust: [
      "How I deliver",
      "A website needs to look good, work well, and make contact easy.",
      ["Mobile first", "Layout planned for phones, not treated as an afterthought."],
      ["Clear contact paths", "WhatsApp, forms, social links, and important actions placed in the right flow."],
      ["Organized publishing", "Delivery with domain, hosting, and final adjustments defined in the scope."],
    ],
    servicesTitle: "What you can hire me for",
    servicesText: "Focused websites that help a person or business present itself better, explain the offer, and receive contacts with less friction.",
    servicesCta: "Talk about my website",
    services: [
      ["Business website", "For companies, professionals, clinics, brands, or projects that need essential pages, contact, and a professional look."],
      ["Landing page", "For promoting an offer, course, service, event, or campaign with one clear page and a strong call to action."],
      ["Website improvements", "For improving structure, mobile layout, copy, contact buttons, and visual quality on an existing website."],
    ],
    case: [
      "Real published project",
      "Alquimia do Bonsai",
      "Institutional and commercial website developed for Alquimia do Bonsai, a brand by Luane Salles and Alexandre Braga.",
      "The brand had a book, courses, catalog, educational content, social media, and contact channels spread across different places. It needed one digital presence to organize everything and guide visitors.",
      "The website brings together the brand, shop, school, videos, book, external materials, and contact paths in Portuguese and English, with responsive navigation for desktop and mobile.",
      "The project is live on its own domain and helps present the brand, promote products, and send visitors to WhatsApp, Amazon, forms, and social media.",
      "Open live website",
    ],
    caseBullets: [
      "Responsive website in Portuguese and English",
      "Catalog, favorites, and cart using local data",
      "Integrations with WhatsApp, Google Drive, Amazon, and social media",
      "Content structure, navigation, interface, and publishing",
    ],
    technical: [
      "Technical projects",
      "I also build web systems",
      "Beyond websites, I build applications with login, admin panels, databases, and business rules. FuteGestão CT is a private system for internal management of footvolley centers.",
      "View GitHub",
    ],
    techTags: ["React", "Node.js", "Prisma", "PostgreSQL", "Authentication"],
    about: [
      "About",
      "Luan Salles",
      "I am a web developer based in Niterói, Brazil, a Computer Science student, and I have previous technical support experience. That background helps me turn real client needs into organized, usable, maintainable websites.",
    ],
    facts: ["Niterói/RJ, Brazil", "Computer Science", "JavaScript and React", "Technical support"],
    processTitle: "How the project works",
    steps: [
      ["1", "First conversation", "I understand the goal, audience, references, and what the website needs to solve."],
      ["2", "Scope and content", "We define pages, copy, materials, timeline, price, and responsibilities before development."],
      ["3", "Build and publish", "I develop, review with you, adjust what is needed, and prepare the site for sharing."],
    ],
    faqTitle: "Common questions",
    faq: [
      ["How much does a website cost?", "Pricing is quoted by scope because pages, features, timeline, content, and external costs change from project to project."],
      ["Are domain and hosting included?", "I can guide and configure publishing. Domain, hosting, and external service costs are agreed separately."],
      ["What do I need to send first?", "Copy, logo, photos, references, and main business information. If you do not have everything yet, I help organize it."],
      ["Will the website work on mobile?", "Yes. The mobile version is a central part of the development."],
      ["Is the detailed form required?", "No. You can message me directly on WhatsApp. The form helps when the project already has more information."],
    ],
    contact: [
      "Contact",
      "Let us organize your website?",
      "Message me on WhatsApp for a direct conversation. If you prefer to describe the project first, use the quote briefing form.",
      "Fill briefing",
      "Send on WhatsApp",
      "Hi, Luan. I want to talk about creating a website.",
      "The form below creates a ready-to-send WhatsApp message.",
    ],
    labels: ["Name", "Website type", "Message"],
    placeholders: ["Your name", "Ex.: clinic website, landing page, local shop", "Tell me what you want to create or improve."],
    fallbacks: ["Not provided", "Not defined yet", "I want to create or improve a website."],
    footer: "Luan Salles · Website development",
  },
};

const html = String.raw;
const pt = data.pt;

function cards(items, className) {
  return items.map(([title, text]) => html`<article class="${className}"><h3>${title}</h3><p>${text}</p></article>`).join("");
}

function tags(items) {
  return items.map((item) => html`<span>${item}</span>`).join("");
}

function steps(items) {
  return items.map(([number, title, text]) => html`<article class="step"><span>${number}</span><h3>${title}</h3><p>${text}</p></article>`).join("");
}

function faq(items) {
  return items.map(([question, answer]) => html`<details><summary>${question}</summary><p>${answer}</p></details>`).join("");
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${portfolioUrl}#person`,
      name: "Luan Salles",
      jobTitle: "Desenvolvedor web",
      url: portfolioUrl,
      email: "mailto:luanspctrabalho@gmail.com",
      sameAs: [githubUrl, linkedinUrl],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Niterói",
        addressRegion: "RJ",
        addressCountry: "BR",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${portfolioUrl}#service`,
      name: "Luan Salles · Desenvolvimento de sites",
      url: portfolioUrl,
      image: `${portfolioUrl}alquimia-bonsai-1180.jpg`,
      description: pt.description,
      areaServed: ["Niterói", "Rio de Janeiro", "Brasil"],
      serviceType: ["Criação de sites", "Landing pages", "Desenvolvimento web"],
      founder: {
        "@id": `${portfolioUrl}#person`,
      },
    },
  ],
};

const document = html`<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${pt.title}</title>
    <meta name="description" content="${pt.description}" />
    <link rel="canonical" href="${portfolioUrl}" />
    <link rel="icon" href="favicon-ls.svg" type="image/svg+xml" />
    <meta property="og:title" content="${pt.title}" />
    <meta property="og:description" content="${pt.description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${portfolioUrl}" />
    <meta property="og:site_name" content="Luan Salles" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:image" content="${portfolioUrl}alquimia-bonsai-1180.jpg" />
    <meta property="og:image:width" content="1180" />
    <meta property="og:image:height" content="533" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:alt" content="Site Alquimia do Bonsai desenvolvido por Luan Salles" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${pt.title}" />
    <meta name="twitter:description" content="${pt.description}" />
    <meta name="twitter:image" content="${portfolioUrl}alquimia-bonsai-1180.jpg" />
    <style>${css}</style>
    <script type="application/ld+json">${JSON.stringify(structuredData)}</script>
  </head>
  <body>
    <main id="inicio">
      <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header class="topbar">
        <a class="brand" href="#inicio" aria-label="Luan Salles"><span class="brand-mark">LS</span><span>Luan Salles</span></a>
        <nav class="nav" aria-label="Navegação principal">
          <a href="#servicos">${pt.nav[0]}</a><a href="#projeto">${pt.nav[1]}</a><a href="#sobre">${pt.nav[2]}</a><a href="#contato">${pt.nav[3]}</a>
        </nav>
        <div class="header-actions">
          <div class="lang-switch" aria-label="Selecionar idioma"><button class="active" type="button" data-lang="pt" aria-pressed="true">PT</button><button type="button" data-lang="en" aria-pressed="false">EN</button></div>
          <a class="btn btn-primary header-whatsapp whatsapp-link" href="https://wa.me/${phone}?text=${encodeURIComponent(pt.whatsappText)}" target="_blank" rel="noreferrer" aria-label="${pt.whatsapp} (${pt.newTab})">${pt.whatsapp}</a>
        </div>
      </header>

      <p class="sr-only" aria-live="polite" data-i="status">${pt.status}</p>

      <section id="conteudo" class="hero wrap">
        <div class="hero-copy">
          <p class="eyebrow" data-i="hero-eyebrow">${pt.hero[0]}</p>
          <h1 data-i="hero-title">${pt.hero[1]}</h1>
          <p class="lead" data-i="hero-text">${pt.hero[2]}</p>
          <div class="hero-actions">
            <a class="btn btn-primary whatsapp-link" href="https://wa.me/${phone}?text=${encodeURIComponent(pt.whatsappText)}" target="_blank" rel="noreferrer" data-i="hero-primary">${pt.hero[3]}</a>
            <a class="btn btn-secondary" href="#projeto" data-i="hero-secondary">${pt.hero[4]}</a>
          </div>
          <p class="cta-note" data-i="hero-helper">${pt.hero[5]}</p>
        </div>
        <div class="hero-panel" aria-label="Resumo de confiança">
          <p class="eyebrow" data-i="trust-eyebrow">${pt.trust[0]}</p>
          <h2 data-i="trust-title">${pt.trust[1]}</h2>
          <div class="hero-panel-list">${cards(pt.trust.slice(2), "hero-panel-item")}</div>
        </div>
      </section>

      <section id="servicos" class="section wrap split">
        <div class="section-copy">
          <p class="eyebrow" data-i="services-eyebrow">${pt.nav[0]}</p>
          <h2 data-i="services-title">${pt.servicesTitle}</h2>
          <p data-i="services-text">${pt.servicesText}</p>
        </div>
        <div class="service-list">${cards(pt.services, "service")}<a class="btn btn-secondary service-cta" href="#contato" data-i="services-cta">${pt.servicesCta}</a></div>
      </section>

      <section id="projeto" class="section case-section">
        <div class="wrap case-showcase">
          <div class="case-heading">
            <div>
              <p class="eyebrow" data-i="case-eyebrow">${pt.case[0]}</p>
              <h2 data-i="case-title">${pt.case[1]}</h2>
              <p data-i="case-intro">${pt.case[2]}</p>
            </div>
            <a class="btn btn-primary case-link" href="${caseUrl}" target="_blank" rel="noreferrer" data-i="case-button" aria-label="${pt.case[6]} (${pt.newTab})">${pt.case[6]}</a>
          </div>

          <div class="case-browser" aria-label="Demonstração interativa do site Alquimia do Bonsai">
            <div class="browser-bar"><span>${caseUrl.replace("https://", "")}</span></div>
            <iframe class="case-frame" src="${caseUrl}" title="Site Alquimia do Bonsai" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
          </div>

          <div class="case-details">
            <article><span>01</span><h3>Problema</h3><p data-i="case-problem">${pt.case[3]}</p></article>
            <article><span>02</span><h3>Solução</h3><p data-i="case-solution">${pt.case[4]}</p></article>
            <article><span>03</span><h3>Resultado</h3><p data-i="case-result">${pt.case[5]}</p></article>
          </div>
          <ul class="case-bullets">${pt.caseBullets.map((item) => html`<li>${item}</li>`).join("")}</ul>
        </div>
      </section>

      <section class="section wrap technical">
        <div>
          <p class="eyebrow" data-i="technical-eyebrow">${pt.technical[0]}</p>
          <h2 data-i="technical-title">${pt.technical[1]}</h2>
          <p data-i="technical-text">${pt.technical[2]}</p>
        </div>
        <div class="tech-card">
          <h3>FuteGestão CT</h3>
          <p>Gestão de alunos, turmas, presença, pagamentos, equipe e painel administrativo.</p>
          <div class="facts tech-tags">${tags(pt.techTags)}</div>
          <a class="btn btn-secondary" href="${githubUrl}" target="_blank" rel="noreferrer" data-i="technical-cta">${pt.technical[3]}</a>
        </div>
      </section>

      <section id="sobre" class="section wrap about">
        <img src="luan-salles.jpeg" alt="Foto de Luan Salles" width="220" height="220" loading="lazy" />
        <div>
          <p class="eyebrow" data-i="about-eyebrow">${pt.about[0]}</p>
          <h2 data-i="about-title">${pt.about[1]}</h2>
          <p data-i="about-text">${pt.about[2]}</p>
          <div class="facts about-facts">${tags(pt.facts)}</div>
        </div>
      </section>

      <section class="section wrap process">
        <h2 data-i="process-title">${pt.processTitle}</h2>
        <div class="steps">${steps(pt.steps)}</div>
      </section>

      <section class="section wrap faq">
        <h2 data-i="faq-title">${pt.faqTitle}</h2>
        <div class="faq-list">${faq(pt.faq)}</div>
      </section>

      <section id="contato" class="section wrap contact">
        <div class="contact-copy">
          <p class="eyebrow" data-i="contact-eyebrow">${pt.contact[0]}</p>
          <h2 data-i="contact-title">${pt.contact[1]}</h2>
          <p data-i="contact-text">${pt.contact[2]}</p>
          <div class="contact-actions">
            <a class="btn btn-primary whatsapp-link" href="https://wa.me/${phone}?text=${encodeURIComponent(pt.whatsappText)}" target="_blank" rel="noreferrer">${pt.whatsapp}</a>
            <a class="btn btn-secondary quote-link" href="${formUrl}" target="_blank" rel="noreferrer" data-i="contact-form">${pt.contact[3]}</a>
          </div>
          <p class="contact-note" data-i="contact-note">${pt.contact[6]}</p>
          <a class="email" href="mailto:luanspctrabalho@gmail.com">luanspctrabalho@gmail.com</a>
        </div>
        <form id="contactForm">
          <label><span>${pt.labels[0]}</span><input id="name" name="name" required placeholder="${pt.placeholders[0]}" autocomplete="name" /></label>
          <label><span>${pt.labels[1]}</span><input id="projectType" name="projectType" placeholder="${pt.placeholders[1]}" /></label>
          <label><span>${pt.labels[2]}</span><textarea id="message" name="message" required placeholder="${pt.placeholders[2]}"></textarea></label>
          <button class="btn btn-secondary" type="submit" data-i="contact-submit">${pt.contact[4]}</button>
        </form>
      </section>

      <footer class="wrap">
        <span data-i="footer">${pt.footer}</span>
        <a href="${githubUrl}" target="_blank" rel="noreferrer" aria-label="GitHub (${pt.newTab})">GitHub</a>
        <a href="${linkedinUrl}" target="_blank" rel="noreferrer" aria-label="LinkedIn (${pt.newTab})">LinkedIn</a>
      </footer>
    </main>

    <script>
      const i18n = ${JSON.stringify(data)};
      const phone = "${phone}";

      function setText(selector, value) {
        const element = document.querySelector(selector);
        if (element) element.textContent = value;
      }

      function setTexts(selector, values) {
        document.querySelectorAll(selector).forEach((element, index) => {
          if (values[index]) element.textContent = values[index];
        });
      }

      function setCards(selector, values) {
        document.querySelectorAll(selector).forEach((card, index) => {
          if (!values[index]) return;
          card.querySelector("h3").textContent = values[index][0];
          card.querySelector("p").textContent = values[index][1];
        });
      }

      function setWhatsApp(message) {
        document.querySelectorAll(".whatsapp-link").forEach((element) => {
          element.href = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
        });
      }

      function applyLanguage(lang) {
        const t = i18n[lang];
        document.documentElement.lang = t.lang;
        document.title = t.title;
        document.querySelector('meta[name="description"]').setAttribute("content", t.description);
        document.querySelectorAll(".lang-switch button").forEach((button) => {
          button.classList.toggle("active", button.dataset.lang === lang);
          button.setAttribute("aria-pressed", button.dataset.lang === lang ? "true" : "false");
        });

        setTexts(".nav a", t.nav);
        setText("[data-i='hero-eyebrow']", t.hero[0]);
        setText("[data-i='hero-title']", t.hero[1]);
        setText("[data-i='hero-text']", t.hero[2]);
        setText("[data-i='hero-primary']", t.hero[3]);
        setText("[data-i='hero-secondary']", t.hero[4]);
        setText("[data-i='hero-helper']", t.hero[5]);
        setText("[data-i='trust-eyebrow']", t.trust[0]);
        setText("[data-i='trust-title']", t.trust[1]);
        setCards(".hero-panel-item", t.trust.slice(2));
        setText("[data-i='services-eyebrow']", t.nav[0]);
        setText("[data-i='services-title']", t.servicesTitle);
        setText("[data-i='services-text']", t.servicesText);
        setText("[data-i='services-cta']", t.servicesCta);
        setCards(".service", t.services);
        setText("[data-i='case-eyebrow']", t.case[0]);
        setText("[data-i='case-title']", t.case[1]);
        setText("[data-i='case-intro']", t.case[2]);
        setText("[data-i='case-problem']", t.case[3]);
        setText("[data-i='case-solution']", t.case[4]);
        setText("[data-i='case-result']", t.case[5]);
        setText("[data-i='case-button']", t.case[6]);
        setTexts(".case-bullets li", t.caseBullets);
        setText("[data-i='technical-eyebrow']", t.technical[0]);
        setText("[data-i='technical-title']", t.technical[1]);
        setText("[data-i='technical-text']", t.technical[2]);
        setText("[data-i='technical-cta']", t.technical[3]);
        setTexts(".tech-tags span", t.techTags);
        setText("[data-i='about-eyebrow']", t.about[0]);
        setText("[data-i='about-title']", t.about[1]);
        setText("[data-i='about-text']", t.about[2]);
        setTexts(".about-facts span", t.facts);
        setText("[data-i='process-title']", t.processTitle);
        document.querySelectorAll(".step").forEach((step, index) => {
          step.querySelector("span").textContent = t.steps[index][0];
          step.querySelector("h3").textContent = t.steps[index][1];
          step.querySelector("p").textContent = t.steps[index][2];
        });
        setText("[data-i='faq-title']", t.faqTitle);
        document.querySelectorAll(".faq-list details").forEach((item, index) => {
          item.querySelector("summary").textContent = t.faq[index][0];
          item.querySelector("p").textContent = t.faq[index][1];
        });
        setText("[data-i='contact-eyebrow']", t.contact[0]);
        setText("[data-i='contact-title']", t.contact[1]);
        setText("[data-i='contact-text']", t.contact[2]);
        setText("[data-i='contact-form']", t.contact[3]);
        setText("[data-i='contact-submit']", t.contact[4]);
        setText("[data-i='contact-note']", t.contact[6]);
        setText("[data-i='status']", t.status);
        setTexts("form label span", t.labels);
        document.querySelector("#name").placeholder = t.placeholders[0];
        document.querySelector("#projectType").placeholder = t.placeholders[1];
        document.querySelector("#message").placeholder = t.placeholders[2];
        setText("[data-i='footer']", t.footer);
        setWhatsApp(t.whatsappText);
        localStorage.setItem("portfolioLang", lang);
      }

      document.querySelectorAll(".lang-switch button").forEach((button) => {
        button.addEventListener("click", () => applyLanguage(button.dataset.lang));
      });

      document.querySelector("#contactForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const lang = localStorage.getItem("portfolioLang") === "en" ? "en" : "pt";
        const t = i18n[lang];
        const text = [
          t.contact[5],
          "",
          t.labels[0] + ": " + (document.querySelector("#name").value.trim() || t.fallbacks[0]),
          t.labels[1] + ": " + (document.querySelector("#projectType").value.trim() || t.fallbacks[1]),
          t.labels[2] + ": " + (document.querySelector("#message").value.trim() || t.fallbacks[2]),
        ].join("\\n");
        window.open("https://wa.me/" + phone + "?text=" + encodeURIComponent(text), "_blank", "noreferrer");
      });

      applyLanguage(localStorage.getItem("portfolioLang") === "en" ? "en" : "pt");
    </script>
  </body>
</html>
`;

writeFileSync("site/index.html", document, "utf8");
