import { readFileSync, writeFileSync } from "node:fs";

const css = readFileSync("app/globals.css", "utf8").replace('@import "tailwindcss";', "");
const phone = "5521979231817";
const formUrl = "https://forms.gle/ebQXBwmDUHUt6zwn7";
const caseUrl = "https://alquimiadobonsai.com";
const portfolioUrl = "https://portfolio-luan-one.vercel.app/";

const data = {
  pt: {
    lang: "pt-BR",
    title: "Luan Salles | Desenvolvimento web para sites profissionais",
    description:
      "Desenvolvimento de sites institucionais e landing pages para profissionais, empresas e pequenos negócios.",
    nav: ["Serviços", "Projeto", "Sobre", "Contato"],
    whatsapp: "WhatsApp",
    whatsappText: "Oi, Luan. Quero conversar sobre um site.",
    hero: [
      "Desenvolvedor web",
      "Sites claros, responsivos e prontos para gerar contato.",
      "Sou Luan Salles. Desenvolvo sites institucionais e landing pages para profissionais, pequenos negócios e marcas que precisam organizar sua presença online.",
      "Pedir orçamento",
      "Ver projeto real",
    ],
    highlights: ["Sites institucionais", "Landing pages", "Melhoria de sites"],
    servicesTitle: "O que eu posso construir para você",
    servicesText:
      "Sem promessa exagerada e sem pacote confuso. O foco é entregar uma página profissional, fácil de entender e bem adaptada ao celular.",
    services: [
      ["Site institucional", "Para apresentar seu negócio, serviços, história, diferenciais e canais de contato em um endereço profissional."],
      ["Landing page", "Para divulgar uma oferta, evento, curso, produto ou serviço com uma página objetiva e voltada para conversão."],
      ["Ajuste de site existente", "Para melhorar organização, visual, versão mobile, conteúdo e caminho de contato de um site que já está no ar."],
    ],
    case: [
      "Projeto publicado",
      "Alquimia do Bonsai",
      "Site completo e funcional para uma marca de bonsai. O projeto reúne apresentação institucional, livro, cursos, catálogo, conteúdos, loja, redes sociais e contato em português e inglês.",
      "Abrir site",
    ],
    caseBullets: [
      "Site responsivo para desktop e celular",
      "Versão em português e inglês",
      "Catálogo, favoritos e carrinho local",
      "Integração com WhatsApp, redes sociais e formulários",
    ],
    about: [
      "Sobre",
      "Quem vai construir seu site",
      "Sou estudante de Ciência da Computação em Niterói e venho direcionando minha carreira para desenvolvimento web. Minha experiência em suporte técnico me ajuda a entender problemas reais, organizar informações e transformar necessidade em uma entrega prática.",
    ],
    facts: ["Niterói/RJ", "Ciência da Computação", "React e JavaScript", "Atendimento remoto"],
    processTitle: "Como funciona",
    steps: [
      ["1", "Entendimento", "Você me envia o objetivo do site, referências, prazo e materiais disponíveis."],
      ["2", "Proposta", "Eu organizo escopo, páginas, prazo e investimento antes de começar."],
      ["3", "Construção", "Desenvolvo, reviso com você e deixo o site pronto para publicação."],
    ],
    contact: [
      "Contato",
      "Quer tirar seu site do papel?",
      "Me chame no WhatsApp ou preencha o formulário de orçamento. Se ainda não souber exatamente o que precisa, tudo bem: eu te ajudo a organizar a ideia.",
      "Formulário de orçamento",
      "Enviar pelo WhatsApp",
      "Oi, Luan. Quero conversar sobre um site.",
    ],
    labels: ["Nome", "Tipo de site", "Mensagem"],
    placeholders: ["Seu nome", "Ex.: site para clínica, landing page, loja local", "Conte em poucas linhas o que você precisa."],
    fallbacks: ["Não informado", "Ainda não definido", "Quero entender qual site faz sentido para meu negócio."],
    footer: "Luan Salles · Desenvolvimento de sites",
  },
  en: {
    lang: "en",
    title: "Luan Salles | Web development for professional websites",
    description: "Business website and landing page development for professionals, companies, and small businesses.",
    nav: ["Services", "Project", "About", "Contact"],
    whatsapp: "WhatsApp",
    whatsappText: "Hi, Luan. I want to talk about a website.",
    hero: [
      "Web developer",
      "Clear, responsive websites built to generate contact.",
      "I am Luan Salles. I build business websites and landing pages for professionals, small businesses, and brands that need a better online presence.",
      "Request a quote",
      "View real project",
    ],
    highlights: ["Business websites", "Landing pages", "Website improvements"],
    servicesTitle: "What I can build for you",
    servicesText:
      "No inflated promise and no confusing package. The focus is a professional page that is easy to understand and works well on mobile.",
    services: [
      ["Business website", "To present your business, services, story, strengths, and contact channels in a professional address."],
      ["Landing page", "To promote an offer, event, course, product, or service with an objective conversion-focused page."],
      ["Website improvement", "To improve structure, visuals, mobile experience, content, and contact flow on a website that already exists."],
    ],
    case: [
      "Published project",
      "Alquimia do Bonsai",
      "A complete, functional website for a bonsai brand. The project brings together institutional presentation, book, courses, catalog, content, shop, social channels, and contact in Portuguese and English.",
      "Open website",
    ],
    caseBullets: [
      "Responsive website for desktop and mobile",
      "Portuguese and English versions",
      "Catalog, favorites, and local cart",
      "WhatsApp, social media, and form integrations",
    ],
    about: [
      "About",
      "Who will build your website",
      "I am a Computer Science student in Niterói, Brazil, and I am focusing my career on web development. My technical support experience helps me understand real problems, organize information, and turn needs into practical delivery.",
    ],
    facts: ["Niterói/RJ, Brazil", "Computer Science", "React and JavaScript", "Remote service"],
    processTitle: "How it works",
    steps: [
      ["1", "Understanding", "You send the website goal, references, timeline, and available materials."],
      ["2", "Proposal", "I organize scope, pages, timeline, and investment before starting."],
      ["3", "Build", "I develop, review with you, and leave the website ready to publish."],
    ],
    contact: [
      "Contact",
      "Want to bring your website online?",
      "Message me on WhatsApp or fill out the quote form. If you are not sure what you need yet, that is fine: I help you organize the idea.",
      "Quote form",
      "Send on WhatsApp",
      "Hi, Luan. I want to talk about a website.",
    ],
    labels: ["Name", "Website type", "Message"],
    placeholders: ["Your name", "Ex.: clinic website, landing page, local shop", "Tell me briefly what you need."],
    fallbacks: ["Not provided", "Not defined yet", "I want to understand which website makes sense for my business."],
    footer: "Luan Salles · Website development",
  },
};

