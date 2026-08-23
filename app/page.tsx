"use client";

import Image from "next/image";
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
    nav: ["Serviços", "Projeto", "Sobre", "Contato"],
    lang: "Selecionar idioma",
    whatsapp: "WhatsApp",
    whatsappText: "Oi, Luan. Quero conversar sobre a criação de um site.",
    newTab: "abre em nova aba",
    status: "Idioma alterado para português.",
    hero: {
      eyebrow: "Desenvolvedor web",
      title: "Sites profissionais para pequenos negócios, profissionais e marcas.",
      text:
        "Criação de sites e landing pages com estrutura clara, versão mobile bem cuidada, contato por WhatsApp e publicação preparada para o cliente começar a divulgar.",
      primary: "Quero criar meu site",
      secondary: "Ver projeto publicado",
      helper: "Atendimento direto · Escopo combinado antes do início · Entrega publicada",
    },
    trust: {
      eyebrow: "Como entrego",
      title: "Um site precisa ficar bonito, carregar bem e deixar o contato fácil.",
      items: [
        ["Mobile primeiro", "Layout pensado para celular, sem depender de adaptações improvisadas."],
        ["Contato visível", "Botões para WhatsApp, formulário, redes e links importantes no fluxo certo."],
        ["Publicação organizada", "Entrega com domínio, hospedagem e ajustes finais combinados no escopo."],
      ],
    },
    services: {
      title: "O que você pode contratar",
      text:
        "Foco em sites que ajudam uma pessoa ou negócio a se apresentar melhor, explicar sua oferta e receber contatos com menos atrito.",
      cta: "Falar sobre meu site",
      items: [
        {
          title: "Site institucional",
          text:
            "Para apresentar uma empresa, profissional, clínica, marca ou projeto com páginas essenciais, contato e aparência profissional.",
        },
        {
          title: "Landing page",
          text:
            "Para divulgar uma oferta, curso, serviço, evento ou campanha com uma página direta e chamada clara para ação.",
        },
        {
          title: "Ajustes em site existente",
          text:
            "Para melhorar organização, responsividade, textos, botões de contato e aparência de um site que já está no ar.",
        },
      ],
    },
    case: {
      eyebrow: "Projeto real publicado",
      title: "Alquimia do Bonsai",
      intro:
        "Site institucional e comercial desenvolvido para a Alquimia do Bonsai, marca de Luane Salles e Alexandre Braga.",
      problem:
        "A marca reunia livro, cursos, catálogo, conteúdos educativos, redes sociais e contatos em canais separados. Faltava uma presença digital única para organizar tudo e facilitar o caminho do visitante.",
      solution:
        "O site concentra a apresentação da marca, loja, escola, vídeos, livro, materiais externos e contato em português e inglês, com navegação responsiva para computador e celular.",
      result:
        "Hoje o projeto está publicado em domínio próprio e pode ser usado para apresentar a marca, divulgar produtos e direcionar interessados para WhatsApp, Amazon, formulários e redes sociais.",
      bullets: [
        "Site responsivo em português e inglês",
        "Catálogo, favoritos e carrinho com dados locais",
        "Integração com WhatsApp, Google Drive, Amazon e redes sociais",
        "Organização de conteúdo, navegação, interface e publicação",
      ],
      button: "Abrir site ao vivo",
      frameLabel: "Demonstração interativa do site Alquimia do Bonsai",
    },
    technical: {
      eyebrow: "Projetos técnicos",
      title: "Também desenvolvo sistemas web",
      text:
        "Além de sites, desenvolvo aplicações com login, painel administrativo, banco de dados e regras de negócio. O FuteGestão CT é um sistema privado para gestão interna de centros de futevôlei.",
      cta: "Ver GitHub",
      tags: ["React", "Node.js", "Prisma", "PostgreSQL", "Autenticação"],
    },
    about: {
      eyebrow: "Sobre",
      title: "Luan Salles",
      text:
        "Sou desenvolvedor web em Niterói/RJ, estudante de Ciência da Computação e tenho experiência anterior com suporte técnico. Essa base ajuda a transformar necessidades reais de clientes em sites organizados, fáceis de usar e possíveis de manter.",
      facts: ["Niterói/RJ", "Ciência da Computação", "JavaScript e React", "Suporte técnico"],
    },
    process: {
      title: "Como o projeto acontece",
      steps: [
        ["1", "Conversa inicial", "Entendo o objetivo, o público, as referências e o que o site precisa resolver."],
        ["2", "Escopo e conteúdo", "Definimos páginas, textos, materiais, prazo, valor e responsabilidades antes do desenvolvimento."],
        ["3", "Criação e publicação", "Desenvolvo, reviso com você, ajusto o necessário e preparo o site para divulgação."],
      ],
    },
    faq: {
      title: "Dúvidas comuns",
      items: [
        ["Quanto custa um site?", "O valor é sob orçamento, porque depende de páginas, funcionalidades, prazo, conteúdo e custos externos."],
        ["O domínio e a hospedagem estão incluídos?", "Posso orientar a contratação e configurar a publicação. Custos de domínio, hospedagem e serviços externos são combinados à parte."],
        ["O que preciso enviar para começar?", "Textos, logo, fotos, referências e informações principais do negócio. Se ainda não tiver tudo, eu ajudo a organizar."],
        ["O site funciona no celular?", "Sim. A versão mobile é parte central do desenvolvimento."],
        ["O formulário detalhado é obrigatório?", "Não. Você pode chamar direto no WhatsApp. O formulário ajuda quando o projeto já tem mais informações."],
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos organizar seu site?",
      text:
        "Chame no WhatsApp para uma conversa direta. Se preferir detalhar o projeto antes, use o formulário de orçamento.",
      formButton: "Preencher briefing",
      labels: ["Nome", "Tipo de site", "Mensagem"],
      placeholders: [
        "Seu nome",
        "Ex.: site para clínica, landing page, loja local",
        "Me conte o que você quer criar ou melhorar.",
      ],
      submit: "Enviar pelo WhatsApp",
      note: "O formulário abaixo monta uma mensagem pronta para WhatsApp.",
      intro: "Oi, Luan. Quero conversar sobre a criação de um site.",
      fallbacks: ["Não informado", "Ainda não definido", "Quero criar ou melhorar um site."],
    },
    footer: "Luan Salles · Desenvolvimento de sites",
  },
  en: {
    htmlLang: "en",
    nav: ["Services", "Project", "About", "Contact"],
    lang: "Select language",
    whatsapp: "WhatsApp",
    whatsappText: "Hi, Luan. I want to talk about creating a website.",
    newTab: "opens in a new tab",
    status: "Language changed to English.",
    hero: {
      eyebrow: "Web developer",
      title: "Professional websites for small businesses, professionals, and brands.",
      text:
        "Website and landing page development with clear structure, careful mobile layout, WhatsApp contact, and publishing ready for the client to start sharing.",
      primary: "I need a website",
      secondary: "View published project",
      helper: "Direct contact · Scope defined before starting · Published delivery",
    },
    trust: {
      eyebrow: "How I deliver",
      title: "A website needs to look good, work well, and make contact easy.",
      items: [
        ["Mobile first", "Layout planned for phones, not treated as an afterthought."],
        ["Clear contact paths", "WhatsApp, forms, social links, and important actions placed in the right flow."],
        ["Organized publishing", "Delivery with domain, hosting, and final adjustments defined in the scope."],
      ],
    },
    services: {
      title: "What you can hire me for",
      text:
        "Focused websites that help a person or business present itself better, explain the offer, and receive contacts with less friction.",
      cta: "Talk about my website",
      items: [
        {
          title: "Business website",
          text:
            "For companies, professionals, clinics, brands, or projects that need essential pages, contact, and a professional look.",
        },
        {
          title: "Landing page",
          text:
            "For promoting an offer, course, service, event, or campaign with one clear page and a strong call to action.",
        },
        {
          title: "Website improvements",
          text:
            "For improving structure, mobile layout, copy, contact buttons, and visual quality on an existing website.",
        },
      ],
    },
    case: {
      eyebrow: "Real published project",
      title: "Alquimia do Bonsai",
      intro:
        "Institutional and commercial website developed for Alquimia do Bonsai, a brand by Luane Salles and Alexandre Braga.",
      problem:
        "The brand had a book, courses, catalog, educational content, social media, and contact channels spread across different places. It needed one digital presence to organize everything and guide visitors.",
      solution:
        "The website brings together the brand, shop, school, videos, book, external materials, and contact paths in Portuguese and English, with responsive navigation for desktop and mobile.",
      result:
        "The project is live on its own domain and helps present the brand, promote products, and send visitors to WhatsApp, Amazon, forms, and social media.",
      bullets: [
        "Responsive website in Portuguese and English",
        "Catalog, favorites, and cart using local data",
        "Integrations with WhatsApp, Google Drive, Amazon, and social media",
        "Content structure, navigation, interface, and publishing",
      ],
      button: "Open live website",
      frameLabel: "Interactive preview of the Alquimia do Bonsai website",
    },
    technical: {
      eyebrow: "Technical projects",
      title: "I also build web systems",
      text:
        "Beyond websites, I build applications with login, admin panels, databases, and business rules. FuteGestão CT is a private system for internal management of footvolley centers.",
      cta: "View GitHub",
      tags: ["React", "Node.js", "Prisma", "PostgreSQL", "Authentication"],
    },
    about: {
      eyebrow: "About",
      title: "Luan Salles",
      text:
        "I am a web developer based in Niterói, Brazil, a Computer Science student, and I have previous technical support experience. That background helps me turn real client needs into organized, usable, maintainable websites.",
      facts: ["Niterói/RJ, Brazil", "Computer Science", "JavaScript and React", "Technical support"],
    },
    process: {
      title: "How the project works",
      steps: [
        ["1", "First conversation", "I understand the goal, audience, references, and what the website needs to solve."],
        ["2", "Scope and content", "We define pages, copy, materials, timeline, price, and responsibilities before development."],
        ["3", "Build and publish", "I develop, review with you, adjust what is needed, and prepare the site for sharing."],
      ],
    },
    faq: {
      title: "Common questions",
      items: [
        ["How much does a website cost?", "Pricing is quoted by scope because pages, features, timeline, content, and external costs change from project to project."],
        ["Are domain and hosting included?", "I can guide and configure publishing. Domain, hosting, and external service costs are agreed separately."],
        ["What do I need to send first?", "Copy, logo, photos, references, and main business information. If you do not have everything yet, I help organize it."],
        ["Will the website work on mobile?", "Yes. The mobile version is a central part of the development."],
        ["Is the detailed form required?", "No. You can message me directly on WhatsApp. The form helps when the project already has more information."],
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let us organize your website?",
      text:
        "Message me on WhatsApp for a direct conversation. If you prefer to describe the project first, use the quote briefing form.",
      formButton: "Fill briefing",
      labels: ["Name", "Website type", "Message"],
      placeholders: ["Your name", "Ex.: clinic website, landing page, local shop", "Tell me what you want to create or improve."],
      submit: "Send on WhatsApp",
      note: "The form below creates a ready-to-send WhatsApp message.",
      intro: "Hi, Luan. I want to talk about creating a website.",
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
            <a className="btn btn-primary" href={`https://wa.me/${phone}?text=${encodeURIComponent(t.whatsappText)}`} target="_blank" rel="noreferrer">
              {t.hero.primary}
            </a>
            <a className="btn btn-secondary" href="#projeto">
              {t.hero.secondary}
            </a>
          </div>
          <p className="cta-note">{t.hero.helper}</p>
        </div>

        <div className="hero-panel" aria-label="Resumo de confiança">
          <p className="eyebrow">{t.trust.eyebrow}</p>
          <h2>{t.trust.title}</h2>
          <div className="hero-panel-list">
            {t.trust.items.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
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
              <h3>Problema</h3>
              <p>{t.case.problem}</p>
            </article>
            <article>
              <span>02</span>
              <h3>Solução</h3>
              <p>{t.case.solution}</p>
            </article>
            <article>
              <span>03</span>
              <h3>Resultado</h3>
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

      <section className="section wrap technical">
        <div>
          <p className="eyebrow">{t.technical.eyebrow}</p>
          <h2>{t.technical.title}</h2>
          <p>{t.technical.text}</p>
        </div>
        <div className="tech-card">
          <h3>FuteGestão CT</h3>
          <p>Gestão de alunos, turmas, presença, pagamentos, equipe e painel administrativo.</p>
          <div className="facts">
            {t.technical.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <a className="btn btn-secondary" href={githubUrl} target="_blank" rel="noreferrer" aria-label={`${t.technical.cta} (${t.newTab})`}>
            {t.technical.cta}
          </a>
        </div>
      </section>

      <section id="sobre" className="section wrap about">
        <Image src="/luan-salles.jpeg" alt="Foto de Luan Salles" width={220} height={220} loading="lazy" />
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
        <a href={githubUrl} target="_blank" rel="noreferrer" aria-label={`GitHub (${t.newTab})`}>
          GitHub
        </a>
        <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label={`LinkedIn (${t.newTab})`}>
          LinkedIn
        </a>
      </footer>
    </main>
  );
}
