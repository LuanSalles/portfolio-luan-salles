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
    newTab: "abre em nova aba",
    status: "Idioma alterado para português.",
    hero: [
      "Desenvolvedor web",
      "Sites profissionais para apresentar seu negócio com clareza e gerar contatos.",
      "Desenvolvimento de sites e landing pages para profissionais, pequenos negócios e marcas que precisam de uma presença online organizada, bonita e fácil de acessar pelo celular.",
      "Solicitar orçamento",
      "Ver projeto publicado",
      "Site para negócios · Landing pages · Ajustes em sites",
    ],
    highlights: ["Site para negócios", "Landing pages", "Ajustes em sites"],
    servicesTitle: "Sites para apresentar, vender e receber contatos",
    servicesText:
      "Páginas objetivas, com boa aparência, conteúdo bem organizado e botões de contato no lugar certo.",
    servicesCta: "Falar sobre meu site",
    services: [
      ["Site para seu negócio", "Uma página completa para mostrar quem você é, o que oferece e como o cliente pode falar com você."],
      ["Landing page", "Uma página direta para divulgar uma oferta, serviço, curso, evento ou campanha específica."],
      ["Melhoria de site", "Para deixar um site atual mais bonito, mais organizado e melhor no celular."],
    ],
    case: [
      "Projeto publicado",
      "Alquimia do Bonsai",
      "Site real, publicado e em uso para a marca Alquimia do Bonsai. O projeto apresenta a marca, o livro, os cursos, a loja, conteúdos educativos e canais de contato em português e inglês.",
      "Abrir site",
    ],
    caseBullets: [
      "Funciona bem no computador e no celular",
      "Tem versão em português e inglês",
      "Organiza catálogo, favoritos e carrinho local",
      "Direciona visitantes para WhatsApp, redes sociais e formulários",
    ],
    caseSummary: ["PT/EN", "Loja", "Cursos", "WhatsApp"],
    about: [
      "Sobre",
      "Quem está por trás do projeto",
      "Luan Salles é desenvolvedor web em Niterói, com formação em Ciência da Computação em andamento e experiência em suporte técnico. Atua na criação de sites responsivos, organização de conteúdo e publicação de páginas profissionais.",
    ],
    facts: ["Niterói/RJ", "Ciência da Computação", "JavaScript e React", "Sites responsivos"],
    processTitle: "Como o projeto acontece",
    steps: [
      ["1", "Conversa inicial", "Você conta o que precisa, mostra referências e envia os materiais que já tiver."],
      ["2", "Organização", "São definidos páginas, conteúdo, prazo, valor e o que precisa estar pronto antes do desenvolvimento."],
      ["3", "Criação e publicação", "O site é desenvolvido, revisado com você e preparado para divulgação."],
    ],
    contact: [
      "Contato",
      "Quer criar ou melhorar seu site?",
      "Entre em contato pelo WhatsApp ou preencha o formulário com mais detalhes. Se a ideia ainda estiver no começo, tudo bem: o primeiro passo é organizar o que faz sentido para o seu negócio.",
      "Preencher formulário",
      "Enviar pelo WhatsApp",
      "Oi, Luan. Quero conversar sobre um site.",
      "Ao enviar, o WhatsApp abre com a mensagem pronta.",
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
    whatsappText: "Hi, Luan. I want to talk about a website.",
    newTab: "opens in a new tab",
    status: "Language changed to English.",
    hero: [
      "Web developer",
      "I build professional websites for people who need a stronger online presence.",
      "Website and landing page development for professionals, small businesses, and brands that need an organized, attractive online presence that works well on mobile.",
      "Request a quote",
      "View published project",
      "Business websites · Landing pages · Website updates",
    ],
    highlights: ["Business websites", "Landing pages", "Website updates"],
    servicesTitle: "Websites to present your work, sell, and receive contacts",
    servicesText:
      "Focused pages with a professional look, organized content, and contact buttons where they need to be.",
    servicesCta: "Talk about my website",
    services: [
      ["Business website", "A complete page to show who you are, what you offer, and how clients can reach you."],
      ["Landing page", "A direct page to promote an offer, service, course, event, or specific campaign."],
      ["Website improvement", "For making an existing website cleaner, better organized, and easier to use on mobile."],
    ],
    case: [
      "Published project",
      "Alquimia do Bonsai",
      "A real website, published and in use for Alquimia do Bonsai. The project presents the brand, book, courses, shop, educational content, and contact channels in Portuguese and English.",
      "Open website",
    ],
    caseBullets: [
      "Works well on desktop and mobile",
      "Available in Portuguese and English",
      "Organizes catalog, favorites, and local cart",
      "Guides visitors to WhatsApp, social media, and forms",
    ],
    caseSummary: ["PT/EN", "Shop", "Courses", "WhatsApp"],
    about: [
      "About",
      "Who is behind the project",
      "Luan Salles is a web developer based in Niterói, Brazil, with Computer Science training in progress and experience in technical support. He works on responsive websites, content organization, and publishing professional pages.",
    ],
    facts: ["Niterói/RJ, Brazil", "Computer Science", "JavaScript and React", "Responsive websites"],
    processTitle: "How the project works",
    steps: [
      ["1", "First conversation", "You explain what you need, share references, and send any materials you already have."],
      ["2", "Planning", "Pages, content, timeline, price, and what needs to be ready before development are defined."],
      ["3", "Build and publish", "The website is developed, reviewed with you, and prepared for sharing."],
    ],
    contact: [
      "Contact",
      "Want to create or improve your website?",
      "Contact me on WhatsApp or fill out the form with more details. If the idea is still early, that is fine: the first step is organizing what makes sense for your business.",
      "Quote form",
      "Send on WhatsApp",
      "Hi, Luan. I want to talk about a website.",
      "When you send it, WhatsApp opens with the message ready.",
    ],
    labels: ["Name", "Website type", "Message"],
    placeholders: ["Your name", "Ex.: clinic website, landing page, local shop", "Tell me what you want to create or improve."],
    fallbacks: ["Not provided", "Not defined yet", "I want to create or improve a website."],
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
      sameAs: [
        "https://github.com/LuanSalles",
        "https://www.linkedin.com/in/luan-salles-pinheiro-da-costa-440a59250",
      ],
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
    <meta property="og:image:height" content="737" />
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
      <header class="topbar wrap">
        <a class="brand" href="#inicio" aria-label="Luan Salles"><span class="brand-mark">LS</span><span data-i="brand">Luan Salles</span></a>
        <nav class="nav" aria-label="Navegação principal">
          <a href="#servicos">${pt.nav[0]}</a><a href="#projeto">${pt.nav[1]}</a><a href="#sobre">${pt.nav[2]}</a><a href="#contato">${pt.nav[3]}</a>
        </nav>
        <div class="header-actions">
          <div class="lang-switch" aria-label="Selecionar idioma"><button class="active" type="button" data-lang="pt" aria-pressed="true">PT</button><button type="button" data-lang="en" aria-pressed="false">EN</button></div>
          <a class="btn btn-primary header-whatsapp" href="https://wa.me/${phone}?text=${encodeURIComponent(pt.whatsappText)}" target="_blank" rel="noreferrer" aria-label="${pt.whatsapp} (${pt.newTab})">${pt.whatsapp}</a>
        </div>
      </header>

      <p class="sr-only" aria-live="polite" data-i="status">${pt.status}</p>

      <section id="conteudo" class="hero wrap">
        <div class="hero-copy">
          <p class="eyebrow" data-i="hero-eyebrow">${pt.hero[0]}</p>
          <h1 data-i="hero-title">${pt.hero[1]}</h1>
          <p class="lead" data-i="hero-text">${pt.hero[2]}</p>
          <div class="hero-actions">
            <a class="btn btn-primary quote-link" href="${formUrl}" target="_blank" rel="noreferrer" data-i="hero-primary">${pt.hero[3]}</a>
            <a class="btn btn-secondary" href="#projeto" data-i="hero-secondary">${pt.hero[4]}</a>
          </div>
          <p class="cta-note" data-i="hero-helper">${pt.hero[5]}</p>
          <div class="hero-tags" aria-label="Serviços principais">${tags(pt.highlights)}</div>
        </div>
        <div class="hero-panel" aria-label="Resumo dos serviços">
          <p class="eyebrow" data-i="hero-panel-eyebrow">${pt.hero[0]}</p>
          <h2 data-i="hero-panel-title">${pt.servicesTitle}</h2>
          <div class="hero-panel-list">${pt.services.map(([title, text]) => html`<article class="hero-panel-item"><h3>${title}</h3><p>${text}</p></article>`).join("")}</div>
        </div>
      </section>

      <section id="servicos" class="section wrap split">
        <div class="section-copy">
          <p class="eyebrow" data-i="services-eyebrow">${pt.nav[0]}</p>
          <h2 data-i="services-title">${pt.servicesTitle}</h2>
          <p data-i="services-text">${pt.servicesText}</p>
        </div>
        <div class="service-list">${serviceCards(pt.services)}<a class="btn btn-secondary service-cta" href="#contato" data-i="services-cta">${pt.servicesCta}</a></div>
      </section>

      <section id="projeto" class="section case-section">
        <div class="wrap case">
          <div class="case-image" aria-label="${pt.case[1]}">
            <div class="case-proof">
              <p class="eyebrow" data-i="case-proof-eyebrow">${pt.case[0]}</p>
              <h2 data-i="case-proof-title">${pt.case[1]}</h2>
              <p>${caseUrl.replace("https://", "")}</p>
              <div class="case-proof-grid">${tags(pt.caseSummary)}</div>
            </div>
          </div>
          <div class="case-copy">
            <p class="eyebrow" data-i="case-eyebrow">${pt.case[0]}</p>
            <h2 data-i="case-title">${pt.case[1]}</h2>
            <p data-i="case-text">${pt.case[2]}</p>
            <ul>${list(pt.caseBullets)}</ul>
            <a class="btn btn-primary case-link" href="${caseUrl}" target="_blank" rel="noreferrer" data-i="case-button" aria-label="${pt.case[3]} (${pt.newTab})">${pt.case[3]}</a>
          </div>
        </div>
      </section>

      <section id="sobre" class="section wrap about">
        <img src="luan-salles.jpeg" alt="Foto de Luan Salles" width="220" height="220" loading="lazy" />
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
            <a class="btn btn-primary quote-link" href="${formUrl}" target="_blank" rel="noreferrer" data-i="contact-form" aria-label="${pt.contact[3]} (${pt.newTab})">${pt.contact[3]}</a>
            <a class="btn btn-secondary contact-whatsapp" href="https://wa.me/${phone}?text=${encodeURIComponent(pt.whatsappText)}" target="_blank" rel="noreferrer" aria-label="${pt.whatsapp} (${pt.newTab})">${pt.whatsapp}</a>
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
        <a href="https://github.com/LuanSalles" target="_blank" rel="noreferrer" aria-label="GitHub (${pt.newTab})">GitHub</a>
        <a href="https://www.linkedin.com/in/luan-salles-pinheiro-da-costa-440a59250" target="_blank" rel="noreferrer" aria-label="LinkedIn (${pt.newTab})">LinkedIn</a>
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
          button.setAttribute("aria-pressed", button.dataset.lang === lang ? "true" : "false");
        });

        setTexts(".nav a", t.nav);
        setText("[data-i='hero-eyebrow']", t.hero[0]);
        setText("[data-i='hero-title']", t.hero[1]);
        setText("[data-i='hero-text']", t.hero[2]);
        setText("[data-i='hero-primary']", t.hero[3]);
        setText("[data-i='hero-secondary']", t.hero[4]);
        setText("[data-i='hero-helper']", t.hero[5]);
        setTexts(".hero-tags span", t.highlights);
        setText("[data-i='hero-panel-eyebrow']", t.hero[0]);
        setText("[data-i='hero-panel-title']", t.servicesTitle);
        document.querySelectorAll(".hero-panel-item").forEach((card, index) => {
          card.querySelector("h3").textContent = t.services[index][0];
          card.querySelector("p").textContent = t.services[index][1];
        });

        setText("[data-i='services-eyebrow']", t.nav[0]);
        setText("[data-i='services-title']", t.servicesTitle);
        setText("[data-i='services-text']", t.servicesText);
        setText("[data-i='services-cta']", t.servicesCta);
        document.querySelectorAll(".service").forEach((card, index) => {
          card.querySelector("h3").textContent = t.services[index][0];
          card.querySelector("p").textContent = t.services[index][1];
        });

        setText("[data-i='case-eyebrow']", t.case[0]);
        setText("[data-i='case-title']", t.case[1]);
        setText("[data-i='case-text']", t.case[2]);
        setTexts(".case-copy li", t.caseBullets);
        setText("[data-i='case-button']", t.case[3]);
        setText("[data-i='case-proof-eyebrow']", t.case[0]);
        setText("[data-i='case-proof-title']", t.case[1]);
        setTexts(".case-proof-grid span", t.caseSummary);

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
        setText("[data-i='contact-note']", t.contact[6]);
        setText("[data-i='status']", t.status);
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
