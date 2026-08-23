"use client";

import { FormEvent, useState } from "react";

type Lang = "pt" | "en";

const phone = "5521979231817";
const briefingForm = "https://forms.gle/ebQXBwmDUHUt6zwn7";
const alquimiaUrl = "https://alquimiadobonsai.com";

const copy = {
  pt: {
    nav: ["Serviços", "Projeto", "Sobre", "Contato"],
    lang: "Selecionar idioma",
    whatsapp: "WhatsApp",
    whatsappText: "Oi, Luan. Quero conversar sobre um site.",
    hero: {
      eyebrow: "Desenvolvedor web",
      title: "Sites claros, responsivos e prontos para gerar contato.",
      text:
        "Sou Luan Salles. Desenvolvo sites institucionais e landing pages para profissionais, pequenos negócios e marcas que precisam organizar sua presença online.",
      primary: "Pedir orçamento",
      secondary: "Ver projeto real",
    },
    highlights: ["Sites institucionais", "Landing pages", "Melhoria de sites"],
    services: {
      title: "O que eu posso construir para você",
      text:
        "Sem promessa exagerada e sem pacote confuso. O foco é entregar uma página profissional, fácil de entender e bem adaptada ao celular.",
      items: [
        {
          title: "Site institucional",
          text:
            "Para apresentar seu negócio, serviços, história, diferenciais e canais de contato em um endereço profissional.",
        },
        {
          title: "Landing page",
          text:
            "Para divulgar uma oferta, evento, curso, produto ou serviço com uma página objetiva e voltada para conversão.",
        },
        {
          title: "Ajuste de site existente",
          text:
            "Para melhorar organização, visual, versão mobile, conteúdo e caminho de contato de um site que já está no ar.",
        },
      ],
    },
    case: {
      eyebrow: "Projeto publicado",
      title: "Alquimia do Bonsai",
      text:
        "Site completo e funcional para uma marca de bonsai. O projeto reúne apresentação institucional, livro, cursos, catálogo, conteúdos, loja, redes sociais e contato em português e inglês.",
      bullets: [
        "Site responsivo para desktop e celular",
        "Versão em português e inglês",
        "Catálogo, favoritos e carrinho local",
        "Integração com WhatsApp, redes sociais e formulários",
      ],
      button: "Abrir site",
    },
    about: {
      eyebrow: "Sobre",
      title: "Quem vai construir seu site",
      text:
        "Sou estudante de Ciência da Computação em Niterói e venho direcionando minha carreira para desenvolvimento web. Minha experiência em suporte técnico me ajuda a entender problemas reais, organizar informações e transformar necessidade em uma entrega prática.",
      facts: ["Niterói/RJ", "Ciência da Computação", "React e JavaScript", "Atendimento remoto"],
    },
    process: {
      title: "Como funciona",
      steps: [
        ["1", "Entendimento", "Você me envia o objetivo do site, referências, prazo e materiais disponíveis."],
        ["2", "Proposta", "Eu organizo escopo, páginas, prazo e investimento antes de começar."],
        ["3", "Construção", "Desenvolvo, reviso com você e deixo o site pronto para publicação."],
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Quer tirar seu site do papel?",
      text:
        "Me chame no WhatsApp ou preencha o formulário de orçamento. Se ainda não souber exatamente o que precisa, tudo bem: eu te ajudo a organizar a ideia.",
      formButton: "Formulário de orçamento",
      labels: ["Nome", "Tipo de site", "Mensagem"],
      placeholders: [
        "Seu nome",
        "Ex.: site para clínica, landing page, loja local",
        "Conte em poucas linhas o que você precisa.",
      ],
      submit: "Enviar pelo WhatsApp",
      intro: "Oi, Luan. Quero conversar sobre um site.",
      fallbacks: ["Não informado", "Ainda não definido", "Quero entender qual site faz sentido para meu negócio."],
    },
    footer: "Luan Salles · Desenvolvimento de sites",
  },
  en: {
    nav: ["Services", "Project", "About", "Contact"],
    lang: "Select language",
    whatsapp: "WhatsApp",
    whatsappText: "Hi, Luan. I want to talk about a website.",
    hero: {
      eyebrow: "Web developer",
      title: "Clear, responsive websites built to generate contact.",
      text:
        "I am Luan Salles. I build business websites and landing pages for professionals, small businesses, and brands that need a better online presence.",
      primary: "Request a quote",
      secondary: "View real project",
    },
    highlights: ["Business websites", "Landing pages", "Website improvements"],
    services: {
      title: "What I can build for you",
      text:
        "No inflated promise and no confusing package. The focus is a professional page that is easy to understand and works well on mobile.",
      items: [
        {
          title: "Business website",
          text: "To present your business, services, story, strengths, and contact channels in a professional address.",
        },
        {
          title: "Landing page",
          text:
            "To promote an offer, event, course, product, or service with an objective conversion-focused page.",
        },
        {
          title: "Website improvement",
          text:
            "To improve structure, visuals, mobile experience, content, and contact flow on a website that already exists.",
        },
      ],
    },
    case: {
      eyebrow: "Published project",
      title: "Alquimia do Bonsai",
      text:
        "A complete, functional website for a bonsai brand. The project brings together institutional presentation, book, courses, catalog, content, shop, social channels, and contact in Portuguese and English.",
      bullets: [
        "Responsive website for desktop and mobile",
        "Portuguese and English versions",
        "Catalog, favorites, and local cart",
        "WhatsApp, social media, and form integrations",
      ],
      button: "Open website",
    },
    about: {
      eyebrow: "About",
      title: "Who will build your website",
      text:
        "I am a Computer Science student in Niterói, Brazil, and I am focusing my career on web development. My technical support experience helps me understand real problems, organize information, and turn needs into practical delivery.",
      facts: ["Niterói/RJ, Brazil", "Computer Science", "React and JavaScript", "Remote service"],
    },
    process: {
      title: "How it works",
      steps: [
        ["1", "Understanding", "You send the website goal, references, timeline, and available materials."],
        ["2", "Proposal", "I organize scope, pages, timeline, and investment before starting."],
        ["3", "Build", "I develop, review with you, and leave the website ready to publish."],
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Want to bring your website online?",
      text:
        "Message me on WhatsApp or fill out the quote form. If you are not sure what you need yet, that is fine: I help you organize the idea.",
      formButton: "Quote form",
      labels: ["Name", "Website type", "Message"],
      placeholders: ["Your name", "Ex.: clinic website, landing page, local shop", "Tell me briefly what you need."],
      submit: "Send on WhatsApp",
      intro: "Hi, Luan. I want to talk about a website.",
      fallbacks: ["Not provided", "Not defined yet", "I want to understand which website makes sense for my business."],
    },
    footer: "Luan Salles · Website development",
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("pt");
  const [name, setName] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");
  const t = copy[lang];

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
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Luan Salles">
          <span className="brand-mark">LS</span>
          <span>Luan Salles</span>
        </a>

        <nav className="nav" aria-label="Navegação principal">
          <a href="#servicos">{t.nav[0]}</a>
          <a href="#projeto">{t.nav[1]}</a>
          <a href="#sobre">{t.nav[2]}</a>
          <a href="#contato">{t.nav[3]}</a>
        </nav>

        <div className="header-actions">
          <div className="lang-switch" aria-label={t.lang}>
            <button className={lang === "pt" ? "active" : ""} type="button" onClick={() => setLang("pt")}>
              PT
            </button>
            <button className={lang === "en" ? "active" : ""} type="button" onClick={() => setLang("en")}>
              EN
            </button>
          </div>
          <a
            className="btn btn-primary header-whatsapp"
            href={`https://wa.me/${phone}?text=${encodeURIComponent(t.whatsappText)}`}
            target="_blank"
            rel="noreferrer"
          >
            {t.whatsapp}
          </a>
        </div>
      </header>

      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>{t.hero.title}</h1>
          <p className="lead">{t.hero.text}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={briefingForm} target="_blank" rel="noreferrer">
              {t.hero.primary}
            </a>
            <a className="btn btn-secondary" href="#projeto">
              {t.hero.secondary}
            </a>
          </div>
          <div className="hero-tags" aria-label="Serviços principais">
            {t.highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="hero-preview">
          <img src="/alquimia-bonsai-desktop.png" alt="Página inicial do site Alquimia do Bonsai" />
        </div>
      </section>

      <section id="servicos" className="section wrap split">
        <div className="section-copy">
          <p className="eyebrow">{t.nav[0]}</p>
          <h2>{t.services.title}</h2>
          <p>{t.services.text}</p>
        </div>
        <div className="service-list">
          {t.services.items.map((service) => (
            <article key={service.title} className="service">
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projeto" className="section case-section">
        <div className="wrap case">
          <div className="case-image">
            <img src="/alquimia-bonsai-desktop.png" alt="Site Alquimia do Bonsai em desktop" />
          </div>
          <div className="case-copy">
            <p className="eyebrow">{t.case.eyebrow}</p>
            <h2>{t.case.title}</h2>
            <p>{t.case.text}</p>
            <ul>
              {t.case.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a className="btn btn-primary" href={alquimiaUrl} target="_blank" rel="noreferrer">
              {t.case.button}
            </a>
          </div>
        </div>
      </section>

      <section id="sobre" className="section wrap about">
        <img src="/luan-salles.jpeg" alt="Foto de Luan Salles" />
        <div>
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2>{t.about.title}</h2>
          <p>{t.about.text}</p>
          <div className="facts">
            {t.about.facts.map((fact) => (
              <span key={fact}>{fact}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section wrap process">
        <h2>{t.process.title}</h2>
        <div className="steps">
          {t.process.steps.map(([number, title, text]) => (
            <article key={title} className="step">
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contato" className="section wrap contact">
        <div className="contact-copy">
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.text}</p>
          <div className="contact-actions">
            <a className="btn btn-primary" href={briefingForm} target="_blank" rel="noreferrer">
              {t.contact.formButton}
            </a>
            <a
              className="btn btn-secondary"
              href={`https://wa.me/${phone}?text=${encodeURIComponent(t.whatsappText)}`}
              target="_blank"
              rel="noreferrer"
            >
              {t.whatsapp}
            </a>
          </div>
          <a className="email" href="mailto:luanspctrabalho@gmail.com">
            luanspctrabalho@gmail.com
          </a>
        </div>

        <form onSubmit={submitContact}>
          <label>
            {t.contact.labels[0]}
            <input value={name} onChange={(event) => setName(event.target.value)} placeholder={t.contact.placeholders[0]} autoComplete="name" />
          </label>
          <label>
            {t.contact.labels[1]}
            <input value={projectType} onChange={(event) => setProjectType(event.target.value)} placeholder={t.contact.placeholders[1]} />
          </label>
          <label>
            {t.contact.labels[2]}
            <textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder={t.contact.placeholders[2]} />
          </label>
          <button className="btn btn-secondary" type="submit">
            {t.contact.submit}
          </button>
        </form>
      </section>

      <footer className="wrap">
        <span>{t.footer}</span>
        <a href="https://github.com/LuanSalles" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/luan-salles-pinheiro-da-costa-440a59250" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </footer>
    </main>
  );
}
