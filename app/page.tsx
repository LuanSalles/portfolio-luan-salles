"use client";

import { FormEvent, useEffect, useState } from "react";

type Lang = "pt" | "en";

const phone = "5521979231817";
const briefingForm = "https://forms.gle/ebQXBwmDUHUt6zwn7";
const alquimiaUrl = "https://alquimiadobonsai.com";
const githubUrl = "https://github.com/LuanSalles";
const linkedinUrl = "https://www.linkedin.com/in/luan-salles/";

const copy = {
  pt: {
    htmlLang: "pt-BR",
    brand: "Luan Salles Web",
    nav: ["Soluções", "Método", "Projeto", "Empresa", "Contato"],
    lang: "Selecionar idioma",
    whatsapp: "WhatsApp",
    whatsappText: "Oi, Luan. Quero conversar sobre um site para meu negócio.",
    newTab: "abre em nova aba",
    status: "Idioma alterado para português.",
    hero: {
      eyebrow: "Criação de sites para negócios",
      title: "Sites institucionais e landing pages para negócios que precisam vender com clareza.",
      text:
        "Desenvolvimento de páginas responsivas com conteúdo organizado, botões de contato, publicação e orientação sobre domínio e hospedagem.",
      primary: "Falar sobre meu site",
      secondary: "Ver método",
      helper: "Orçamento por escopo · Atendimento direto · Site publicado",
    },
    panelEyebrow: "Entrega",
    proof: [
      ["Site pronto para divulgar"],
      ["01", "Estrutura das páginas"],
      ["02", "Versão mobile"],
      ["03", "WhatsApp e formulário"],
      ["04", "Publicação orientada"],
    ],
    solutions: {
      eyebrow: "Serviços",
      title: "Formatos de site",
      text:
        "Escolha o formato mais adequado para apresentar seu negócio, divulgar uma oferta ou melhorar um site existente.",
      cta: "Conversar no WhatsApp",
      items: [
        {
          title: "Site institucional",
          text:
            "Páginas para apresentar empresa, serviços, diferenciais, localização, redes sociais e canais de contato.",
        },
        {
          title: "Landing page",
          text:
            "Para divulgar uma oferta, campanha, curso, evento ou serviço específico com uma página direta e chamada clara para ação.",
        },
        {
          title: "Reforma de site",
          text:
            "Ajustes de layout, conteúdo, versão mobile, botões de contato, links e organização das páginas.",
        },
        {
          title: "Manutenção mensal",
          text:
            "Para manter pequenos ajustes, novas seções, troca de conteúdo e suporte básico depois que o site estiver publicado.",
        },
      ],
    },
    method: {
      eyebrow: "Processo",
      title: "Como funciona",
      text:
        "O projeto segue etapas objetivas, com escopo, prazos e revisões definidos antes do desenvolvimento.",
      steps: [
        ["1", "Briefing", "Objetivo, páginas, referências, conteúdo disponível e prazo desejado."],
        ["2", "Proposta", "Escopo, valor, prazo e responsabilidades definidos antes do desenvolvimento."],
        ["3", "Desenvolvimento", "Layout, responsividade, textos organizados, links e integrações."],
        ["4", "Publicação", "Revisão final, ajustes combinados e site pronto para divulgação."],
      ],
    },
    case: {
      eyebrow: "Projeto publicado",
      title: "Alquimia do Bonsai",
      intro:
        "Site institucional e comercial desenvolvido para organizar a presença digital da marca Alquimia do Bonsai.",
      problem:
        "A marca reunia livro, cursos, catálogo, conteúdos educativos, redes sociais e contatos em lugares diferentes. Faltava uma página central para apresentar tudo com clareza.",
      solution:
        "Foi desenvolvido um site responsivo e bilíngue com apresentação da marca, escola, vídeos, livro, loja, catálogo, materiais externos e contato via WhatsApp.",
      result:
        "O site está publicado em domínio próprio e já pode ser usado como canal oficial da marca para receber visitantes, apresentar produtos e direcionar interessados.",
      bullets: [
        "Site em português e inglês",
        "Catálogo, favoritos e carrinho local",
        "Integração com WhatsApp, Amazon, Google Drive e redes sociais",
        "Navegação pensada para desktop e celular",
      ],
      labels: ["Problema", "Solução", "Resultado"],
      button: "Abrir site ao vivo",
      frameLabel: "Demonstração interativa do site Alquimia do Bonsai",
    },
    company: {
      eyebrow: "Empresa",
      title: "Desenvolvimento web com atendimento direto",
      text:
        "A Luan Salles Web atende pequenos negócios e profissionais que precisam de site institucional, landing page ou melhoria em site existente. O projeto é conduzido por Luan Salles, desenvolvedor web em Niterói/RJ e estudante de Ciência da Computação.",
      facts: ["Niterói/RJ", "Atendimento remoto", "Sites para pequenos negócios", "JavaScript e React"],
    },
    recurring: {
      eyebrow: "Manutenção",
      title: "Atualizações para manter o site útil",
      text:
        "Plano mensal para ajustes de conteúdo, links, imagens e pequenas melhorias após a publicação.",
      cardTitle: "Manutenção opcional",
      items: ["Troca de textos e imagens", "Novas seções simples", "Ajustes de botões e links", "Suporte básico para publicação"],
    },
    faq: {
      title: "Dúvidas comuns",
      items: [
        ["Como o valor é definido?", "O investimento é calculado pelo escopo: número de páginas, funcionalidades, prazo, conteúdo disponível e integrações."],
        ["O que preciso enviar?", "Logo, textos, fotos, serviços, contatos e referências. Quando faltar material, o escopo considera organização de conteúdo."],
        ["Domínio e hospedagem entram no projeto?", "A configuração pode ser incluída. Custos externos são informados separadamente."],
        ["O site funciona no celular?", "A versão mobile faz parte da entrega desde o início do projeto."],
        ["Como peço orçamento?", "Envie uma mensagem no WhatsApp ou preencha o briefing com os detalhes do site."],
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Solicite um orçamento para o seu site",
      text:
        "Envie o tipo de negócio, objetivo do site, prazo e referências. A resposta já vem com os próximos passos para definir escopo e valor.",
      formButton: "Preencher briefing",
      labels: ["Nome", "Tipo de negócio ou site", "Mensagem"],
      placeholders: [
        "Seu nome",
        "Ex.: clínica, loja local, landing page de serviço",
        "Descreva negócio, objetivo, prazo e referências.",
      ],
      submit: "Enviar pelo WhatsApp",
      note: "A mensagem será enviada pelo WhatsApp com os dados preenchidos.",
      intro: "Oi, Luan. Quero conversar sobre um site para meu negócio.",
      fallbacks: ["Não informado", "Ainda não definido", "Quero criar ou melhorar um site."],
    },
    footer: "Luan Salles Web · Criação de sites para negócios",
  },
  en: {
    htmlLang: "en",
    brand: "Luan Salles Web",
    nav: ["Solutions", "Method", "Project", "Company", "Contact"],
    lang: "Select language",
    whatsapp: "WhatsApp",
    whatsappText: "Hi, Luan. I want to talk about a website for my business.",
    newTab: "opens in a new tab",
    status: "Language changed to English.",
    hero: {
      eyebrow: "Website creation for businesses",
      title: "Business websites and landing pages for companies that need to sell with clarity.",
      text:
        "Responsive pages with organized content, contact buttons, publishing, and guidance on domain and hosting.",
      primary: "Talk about my website",
      secondary: "See method",
      helper: "Scoped quote · Direct contact · Published website",
    },
    panelEyebrow: "Delivery",
    proof: [
      ["Website ready to share"],
      ["01", "Page structure"],
      ["02", "Mobile version"],
      ["03", "WhatsApp and form"],
      ["04", "Guided publishing"],
    ],
    solutions: {
      eyebrow: "Services",
      title: "Website formats",
      text:
        "Choose the right format to present your business, promote an offer, or improve an existing website.",
      cta: "Talk on WhatsApp",
      items: [
        {
          title: "Business website",
          text:
            "Pages to present the business, services, strengths, location, social links, and contact channels.",
        },
        {
          title: "Landing page",
          text:
            "For promoting an offer, campaign, course, event, or specific service with a direct page and clear call to action.",
        },
        {
          title: "Website refresh",
          text:
            "Layout, content, mobile, contact buttons, links, and page structure improvements.",
        },
        {
          title: "Monthly care",
          text:
            "For small updates, new sections, content changes, and basic support after the website is published.",
        },
      ],
    },
    method: {
      eyebrow: "Process",
      title: "How it works",
      text:
        "Each project follows clear stages, with scope, timeline, and review points defined before development.",
      steps: [
        ["1", "Briefing", "Goal, pages, references, available content, and desired timeline."],
        ["2", "Proposal", "Scope, price, timeline, and responsibilities defined before development."],
        ["3", "Development", "Layout, responsiveness, organized copy, links, and integrations."],
        ["4", "Publishing", "Final review, agreed adjustments, and website ready to share."],
      ],
    },
    case: {
      eyebrow: "Published project",
      title: "Alquimia do Bonsai",
      intro:
        "Institutional and commercial website developed to organize the digital presence of Alquimia do Bonsai.",
      problem:
        "The brand had a book, courses, catalog, educational content, social media, and contact channels in different places. It needed one central page to present everything clearly.",
      solution:
        "A responsive bilingual website was developed with brand presentation, school, videos, book, shop, catalog, external materials, and WhatsApp contact.",
      result:
        "The website is live on its own domain and can already be used as the brand's official channel to receive visitors, present products, and guide interested people.",
      bullets: [
        "Website in Portuguese and English",
        "Catalog, favorites, and local cart",
        "Integrations with WhatsApp, Amazon, Google Drive, and social media",
        "Navigation planned for desktop and mobile",
      ],
      labels: ["Problem", "Solution", "Result"],
      button: "Open live website",
      frameLabel: "Interactive preview of the Alquimia do Bonsai website",
    },
    company: {
      eyebrow: "Company",
      title: "Web development with direct service",
      text:
        "Luan Salles Web serves small businesses and professionals that need a business website, landing page, or improvements to an existing website. Projects are led by Luan Salles, a web developer based in Niterói, Brazil, and a Computer Science student.",
      facts: ["Niterói/RJ, Brazil", "Remote service", "Websites for small businesses", "JavaScript and React"],
    },
    recurring: {
      eyebrow: "Maintenance",
      title: "Updates to keep the website useful",
      text:
        "Monthly plan for content, links, images, and small improvements after publishing.",
      cardTitle: "Optional monthly care",
      items: ["Text and image changes", "Simple new sections", "Button and link adjustments", "Basic publishing support"],
    },
    faq: {
      title: "Common questions",
      items: [
        ["How is pricing defined?", "Investment is calculated by scope: number of pages, features, timeline, available content, and integrations."],
        ["What do I need to send?", "Logo, copy, photos, services, contact details, and references. When material is missing, content organization is included in the scope."],
        ["Are domain and hosting included?", "Configuration can be included. External costs are listed separately."],
        ["Will the website work on mobile?", "The mobile version is part of the delivery from the start."],
        ["How do I request a quote?", "Send a WhatsApp message or fill out the briefing with the website details."],
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Request a quote for your website",
      text:
        "Send the business type, website goal, timeline, and references. The reply comes with the next steps to define scope and price.",
      formButton: "Fill briefing",
      labels: ["Name", "Business or website type", "Message"],
      placeholders: ["Your name", "Ex.: clinic, local shop, service landing page", "Describe the business, goal, timeline, and references."],
      submit: "Send on WhatsApp",
      note: "The message will be sent through WhatsApp with the filled details.",
      intro: "Hi, Luan. I want to talk about a website for my business.",
      fallbacks: ["Not provided", "Not defined yet", "I want to create or improve a website."],
    },
    footer: "Luan Salles Web · Website creation for businesses",
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("pt");
  const [name, setName] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
  }, [t.htmlLang]);

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const text = [
      t.contact.intro,
      "",
      `${t.contact.labels[0]}: ${name.trim() || t.contact.fallbacks[0]}`,
      `${t.contact.labels[1]}: ${projectType.trim() || t.contact.fallbacks[1]}`,
      `${t.contact.labels[2]}: ${message.trim() || t.contact.fallbacks[2]}`,
    ].join("\n");

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank", "noreferrer");
  }

  return (
    <main id="inicio">
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label={t.brand}>
          <span className="brand-mark">LS</span>
          <span>{t.brand}</span>
        </a>

        <nav className="nav" aria-label="Navegação principal">
          <a href="#solucoes">{t.nav[0]}</a>
          <a href="#metodo">{t.nav[1]}</a>
          <a href="#projeto">{t.nav[2]}</a>
          <a href="#empresa">{t.nav[3]}</a>
          <a href="#contato">{t.nav[4]}</a>
        </nav>

        <div className="header-actions">
          <div className="lang-switch" aria-label={t.lang}>
            <button aria-pressed={lang === "pt"} className={lang === "pt" ? "active" : ""} type="button" onClick={() => setLang("pt")}>
              PT
            </button>
            <button aria-pressed={lang === "en"} className={lang === "en" ? "active" : ""} type="button" onClick={() => setLang("en")}>
              EN
            </button>
          </div>
          <a
            className="btn btn-primary header-whatsapp"
            href={`https://wa.me/${phone}?text=${encodeURIComponent(t.whatsappText)}`}
            target="_blank"
            rel="noreferrer"
            aria-label={`${t.whatsapp} (${t.newTab})`}
          >
            {t.whatsapp}
          </a>
        </div>
      </header>

      <p className="sr-only" aria-live="polite">
        {t.status}
      </p>

      <section id="conteudo" className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>{t.hero.title}</h1>
          <p className="lead">{t.hero.text}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={`https://wa.me/${phone}?text=${encodeURIComponent(t.whatsappText)}`} target="_blank" rel="noreferrer">
              {t.hero.primary}
            </a>
            <a className="btn btn-secondary" href="#metodo">
              {t.hero.secondary}
            </a>
          </div>
          <p className="cta-note">{t.hero.helper}</p>
        </div>

        <div className="hero-panel" aria-label="Entregas principais">
          <p className="eyebrow">{t.panelEyebrow}</p>
          <h2>{t.proof[0][0]}</h2>
          <div className="hero-panel-list">
            {t.proof.slice(1).map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="solucoes" className="section wrap split">
        <div className="section-copy">
          <p className="eyebrow">{t.solutions.eyebrow}</p>
          <h2>{t.solutions.title}</h2>
          <p>{t.solutions.text}</p>
        </div>
        <div className="service-list">
          {t.solutions.items.map((service) => (
            <article key={service.title} className="service">
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
          <a className="btn btn-secondary service-cta" href={`https://wa.me/${phone}?text=${encodeURIComponent(t.whatsappText)}`} target="_blank" rel="noreferrer">
            {t.solutions.cta}
          </a>
        </div>
      </section>

      <section id="metodo" className="section wrap process method">
        <div className="section-head">
          <p className="eyebrow">{t.method.eyebrow}</p>
          <h2>{t.method.title}</h2>
          <p>{t.method.text}</p>
        </div>
        <div className="steps">
          {t.method.steps.map(([number, title, text]) => (
            <article key={title} className="step">
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projeto" className="section case-section">
        <div className="wrap case-showcase">
          <div className="case-heading">
            <div>
              <p className="eyebrow">{t.case.eyebrow}</p>
              <h2>{t.case.title}</h2>
              <p>{t.case.intro}</p>
            </div>
            <a className="btn btn-primary" href={alquimiaUrl} target="_blank" rel="noreferrer" aria-label={`${t.case.button} (${t.newTab})`}>
              {t.case.button}
            </a>
          </div>

          <div className="case-browser" aria-label={t.case.frameLabel}>
            <div className="browser-bar">
              <span>{alquimiaUrl.replace("https://", "")}</span>
            </div>
            <iframe
              className="case-frame"
              src={alquimiaUrl}
              title="Site Alquimia do Bonsai"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          <div className="case-details">
            <article>
              <span>01</span>
              <h3>{t.case.labels[0]}</h3>
              <p>{t.case.problem}</p>
            </article>
            <article>
              <span>02</span>
              <h3>{t.case.labels[1]}</h3>
              <p>{t.case.solution}</p>
            </article>
            <article>
              <span>03</span>
              <h3>{t.case.labels[2]}</h3>
              <p>{t.case.result}</p>
            </article>
          </div>

          <ul className="case-bullets">
            {t.case.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section wrap technical recurring">
        <div>
          <p className="eyebrow">{t.recurring.eyebrow}</p>
          <h2>{t.recurring.title}</h2>
          <p>{t.recurring.text}</p>
        </div>
        <div className="tech-card">
          <h3>{t.recurring.cardTitle}</h3>
          <ul className="clean-list">
            {t.recurring.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="empresa" className="section wrap about company">
        <div className="founder-mark" aria-hidden="true">
          LS
        </div>
        <div>
          <p className="eyebrow">{t.company.eyebrow}</p>
          <h2>{t.company.title}</h2>
          <p>{t.company.text}</p>
          <div className="facts">
            {t.company.facts.map((fact) => (
              <span key={fact}>{fact}</span>
            ))}
          </div>
          <div className="company-links">
            <a href={githubUrl} target="_blank" rel="noreferrer" aria-label={`GitHub (${t.newTab})`}>
              GitHub
            </a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label={`LinkedIn (${t.newTab})`}>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section className="section wrap faq">
        <h2>{t.faq.title}</h2>
        <div className="faq-list">
          {t.faq.items.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contato" className="section wrap contact">
        <div className="contact-copy">
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.text}</p>
          <div className="contact-actions">
            <a
              className="btn btn-primary"
              href={`https://wa.me/${phone}?text=${encodeURIComponent(t.whatsappText)}`}
              target="_blank"
              rel="noreferrer"
              aria-label={`${t.whatsapp} (${t.newTab})`}
            >
              {t.whatsapp}
            </a>
            <a className="btn btn-secondary" href={briefingForm} target="_blank" rel="noreferrer" aria-label={`${t.contact.formButton} (${t.newTab})`}>
              {t.contact.formButton}
            </a>
          </div>
          <p className="contact-note">{t.contact.note}</p>
          <a className="email" href="mailto:luanspctrabalho@gmail.com">
            luanspctrabalho@gmail.com
          </a>
        </div>

        <form onSubmit={submitContact}>
          <label>
            {t.contact.labels[0]}
            <input name="name" required value={name} onChange={(event) => setName(event.target.value)} placeholder={t.contact.placeholders[0]} autoComplete="name" />
          </label>
          <label>
            {t.contact.labels[1]}
            <input name="projectType" value={projectType} onChange={(event) => setProjectType(event.target.value)} placeholder={t.contact.placeholders[1]} />
          </label>
          <label>
            {t.contact.labels[2]}
            <textarea name="message" required value={message} onChange={(event) => setMessage(event.target.value)} placeholder={t.contact.placeholders[2]} />
          </label>
          <button className="btn btn-secondary" type="submit">
            {t.contact.submit}
          </button>
        </form>
      </section>

      <footer className="wrap">
        <span>{t.footer}</span>
        <a href="#solucoes">{t.nav[0]}</a>
        <a href="#contato">{t.nav[4]}</a>
      </footer>
    </main>
  );
}
