"use client";

import { FormEvent, useMemo, useState } from "react";

const phone = "5521979231817";
const email = "luanspctrabalho@gmail.com";
const alquimiaUrl = "https://alquimiadobonsai.com";
const linkedinUrl = "https://www.linkedin.com/in/luan-salles/";
const whatsappText =
  "Olá! Conheci a Vulan pelo site e gostaria de conversar sobre a criação de um site para meu negócio.";

const services = [
  {
    title: "Landing Page",
    text: "Página única para apresentar uma empresa, serviço, produto ou campanha e direcionar o visitante para uma ação.",
    items: ["Design responsivo", "WhatsApp e formulário", "SEO básico", "Publicação", "Duas rodadas de ajustes"],
  },
  {
    title: "Site Institucional",
    text: "Presença digital completa para empresas que precisam apresentar serviços, estrutura, diferenciais e contato.",
    items: ["Até 5 páginas", "Responsividade", "SEO básico", "Testes", "Publicação"],
  },
  {
    title: "Catálogo",
    text: "Estrutura para apresentar produtos, serviços ou itens disponíveis, com opção estática ou painel administrativo.",
    items: ["Categorias", "Imagens", "Filtros quando necessário", "Treinamento do painel", "Atualização pela cliente"],
  },
];

const valuePillars = [
  ["Pensado para o negócio", "Estrutura e conteúdo organizados conforme o que sua empresa precisa apresentar."],
  ["Processo simples", "Você não precisa entender programação, hospedagem ou infraestrutura para tirar o site do papel."],
  ["Desenvolvimento ágil", "Etapas claras, comunicação direta e prazo definido antes do início do projeto."],
];

const process = [
  ["1", "Conversa inicial", "A Vulan entende o negócio, objetivo e necessidades do projeto."],
  ["2", "Proposta", "São definidos escopo, prazo e investimento."],
  ["3", "Conteúdo", "Cliente envia as informações necessárias para construção do site."],
  ["4", "Desenvolvimento", "Estrutura, visual e funcionalidades são desenvolvidos."],
  ["5", "Ajustes", "O cliente analisa a versão apresentada e possui duas rodadas de ajustes incluídas."],
  ["6", "Publicação", "Após aprovação e pagamento final, o site é publicado."],
];

const included = [
  "Design adaptado ao negócio",
  "Responsividade",
  "Desenvolvimento",
  "Configuração técnica",
  "Integração com WhatsApp",
  "Formulários",
  "SEO básico",
  "Testes",
  "Publicação",
  "Duas rodadas de ajustes",
  "Orientação pós-entrega",
  "7 dias de suporte",
];

const faqs = [
  ["Quanto custa criar um site?", "O investimento depende da estrutura, quantidade de páginas e funcionalidades necessárias. Após entender o projeto, a Vulan apresenta um orçamento com escopo e valor definidos."],
  ["Quanto tempo demora?", "Projetos mais simples podem levar poucos dias úteis, enquanto sites maiores ou com catálogo e painel administrativo exigem mais tempo. O prazo é informado antes do início do projeto."],
  ["Preciso ter domínio?", "Não. Caso ainda não tenha, a Vulan orienta todo o processo de contratação e configuração."],
  ["Domínio e hospedagem estão incluídos?", "Custos de serviços externos são normalmente contratados diretamente pelo cliente. A Vulan pode realizar a configuração necessária."],
  ["Eu consigo alterar meu site depois?", "Sim. Projetos com painel administrativo permitem atualizar determinados conteúdos diretamente. Nos demais casos, alterações podem ser solicitadas à Vulan."],
  ["O site funciona no celular?", "Sim. Todos os projetos são desenvolvidos para funcionar corretamente em diferentes tamanhos de tela."],
  ["Quantas alterações posso pedir?", "Cada projeto inclui duas rodadas de ajustes dentro do escopo aprovado."],
  ["Depois da entrega vocês continuam dando suporte?", "São oferecidos sete dias de suporte pós-publicação para dúvidas e eventuais problemas relacionados à entrega. Depois disso, alterações podem ser contratadas individualmente ou através de manutenção."],
  ["Vocês garantem que meu site vai gerar vendas?", "O site é desenvolvido considerando os objetivos do negócio e boas práticas digitais, mas resultados comerciais dependem de diversos fatores externos e não podem ser garantidos."],
];

