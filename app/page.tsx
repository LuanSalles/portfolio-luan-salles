"use client";

import { useMemo, useState } from "react";

const rotatingWords = ["sites", "sistemas", "SaaS", "experiencias"];

const services = [
  {
    title: "Site institucional",
    eyebrow: "Presenca digital",
    body: "Paginas rapidas para apresentar empresas, profissionais e servicos com clareza.",
    items: ["Design responsivo", "WhatsApp integrado", "Publicacao e dominio"],
  },
  {
    title: "Landing page",
    eyebrow: "Conversao",
    body: "Paginas focadas em divulgar uma oferta, evento ou servico sem enrolacao.",
    items: ["Copy direta", "Secoes estrategicas", "Chamadas para contato"],
  },
  {
    title: "Sistema web",
    eyebrow: "Operacao",
    body: "Cadastros, paineis, fluxos internos e organizacao de informacoes.",
    items: ["Autenticacao", "Banco de dados", "Dashboard administrativo"],
  },
  {
    title: "Prototipo funcional",
    eyebrow: "Primeira versao",
    body: "Transformacao de ideias em produtos testaveis para validar antes de crescer.",
    items: ["Escopo enxuto", "Interface real", "Iteracao com feedback"],
  },
];

const projects = [
  {
    name: "Site para profissional autonoma",
    status: "Publicado",
    type: "Site responsivo",
    description:
      "Projeto criado para apresentar servicos, facilitar contato pelo WhatsApp e construir uma presenca digital simples de manter.",
    stack: ["HTML", "CSS", "Responsividade", "Deploy"],
    result: "Primeira entrega publicada e pronta para evoluir com novas secoes.",
  },
  {
    name: "SaaS para CTs de futevolei",
    status: "Em validacao",
    type: "Produto web",
    description:
      "Sistema em estudo para apoiar gestao interna de centros de treinamento, saindo de uma hipotese inicial para um fluxo mais util ao dono do CT.",
    stack: ["React", "Supabase", "Dashboard", "Pesquisa"],
    result: "Aprendizado de produto: ouvir usuario antes de aumentar complexidade.",
  },
  {
    name: "Luan.dev Build Mode",
    status: "Experiencia interativa",
    type: "Portfolio",
    description:
      "Este proprio site funciona como vitrine: mostra servicos, processo, estudos de caso e pequenos experimentos de interface.",
    stack: ["Next.js", "TypeScript", "CSS", "Acessibilidade"],
    result: "Portfolio profissional por fora e experimental por dentro.",
  },
];

const tools = [
  ["React", "componentes, estados, formularios e interfaces dinamicas"],
  ["Supabase", "autenticacao, banco de dados e armazenamento para produtos web"],
  ["HTML/CSS", "layouts responsivos, animacoes leves e acessibilidade"],
  ["Python", "logica, automacoes e projetos academicos"],
  ["Flutter", "laboratorio de estudos para aplicativos"],
];

const timeline = [
  "Ciencia da Computacao",
  "Suporte tecnico e contato com problemas reais",
  "Primeiros sites publicados",
  "Validacao de SaaS para CTs",
  "Foco atual: produtos web uteis e bem apresentados",
];

const labItems = [
  "Preview de landing page",
  "Cards com microinteracao",
  "Dashboard compacto",
  "Tema claro/escuro",
];

