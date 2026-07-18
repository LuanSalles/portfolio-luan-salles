"use client";

import { FormEvent, useState } from "react";

const phone = "5521979231817";
const briefingForm = "https://forms.gle/ebQXBwmDUHUt6zwn7";
const whatsappText = "Oi, Luan. Quero tirar uma dúvida sobre criação de site.";

const services = [
  {
    title: "Site institucional",
    text: "Para profissionais, lojas locais, clínicas, estúdios, prestadores de serviço e pequenos negócios que precisam ser encontrados e gerar contato.",
    items: ["Home, sobre, serviços e contato", "WhatsApp, mapa e redes sociais", "Layout responsivo para celular"],
  },
  {
    title: "Landing page",
    text: "Para divulgar uma oferta específica, curso, evento, campanha, produto ou serviço com uma página objetiva e pronta para receber leads.",
    items: ["Headline e seções de venda", "Botões de ação bem posicionados", "Publicação em domínio próprio ou Vercel"],
  },
  {
    title: "Melhoria de site existente",
    text: "Para quem já tem um site no ar, mas precisa melhorar aparência, organização, versão mobile ou caminho de contato.",
    items: ["Correção visual", "Organização e adaptação dos textos e imagens fornecidos", "Novas seções ou páginas"],
  },
];

const process = [
  {
    title: "Levantamento do projeto",
    text: "Você envia tipo de negócio, objetivo, páginas necessárias, prazo, referências e materiais disponíveis.",
  },
  {
    title: "Definição do escopo",
    text: "Eu organizo o que será entregue, quais materiais faltam, prazo estimado e custos externos possíveis.",
  },
  {
    title: "Desenvolvimento",
    text: "Desenvolvo o site com foco em clareza, adaptação para celular, contato rápido e aparência profissional.",
  },
  {
    title: "Revisão e publicação",
    text: "Reviso os detalhes finais, publico o site e deixo tudo pronto para divulgação.",
  },
];

const proof = [
  "Estrutura e implementação das páginas",
  "Versões em português e inglês",
  "Catálogo com filtros, favoritos e carrinho local",
  "Integrações com WhatsApp, redes sociais, PDFs e formulários",
  "Publicação na Vercel",
];

const techGroups = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Vite", "Tailwind CSS"],
  },
  {
    title: "Backend e dados",
    items: ["Node.js", "Express", "Prisma", "SQLite", "PostgreSQL", "JWT"],
  },
  {
    title: "Entrega",
    items: ["Vercel", "Docker", "Nginx", "Git", "Responsividade", "Deploy"],
  },
];

const trustItems = [
  "Atendimento em Niterói e remoto",
  "Layout adaptado para celular, tablet e computador",
  "Orientação sobre domínio e hospedagem",
  "Escopo e investimento definidos antes do desenvolvimento",
  "Revisão antes da publicação",
  "Mensagens de contato configuradas",
];

const faqs = [
  {
    question: "O domínio está incluído?",
    answer: "O domínio é contratado em nome do cliente. O custo é informado separadamente antes da contratação.",
  },
  {
    question: "A hospedagem está incluída?",
    answer: "Depende da estrutura do projeto. As opções e possíveis custos são apresentados junto com a proposta.",
  },
  {
    question: "Quem envia textos e imagens?",
    answer:
      "Os materiais são fornecidos pelo cliente. Eu organizo e adapto esse conteúdo para uso no site e oriento sobre o que estiver faltando.",
  },
  {
    question: "O site funciona no celular?",
    answer: "Sim. Todos os projetos são desenvolvidos com adaptação para celulares, tablets e computadores.",
  },
  {
    question: "Posso solicitar alterações?",
    answer: "Sim. O número de revisões e os tipos de alteração ficam definidos na proposta antes do início.",
  },
  {
    question: "Há mensalidade?",
    answer:
      "Depende das ferramentas, hospedagem, banco de dados e manutenção escolhidos. Todos os custos recorrentes são informados antes da contratação.",
  },
];