const html = String.raw;
const pt = data.pt;

function serviceCards(items) {
  return items.map(([title, text]) => html`<article class="service"><h3>${title}</h3><p>${text}</p></article>`).join("");
}

function list(items, selectorClass = "") {
  return items.map((item) => html`<li class="${selectorClass}">${item}</li>`).join("");
}

function tags(items) {
  return items.map((item) => html`<span>${item}</span>`).join("");
}

function steps(items) {
  return items
    .map(([number, title, text]) => html`<article class="step"><span>${number}</span><h3>${title}</h3><p>${text}</p></article>`)
    .join("");
}

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
    <meta property="og:image" content="${portfolioUrl}alquimia-bonsai-desktop.png" />
    <meta property="og:image:alt" content="Site Alquimia do Bonsai desenvolvido por Luan Salles" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${pt.title}" />
    <meta name="twitter:description" content="${pt.description}" />
    <meta name="twitter:image" content="${portfolioUrl}alquimia-bonsai-desktop.png" />
    <style>${css}</style>
  </head>
  <body>
    <main id="inicio">
      <header class="topbar wrap">
        <a class="brand" href="#inicio" aria-label="Luan Salles"><span class="brand-mark">LS</span><span data-i="brand">Luan Salles</span></a>
        <nav class="nav" aria-label="Navegação principal">
          <a href="#servicos">${pt.nav[0]}</a><a href="#projeto">${pt.nav[1]}</a><a href="#sobre">${pt.nav[2]}</a><a href="#contato">${pt.nav[3]}</a>
        </nav>
        <div class="header-actions">
          <div class="lang-switch" aria-label="Selecionar idioma"><button class="active" type="button" data-lang="pt">PT</button><button type="button" data-lang="en">EN</button></div>
          <a class="btn btn-primary header-whatsapp" href="https://wa.me/${phone}?text=${encodeURIComponent(pt.whatsappText)}" target="_blank" rel="noreferrer">${pt.whatsapp}</a>
        </div>
      </header>

      <section class="hero wrap">
        <div class="hero-copy">
          <p class="eyebrow" data-i="hero-eyebrow">${pt.hero[0]}</p>
          <h1 data-i="hero-title">${pt.hero[1]}</h1>
          <p class="lead" data-i="hero-text">${pt.hero[2]}</p>
          <div class="hero-actions">
            <a class="btn btn-primary quote-link" href="${formUrl}" target="_blank" rel="noreferrer" data-i="hero-primary">${pt.hero[3]}</a>
            <a class="btn btn-secondary" href="#projeto" data-i="hero-secondary">${pt.hero[4]}</a>
          </div>
          <div class="hero-tags" aria-label="Serviços principais">${tags(pt.highlights)}</div>
        </div>
        <div class="hero-preview"><img src="alquimia-bonsai-desktop.png" alt="Página inicial do site Alquimia do Bonsai" /></div>
      </section>

      <section id="servicos" class="section wrap split">
        <div class="section-copy">
          <p class="eyebrow" data-i="services-eyebrow">${pt.nav[0]}</p>
          <h2 data-i="services-title">${pt.servicesTitle}</h2>
          <p data-i="services-text">${pt.servicesText}</p>
        </div>
        <div class="service-list">${serviceCards(pt.services)}</div>
      </section>

      <section id="projeto" class="section case-section">
        <div class="wrap case">
          <div class="case-image"><img src="alquimia-bonsai-desktop.png" alt="Site Alquimia do Bonsai em desktop" /></div>
          <div class="case-copy">
            <p class="eyebrow" data-i="case-eyebrow">${pt.case[0]}</p>
            <h2 data-i="case-title">${pt.case[1]}</h2>
            <p data-i="case-text">${pt.case[2]}</p>
            <ul>${list(pt.caseBullets)}</ul>
            <a class="btn btn-primary case-link" href="${caseUrl}" target="_blank" rel="noreferrer" data-i="case-button">${pt.case[3]}</a>
          </div>
        </div>
      </section>

      <section id="sobre" class="section wrap about">
        <img src="luan-salles.jpeg" alt="Foto de Luan Salles" />
        <div>
          <p class="eyebrow" data-i="about-eyebrow">${pt.about[0]}</p>
          <h2 data-i="about-title">${pt.about[1]}</h2>
          <p data-i="about-text">${pt.about[2]}</p>
          <div class="facts">${tags(pt.facts)}</div>
        </div>
      </section>

      <section class="section wrap process">
        <h2 data-i="process-title">${pt.processTitle}</h2>
        <div class="steps">${steps(pt.steps)}</div>
      </section>

      <section id="contato" class="section wrap contact">
        <div class="contact-copy">
          <p class="eyebrow" data-i="contact-eyebrow">${pt.contact[0]}</p>
          <h2 data-i="contact-title">${pt.contact[1]}</h2>
          <p data-i="contact-text">${pt.contact[2]}</p>
          <div class="contact-actions">
            <a class="btn btn-primary quote-link" href="${formUrl}" target="_blank" rel="noreferrer" data-i="contact-form">${pt.contact[3]}</a>
            <a class="btn btn-secondary contact-whatsapp" href="https://wa.me/${phone}?text=${encodeURIComponent(pt.whatsappText)}" target="_blank" rel="noreferrer">${pt.whatsapp}</a>
          </div>
          <a class="email" href="mailto:luanspctrabalho@gmail.com">luanspctrabalho@gmail.com</a>
        </div>
        <form id="contactForm">
          <label><span>${pt.labels[0]}</span><input id="name" placeholder="${pt.placeholders[0]}" autocomplete="name" /></label>
          <label><span>${pt.labels[1]}</span><input id="projectType" placeholder="${pt.placeholders[1]}" /></label>
          <label><span>${pt.labels[2]}</span><textarea id="message" placeholder="${pt.placeholders[2]}"></textarea></label>
          <button class="btn btn-secondary" type="submit" data-i="contact-submit">${pt.contact[4]}</button>
        </form>
      </section>

      <footer class="wrap">
        <span data-i="footer">${pt.footer}</span>
        <a href="https://github.com/LuanSalles" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/luan-salles-pinheiro-da-costa-440a59250" target="_blank" rel="noreferrer">LinkedIn</a>
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

      function setWhatsApp(selector, message) {
        const element = document.querySelector(selector);
        if (element) element.href = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
      }

      function applyLanguage(lang) {
        const t = i18n[lang];
        document.documentElement.lang = t.lang;
        document.title = t.title;
        document.querySelector('meta[name="description"]').setAttribute("content", t.description);
        document.querySelectorAll(".lang-switch button").forEach((button) => {
          button.classList.toggle("active", button.dataset.lang === lang);
        });

        setTexts(".nav a", t.nav);
        setText("[data-i='hero-eyebrow']", t.hero[0]);
        setText("[data-i='hero-title']", t.hero[1]);
        setText("[data-i='hero-text']", t.hero[2]);
        setText("[data-i='hero-primary']", t.hero[3]);
        setText("[data-i='hero-secondary']", t.hero[4]);
        setTexts(".hero-tags span", t.highlights);

        setText("[data-i='services-eyebrow']", t.nav[0]);
        setText("[data-i='services-title']", t.servicesTitle);
        setText("[data-i='services-text']", t.servicesText);
        document.querySelectorAll(".service").forEach((card, index) => {
          card.querySelector("h3").textContent = t.services[index][0];
          card.querySelector("p").textContent = t.services[index][1];
        });

        setText("[data-i='case-eyebrow']", t.case[0]);
        setText("[data-i='case-title']", t.case[1]);
        setText("[data-i='case-text']", t.case[2]);
        setTexts(".case-copy li", t.caseBullets);
        setText("[data-i='case-button']", t.case[3]);

        setText("[data-i='about-eyebrow']", t.about[0]);
        setText("[data-i='about-title']", t.about[1]);
        setText("[data-i='about-text']", t.about[2]);
        setTexts(".facts span", t.facts);

        setText("[data-i='process-title']", t.processTitle);
        document.querySelectorAll(".step").forEach((step, index) => {
          step.querySelector("span").textContent = t.steps[index][0];
          step.querySelector("h3").textContent = t.steps[index][1];
          step.querySelector("p").textContent = t.steps[index][2];
        });

        setText("[data-i='contact-eyebrow']", t.contact[0]);
        setText("[data-i='contact-title']", t.contact[1]);
        setText("[data-i='contact-text']", t.contact[2]);
        setText("[data-i='contact-form']", t.contact[3]);
        setText("[data-i='contact-submit']", t.contact[4]);
        setTexts("form label span", t.labels);
        document.querySelector("#name").placeholder = t.placeholders[0];
        document.querySelector("#projectType").placeholder = t.placeholders[1];
        document.querySelector("#message").placeholder = t.placeholders[2];
        setText("[data-i='footer']", t.footer);

        setWhatsApp(".header-whatsapp", t.whatsappText);
        setWhatsApp(".contact-whatsapp", t.whatsappText);
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
