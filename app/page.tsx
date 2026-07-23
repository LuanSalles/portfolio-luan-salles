"use client";

import { FormEvent, useState } from "react";

type Lang = "pt" | "en";

const phone = "5521979231817";
const briefingForm = "https://forms.gle/ebQXBwmDUHUt6zwn7";

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
      eyebrow: "Sites profissionais sob medida",
      title: "Sites profissionais para transformar visitas em contatos e oportunidades.",
      lead:
        "Desenvolvo sites institucionais e landing pages para profissionais e pequenos negócios que precisam apresentar seus serviços com clareza, funcionar bem no celular e levar o cliente direto para o próximo passo.",
      primary: "Solicitar proposta",
      secondary: "Ver projetos",
      imageAlt: "Página inicial do site Alquimia do Bonsai",
    },
    servicesTitle: "O site certo para cada objetivo.",
    services: [
      {
        title: "Site institucional",
        text:
          "Para profissionais, lojas locais, clínicas, estúdios, prestadores de serviço e pequenos negócios que precisam ser encontrados e gerar contato.",
        items: ["Home, sobre, serviços e contato", "WhatsApp, mapa e redes sociais", "Layout responsivo para celular"],
      },
      {
        title: "Landing page",
        text:
          "Para divulgar uma oferta específica, curso, evento, campanha, produto ou serviço com uma página objetiva e pronta para receber leads.",
        items: ["Headline e seções de venda", "Botões de ação bem posicionados", "Publicação em domínio próprio ou Vercel"],
      },
      {
        title: "Melhoria de site existente",
        text:
          "Para quem já tem um site no ar, mas precisa melhorar aparência, organização, versão mobile ou caminho de contato.",
        items: ["Correção visual", "Organização e adaptação dos textos e imagens fornecidos", "Novas seções ou páginas"],
      },
    ],
    case: {
      eyebrow: "Estudo de caso",
      title: "Alquimia do Bonsai · Bonsai Alchemy",
      text:
        "A marca precisava apresentar produtos, cursos, livro, materiais educativos e canais comerciais sem espalhar o visitante por vários links. O projeto organizou essa presença em um site responsivo e bilíngue, com navegação clara e caminhos diretos para compra, inscrição e contato.",
      blocks: [
        ["Problema", "Diferentes públicos precisavam encontrar produtos, escola, livro, conteúdos e contato em um único lugar."],
        ["Solução", "Criação de uma plataforma bilíngue com catálogo, páginas comerciais, materiais digitais e integrações externas."],
        ["Minha atuação", "Estrutura das páginas, desenvolvimento frontend, responsividade, interações, organização dos conteúdos e publicação."],
        ["Resultado", "Uma presença digital única para apresentar a marca e direcionar visitantes para WhatsApp, Amazon, formulários e materiais."],
      ],
      proof: [
        "Estrutura e implementação das páginas",
        "Versões em português e inglês",
        "Catálogo com filtros, favoritos e carrinho local",
        "Integrações com WhatsApp, redes sociais, PDFs e formulários",
        "Publicação na Vercel",
      ],
      note: "Link público temporariamente removido do portfólio enquanto o projeto passa por revisão de segurança e conteúdo.",
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
      eyebrow: "Além de sites",
      title: "FuteGestão CT: sistema em desenvolvimento para gestão de centros de futevôlei.",
      text:
        "O produto organiza alunos, turmas, chamada, frequência, pagamentos, equipe e permissões de acesso. A apresentação pública usa dados fictícios para mostrar a lógica do sistema sem expor nomes, telefones ou informações internas.",
      aria: "Demonstração sem dados reais do FuteGestão CT",
      metrics: ["alunos ativos", "turmas", "presença"],
      rows: [
        ["Aluno Demo", "Particular · em dia"],
        ["Maria Exemplo", "Gympass · chamada feita"],
        ["João Teste", "Plano mensal · frequência alta"],
      ],
    },
    technical: {
      eyebrow: "Para recrutadores e parceiros técnicos",
      title: "Além do visual, eu trabalho com estrutura, implementação e entrega.",
      text:
        "Este portfólio é voltado principalmente para clientes, mas também resume minha base técnica: desenvolvimento frontend, construção de sistemas web, autenticação, banco de dados, deploy e organização de produto a partir de problemas reais.",
      groups: [
        ["Frontend", ["HTML", "CSS", "JavaScript", "React", "Vite", "Tailwind CSS"]],
        ["Backend e dados", ["Node.js", "Express", "Prisma", "SQLite", "PostgreSQL", "JWT"]],
        ["Entrega", ["Vercel", "Docker", "Nginx", "Git", "Responsividade", "Deploy"]],
      ],
    },
    trust: {
      eyebrow: "Confiança",
      title: "O que fica definido antes do desenvolvimento.",
      text:
        "O cliente envia identidade visual, textos, imagens e informações disponíveis. Quando necessário, oriento sobre formatos e materiais necessários para construir o site.",
      items: [
        "Atendimento em Niterói e remoto",
        "Layout adaptado para celular, tablet e computador",
        "Orientação sobre domínio e hospedagem",
        "Escopo e investimento definidos antes do desenvolvimento",
        "Revisão antes da publicação",
        "Mensagens de contato configuradas",
      ],
    },
    process: {
      eyebrow: "Processo",
      title: "Como o orçamento vira site publicado.",
      text:
        "A entrega começa com informação organizada. Quanto melhor o levantamento, mais preciso fica o escopo, o prazo e o valor.",
      steps: [
        ["Levantamento do projeto", "Você envia tipo de negócio, objetivo, páginas necessárias, prazo, referências e materiais disponíveis."],
        ["Definição do escopo", "Eu organizo o que será entregue, quais materiais faltam, prazo estimado e custos externos possíveis."],
        ["Desenvolvimento", "Desenvolvo o site com foco em clareza, adaptação para celular, contato rápido e aparência profissional."],
        ["Revisão e publicação", "Reviso os detalhes finais, publico o site e deixo tudo pronto para divulgação."],
      ],
    },
    contact: {
      eyebrow: "Proposta",
      title: "Envie as informações do projeto antes da conversa.",
      text:
        "O formulário reúne objetivo, tipo de site, páginas, prazo, referências e materiais disponíveis. Com isso, eu consigo responder com perguntas melhores e uma proposta mais realista.",
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
        ["Quem envia textos e imagens?", "Os materiais são fornecidos pelo cliente. Eu organizo e adapto esse conteúdo para uso no site e oriento sobre o que estiver faltando."],
        ["O site funciona no celular?", "Sim. Todos os projetos são desenvolvidos com adaptação para celulares, tablets e computadores."],
        ["Posso solicitar alterações?", "Sim. O número de revisões e os tipos de alteração ficam definidos na proposta antes do início."],
        ["Há mensalidade?", "Depende das ferramentas, hospedagem, banco de dados e manutenção escolhidos. Todos os custos recorrentes são informados antes da contratação."],
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
      eyebrow: "Custom professional websites",
      title: "Professional websites that turn visits into contacts and opportunities.",
      lead:
        "I build institutional websites and landing pages for professionals and small businesses that need to present their services clearly, work well on mobile, and guide visitors to the next step.",
      primary: "Request a proposal",
      secondary: "View projects",
      imageAlt: "Homepage of the Alquimia do Bonsai website",
    },
    servicesTitle: "The right website for each goal.",
    services: [
      {
        title: "Business website",
        text:
          "For professionals, local shops, clinics, studios, service providers, and small businesses that need to be found and receive qualified contacts.",
        items: ["Home, about, services, and contact", "WhatsApp, map, and social links", "Responsive layout for mobile"],
      },
      {
        title: "Landing page",
        text:
          "For promoting a specific offer, course, event, campaign, product, or service with a focused page designed to receive leads.",
        items: ["Headline and sales sections", "Well-positioned call-to-action buttons", "Publishing on a custom domain or Vercel"],
      },
      {
        title: "Existing website improvement",
        text:
          "For businesses that already have a website online but need better visuals, organization, mobile experience, or contact flow.",
        items: ["Visual corrections", "Organization and adaptation of provided text and images", "New sections or pages"],
      },
    ],
    case: {
      eyebrow: "Case study",
      title: "Alquimia do Bonsai · Bonsai Alchemy",
      text:
        "The brand needed to present products, courses, a book, educational materials, and commercial channels without sending visitors through scattered links. The project organized that presence into a responsive bilingual website with clear navigation and direct paths to purchase, sign up, and contact.",
      blocks: [
        ["Problem", "Different audiences needed to find products, the school, the book, content, and contact channels in one place."],
        ["Solution", "Creation of a bilingual platform with a catalog, commercial pages, digital materials, and external integrations."],
        ["My role", "Page structure, frontend development, responsiveness, interactions, content organization, and publishing."],
        ["Result", "A single digital presence to present the brand and direct visitors to WhatsApp, Amazon, forms, and materials."],
      ],
      proof: [
        "Page structure and implementation",
        "Portuguese and English versions",
        "Catalog with filters, favorites, and local cart",
        "Integrations with WhatsApp, social networks, PDFs, and forms",
        "Published on Vercel",
      ],
      note: "The public link is temporarily removed from the portfolio while the project goes through security and content review.",
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
      eyebrow: "Beyond websites",
      title: "FuteGestão CT: a web system in development for managing footvolley training centers.",
      text:
        "The product organizes students, classes, attendance, frequency, payments, staff, and access permissions. The public presentation uses fictitious data to show the system logic without exposing names, phone numbers, or internal information.",
      aria: "Demo without real FuteGestão CT data",
      metrics: ["active students", "classes", "attendance"],
      rows: [
        ["Demo Student", "Private · paid"],
        ["Maria Example", "Gympass · attendance recorded"],
        ["John Sample", "Monthly plan · high frequency"],
      ],
    },
    technical: {
      eyebrow: "For recruiters and technical partners",
      title: "Beyond visuals, I work with structure, implementation, and delivery.",
      text:
        "This portfolio is mainly focused on clients, but it also summarizes my technical base: frontend development, web systems, authentication, databases, deployment, and product organization from real problems.",
      groups: [
        ["Frontend", ["HTML", "CSS", "JavaScript", "React", "Vite", "Tailwind CSS"]],
        ["Backend and data", ["Node.js", "Express", "Prisma", "SQLite", "PostgreSQL", "JWT"]],
        ["Delivery", ["Vercel", "Docker", "Nginx", "Git", "Responsiveness", "Deploy"]],
      ],
    },
    trust: {
      eyebrow: "Trust",
      title: "What gets defined before development starts.",
      text:
        "The client sends available brand identity, text, images, and business information. When needed, I provide guidance on formats and materials required to build the website.",
      items: [
        "Service in Niterói and remotely",
        "Layout adapted for mobile, tablet, and desktop",
        "Guidance on domain and hosting",
        "Scope and investment defined before development",
        "Review before publishing",
        "Contact messages configured",
      ],
    },
    process: {
      eyebrow: "Process",
      title: "How a proposal becomes a published website.",
      text:
        "Delivery starts with organized information. The better the initial briefing, the more precise the scope, timeline, and investment become.",
      steps: [
        ["Project briefing", "You send the business type, goal, required pages, timeline, references, and available materials."],
        ["Scope definition", "I organize what will be delivered, which materials are missing, the estimated timeline, and possible external costs."],
        ["Development", "I develop the website with focus on clarity, mobile adaptation, quick contact, and professional presentation."],
        ["Review and publishing", "I review the final details, publish the website, and leave everything ready for sharing."],
      ],
    },
    contact: {
      eyebrow: "Proposal",
      title: "Send the project information before the conversation.",
      text:
        "The form gathers the goal, website type, pages, timeline, references, and available materials. With that, I can respond with better questions and a more realistic proposal.",
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
        ["Who sends the text and images?", "The materials are provided by the client. I organize and adapt that content for the website and point out what is missing."],
        ["Does the website work on mobile?", "Yes. All projects are developed for mobile phones, tablets, and desktop computers."],
        ["Can I request changes?", "Yes. The number of revisions and types of changes are defined in the proposal before the start."],
        ["Is there a monthly fee?", "It depends on the tools, hosting, database, and maintenance chosen. All recurring costs are informed before hiring."],
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
