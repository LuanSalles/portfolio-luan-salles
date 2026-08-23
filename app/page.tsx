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
    newTab: "abre em nova aba",
    status: "Idioma alterado para português.",
    hero: {
      eyebrow: "Desenvolvedor web",
      title: "Sites profissionais para apresentar seu negócio com clareza e gerar contatos.",
      text:
        "Desenvolvimento de sites e landing pages para profissionais, pequenos negócios e marcas que precisam de uma presença online organizada, bonita e fácil de acessar pelo celular.",
      primary: "Solicitar orçamento",
      secondary: "Ver projeto publicado",
      helper: "Site para negócios · Landing pages · Ajustes em sites",
    },
    highlights: ["Site para negócios", "Landing pages", "Ajustes em sites"],
    services: {
      title: "Sites para apresentar, vender e receber contatos",
      text:
        "Páginas objetivas, com boa aparência, conteúdo bem organizado e botões de contato no lugar certo.",
      cta: "Falar sobre meu site",
      items: [
        {
          title: "Site para seu negócio",
          text:
            "Uma página completa para mostrar quem você é, o que oferece e como o cliente pode falar com você.",
        },
        {
          title: "Landing page",
          text:
            "Uma página direta para divulgar uma oferta, serviço, curso, evento ou campanha específica.",
        },
        {
          title: "Melhoria de site",
          text:
            "Para deixar um site atual mais bonito, mais organizado e melhor no celular.",
        },
      ],
    },
    case: {
      eyebrow: "Projeto publicado",
      title: "Alquimia do Bonsai",
      text:
        "Site real, publicado e em uso para a marca Alquimia do Bonsai. O projeto apresenta a marca, o livro, os cursos, a loja, conteúdos educativos e canais de contato em português e inglês.",
      bullets: [
        "Funciona bem no computador e no celular",
        "Tem versão em português e inglês",
        "Organiza catálogo, favoritos e carrinho local",
        "Direciona visitantes para WhatsApp, redes sociais e formulários",
      ],
      summary: ["PT/EN", "Loja", "Cursos", "WhatsApp"],
      button: "Abrir site",
    },
    about: {
      eyebrow: "Sobre",
      title: "Quem está por trás do projeto",
      text:
        "Luan Salles é desenvolvedor web em Niterói, com formação em Ciência da Computação em andamento e experiência em suporte técnico. Atua na criação de sites responsivos, organização de conteúdo e publicação de páginas profissionais.",
      facts: ["Niterói/RJ", "Ciência da Computação", "JavaScript e React", "Sites responsivos"],
    },
    process: {
      title: "Como o projeto acontece",
      steps: [
        ["1", "Conversa inicial", "Você conta o que precisa, mostra referências e envia os materiais que já tiver."],
        ["2", "Organização", "São definidos páginas, conteúdo, prazo, valor e o que precisa estar pronto antes do desenvolvimento."],
        ["3", "Criação e publicação", "O site é desenvolvido, revisado com você e preparado para divulgação."],
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Quer criar ou melhorar seu site?",
      text:
        "Entre em contato pelo WhatsApp ou preencha o formulário com mais detalhes. Se a ideia ainda estiver no começo, tudo bem: o primeiro passo é organizar o que faz sentido para o seu negócio.",
      formButton: "Preencher formulário",
      labels: ["Nome", "Tipo de site", "Mensagem"],
      placeholders: [
        "Seu nome",
        "Ex.: site para clínica, landing page, loja local",
        "Me conte o que você quer criar ou melhorar.",
      ],
      submit: "Enviar pelo WhatsApp",
      note: "Ao enviar, o WhatsApp abre com a mensagem pronta.",
      intro: "Oi, Luan. Quero conversar sobre um site.",
      fallbacks: ["Não informado", "Ainda não definido", "Quero criar ou melhorar um site."],
    },
    footer: "Luan Salles · Desenvolvimento de sites",
  },
  en: {
    nav: ["Services", "Project", "About", "Contact"],
    lang: "Select language",
    whatsapp: "WhatsApp",
    whatsappText: "Hi, Luan. I want to talk about a website.",
    newTab: "opens in a new tab",
    status: "Language changed to English.",
    hero: {
      eyebrow: "Web developer",
      title: "I build professional websites for people who need a stronger online presence.",
      text:
        "Website and landing page development for professionals, small businesses, and brands that need an organized, attractive online presence that works well on mobile.",
      primary: "Request a quote",
      secondary: "View published project",
      helper: "Business websites · Landing pages · Website updates",
    },
    highlights: ["Business websites", "Landing pages", "Website updates"],
    services: {
      title: "Websites to present your work, sell, and receive contacts",
      text:
        "Focused pages with a professional look, organized content, and contact buttons where they need to be.",
      cta: "Talk about my website",
      items: [
        {
          title: "Business website",
          text: "A complete page to show who you are, what you offer, and how clients can reach you.",
        },
        {
          title: "Landing page",
          text:
            "A direct page to promote an offer, service, course, event, or specific campaign.",
        },
        {
          title: "Website improvement",
          text:
            "For making an existing website cleaner, better organized, and easier to use on mobile.",
        },
      ],
    },
    case: {
      eyebrow: "Published project",
      title: "Alquimia do Bonsai",
      text:
        "A real website, published and in use for Alquimia do Bonsai. The project presents the brand, book, courses, shop, educational content, and contact channels in Portuguese and English.",
      bullets: [
        "Works well on desktop and mobile",
        "Available in Portuguese and English",
        "Organizes catalog, favorites, and local cart",
        "Guides visitors to WhatsApp, social media, and forms",
      ],
      summary: ["PT/EN", "Shop", "Courses", "WhatsApp"],
      button: "Open website",
    },
    about: {
      eyebrow: "About",
      title: "Who is behind the project",
      text:
        "Luan Salles is a web developer based in Niterói, Brazil, with Computer Science training in progress and experience in technical support. He works on responsive websites, content organization, and publishing professional pages.",
      facts: ["Niterói/RJ, Brazil", "Computer Science", "JavaScript and React", "Responsive websites"],
    },
    process: {
      title: "How the project works",
      steps: [
        ["1", "First conversation", "You explain what you need, share references, and send any materials you already have."],
        ["2", "Planning", "Pages, content, timeline, price, and what needs to be ready before development are defined."],
        ["3", "Build and publish", "The website is developed, reviewed with you, and prepared for sharing."],
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Want to create or improve your website?",
      text:
        "Contact me on WhatsApp or fill out the form with more details. If the idea is still early, that is fine: the first step is organizing what makes sense for your business.",
      formButton: "Quote form",
      labels: ["Name", "Website type", "Message"],
      placeholders: ["Your name", "Ex.: clinic website, landing page, local shop", "Tell me what you want to create or improve."],
      submit: "Send on WhatsApp",
      note: "When you send it, WhatsApp opens with the message ready.",
      intro: "Hi, Luan. I want to talk about a website.",
      fallbacks: ["Not provided", "Not defined yet", "I want to create or improve a website."],
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
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
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
            <a className="btn btn-primary" href={briefingForm} target="_blank" rel="noreferrer">
              {t.hero.primary}
            </a>
            <a className="btn btn-secondary" href="#projeto">
              {t.hero.secondary}
            </a>
          </div>
          <p className="cta-note">{t.hero.helper}</p>
          <div className="hero-tags" aria-label="Serviços principais">
            {t.highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="hero-preview">
          <picture>
            <source
              srcSet="/alquimia-bonsai-760.jpg 760w, /alquimia-bonsai-1180.jpg 1180w"
              sizes="(max-width: 900px) 100vw, 42vw"
              type="image/jpeg"
            />
            <img
              src="/alquimia-bonsai-1180.jpg"
              alt="Página inicial do site Alquimia do Bonsai"
              width="1180"
              height="533"
              fetchPriority="high"
            />
          </picture>
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
          <a className="btn btn-secondary service-cta" href="#contato">
            {t.services.cta}
          </a>
        </div>
      </section>

      <section id="projeto" className="section case-section">
        <div className="wrap case">
          <div className="case-image" aria-label={t.case.title}>
            <picture className="case-desktop">
              <source
                srcSet="/alquimia-bonsai-760.jpg 760w, /alquimia-bonsai-1180.jpg 1180w"
                sizes="(max-width: 900px) 100vw, 48vw"
                type="image/jpeg"
              />
              <img
                src="/alquimia-bonsai-1180.jpg"
                alt="Site Alquimia do Bonsai em desktop"
                width="1180"
                height="533"
                loading="lazy"
              />
            </picture>
            <picture className="case-mobile">
              <img
                src="/alquimia-bonsai-mobile.jpg"
                alt="Site Alquimia do Bonsai no celular"
                width="420"
                height="911"
                loading="lazy"
              />
            </picture>
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
            <a className="btn btn-primary" href={alquimiaUrl} target="_blank" rel="noreferrer" aria-label={`${t.case.button} (${t.newTab})`}>
              {t.case.button}
            </a>
          </div>
        </div>
      </section>

      <section id="sobre" className="section wrap about">
        <img src="/luan-salles.jpeg" alt="Foto de Luan Salles" width="220" height="220" loading="lazy" />
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
            <a className="btn btn-primary" href={briefingForm} target="_blank" rel="noreferrer" aria-label={`${t.contact.formButton} (${t.newTab})`}>
              {t.contact.formButton}
            </a>
            <a
              className="btn btn-secondary"
              href={`https://wa.me/${phone}?text=${encodeURIComponent(t.whatsappText)}`}
              target="_blank"
              rel="noreferrer"
              aria-label={`${t.whatsapp} (${t.newTab})`}
            >
              {t.whatsapp}
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
        <a href="https://github.com/LuanSalles" target="_blank" rel="noreferrer" aria-label={`GitHub (${t.newTab})`}>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/luan-salles-pinheiro-da-costa-440a59250" target="_blank" rel="noreferrer" aria-label={`LinkedIn (${t.newTab})`}>
          LinkedIn
        </a>
      </footer>
    </main>
  );
}