export default function Home() {
  const [name, setName] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const text = [
      "Oi, Luan. Quero conversar sobre um site.",
      "",
      `Nome: ${name.trim() || "Não informado"}`,
      `Tipo de site ou negócio: ${projectType.trim() || "Ainda não definido"}`,
      `Mensagem: ${message.trim() || "Quero entender o melhor formato para meu site."}`,
    ].join("\n");

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank", "noreferrer");
  }

  return (
    <main id="inicio">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Voltar ao início">
          <span className="brand-mark">L</span>
          <span>LUAN</span>
        </a>

        <nav className="nav" aria-label="Navegação principal">
          <a href="#servicos">Serviços</a>
          <a href="#projeto">Projeto</a>
          <a href="#sobre">Sobre</a>
          <a href="#tecnico">Técnico</a>
          <a href="#processo">Processo</a>
          <a href="#contato">Contato</a>
        </nav>

        <a
          className="btn btn-primary"
          href={`https://wa.me/${phone}?text=${encodeURIComponent(whatsappText)}`}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </header>

      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">Sites profissionais sob medida</p>
          <h1>Sites profissionais para transformar visitas em contatos e oportunidades.</h1>
          <p className="lead">
            Desenvolvo sites institucionais e landing pages para profissionais e pequenos negócios
            que precisam apresentar seus serviços com clareza, funcionar bem no celular e levar o
            cliente direto para o próximo passo.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href={briefingForm} target="_blank" rel="noreferrer">
              Solicitar proposta
            </a>
            <a className="btn btn-secondary" href="#projeto">
              Ver projetos
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
            <img src="/alquimia-bonsai-desktop.png" alt="Página inicial do site Alquimia do Bonsai" />
          </div>
        </aside>
      </section>

      <section id="servicos" className="wrap section">
        <div className="section-head compact">
          <p className="eyebrow">Serviços</p>
          <h2>O site certo para cada objetivo.</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
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
              <img src="/alquimia-bonsai-desktop.png" alt="Site Alquimia do Bonsai em desktop" />
            </div>
          </div>

          <div className="case-copy">
            <p className="eyebrow">Estudo de caso</p>
            <h2>Alquimia do Bonsai · Bonsai Alchemy</h2>
            <p>
              A marca precisava apresentar produtos, cursos, livro, materiais educativos e canais comerciais sem
              espalhar o visitante por vários links. O projeto organizou essa presença em um site responsivo e
              bilíngue, com navegação clara e caminhos diretos para compra, inscrição e contato.
            </p>
            <div className="case-blocks">
              <div>
                <strong>Problema</strong>
                <span>Diferentes públicos precisavam encontrar produtos, escola, livro, conteúdos e contato em um único lugar.</span>
              </div>
              <div>
                <strong>Solução</strong>
                <span>Criação de uma plataforma bilíngue com catálogo, páginas comerciais, materiais digitais e integrações externas.</span>
              </div>
              <div>
                <strong>Minha atuação</strong>
                <span>Estrutura das páginas, desenvolvimento frontend, responsividade, interações, organização dos conteúdos e publicação.</span>
              </div>
              <div>
                <strong>Resultado</strong>
                <span>Uma presença digital única para apresentar a marca e direcionar visitantes para WhatsApp, Amazon, formulários e materiais.</span>
              </div>
            </div>
            <ul className="proof-list">
              {proof.map((item) => (
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
            <p className="case-note">
              Link público temporariamente removido do portfólio enquanto o projeto passa por revisão de segurança e conteúdo.
            </p>
          </div>
        </div>
      </section>

      <section id="sobre" className="wrap section">
        <div className="about">
          <div>
            <p className="eyebrow">Sobre mim</p>
            <h2>O responsável por entender, construir e publicar seu site.</h2>
          </div>
          <div className="about-profile">
            <div className="profile-mark" aria-hidden="true">
              LS
            </div>
            <div>
              <h3>Luan Salles</h3>
              <p>
                Sou estudante de Ciência da Computação em Niterói e desenvolvedor de sites e sistemas web. Minha
                experiência começou no suporte técnico, trabalhando diretamente com usuários e resolução de problemas,
                e evoluiu para o desenvolvimento de projetos próprios e soluções digitais para pequenos negócios.
              </p>
              <div className="profile-facts">
                <span>Niterói/RJ</span>
                <span>Atendimento remoto</span>
                <span>Ciência da Computação</span>
                <span>CR 8,24</span>
                <span>Experiência em suporte</span>
                <span>Site publicado</span>
                <span>Sistema em desenvolvimento</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="system-band">
          <div>
            <p className="eyebrow">Além de sites</p>
            <h2>FuteGestão CT: sistema em desenvolvimento para gestão de centros de futevôlei.</h2>
          </div>
          <div>
            <p>
              O produto organiza alunos, turmas, chamada, frequência, pagamentos, equipe e permissões de acesso.
              A apresentação pública usa dados fictícios para mostrar a lógica do sistema sem expor nomes,
              telefones ou informações internas.
            </p>
            <div className="demo-system" aria-label="Demonstração sem dados reais do FuteGestão CT">
              <div className="demo-metrics">
                <span><strong>48</strong> alunos ativos</span>
                <span><strong>12</strong> turmas</span>
                <span><strong>92%</strong> presença</span>
              </div>
              <div className="demo-table">
                <div><strong>Aluno Demo</strong><span>Particular · em dia</span></div>
                <div><strong>Maria Exemplo</strong><span>Gympass · chamada feita</span></div>
                <div><strong>João Teste</strong><span>Plano mensal · frequência alta</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tecnico" className="wrap section">
        <div className="technical">
          <div>
            <p className="eyebrow">Para recrutadores e parceiros técnicos</p>
            <h2>Além do visual, eu trabalho com estrutura, implementação e entrega.</h2>
            <p>
              Este portfólio é voltado principalmente para clientes, mas também resume minha base técnica:
              desenvolvimento frontend, construção de sistemas web, autenticação, banco de dados, deploy e
              organização de produto a partir de problemas reais.
            </p>
          </div>
          <div className="tech-grid">
            {techGroups.map((group) => (
              <article key={group.title}>
                <h3>{group.title}</h3>
                <div>
                  {group.items.map((item) => (
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
            <p className="eyebrow">Confiança</p>
            <h2>O que fica definido antes do desenvolvimento.</h2>
          </div>
          <p>
            O cliente envia identidade visual, textos, imagens e informações disponíveis. Quando necessário,
            oriento sobre formatos e materiais necessários para construir o site.
          </p>
        </div>
        <div className="trust-grid">
          {trustItems.map((item) => (
            <article key={item}>{item}</article>
          ))}
        </div>
      </section>

      <section id="processo" className="wrap section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Processo</p>
            <h2>Como o orçamento vira site publicado.</h2>
          </div>
          <p>
            A entrega começa com informação organizada. Quanto melhor o levantamento, mais preciso fica o escopo,
            o prazo e o valor.
          </p>
        </div>

        <div className="steps">
          {process.map((step, index) => (
            <article className="step" key={step.title}>
              <strong>
                {index + 1}. {step.title}
              </strong>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contato" className="wrap section">
        <div className="contact">
          <div>
            <p className="eyebrow">Proposta</p>
            <h2>Envie as informações do projeto antes da conversa.</h2>
            <p>
              O formulário reúne objetivo, tipo de site, páginas, prazo, referências e materiais disponíveis.
              Com isso, eu consigo responder com perguntas melhores e uma proposta mais realista.
            </p>
            <a className="btn btn-primary form-cta" href={briefingForm} target="_blank" rel="noreferrer">
              Solicitar proposta
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
              Nome
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Seu nome"
                autoComplete="name"
              />
            </label>
            <label>
              Tipo de site ou negócio
              <input
                value={projectType}
                onChange={(event) => setProjectType(event.target.value)}
                placeholder="Ex.: clínica, personal trainer, landing page de evento"
              />
            </label>
            <label>
              Mensagem
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Descreva o negócio, objetivo e prazo desejado."
              />
            </label>
            <button className="btn btn-secondary light" type="submit">
              Enviar informações pelo WhatsApp
            </button>
          </form>
        </div>
      </section>

      <section className="wrap section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Dúvidas frequentes</p>
            <h2>Pontos importantes antes de começar.</h2>
          </div>
          <p>
            Estas respostas ajudam a alinhar expectativas sobre custos externos, materiais, revisões e publicação.
          </p>
        </div>
        <div className="faq-grid">
          {faqs.map((faq) => (
            <article key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <a
        className="floating-whatsapp"
        href={`https://wa.me/${phone}?text=${encodeURIComponent(whatsappText)}`}
        target="_blank"
        rel="noreferrer"
      >
        Tirar dúvida
      </a>

      <footer>
        <span>LUAN · Desenvolvimento de sites</span>
        <span>Niterói/RJ · Atendimento remoto</span>
      </footer>
    </main>
  );
}
