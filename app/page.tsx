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
      title: "Uma presença digital clara para quem precisa ser encontrado, entendido e chamado.",
      text:
        "Desenvolvimento de sites institucionais, landing pages e melhorias em sites existentes para pequenos negócios, profissionais autônomos e marcas em crescimento.",
      primary: "Falar sobre meu site",
      secondary: "Ver método",
      helper: "Orçamento por escopo · Atendimento direto · Site publicado",
    },
    proof: [
      ["Sites que explicam o negócio e abrem conversa com o cliente."],
      ["Projeto real no ar", "Alquimia do Bonsai publicado em domínio próprio."],
      ["Foco em negócio pequeno", "Páginas pensadas para explicar, vender e receber contatos."],
      ["Base técnica própria", "Código, responsividade, publicação e integrações simples."],
    ],
    solutions: {
      eyebrow: "Soluções",
      title: "O que a empresa entrega",
      text:
        "A proposta inicial é simples: construir sites úteis, bem apresentados e fáceis de divulgar, sem transformar o projeto em algo maior do que o negócio precisa agora.",
      cta: "Conversar no WhatsApp",
      items: [
        {
          title: "Site institucional",
          text:
            "Para apresentar empresa, serviço, história, diferenciais, localização, redes sociais e canais de contato em uma estrutura profissional.",
        },
        {
          title: "Landing page",
          text:
            "Para divulgar uma oferta, campanha, curso, evento ou serviço específico com uma página direta e chamada clara para ação.",
        },
        {
          title: "Reforma de site",
          text:
            "Para melhorar um site que já existe: conteúdo, aparência, versão mobile, botões de contato, organização e publicação.",
        },
        {
          title: "Manutenção mensal",
          text:
            "Para manter pequenos ajustes, novas seções, troca de conteúdo e suporte básico depois que o site estiver publicado.",
        },
      ],
    },
    method: {
      eyebrow: "Método",
      title: "Um processo curto para tirar o site do papel",
      text:
        "A operação é enxuta: entender o objetivo, organizar o escopo, construir, revisar e publicar. O cliente sabe o que será entregue antes do desenvolvimento começar.",
      steps: [
        ["1", "Diagnóstico", "Entendimento do negócio, objetivo do site, público, referências e materiais disponíveis."],
        ["2", "Escopo", "Definição das páginas, funcionalidades, prazo, investimento e custos externos como domínio ou hospedagem."],
        ["3", "Produção", "Desenvolvimento da estrutura, layout, responsividade, textos organizados e botões de contato."],
        ["4", "Publicação", "Revisão final, publicação e orientação para divulgar o site com segurança."],
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
      title: "Uma operação pequena, direta e em construção",
      text:
        "A Luan Salles Web nasce como uma empresa enxuta de desenvolvimento de sites. No início, o atendimento, planejamento, desenvolvimento e publicação são conduzidos diretamente por Luan Salles, estudante de Ciência da Computação em Niterói/RJ e desenvolvedor web com experiência em suporte técnico.",
      facts: ["Niterói/RJ", "Atendimento remoto", "Sites para pequenos negócios", "JavaScript e React"],
    },
    recurring: {
      eyebrow: "Depois da publicação",
      title: "Site no ar não precisa virar abandono",
      text:
        "Quando fizer sentido, o projeto pode continuar com manutenção mensal para pequenos ajustes, atualização de conteúdo e evolução gradual. Isso ajuda a transformar site em ativo do negócio, não em arquivo esquecido.",
      cardTitle: "Manutenção opcional",
      items: ["Troca de textos e imagens", "Novas seções simples", "Ajustes de botões e links", "Suporte básico para publicação"],
    },
    faq: {
      title: "Dúvidas comuns",
      items: [
        ["Já existe preço fixo?", "Por enquanto, não. O valor é definido por escopo, porque cada site muda em páginas, conteúdo, prazo, funcionalidades e custos externos."],
        ["Dá para começar com pouco conteúdo?", "Sim. O primeiro passo pode ser organizar o essencial: quem é o negócio, o que oferece, para quem atende e como receber contato."],
        ["Domínio e hospedagem entram no projeto?", "A configuração pode entrar no escopo. Os custos de domínio, hospedagem, banco de dados ou ferramentas externas são combinados separadamente."],
        ["O site fica bom no celular?", "Sim. A versão mobile é tratada como parte central da entrega."],
        ["O formulário é obrigatório?", "Não. O WhatsApp é o caminho principal. O formulário serve quando você já quer enviar mais detalhes antes da conversa."],
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Quer colocar o site do seu negócio no ar?",
      text:
        "Chame no WhatsApp para explicar a ideia em poucas mensagens. Se preferir, preencha o briefing e envie os detalhes do projeto antes da conversa.",
      formButton: "Preencher briefing",
      labels: ["Nome", "Tipo de negócio ou site", "Mensagem"],
      placeholders: [
        "Seu nome",
        "Ex.: clínica, loja local, landing page de serviço",
        "Me conte o que você quer colocar no ar.",
      ],
      submit: "Enviar pelo WhatsApp",
      note: "O formulário abaixo monta uma mensagem pronta para WhatsApp.",
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
      title: "A clear digital presence for businesses that need to be found, understood, and contacted.",
      text:
        "Business websites, landing pages, and website improvements for small businesses, independent professionals, and growing brands.",
      primary: "Talk about my website",
      secondary: "See method",
      helper: "Scoped quote · Direct contact · Published website",
    },
    proof: [
      ["Websites that explain the business and start conversations with customers."],
      ["Real project live", "Alquimia do Bonsai published on its own domain."],
      ["Small business focus", "Pages planned to explain, sell, and receive contacts."],
      ["Technical foundation", "Code, responsiveness, publishing, and simple integrations."],
    ],
    solutions: {
      eyebrow: "Solutions",
      title: "What the company delivers",
      text:
        "The initial offer is simple: build useful, well-presented websites that are easy to share, without making the project bigger than the business needs right now.",
      cta: "Talk on WhatsApp",
      items: [
        {
          title: "Business website",
          text:
            "For presenting a company, service, story, strengths, location, social links, and contact channels in a professional structure.",
        },
        {
          title: "Landing page",
          text:
            "For promoting an offer, campaign, course, event, or specific service with a direct page and clear call to action.",
        },
        {
          title: "Website refresh",
          text:
            "For improving an existing website: content, visual quality, mobile version, contact buttons, structure, and publishing.",
        },
        {
          title: "Monthly care",
          text:
            "For small updates, new sections, content changes, and basic support after the website is published.",
        },
      ],
    },
    method: {
      eyebrow: "Method",
      title: "A short process to get the website online",
      text:
        "The operation is lean: understand the goal, organize the scope, build, review, and publish. The client knows what will be delivered before development starts.",
      steps: [
        ["1", "Diagnosis", "Understanding the business, website goal, audience, references, and available materials."],
        ["2", "Scope", "Definition of pages, features, timeline, investment, and external costs such as domain or hosting."],
        ["3", "Production", "Development of structure, layout, responsiveness, organized copy, and contact buttons."],
        ["4", "Publishing", "Final review, publishing, and guidance to share the website with confidence."],
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
      title: "A small, direct operation in progress",
      text:
        "Luan Salles Web starts as a lean website development company. At this stage, service, planning, development, and publishing are handled directly by Luan Salles, a Computer Science student based in Niterói, Brazil, and a web developer with technical support experience.",
      facts: ["Niterói/RJ, Brazil", "Remote service", "Websites for small businesses", "JavaScript and React"],
    },
    recurring: {
      eyebrow: "After publishing",
      title: "A live website should not be left behind",
      text:
        "When it makes sense, the project can continue with monthly care for small updates, content changes, and gradual improvements. That helps turn the website into a business asset, not a forgotten file.",
      cardTitle: "Optional monthly care",
      items: ["Text and image changes", "Simple new sections", "Button and link adjustments", "Basic publishing support"],
    },
    faq: {
      title: "Common questions",
      items: [
        ["Is there fixed pricing?", "Not yet. Pricing is defined by scope because each website changes in pages, content, timeline, features, and external costs."],
        ["Can we start with little content?", "Yes. The first step can be organizing the essentials: who the business is, what it offers, who it serves, and how to receive contact."],
        ["Are domain and hosting included?", "Configuration can be included in the scope. Domain, hosting, database, or external tool costs are agreed separately."],
        ["Will the website work well on mobile?", "Yes. The mobile version is treated as a central part of the delivery."],
        ["Is the form required?", "No. WhatsApp is the main path. The form helps when you already want to send more details before the conversation."],
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Want to put your business website online?",
      text:
        "Message me on WhatsApp to explain the idea in a few messages. If you prefer, fill out the briefing and send the project details before the conversation.",
      formButton: "Fill briefing",
      labels: ["Name", "Business or website type", "Message"],
      placeholders: ["Your name", "Ex.: clinic, local shop, service landing page", "Tell me what you want to put online."],
      submit: "Send on WhatsApp",
      note: "The form below creates a ready-to-send WhatsApp message.",
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

        <div className="hero-panel" aria-label="Resumo da empresa">
          <p className="eyebrow">{t.brand}</p>
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
