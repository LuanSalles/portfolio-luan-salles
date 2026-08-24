import { readFileSync, writeFileSync } from "node:fs";

const css = readFileSync("app/globals.css", "utf8").replace('@import "tailwindcss";', "");
const phone = "5521979231817";
const formUrl = "https://forms.gle/ebQXBwmDUHUt6zwn7";
const caseUrl = "https://alquimiadobonsai.com";
const siteUrl = "https://portfolio-luan-one.vercel.app/";
const githubUrl = "https://github.com/LuanSalles";
const linkedinUrl = "https://www.linkedin.com/in/luan-salles/";

const data = {
  pt: {
    lang: "pt-BR",
    title: "Luan Salles Web | Criação de sites para pequenos negócios",
    description: "Criação de sites institucionais, landing pages e melhorias em sites para pequenos negócios, profissionais e marcas.",
    brand: "Luan Salles Web",
    nav: ["Soluções", "Método", "Projeto", "Empresa", "Contato"],
    whatsapp: "WhatsApp",
    whatsappText: "Oi, Luan. Quero conversar sobre um site para meu negócio.",
    newTab: "abre em nova aba",
    status: "Idioma alterado para português.",
    hero: [
      "Criação de sites para negócios",
      "Uma presença digital clara para quem precisa ser encontrado, entendido e chamado.",
      "Desenvolvimento de sites institucionais, landing pages e melhorias em sites existentes para pequenos negócios, profissionais autônomos e marcas em crescimento.",
      "Falar sobre meu site",
      "Ver método",
      "Orçamento por escopo · Atendimento direto · Site publicado",
    ],
    proof: [
      "Sites que explicam o negócio e abrem conversa com o cliente.",
      ["Projeto real no ar", "Alquimia do Bonsai publicado em domínio próprio."],
      ["Foco em negócio pequeno", "Páginas pensadas para explicar, vender e receber contatos."],
      ["Base técnica própria", "Código, responsividade, publicação e integrações simples."],
    ],
    solutions: [
      "Soluções",
      "O que a empresa entrega",
      "A proposta inicial é simples: construir sites úteis, bem apresentados e fáceis de divulgar, sem transformar o projeto em algo maior do que o negócio precisa agora.",
      "Conversar no WhatsApp",
    ],
    services: [
      ["Site institucional", "Para apresentar empresa, serviço, história, diferenciais, localização, redes sociais e canais de contato em uma estrutura profissional."],
      ["Landing page", "Para divulgar uma oferta, campanha, curso, evento ou serviço específico com uma página direta e chamada clara para ação."],
      ["Reforma de site", "Para melhorar um site que já existe: conteúdo, aparência, versão mobile, botões de contato, organização e publicação."],
      ["Manutenção mensal", "Para manter pequenos ajustes, novas seções, troca de conteúdo e suporte básico depois que o site estiver publicado."],
    ],
    method: [
      "Método",
      "Um processo curto para tirar o site do papel",
      "A operação é enxuta: entender o objetivo, organizar o escopo, construir, revisar e publicar. O cliente sabe o que será entregue antes do desenvolvimento começar.",
    ],
    steps: [
      ["1", "Diagnóstico", "Entendimento do negócio, objetivo do site, público, referências e materiais disponíveis."],
      ["2", "Escopo", "Definição das páginas, funcionalidades, prazo, investimento e custos externos como domínio ou hospedagem."],
      ["3", "Produção", "Desenvolvimento da estrutura, layout, responsividade, textos organizados e botões de contato."],
      ["4", "Publicação", "Revisão final, publicação e orientação para divulgar o site com segurança."],
    ],
    case: [
      "Projeto publicado",
      "Alquimia do Bonsai",
      "Site institucional e comercial desenvolvido para organizar a presença digital da marca Alquimia do Bonsai.",
      "A marca reunia livro, cursos, catálogo, conteúdos educativos, redes sociais e contatos em lugares diferentes. Faltava uma página central para apresentar tudo com clareza.",
      "Foi desenvolvido um site responsivo e bilíngue com apresentação da marca, escola, vídeos, livro, loja, catálogo, materiais externos e contato via WhatsApp.",
      "O site está publicado em domínio próprio e já pode ser usado como canal oficial da marca para receber visitantes, apresentar produtos e direcionar interessados.",
      "Abrir site ao vivo",
    ],
    caseLabels: ["Problema", "Solução", "Resultado"],
    caseBullets: [
      "Site em português e inglês",
      "Catálogo, favoritos e carrinho local",
      "Integração com WhatsApp, Amazon, Google Drive e redes sociais",
      "Navegação pensada para desktop e celular",
    ],
    recurring: [
      "Depois da publicação",
      "Site no ar não precisa virar abandono",
      "Quando fizer sentido, o projeto pode continuar com manutenção mensal para pequenos ajustes, atualização de conteúdo e evolução gradual. Isso ajuda a transformar site em ativo do negócio, não em arquivo esquecido.",
      "Manutenção opcional",
    ],
    recurringItems: ["Troca de textos e imagens", "Novas seções simples", "Ajustes de botões e links", "Suporte básico para publicação"],
    company: [
      "Empresa",
      "Uma operação pequena, direta e em construção",
      "A Luan Salles Web nasce como uma empresa enxuta de desenvolvimento de sites. No início, o atendimento, planejamento, desenvolvimento e publicação são conduzidos diretamente por Luan Salles, estudante de Ciência da Computação em Niterói/RJ e desenvolvedor web com experiência em suporte técnico.",
    ],
    facts: ["Niterói/RJ", "Atendimento remoto", "Sites para pequenos negócios", "JavaScript e React"],
    faqTitle: "Dúvidas comuns",
    faq: [
      ["Já existe preço fixo?", "Por enquanto, não. O valor é definido por escopo, porque cada site muda em páginas, conteúdo, prazo, funcionalidades e custos externos."],
      ["Dá para começar com pouco conteúdo?", "Sim. O primeiro passo pode ser organizar o essencial: quem é o negócio, o que oferece, para quem atende e como receber contato."],
      ["Domínio e hospedagem entram no projeto?", "A configuração pode entrar no escopo. Os custos de domínio, hospedagem, banco de dados ou ferramentas externas são combinados separadamente."],
      ["O site fica bom no celular?", "Sim. A versão mobile é tratada como parte central da entrega."],
      ["O formulário é obrigatório?", "Não. O WhatsApp é o caminho principal. O formulário serve quando você já quer enviar mais detalhes antes da conversa."],
    ],
    contact: [
      "Contato",
      "Quer colocar o site do seu negócio no ar?",
      "Chame no WhatsApp para explicar a ideia em poucas mensagens. Se preferir, preencha o briefing e envie os detalhes do projeto antes da conversa.",
      "Preencher briefing",
      "Enviar pelo WhatsApp",
      "Oi, Luan. Quero conversar sobre um site para meu negócio.",
      "O formulário abaixo monta uma mensagem pronta para WhatsApp.",
    ],
    labels: ["Nome", "Tipo de negócio ou site", "Mensagem"],
    placeholders: ["Seu nome", "Ex.: clínica, loja local, landing page de serviço", "Me conte o que você quer colocar no ar."],
    fallbacks: ["Não informado", "Ainda não definido", "Quero criar ou melhorar um site."],
    footer: "Luan Salles Web · Criação de sites para negócios",
  },
  en: {
    lang: "en",
    title: "Luan Salles Web | Website creation for small businesses",
    description: "Business websites, landing pages, and website improvements for small businesses, professionals, and brands.",
    brand: "Luan Salles Web",
    nav: ["Solutions", "Method", "Project", "Company", "Contact"],
    whatsapp: "WhatsApp",
    whatsappText: "Hi, Luan. I want to talk about a website for my business.",
    newTab: "opens in a new tab",
    status: "Language changed to English.",
    hero: [
      "Website creation for businesses",
      "A clear digital presence for businesses that need to be found, understood, and contacted.",
      "Business websites, landing pages, and website improvements for small businesses, independent professionals, and growing brands.",
      "Talk about my website",
      "See method",
      "Scoped quote · Direct contact · Published website",
    ],
    proof: [
      "Websites that explain the business and start conversations with customers.",
      ["Real project live", "Alquimia do Bonsai published on its own domain."],
      ["Small business focus", "Pages planned to explain, sell, and receive contacts."],
      ["Technical foundation", "Code, responsiveness, publishing, and simple integrations."],
    ],
    solutions: [
      "Solutions",
      "What the company delivers",
      "The initial offer is simple: build useful, well-presented websites that are easy to share, without making the project bigger than the business needs right now.",
      "Talk on WhatsApp",
    ],
    services: [
      ["Business website", "For presenting a company, service, story, strengths, location, social links, and contact channels in a professional structure."],
      ["Landing page", "For promoting an offer, campaign, course, event, or specific service with a direct page and clear call to action."],
      ["Website refresh", "For improving an existing website: content, visual quality, mobile version, contact buttons, structure, and publishing."],
      ["Monthly care", "For small updates, new sections, content changes, and basic support after the website is published."],
    ],
    method: [
      "Method",
      "A short process to get the website online",
      "The operation is lean: understand the goal, organize the scope, build, review, and publish. The client knows what will be delivered before development starts.",
    ],
    steps: [
      ["1", "Diagnosis", "Understanding the business, website goal, audience, references, and available materials."],
      ["2", "Scope", "Definition of pages, features, timeline, investment, and external costs such as domain or hosting."],
      ["3", "Production", "Development of structure, layout, responsiveness, organized copy, and contact buttons."],
      ["4", "Publishing", "Final review, publishing, and guidance to share the website with confidence."],
    ],
    case: [
      "Published project",
      "Alquimia do Bonsai",
      "Institutional and commercial website developed to organize the digital presence of Alquimia do Bonsai.",
      "The brand had a book, courses, catalog, educational content, social media, and contact channels in different places. It needed one central page to present everything clearly.",
      "A responsive bilingual website was developed with brand presentation, school, videos, book, shop, catalog, external materials, and WhatsApp contact.",
      "The website is live on its own domain and can already be used as the brand's official channel to receive visitors, present products, and guide interested people.",
      "Open live website",
    ],
    caseLabels: ["Problem", "Solution", "Result"],
    caseBullets: [
      "Website in Portuguese and English",
      "Catalog, favorites, and local cart",
      "Integrations with WhatsApp, Amazon, Google Drive, and social media",
      "Navigation planned for desktop and mobile",
    ],
    recurring: [
      "After publishing",
      "A live website should not be left behind",
      "When it makes sense, the project can continue with monthly care for small updates, content changes, and gradual improvements. That helps turn the website into a business asset, not a forgotten file.",
      "Optional monthly care",
    ],
    recurringItems: ["Text and image changes", "Simple new sections", "Button and link adjustments", "Basic publishing support"],
    company: [
      "Company",
      "A small, direct operation in progress",
      "Luan Salles Web starts as a lean website development company. At this stage, service, planning, development, and publishing are handled directly by Luan Salles, a Computer Science student based in Niterói, Brazil, and a web developer with technical support experience.",
    ],
    facts: ["Niterói/RJ, Brazil", "Remote service", "Websites for small businesses", "JavaScript and React"],
    faqTitle: "Common questions",
    faq: [
      ["Is there fixed pricing?", "Not yet. Pricing is defined by scope because each website changes in pages, content, timeline, features, and external costs."],
      ["Can we start with little content?", "Yes. The first step can be organizing the essentials: who the business is, what it offers, who it serves, and how to receive contact."],
      ["Are domain and hosting included?", "Configuration can be included in the scope. Domain, hosting, database, or external tool costs are agreed separately."],
      ["Will the website work well on mobile?", "Yes. The mobile version is treated as a central part of the delivery."],
      ["Is the form required?", "No. WhatsApp is the main path. The form helps when you already want to send more details before the conversation."],
    ],
    contact: [
      "Contact",
      "Want to put your business website online?",
      "Message me on WhatsApp to explain the idea in a few messages. If you prefer, fill out the briefing and send the project details before the conversation.",
      "Fill briefing",
      "Send on WhatsApp",
      "Hi, Luan. I want to talk about a website for my business.",
      "The form below creates a ready-to-send WhatsApp message.",
    ],
    labels: ["Name", "Business or website type", "Message"],
    placeholders: ["Your name", "Ex.: clinic, local shop, service landing page", "Tell me what you want to put online."],
    fallbacks: ["Not provided", "Not defined yet", "I want to create or improve a website."],
    footer: "Luan Salles Web · Website creation for businesses",
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

function list(items) {
  return items.map((item) => html`<li>${item}</li>`).join("");
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
      "@id": `${siteUrl}#person`,
      name: "Luan Salles",
      jobTitle: "Desenvolvedor web",
      url: siteUrl,
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
      "@id": `${siteUrl}#service`,
      name: "Luan Salles Web",
      url: siteUrl,
      image: `${siteUrl}alquimia-bonsai-1180.jpg`,
      description: pt.description,
      areaServed: ["Niterói", "Rio de Janeiro", "Brasil"],
      serviceType: ["Criação de sites", "Landing pages", "Manutenção de sites"],
      founder: {
        "@id": `${siteUrl}#person`,
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
    <link rel="canonical" href="${siteUrl}" />
    <link rel="icon" href="favicon-ls.svg" type="image/svg+xml" />
    <meta property="og:title" content="${pt.title}" />
    <meta property="og:description" content="${pt.description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${siteUrl}" />
    <meta property="og:site_name" content="Luan Salles Web" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:image" content="${siteUrl}alquimia-bonsai-1180.jpg" />
    <meta property="og:image:width" content="1180" />
    <meta property="og:image:height" content="533" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:alt" content="Site Alquimia do Bonsai desenvolvido por Luan Salles Web" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${pt.title}" />
    <meta name="twitter:description" content="${pt.description}" />
    <meta name="twitter:image" content="${siteUrl}alquimia-bonsai-1180.jpg" />
    <style>${css}</style>
    <script type="application/ld+json">${JSON.stringify(structuredData)}</script>
  </head>
  <body>
    <main id="inicio">
      <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header class="topbar">
        <a class="brand" href="#inicio" aria-label="${pt.brand}"><span class="brand-mark">LS</span><span data-i="brand">${pt.brand}</span></a>
        <nav class="nav" aria-label="Navegação principal">
          <a href="#solucoes">${pt.nav[0]}</a><a href="#metodo">${pt.nav[1]}</a><a href="#projeto">${pt.nav[2]}</a><a href="#empresa">${pt.nav[3]}</a><a href="#contato">${pt.nav[4]}</a>
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
            <a class="btn btn-secondary" href="#metodo" data-i="hero-secondary">${pt.hero[4]}</a>
          </div>
          <p class="cta-note" data-i="hero-helper">${pt.hero[5]}</p>
        </div>
        <div class="hero-panel" aria-label="Resumo da empresa">
          <p class="eyebrow" data-i="hero-panel-eyebrow">${pt.brand}</p>
          <h2 data-i="proof-title">${pt.proof[0]}</h2>
          <div class="hero-panel-list">${cards(pt.proof.slice(1), "hero-panel-item")}</div>
        </div>
      </section>

      <section id="solucoes" class="section wrap split">
        <div class="section-copy">
          <p class="eyebrow" data-i="solutions-eyebrow">${pt.solutions[0]}</p>
          <h2 data-i="solutions-title">${pt.solutions[1]}</h2>
          <p data-i="solutions-text">${pt.solutions[2]}</p>
        </div>
        <div class="service-list">${cards(pt.services, "service")}<a class="btn btn-secondary service-cta whatsapp-link" href="https://wa.me/${phone}?text=${encodeURIComponent(pt.whatsappText)}" target="_blank" rel="noreferrer" data-i="solutions-cta">${pt.solutions[3]}</a></div>
      </section>

      <section id="metodo" class="section wrap process method">
        <div class="section-head">
          <p class="eyebrow" data-i="method-eyebrow">${pt.method[0]}</p>
          <h2 data-i="method-title">${pt.method[1]}</h2>
          <p data-i="method-text">${pt.method[2]}</p>
        </div>
        <div class="steps">${steps(pt.steps)}</div>
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
            <article><span>01</span><h3>${pt.caseLabels[0]}</h3><p data-i="case-problem">${pt.case[3]}</p></article>
            <article><span>02</span><h3>${pt.caseLabels[1]}</h3><p data-i="case-solution">${pt.case[4]}</p></article>
            <article><span>03</span><h3>${pt.caseLabels[2]}</h3><p data-i="case-result">${pt.case[5]}</p></article>
          </div>
          <ul class="case-bullets">${list(pt.caseBullets)}</ul>
        </div>
      </section>

      <section class="section wrap technical recurring">
        <div>
          <p class="eyebrow" data-i="recurring-eyebrow">${pt.recurring[0]}</p>
          <h2 data-i="recurring-title">${pt.recurring[1]}</h2>
          <p data-i="recurring-text">${pt.recurring[2]}</p>
        </div>
        <div class="tech-card">
          <h3 data-i="recurring-card">${pt.recurring[3]}</h3>
          <ul class="clean-list">${list(pt.recurringItems)}</ul>
        </div>
      </section>

      <section id="empresa" class="section wrap about company">
        <div class="founder-mark" aria-hidden="true">LS</div>
        <div>
          <p class="eyebrow" data-i="company-eyebrow">${pt.company[0]}</p>
          <h2 data-i="company-title">${pt.company[1]}</h2>
          <p data-i="company-text">${pt.company[2]}</p>
          <div class="facts company-facts">${tags(pt.facts)}</div>
          <div class="company-links">
            <a href="${githubUrl}" target="_blank" rel="noreferrer">GitHub</a>
            <a href="${linkedinUrl}" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
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
        <a href="#solucoes">${pt.nav[0]}</a>
        <a href="#contato">${pt.nav[4]}</a>
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

        setText("[data-i='brand']", t.brand);
        setTexts(".nav a", t.nav);
        setText("[data-i='hero-eyebrow']", t.hero[0]);
        setText("[data-i='hero-title']", t.hero[1]);
        setText("[data-i='hero-text']", t.hero[2]);
        setText("[data-i='hero-primary']", t.hero[3]);
        setText("[data-i='hero-secondary']", t.hero[4]);
        setText("[data-i='hero-helper']", t.hero[5]);
        setText("[data-i='hero-panel-eyebrow']", t.brand);
        setText("[data-i='proof-title']", t.proof[0]);
        setCards(".hero-panel-item", t.proof.slice(1));
        setText("[data-i='solutions-eyebrow']", t.solutions[0]);
        setText("[data-i='solutions-title']", t.solutions[1]);
        setText("[data-i='solutions-text']", t.solutions[2]);
        setText("[data-i='solutions-cta']", t.solutions[3]);
        setCards(".service", t.services);
        setText("[data-i='method-eyebrow']", t.method[0]);
        setText("[data-i='method-title']", t.method[1]);
        setText("[data-i='method-text']", t.method[2]);
        document.querySelectorAll(".step").forEach((step, index) => {
          step.querySelector("span").textContent = t.steps[index][0];
          step.querySelector("h3").textContent = t.steps[index][1];
          step.querySelector("p").textContent = t.steps[index][2];
        });
        setText("[data-i='case-eyebrow']", t.case[0]);
        setText("[data-i='case-title']", t.case[1]);
        setText("[data-i='case-intro']", t.case[2]);
        setText("[data-i='case-problem']", t.case[3]);
        setText("[data-i='case-solution']", t.case[4]);
        setText("[data-i='case-result']", t.case[5]);
        setText("[data-i='case-button']", t.case[6]);
        setTexts(".case-details h3", t.caseLabels);
        setTexts(".case-bullets li", t.caseBullets);
        setText("[data-i='recurring-eyebrow']", t.recurring[0]);
        setText("[data-i='recurring-title']", t.recurring[1]);
        setText("[data-i='recurring-text']", t.recurring[2]);
        setText("[data-i='recurring-card']", t.recurring[3]);
        setTexts(".clean-list li", t.recurringItems);
        setText("[data-i='company-eyebrow']", t.company[0]);
        setText("[data-i='company-title']", t.company[1]);
        setText("[data-i='company-text']", t.company[2]);
        setTexts(".company-facts span", t.facts);
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
        setTexts("footer a", [t.nav[0], t.nav[4]]);
        setWhatsApp(t.whatsappText);
        localStorage.setItem("companySiteLang", lang);
      }

      document.querySelectorAll(".lang-switch button").forEach((button) => {
        button.addEventListener("click", () => applyLanguage(button.dataset.lang));
      });

      document.querySelector("#contactForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const lang = localStorage.getItem("companySiteLang") === "en" ? "en" : "pt";
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

      applyLanguage(localStorage.getItem("companySiteLang") === "en" ? "en" : "pt");
    </script>
  </body>
</html>
`;

writeFileSync("site/index.html", document, "utf8");
