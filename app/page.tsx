"use client";

import { FormEvent, useState } from "react";

type Lang = "pt" | "en";

const phone = "5521979231817";
const briefingForm = "https://forms.gle/ebQXBwmDUHUt6zwn7";
const alquimiaUrl = "https://alquimiadobonsai.com";

const content = {
  pt: {
    langLabel: "Selecionar idioma",
    brandAria: "Voltar ao início",
    navAria: "Navegação principal",
    nav: ["Serviços", "Projeto", "Sobre", "Técnico", "Processo", "Contato"],
    whatsapp: "WhatsApp",
    whatsappText: "Oi, Luan. Quero tirar uma dúvida sobre criação de site.",
    floating: "Tirar dúvida",
    hero: {
      eyebrow: "Desenvolvimento web focado em sites",
      title: "Sites profissionais para negócios que precisam vender melhor online.",
      lead:
        "Sou Luan Salles, desenvolvedor web em Niterói. Crio sites institucionais, landing pages e páginas comerciais para profissionais e pequenos negócios que precisam de presença digital clara, rápida e pronta para gerar contato.",
      primary: "Solicitar proposta",
      secondary: "Ver site publicado",
      imageAlt: "Página inicial do site Alquimia do Bonsai",
    },
    servicesTitle: "Meu foco é construir sites. Bem feitos, responsivos e fáceis de entender.",
    services: [
      {
        title: "Sites institucionais",
        text:
          "Para empresas, profissionais liberais, lojas locais, clínicas, estúdios e prestadores de serviço que precisam apresentar marca, serviços e formas de contato.",
        items: ["Home, sobre, serviços e contato", "Versão mobile bem resolvida", "Publicação com domínio e SEO básico"],
      },
      {
        title: "Landing pages",
        text:
          "Para vender uma oferta específica, divulgar campanha, captar leads, apresentar um lançamento ou organizar uma página objetiva de conversão.",
        items: ["Copy direta e seções de venda", "Botões de ação bem posicionados", "Integração com WhatsApp ou formulário"],
      },
      {
        title: "Evolução de sites",
        text:
          "Para quem já tem um site no ar, mas precisa melhorar aparência, organização, performance, conteúdo, versão mobile ou caminho de contato.",
        items: ["Correção visual e responsiva", "Novas seções ou páginas", "Ajustes de conteúdo e experiência"],
      },
    ],
    case: {
      eyebrow: "Estudo de caso",
      title: "Alquimia do Bonsai · Bonsai Alchemy",
      text:
        "Site completo, publicado e em uso para a marca Alquimia do Bonsai. O projeto reúne apresentação institucional, livro, cursos, conteúdos educativos, catálogo, loja, redes sociais e contato em uma experiência responsiva e bilíngue.",
      blocks: [
        ["Objetivo", "Centralizar produtos, escola, livro, conteúdos e canais comerciais em um site profissional, sem depender de vários links soltos."],
        ["Solução", "Criação de um site bilíngue com páginas comerciais, catálogo, materiais digitais, navegação clara e integrações externas."],
        ["Minha atuação", "Estrutura das páginas, desenvolvimento frontend, responsividade, interações, organização dos conteúdos e publicação."],
        ["Resultado", "Um site funcional, publicado em domínio próprio e pronto para receber visitantes, apresentar a marca e direcionar contatos."],
      ],
      proof: [
        "Estrutura e implementação das páginas",
        "Versões em português e inglês",
        "Catálogo com filtros, favoritos e carrinho local",
        "Integrações com WhatsApp, redes sociais, PDFs e formulários",
        "Publicação em domínio próprio",
      ],
      note: "Projeto 100% funcional e publicado. Este é o principal estudo de caso do meu portfólio como desenvolvedor web focado em sites.",
      liveLabel: "Ver site publicado",
      imageAlt: "Site Alquimia do Bonsai em desktop",
    },
    about: {
      eyebrow: "Sobre mim",
      title: "O responsável por entender, construir e publicar seu site.",
      photoAlt: "Foto de Luan Salles",
      text:
        "Sou estudante de Ciência da Computação em Niterói e desenvolvedor de sites e sistemas web. Minha experiência começou no suporte técnico, trabalhando diretamente com usuários e resolução de problemas, e evoluiu para o desenvolvimento de projetos próprios e soluções digitais para pequenos negócios.",
      facts: [
        "Niterói/RJ",
        "Atendimento remoto",
        "Ciência da Computação",
        "CR 8,24",
        "Experiência em suporte",
        "Site publicado",
        "Sistema em desenvolvimento",
      ],
    },
    system: {
      eyebrow: "Base técnica complementar",
      title: "Também desenvolvo sistemas web, mas meu foco comercial agora é criação de sites.",
      text:
        "O FuteGestão CT mostra minha capacidade de trabalhar com regras de negócio, painéis, permissões e dados. Essa experiência fortalece meus projetos de site, porque me ajuda a pensar em estrutura, organização, performance e evolução técnica.",
      aria: "Demonstração sem dados reais do FuteGestão CT",
      metrics: ["alunos ativos", "turmas", "presença"],
      rows: [
        ["Aluno Demo", "Particular · em dia"],
        ["Maria Exemplo", "Gympass · chamada feita"],
        ["João Teste", "Plano mensal · frequência alta"],
      ],
    },
    technical: {
      eyebrow: "Tecnologias para desenvolvimento web",
      title: "Construo sites com código, responsividade e atenção à entrega.",
      text:
        "Meu caminho profissional é desenvolvimento web. Trabalho com HTML, CSS, JavaScript e React, organizando páginas, componentes, integrações, deploy e manutenção para entregar sites que funcionam bem no celular e no desktop.",
      groups: [
        ["Frontend", ["HTML", "CSS", "JavaScript", "React", "Vite", "Tailwind CSS"]],
        ["Backend e dados", ["Node.js", "Express", "Prisma", "SQLite", "PostgreSQL", "JWT"]],
        ["Entrega", ["Vercel", "Docker", "Nginx", "Git", "Responsividade", "Deploy"]],
      ],
    },
    trust: {
      eyebrow: "Confiança",
      title: "O que precisa ficar claro antes de construir um site.",
      text:
        "O mercado de sites varia muito de preço porque cada projeto tem escopo, conteúdo, prazo e integrações diferentes. Por isso eu trabalho com orçamento por projeto, depois de entender o objetivo do site.",
      items: [
        "Atendimento em Niterói e remoto",
        "Layout adaptado para celular, tablet e computador",
        "Orientação sobre domínio e hospedagem",
        "Escopo e investimento definidos antes do desenvolvimento",
        "Revisão antes da publicação",
        "Contato via WhatsApp, e-mail ou formulário configurado",
      ],
    },
    process: {
      eyebrow: "Processo",
      title: "Como o orçamento vira site publicado.",
      text:
        "Um bom site não começa no código. Começa entendendo o negócio, o público, o objetivo da página e qual ação o visitante precisa tomar.",
      steps: [
        ["Levantamento do projeto", "Você envia tipo de negócio, objetivo, páginas necessárias, prazo, referências e materiais disponíveis."],
        ["Definição do escopo", "Eu organizo o que será entregue, quais materiais faltam, prazo estimado e custos externos possíveis."],
        ["Desenvolvimento", "Desenvolvo o site com foco em clareza, adaptação para celular, contato rápido e aparência profissional."],
        ["Revisão e publicação", "Reviso os detalhes finais, publico o site e deixo tudo pronto para divulgação."],
      ],
    },
    contact: {
      eyebrow: "Proposta",
      title: "Precisa de um site profissional para seu negócio?",
      text:
        "Me envie o tipo de site, objetivo, prazo, referências e materiais disponíveis. Com essas informações eu consigo avaliar escopo, prazo e investimento com mais precisão.",
      proposal: "Solicitar proposta",
      labels: ["Nome", "Tipo de site ou negócio", "Mensagem"],
      placeholders: [
        "Seu nome",
        "Ex.: clínica, personal trainer, landing page de evento",
        "Descreva o negócio, objetivo e prazo desejado.",
      ],
      submit: "Enviar informações pelo WhatsApp",
      messageIntro: "Oi, Luan. Quero conversar sobre um site.",
      nameFallback: "Não informado",
      typeFallback: "Ainda não definido",
      messageFallback: "Quero entender o melhor formato para meu site.",
      messageLabels: ["Nome", "Tipo de site ou negócio", "Mensagem"],
    },
    faq: {
      eyebrow: "Dúvidas frequentes",
      title: "Pontos importantes antes de começar.",
      text: "Estas respostas ajudam a alinhar expectativas sobre custos externos, materiais, revisões e publicação.",
      items: [
        ["O domínio está incluído?", "O domínio é contratado em nome do cliente. O custo é informado separadamente antes da contratação."],
        ["A hospedagem está incluída?", "Depende da estrutura do projeto. As opções e possíveis custos são apresentados junto com a proposta."],
        ["Quanto custa um site?", "O valor depende do escopo. Como referência de mercado, landing pages e sites institucionais costumam variar bastante conforme páginas, conteúdo, integrações e prazo."],
        ["Quem envia textos e imagens?", "Os materiais são fornecidos pelo cliente. Eu organizo e adapto esse conteúdo para uso no site e oriento sobre o que estiver faltando."],
        ["O site funciona no celular?", "Sim. Todos os projetos são desenvolvidos com adaptação para celulares, tablets e computadores."],
        ["Posso solicitar alterações?", "Sim. O número de revisões e os tipos de alteração ficam definidos na proposta antes do início."],
      ],
    },
    footer: ["Luan Salles · Desenvolvimento de sites", "Niterói/RJ · Atendimento remoto"],
  },
  en: {
    langLabel: "Select language",
    brandAria: "Back to top",
    navAria: "Main navigation",
    nav: ["Services", "Project", "About", "Technical", "Process", "Contact"],
    whatsapp: "WhatsApp",
    whatsappText: "Hi, Luan. I want to ask a question about a website project.",
    floating: "Ask a question",
    hero: {
      eyebrow: "Web development focused on websites",
      title: "Professional websites for businesses that need to sell better online.",
      lead:
        "I am Luan Salles, a web developer based in Niterói, Brazil. I build business websites, landing pages, and commercial pages for professionals and small businesses that need a clear, fast, mobile-ready online presence.",
      primary: "Request a proposal",
      secondary: "View live website",
      imageAlt: "Homepage of the Alquimia do Bonsai website",
    },
    servicesTitle: "My focus is building websites. Clear, responsive, and easy to understand.",
    services: [
      {
        title: "Business websites",
        text:
          "For companies, independent professionals, local shops, clinics, studios, and service providers that need to present their brand, services, and contact paths.",
        items: ["Home, about, services, and contact", "Strong mobile experience", "Publishing with domain and basic SEO"],
      },
      {
        title: "Landing pages",
        text:
          "For selling a specific offer, promoting a campaign, capturing leads, launching a product, or organizing a focused conversion page.",
        items: ["Direct copy and sales sections", "Well-positioned call-to-action buttons", "WhatsApp or form integration"],
      },
      {
        title: "Website improvements",
        text:
          "For businesses that already have a website online but need better visuals, organization, performance, content, mobile experience, or contact flow.",
        items: ["Visual and responsive fixes", "New sections or pages", "Content and experience adjustments"],
      },
    ],
    case: {
      eyebrow: "Case study",
      title: "Alquimia do Bonsai · Bonsai Alchemy",
      text:
        "A complete, published, live website for Alquimia do Bonsai. The project brings together institutional presentation, book, courses, educational content, catalog, shop, social channels, and contact in a responsive bilingual experience.",
      blocks: [
        ["Goal", "Centralize products, school, book, content, and commercial channels in a professional website instead of relying on scattered links."],
        ["Solution", "Creation of a bilingual website with commercial pages, catalog, digital materials, clear navigation, and external integrations."],
        ["My role", "Page structure, frontend development, responsiveness, interactions, content organization, and publishing."],
        ["Result", "A functional website, published on a custom domain and ready to receive visitors, present the brand, and direct contacts."],
      ],
      proof: [
        "Page structure and implementation",
        "Portuguese and English versions",
        "Catalog with filters, favorites, and local cart",
        "Integrations with WhatsApp, social networks, PDFs, and forms",
        "Published on a custom domain",
      ],
      note: "Fully functional and published project. This is the main case study in my portfolio as a web developer focused on websites.",
      liveLabel: "View live website",
      imageAlt: "Alquimia do Bonsai website on desktop",
    },
    about: {
      eyebrow: "About me",
      title: "The person responsible for understanding, building, and publishing your website.",
      photoAlt: "Photo of Luan Salles",
      text:
        "I am a Computer Science student in Niterói, Brazil, and a developer of websites and web systems. My experience started in technical support, working directly with users and problem solving, and evolved into building my own projects and digital solutions for small businesses.",
      facts: [
        "Niterói/RJ, Brazil",
        "Remote service",
        "Computer Science",
        "GPA 8.24/10",
        "Technical support experience",
        "Published website",
        "System in development",
      ],
    },
    system: {
      eyebrow: "Complementary technical background",
      title: "I also build web systems, but my commercial focus now is website development.",
      text:
        "FuteGestão CT shows my ability to work with business rules, dashboards, permissions, and data. That experience strengthens my website projects because it helps me think about structure, organization, performance, and technical evolution.",
      aria: "Demo without real FuteGestão CT data",
      metrics: ["active students", "classes", "attendance"],
      rows: [
        ["Demo Student", "Private · paid"],
        ["Maria Example", "Gympass · attendance recorded"],
        ["John Sample", "Monthly plan · high frequency"],
      ],
    },
    technical: {
      eyebrow: "Technologies for web development",
      title: "I build websites with code, responsiveness, and delivery in mind.",
      text:
        "My professional path is web development. I work with HTML, CSS, JavaScript, and React, organizing pages, components, integrations, deployment, and maintenance to deliver websites that work well on mobile and desktop.",
      groups: [
        ["Frontend", ["HTML", "CSS", "JavaScript", "React", "Vite", "Tailwind CSS"]],
        ["Backend and data", ["Node.js", "Express", "Prisma", "SQLite", "PostgreSQL", "JWT"]],
        ["Delivery", ["Vercel", "Docker", "Nginx", "Git", "Responsiveness", "Deploy"]],
      ],
    },
    trust: {
      eyebrow: "Trust",
      title: "What needs to be clear before building a website.",
      text:
        "Website pricing varies a lot because each project has a different scope, content, timeline, and integrations. That is why I estimate each project after understanding the website goal.",
      items: [
        "Service in Niterói and remotely",
        "Layout adapted for mobile, tablet, and desktop",
        "Guidance on domain and hosting",
        "Scope and investment defined before development",
        "Review before publishing",
        "WhatsApp, email, or form contact configured",
      ],
    },
    process: {
      eyebrow: "Process",
      title: "How a proposal becomes a published website.",
      text:
        "A good website does not start with code. It starts by understanding the business, the audience, the page goal, and the action visitors should take.",
      steps: [
        ["Project briefing", "You send the business type, goal, required pages, timeline, references, and available materials."],
        ["Scope definition", "I organize what will be delivered, which materials are missing, the estimated timeline, and possible external costs."],
        ["Development", "I develop the website with focus on clarity, mobile adaptation, quick contact, and professional presentation."],
        ["Review and publishing", "I review the final details, publish the website, and leave everything ready for sharing."],
      ],
    },
    contact: {
      eyebrow: "Proposal",
      title: "Need a professional website for your business?",
      text:
        "Send me the website type, goal, timeline, references, and available materials. With that, I can evaluate scope, timeline, and investment more precisely.",
      proposal: "Request a proposal",
      labels: ["Name", "Website or business type", "Message"],
      placeholders: [
        "Your name",
        "Ex.: clinic, personal trainer, event landing page",
        "Describe the business, goal, and desired timeline.",
      ],
      submit: "Send information on WhatsApp",
      messageIntro: "Hi, Luan. I want to talk about a website project.",
      nameFallback: "Not provided",
      typeFallback: "Not defined yet",
      messageFallback: "I want to understand the best format for my website.",
      messageLabels: ["Name", "Website or business type", "Message"],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Important points before starting.",
      text: "These answers help align expectations about external costs, materials, revisions, and publishing.",
      items: [
        ["Is the domain included?", "The domain is registered under the client's name. The cost is informed separately before hiring."],
        ["Is hosting included?", "It depends on the project structure. Options and possible costs are presented with the proposal."],
        ["How much does a website cost?", "It depends on the scope. As a market reference, landing pages and business websites vary a lot depending on pages, content, integrations, and timeline."],
        ["Who sends the text and images?", "The materials are provided by the client. I organize and adapt that content for the website and point out what is missing."],
        ["Does the website work on mobile?", "Yes. All projects are developed for mobile phones, tablets, and desktop computers."],
        ["Can I request changes?", "Yes. The number of revisions and types of changes are defined in the proposal before the start."],
      ],
    },
    footer: ["Luan Salles · Website development", "Niterói/RJ, Brazil · Remote service"],
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("pt");
  const [name, setName] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");
  const t = content[lang];

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const text = [
      t.contact.messageIntro,
      "",
      `${t.contact.messageLabels[0]}: ${name.trim() || t.contact.nameFallback}`,
      `${t.contact.messageLabels[1]}: ${projectType.trim() || t.contact.typeFallback}`,
      `${t.contact.messageLabels[2]}: ${message.trim() || t.contact.messageFallback}`,
    ].join("\n");

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank", "noreferrer");
  }

  return (
    <main id="inicio">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label={t.brandAria}>
          <span className="brand-mark">LS</span>
          <span>Luan Salles</span>
        </a>

        <nav className="nav" aria-label={t.navAria}>
          <a href="#servicos">{t.nav[0]}</a>
          <a href="#projeto">{t.nav[1]}</a>
          <a href="#sobre">{t.nav[2]}</a>
          <a href="#tecnico">{t.nav[3]}</a>
          <a href="#processo">{t.nav[4]}</a>
          <a href="#contato">{t.nav[5]}</a>
        </nav>

        <div className="header-actions">
          <div className="lang-switch" aria-label={t.langLabel}>
            <button className={lang === "pt" ? "active" : ""} type="button" onClick={() => setLang("pt")}>
              PT
            </button>
            <button className={lang === "en" ? "active" : ""} type="button" onClick={() => setLang("en")}>
              EN
            </button>
          </div>
          <a
            className="btn btn-primary"
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
          <p className="lead">{t.hero.lead}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href={briefingForm} target="_blank" rel="noreferrer">
              {t.hero.primary}
            </a>
            <a className="btn btn-secondary" href="#projeto">
              {t.hero.secondary}
            </a>
          </div>
        </div>

        <aside className="hero-card" aria-label="Projeto publicado em destaque">
          <div className="browser">
            <div className="browser-bar">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
            <img src="/alquimia-bonsai-desktop.png" alt={t.hero.imageAlt} />
          </div>
        </aside>
      </section>

      <section id="servicos" className="wrap section">
        <div className="section-head compact">
          <p className="eyebrow">{t.nav[0]}</p>
          <h2>{t.servicesTitle}</h2>
        </div>

        <div className="services-grid">
          {t.services.map((service, index) => (
            <article className="service" key={service.title}>
              <span className="service-number">{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projeto" className="wrap section">
        <div className="case">
          <div className="case-media">
            <div className="browser">
              <div className="browser-bar">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
              <img src="/alquimia-bonsai-desktop.png" alt={t.case.imageAlt} />
            </div>
          </div>

          <div className="case-copy">
            <p className="eyebrow">{t.case.eyebrow}</p>
            <h2>{t.case.title}</h2>
            <p>{t.case.text}</p>
            <div className="case-blocks">
              {t.case.blocks.map(([title, text]) => (
                <div key={title}>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <ul className="proof-list">
              {t.case.proof.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Responsivo</span>
              <span>Vercel</span>
            </div>
            <div className="case-actions">
              <a className="btn btn-primary" href={alquimiaUrl} target="_blank" rel="noreferrer">
                {t.case.liveLabel}
              </a>
            </div>
            <p className="case-note">{t.case.note}</p>
          </div>
        </div>
      </section>

      <section id="sobre" className="wrap section">
        <div className="about">
          <div>
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2>{t.about.title}</h2>
          </div>
          <div className="about-profile">
            <img className="profile-photo" src="/luan-salles.jpeg" alt={t.about.photoAlt} />
            <div>
              <h3>Luan Salles</h3>
              <p>{t.about.text}</p>
              <div className="profile-facts">
                {t.about.facts.map((fact) => (
                  <span key={fact}>{fact}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="system-band">
          <div>
            <p className="eyebrow">{t.system.eyebrow}</p>
            <h2>{t.system.title}</h2>
          </div>
          <div>
            <p>{t.system.text}</p>
            <div className="demo-system" aria-label={t.system.aria}>
              <div className="demo-metrics">
                <span><strong>48</strong> {t.system.metrics[0]}</span>
                <span><strong>12</strong> {t.system.metrics[1]}</span>
                <span><strong>92%</strong> {t.system.metrics[2]}</span>
              </div>
              <div className="demo-table">
                {t.system.rows.map(([name, detail]) => (
                  <div key={name}><strong>{name}</strong><span>{detail}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tecnico" className="wrap section">
        <div className="technical">
          <div>
            <p className="eyebrow">{t.technical.eyebrow}</p>
            <h2>{t.technical.title}</h2>
            <p>{t.technical.text}</p>
          </div>
          <div className="tech-grid">
            {t.technical.groups.map(([title, items]) => (
              <article key={title}>
                <h3>{title}</h3>
                <div>
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="section-head">
          <div>
            <p className="eyebrow">{t.trust.eyebrow}</p>
            <h2>{t.trust.title}</h2>
          </div>
          <p>{t.trust.text}</p>
        </div>
        <div className="trust-grid">
          {t.trust.items.map((item) => (
            <article key={item}>{item}</article>
          ))}
        </div>
      </section>

      <section id="processo" className="wrap section">
        <div className="section-head">
          <div>
            <p className="eyebrow">{t.process.eyebrow}</p>
            <h2>{t.process.title}</h2>
          </div>
          <p>{t.process.text}</p>
        </div>

        <div className="steps">
          {t.process.steps.map(([title, text], index) => (
            <article className="step" key={title}>
              <strong>
                {index + 1}. {title}
              </strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contato" className="wrap section">
        <div className="contact">
          <div>
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.text}</p>
            <a className="btn btn-primary form-cta" href={briefingForm} target="_blank" rel="noreferrer">
              {t.contact.proposal}
            </a>
            <div className="contact-links">
              <a href="mailto:luanspctrabalho@gmail.com">luanspctrabalho@gmail.com</a>
              <a
                href="https://www.linkedin.com/in/luan-salles-pinheiro-da-costa-440a59250"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <form onSubmit={submitContact}>
            <label>
              {t.contact.labels[0]}
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder={t.contact.placeholders[0]}
                autoComplete="name"
              />
            </label>
            <label>
              {t.contact.labels[1]}
              <input
                value={projectType}
                onChange={(event) => setProjectType(event.target.value)}
                placeholder={t.contact.placeholders[1]}
              />
            </label>
            <label>
              {t.contact.labels[2]}
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder={t.contact.placeholders[2]}
              />
            </label>
            <button className="btn btn-secondary light" type="submit">
              {t.contact.submit}
            </button>
          </form>
        </div>
      </section>

      <section className="wrap section">
        <div className="section-head">
          <div>
            <p className="eyebrow">{t.faq.eyebrow}</p>
            <h2>{t.faq.title}</h2>
          </div>
          <p>{t.faq.text}</p>
        </div>
        <div className="faq-grid">
          {t.faq.items.map(([question, answer]) => (
            <article key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <a
        className="floating-whatsapp"
        href={`https://wa.me/${phone}?text=${encodeURIComponent(t.whatsappText)}`}
        target="_blank"
        rel="noreferrer"
      >
        {t.floating}
      </a>

      <footer>
        <span>{t.footer[0]}</span>
        <span>{t.footer[1]}</span>
      </footer>
    </main>
  );
}