function whatsappUrl(message = whatsappText) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function BudgetForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    business: "",
    whatsapp: "",
    email: "",
    location: "",
    segment: "",
    need: "Landing Page",
    hasSite: "Não",
    siteUrl: "",
    goal: "",
    content: "",
    assets: [] as string[],
    features: "",
    deadline: "Assim que possível",
    budget: "Ainda não sei",
    references: "",
    companyUrl: "",
  });

  const message = useMemo(
    () =>
      [
        "Olá! Quero solicitar um orçamento com a Vulan.",
        "",
        `Nome: ${form.name || "Não informado"}`,
        `Empresa: ${form.business || "Não informado"}`,
        `WhatsApp: ${form.whatsapp || "Não informado"}`,
        `E-mail: ${form.email || "Não informado"}`,
        `Cidade/Estado: ${form.location || "Não informado"}`,
        `Segmento: ${form.segment || "Não informado"}`,
        `Tipo de projeto: ${form.need}`,
        `Possui site: ${form.hasSite}`,
        `URL atual: ${form.siteUrl || "Não informado"}`,
        `Objetivo: ${form.goal || "Não informado"}`,
        `O que deseja apresentar: ${form.content || "Não informado"}`,
        `Já possui: ${form.assets.length ? form.assets.join(", ") : "Não informado"}`,
        `Funcionalidades específicas: ${form.features || "Não informado"}`,
        `Prazo: ${form.deadline}`,
        `Faixa de investimento: ${form.budget}`,
        `Referências: ${form.references || "Não informado"}`,
      ].join("\n"),
    [form],
  );

  function update(key: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function toggleAsset(asset: string) {
    setForm((current) => ({
      ...current,
      assets: current.assets.includes(asset)
        ? current.assets.filter((item) => item !== asset)
        : [...current.assets, asset],
    }));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (form.companyUrl) return;
    setSent(true);
    window.open(whatsappUrl(message), "_blank", "noreferrer");
  }

  return (
    <form className="budget-form" onSubmit={submit}>
      <input className="hp-field" tabIndex={-1} autoComplete="off" value={form.companyUrl} onChange={(event) => update("companyUrl", event.target.value)} aria-hidden="true" />

      <div className="form-grid">
        <label>Nome*<input required value={form.name} onChange={(event) => update("name", event.target.value)} autoComplete="name" /></label>
        <label>Empresa / negócio*<input required value={form.business} onChange={(event) => update("business", event.target.value)} /></label>
        <label>WhatsApp*<input required value={form.whatsapp} onChange={(event) => update("whatsapp", event.target.value)} inputMode="tel" /></label>
        <label>E-mail<input value={form.email} onChange={(event) => update("email", event.target.value)} type="email" autoComplete="email" /></label>
        <label>Cidade/Estado<input value={form.location} onChange={(event) => update("location", event.target.value)} /></label>
        <label>Segmento da empresa<input value={form.segment} onChange={(event) => update("segment", event.target.value)} /></label>
      </div>

      <div className="form-grid">
        <label>
          O que você precisa?
          <select value={form.need} onChange={(event) => update("need", event.target.value)}>
            <option>Landing Page</option>
            <option>Site Institucional</option>
            <option>Catálogo</option>
            <option>Catálogo com painel administrativo</option>
            <option>Ainda não sei</option>
          </select>
        </label>
        <label>
          Seu negócio já possui site?
          <select value={form.hasSite} onChange={(event) => update("hasSite", event.target.value)}>
            <option>Não</option>
            <option>Sim</option>
          </select>
        </label>
      </div>

      {form.hasSite === "Sim" ? <label>URL atual<input value={form.siteUrl} onChange={(event) => update("siteUrl", event.target.value)} placeholder="https://..." /></label> : null}

      <label>Principal objetivo do novo site<textarea required value={form.goal} onChange={(event) => update("goal", event.target.value)} /></label>
      <label>O que você gostaria de apresentar?<textarea value={form.content} onChange={(event) => update("content", event.target.value)} /></label>

      <fieldset>
        <legend>Já possui?</legend>
        {["Logo", "Identidade visual", "Textos", "Fotos", "Domínio", "Nenhum desses"].map((asset) => (
          <label className="check" key={asset}>
            <input type="checkbox" checked={form.assets.includes(asset)} onChange={() => toggleAsset(asset)} />
            {asset}
          </label>
        ))}
      </fieldset>

      <label>Existe alguma funcionalidade específica?<textarea value={form.features} onChange={(event) => update("features", event.target.value)} /></label>

      <div className="form-grid">
        <label>
          Quando gostaria de publicar?
          <select value={form.deadline} onChange={(event) => update("deadline", event.target.value)}>
            <option>Assim que possível</option>
            <option>Dentro de 30 dias</option>
            <option>1-2 meses</option>
            <option>Sem prazo definido</option>
          </select>
        </label>
        <label>
          Faixa de investimento
          <select value={form.budget} onChange={(event) => update("budget", event.target.value)}>
            <option>Até R$1.000</option>
            <option>R$1.000-2.000</option>
            <option>R$2.000-4.000</option>
            <option>Acima de R$4.000</option>
            <option>Ainda não sei</option>
          </select>
        </label>
      </div>

      <label>Referências<textarea value={form.references} onChange={(event) => update("references", event.target.value)} placeholder="URLs de sites que você gosta" /></label>

      <button className="btn btn-primary" type="submit" data-track="budget-submit">Enviar orçamento</button>
      {sent ? <p className="success-message" role="status">Recebemos seu projeto. Obrigado por entrar em contato com a Vulan. Vamos analisar as informações e retornar pelo contato informado.</p> : <p className="form-note">Ao enviar, a mensagem é aberta no WhatsApp com os dados preenchidos.</p>}
    </form>
  );
}