export default function Home() {
  const [mode, setMode] = useState<"pro" | "play">("pro");
  const [activeProject, setActiveProject] = useState(0);
  const [activeTool, setActiveTool] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  const whatsappHref = useMemo(() => {
    const text = encodeURIComponent(
      "Oi, Luan! Quero conversar sobre um projeto para meu site ou sistema."
    );
    return `https://wa.me/5500000000000?text=${text}`;
  }, []);

  const project = projects[activeProject];

  return (
    <main className={mode === "play" ? "site play-mode" : "site"}>
      <nav className="topbar" aria-label="Navegacao principal">
        <a className="brand" href="#inicio" aria-label="Ir para o inicio">
          <span>LUAN</span>
          <small>.dev</small>
        </a>
        <div className="navlinks">
          <a href="#servicos">Servicos</a>
          <a href="#projetos">Projetos</a>
          <a href="#lab">Lab</a>
          <a href="#contato">Contato</a>
        </div>
        <div className="mode-toggle" aria-label="Alternar modo do site">
          <button
            type="button"
            className={mode === "pro" ? "active" : ""}
            onClick={() => setMode("pro")}
          >
            Pro
          </button>
          <button
            type="button"
            className={mode === "play" ? "active" : ""}
            onClick={() => setMode("play")}
          >
            Play
          </button>
        </div>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Desenvolvedor de experiencias digitais</p>
          <h1>
            Eu transformo ideias em{" "}
            <button
              className="word-swap"
              type="button"
              onClick={() => setWordIndex((wordIndex + 1) % rotatingWords.length)}
              aria-label="Trocar palavra de destaque"
            >
              {rotatingWords[wordIndex]}
            </button>{" "}
            que funcionam de verdade.
          </h1>
          <p className="hero-text">
            Crio sites, sistemas e produtos web interativos, responsivos e
            construidos para pessoas reais entenderem, usarem e contratarem.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projetos">
              Explorar projetos
            </a>
            <a className="button secondary" href="#contato">
              Criar um projeto comigo
            </a>
          </div>
        </div>
        <div className="build-board" aria-label="Interface decorativa Build Mode">
          <div className="board-header">
            <span />
            <span />
            <span />
            <strong>build-mode.tsx</strong>
          </div>
          <div className="floating-window window-one">
            <small>site</small>
            <strong>Landing responsiva</strong>
            <div className="window-line wide" />
            <div className="window-line" />
          </div>
          <div className="floating-window window-two">
            <small>sistema</small>
            <strong>Dashboard de gestao</strong>
            <div className="mini-grid">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="floating-window window-three">
            <small>lab</small>
            <strong>Experimento interativo</strong>
            <button type="button">Run</button>
          </div>
        </div>
      </section>

      <section className="section" id="servicos">
        <div className="section-heading">
          <p className="eyebrow">O que eu construo</p>
          <h2>Servicos claros para clientes e espaco para evoluir produtos.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <p>{service.eyebrow}</p>
              <h3>{service.title}</h3>
              <span>{service.body}</span>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="projetos">
        <div className="section-heading">
          <p className="eyebrow">Projetos como estudos de caso</p>
          <h2>Mais do que telas bonitas: contexto, decisao e resultado.</h2>
        </div>
        <div className="project-shell">
          <div className="project-tabs" role="tablist" aria-label="Selecionar projeto">
            {projects.map((item, index) => (
              <button
                key={item.name}
                type="button"
                className={activeProject === index ? "active" : ""}
                onClick={() => setActiveProject(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.name}
              </button>
            ))}
          </div>
          <article className="project-window">
            <div className="project-window-top">
              <span>{project.status}</span>
              <small>{project.type}</small>
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="stack-list">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="result-box">
              <small>Resultado / aprendizado</small>
              <strong>{project.result}</strong>
            </div>
          </article>
        </div>
      </section>

      <section className="section lab-section" id="lab">
        <div className="section-heading">
          <p className="eyebrow">Luan's Lab</p>
          <h2>Um laboratorio pequeno para mostrar interacao sem esconder o objetivo comercial.</h2>
        </div>
        <div className="lab-layout">
          <div className="lab-controls">
            {labItems.map((item) => (
              <button key={item} type="button">
                {item}
              </button>
            ))}
          </div>
          <div className="landing-preview">
            <div className="preview-nav" />
            <h3>Monte sua landing page</h3>
            <p>Escolha tema, chamada principal, blocos de servico e acao de contato.</p>
            <div className="preview-cards">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">Caixa de ferramentas</p>
          <h2>Tecnologias conectadas a capacidades reais.</h2>
          <div className="tool-list" role="tablist" aria-label="Selecionar tecnologia">
            {tools.map(([name], index) => (
              <button
                key={name}
                type="button"
                className={activeTool === index ? "active" : ""}
                onClick={() => setActiveTool(index)}
              >
                {name}
              </button>
            ))}
          </div>
          <p className="tool-description">{tools[activeTool][1]}</p>
        </div>
        <div>
          <p className="eyebrow">Historia</p>
          <h2>Uma trajetoria em construcao, com problemas reais no centro.</h2>
          <ol className="timeline">
            {timeline.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section process-section">
        <div className="section-heading">
          <p className="eyebrow">Processo</p>
          <h2>Do primeiro papo a publicacao, com escopo claro.</h2>
        </div>
        <div className="process-line" aria-label="Processo de trabalho">
          {["Conversa", "Planejamento", "Desenvolvimento", "Revisao", "Publicacao"].map(
            (step) => (
              <span key={step}>{step}</span>
            )
          )}
        </div>
      </section>

      <section className="contact" id="contato">
        <div>
          <p className="eyebrow">Contato</p>
          <h2>Conte-me o que voce quer construir.</h2>
          <p>
            Projetos avaliados conforme escopo, prazo e funcionalidades.
            Atendimento remoto a partir de Niteroi-RJ.
          </p>
        </div>
        <form className="contact-card">
          <label>
            Nome
            <input type="text" name="name" placeholder="Seu nome" />
          </label>
          <label>
            Tipo de projeto
            <select name="projectType" defaultValue="">
              <option value="" disabled>
                Escolha uma opcao
              </option>
              <option>Site institucional</option>
              <option>Landing page</option>
              <option>Sistema web</option>
              <option>Prototipo</option>
            </select>
          </label>
          <label>
            Objetivo
            <textarea name="goal" placeholder="O que esse projeto precisa resolver?" />
          </label>
          <a className="button primary full" href={whatsappHref} target="_blank">
            Enviar pelo WhatsApp
          </a>
          <div className="socials">
            <a href="mailto:seuemail@exemplo.com">E-mail</a>
            <a href="https://github.com/" target="_blank">
              GitHub
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              LinkedIn
            </a>
          </div>
        </form>
      </section>
    </main>
  );
}