export default function Home() {
  return (
    <main id="inicio">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>

      <section id="conteudo" className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">Criação de sites para negócios</p>
          <h1>Sites profissionais pensados para o seu negócio, sem complicação.</h1>
          <p className="lead">A Vulan cria sites modernos, rápidos e adaptados à realidade de cada empresa, cuidando do processo da estrutura à publicação.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#orcamento" data-track="hero-budget">Pedir orçamento</a>
            <a className="btn btn-secondary" href="#projetos">Ver projetos</a>
          </div>
        </div>
        <div className="hero-board" aria-label="Resumo do serviço">
          <div className="browser-card main-card"><span>vulan.com.br</span><strong>Sites pensados para negócios.</strong></div>
          <div className="mini-card">Mobile</div>
          <div className="mini-card orange">WhatsApp</div>
          <div className="line-chart" aria-hidden="true"><span /><span /><span /></div>
        </div>
      </section>

      <section className="section wrap value">
        <div className="section-head">
          <p className="eyebrow">Proposta de valor</p>
          <h2>Seu negócio merece mais do que simplesmente estar na internet.</h2>
          <p>Cada projeto começa entendendo a empresa, seus serviços, seus clientes e o objetivo do site. A partir disso, a Vulan transforma essas informações em uma presença digital clara, profissional e fácil de usar.</p>
        </div>
        <div className="pillar-grid">{valuePillars.map(([title, text]) => <article key={title} className="pillar"><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section id="servicos" className="section wrap split">
        <div className="section-copy">
          <p className="eyebrow">Serviços</p>
          <h2>Sites para apresentar, vender e receber contatos.</h2>
          <p>A Vulan trabalha com formatos objetivos para empresas que precisam sair do improviso e organizar sua presença digital.</p>
          <a className="btn btn-secondary" href="#orcamento">Solicitar orçamento</a>
        </div>
        <div className="service-list">
          {services.map((service) => <article key={service.title} className="service"><h3>{service.title}</h3><p>{service.text}</p><ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}
        </div>
      </section>

      <section className="section why"><div className="wrap why-grid"><div><p className="eyebrow">Por que Vulan</p><h2>Criativa na personalidade, simples no processo e profissional na entrega.</h2></div><p>O cliente não precisa dominar tecnologia para ter um site bem construído. A Vulan organiza conteúdo, estrutura, design, integrações e publicação em um processo direto.</p></div></section>

      <section id="projetos" className="section case-section">
        <div className="wrap case-showcase">
          <div className="case-heading"><div><p className="eyebrow">Case principal</p><h2>Alquimia do Bonsai</h2><p>Presença digital para uma marca dedicada a bonsais, conteúdo educativo e catálogo de produtos.</p></div><a className="btn btn-primary" href={alquimiaUrl} target="_blank" rel="noreferrer" data-track="case-open">Visitar projeto</a></div>
          <div className="case-layout">
            <div className="case-browser" aria-label="Demonstração interativa do site Alquimia do Bonsai">
              <div className="browser-bar"><span>alquimiadobonsai.com</span></div>
              <iframe className="case-frame" src={alquimiaUrl} title="Site Alquimia do Bonsai" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
              <div className="case-fallback">
                <strong>Prévia do projeto publicado</strong>
                <p>Se a visualização não carregar no navegador, abra o site ao vivo em uma nova aba.</p>
                <a className="btn btn-secondary" href={alquimiaUrl} target="_blank" rel="noreferrer">Abrir Alquimia do Bonsai</a>
              </div>
            </div>
            <div className="case-copy">
              <article><span>Necessidade</span><p>Criar uma presença digital profissional para apresentar a marca, divulgar bonsais disponíveis e publicar conteúdos sem depender de alterações no código.</p></article>
              <article><span>Solução desenvolvida</span><p>A Vulan criou uma estrutura com presença institucional, catálogo, administração de conteúdo, vídeos, WhatsApp e interface responsiva.</p></article>
              <article><span>Resultado</span><p>A marca passou a possuir um ambiente próprio para apresentar produtos e conteúdos, com autonomia para atualizar informações principais pelo painel administrativo.</p></article>
            </div>
          </div>
        </div>
      </section>

      <section className="section wrap process"><div className="section-head"><p className="eyebrow">Como funciona</p><h2>Do primeiro contato à publicação.</h2></div><div className="steps six">{process.map(([number, title, text]) => <article key={title} className="step"><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="section wrap included"><div><p className="eyebrow">Incluído no projeto</p><h2>O essencial para entregar o site pronto para uso.</h2></div><ul className="check-list">{included.map((item) => <li key={item}>{item}</li>)}</ul></section>

      <section id="sobre" className="section wrap about">
        <div><p className="eyebrow">Sobre a Vulan</p><h2>Tecnologia sem transformar o seu projeto em complicação.</h2><p>A Vulan nasceu para ajudar negócios a construírem uma presença digital profissional de forma mais simples. Cada projeto é desenvolvido considerando a realidade da empresa, seus objetivos e a experiência de quem vai acessar o site.</p></div>
        <div className="founder"><div className="founder-mark" aria-hidden="true">LS</div><div><h3>Quem está por trás da Vulan</h3><p>A Vulan foi fundada por Luan Salles, desenvolvedor web e estudante de Ciência da Computação. Ele é responsável pela direção técnica e pelo desenvolvimento dos projetos da Vulan.</p><a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn de Luan Salles</a></div></div>
      </section>

      <section className="section wrap faq"><h2>Dúvidas comuns</h2><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>

      <section id="orcamento" className="section wrap budget-section"><div className="section-head"><p className="eyebrow">Orçamento</p><h2>Conte um pouco sobre o projeto.</h2><p>As informações ajudam a Vulan entender o escopo, prazo e tipo de site adequado para o seu negócio.</p></div><BudgetForm /></section>

      <section id="contato" className="section final-cta"><div className="wrap"><p className="eyebrow">Próximo passo</p><h2>Vamos tirar o seu site do papel?</h2><p>Conte um pouco sobre o seu negócio e receba uma proposta pensada para o seu projeto.</p><div className="hero-actions"><a className="btn btn-primary" href="#orcamento" data-track="final-budget">Pedir orçamento</a><a className="btn btn-secondary" href={whatsappUrl()} target="_blank" rel="noreferrer" data-track="whatsapp-click">Falar pelo WhatsApp</a></div><a className="email-link" href={`mailto:${email}`}>{email}</a></div></section>
    </main>
  );
}
