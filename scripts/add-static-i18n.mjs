import { copyFileSync, readFileSync, writeFileSync } from "node:fs";

const source = "outputs/portfolio-luan-completo.html";
const outputCopies = ["outputs/portfolio-vercel/index.html", "site/index.html"];
const alquimiaUrl = "https://alquimiadobonsai.com";

let html = readFileSync(source, "utf8");
const portfolioUrl = "https://portfolio-luan-one.vercel.app/";

const languageCss = `
      .header-actions {
        display: inline-flex;
        align-items: center;
        justify-content: flex-end;
        gap: 10px;
      }
      .lang-switch {
        display: inline-flex;
        align-items: center;
        gap: 2px;
        padding: 3px;
        border: 1px solid var(--line);
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.54);
      }
      .lang-switch button {
        min-width: 38px;
        min-height: 32px;
        border: 0;
        border-radius: 999px;
        color: var(--muted);
        background: transparent;
        cursor: pointer;
        font-size: 0.78rem;
        font-weight: 900;
      }
      .lang-switch button.active {
        color: #fff;
        background: var(--green);
      }`;

const caseActionCss = `
      .case-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 18px;
      }`;

const staticHeadMeta = `
    <link rel="canonical" href="${portfolioUrl}" />
    <meta property="og:title" content="Luan Salles | Desenvolvimento web para sites profissionais" />
    <meta property="og:description" content="Sites institucionais e landing pages com foco em clareza, versão mobile, performance e contato rápido." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${portfolioUrl}" />
    <meta property="og:site_name" content="Luan Salles" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:image" content="${portfolioUrl}alquimia-bonsai-desktop.png" />
    <meta property="og:image:alt" content="Site Alquimia do Bonsai desenvolvido por Luan Salles" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Luan Salles | Desenvolvimento web para sites profissionais" />
    <meta name="twitter:description" content="Sites institucionais e landing pages com foco em clareza, versão mobile, performance e contato rápido." />
    <meta name="twitter:image" content="${portfolioUrl}alquimia-bonsai-desktop.png" />`;

if (!html.includes('rel="canonical"')) {
  html = html.replace("    <style>", `${staticHeadMeta}\n    <style>`);
}

if (!html.includes(".lang-switch")) {
  html = html.replace(
    "      .nav a:hover { color: var(--green); background: rgba(16, 44, 34, 0.08); }",
    `      .nav a:hover { color: var(--green); background: rgba(16, 44, 34, 0.08); }\n${languageCss}`,
  );
}

if (!html.includes(".case-actions")) {
  html = html.replace(
    "      .case-note { margin: 18px 0 0; font-size: 0.92rem; }",
    `      .case-note { margin: 18px 0 0; font-size: 0.92rem; }\n${caseActionCss}`,
  );
}

if (!html.includes(".header-actions {")) {
  html = html.replace(
    "        .topbar .btn { min-height: 42px; padding: 0 13px; font-size: 0.88rem; }",
    `        .topbar .btn { min-height: 42px; padding: 0 13px; font-size: 0.88rem; }\n        .header-actions { gap: 6px; }\n        .lang-switch button { min-width: 34px; min-height: 30px; }`,
  );
}

html = html.replace(
  /<a class="btn btn-primary" href="https:\/\/wa\.me\/5521979231817\?text=[^"]+" target="_blank" rel="noreferrer">WhatsApp<\/a>/,
  `<div class="header-actions">
          <div class="lang-switch" aria-label="Selecionar idioma">
            <button class="active" type="button" data-lang="pt">PT</button>
            <button type="button" data-lang="en">EN</button>
          </div>
          <a class="btn btn-primary header-whatsapp" href="https://wa.me/5521979231817?text=Oi%2C%20Luan.%20Quero%20tirar%20uma%20d%C3%BAvida%20sobre%20cria%C3%A7%C3%A3o%20de%20site." target="_blank" rel="noreferrer">WhatsApp</a>
        </div>`,
);

const i18nScript = `
      const i18n = {
        pt: {
          title: "Luan Salles | Desenvolvimento web para sites profissionais",
          description: "Desenvolvimento de sites institucionais e landing pages para profissionais, empresas e pequenos negócios.",
          langLabel: "Selecionar idioma",
          navAria: "Navegação principal",
          nav: ["Serviços", "Projeto", "Sobre", "Técnico", "Processo", "Contato"],
          whatsappText: "Oi, Luan. Quero tirar uma dúvida sobre criação de site.",
          hero: ["Desenvolvimento web focado em sites", "Sites profissionais para negócios que precisam vender melhor online.", "Sou Luan Salles, desenvolvedor web em Niterói. Crio sites institucionais, landing pages e páginas comerciais para profissionais e pequenos negócios que precisam de presença digital clara, rápida e pronta para gerar contato.", "Solicitar proposta", "Ver site publicado"],
          services: {
            title: "Meu foco é construir sites. Bem feitos, responsivos e fáceis de entender.",
            cards: [
              ["Sites institucionais", "Para empresas, profissionais liberais, lojas locais, clínicas, estúdios e prestadores de serviço que precisam apresentar marca, serviços e formas de contato.", ["Home, sobre, serviços e contato", "Versão mobile bem resolvida", "Publicação com domínio e SEO básico"]],
              ["Landing pages", "Para vender uma oferta específica, divulgar campanha, captar leads, apresentar um lançamento ou organizar uma página objetiva de conversão.", ["Copy direta e seções de venda", "Botões de ação bem posicionados", "Integração com WhatsApp ou formulário"]],
              ["Evolução de sites", "Para quem já tem um site no ar, mas precisa melhorar aparência, organização, performance, conteúdo, versão mobile ou caminho de contato.", ["Correção visual e responsiva", "Novas seções ou páginas", "Ajustes de conteúdo e experiência"]]
            ]
          },
          case: {
            eyebrow: "Estudo de caso",
            title: "Alquimia do Bonsai · Bonsai Alchemy",
            text: "Site completo, publicado e em uso para a marca Alquimia do Bonsai. O projeto reúne apresentação institucional, livro, cursos, conteúdos educativos, catálogo, loja, redes sociais e contato em uma experiência responsiva e bilíngue.",
            blocks: [["Objetivo", "Centralizar produtos, escola, livro, conteúdos e canais comerciais em um site profissional, sem depender de vários links soltos."], ["Solução", "Criação de um site bilíngue com páginas comerciais, catálogo, materiais digitais, navegação clara e integrações externas."], ["Minha atuação", "Estrutura das páginas, desenvolvimento frontend, responsividade, interações, organização dos conteúdos e publicação."], ["Resultado", "Um site funcional, publicado em domínio próprio e pronto para receber visitantes, apresentar a marca e direcionar contatos."]],
            proof: ["Estrutura e implementação das páginas", "Versões em português e inglês", "Catálogo com filtros, favoritos e carrinho local", "Integrações com WhatsApp, redes sociais, PDFs e formulários", "Publicação em domínio próprio"],
            note: "Projeto 100% funcional e publicado. Este é o principal estudo de caso do meu portfólio como desenvolvedor web focado em sites.",
            liveLabel: "Ver site publicado"
          },
          about: ["Sobre mim", "O responsável por entender, construir e publicar seu site.", "Sou estudante de Ciência da Computação em Niterói e desenvolvedor de sites e sistemas web. Minha experiência começou no suporte técnico, trabalhando diretamente com usuários e resolução de problemas, e evoluiu para o desenvolvimento de projetos próprios e soluções digitais para pequenos negócios.", ["Niterói/RJ", "Atendimento remoto", "Ciência da Computação", "CR 8,24", "Experiência em suporte", "Site publicado", "Sistema em desenvolvimento"]],
          system: ["Base técnica complementar", "Também desenvolvo sistemas web, mas meu foco comercial agora é criação de sites.", "O FuteGestão CT mostra minha capacidade de trabalhar com regras de negócio, painéis, permissões e dados. Essa experiência fortalece meus projetos de site, porque me ajuda a pensar em estrutura, organização, performance e evolução técnica.", ["alunos ativos", "turmas", "presença"], [["Aluno Demo", "Particular · em dia"], ["Maria Exemplo", "Gympass · chamada feita"], ["João Teste", "Plano mensal · frequência alta"]]],
          technical: ["Tecnologias para desenvolvimento web", "Construo sites com código, responsividade e atenção à entrega.", "Meu caminho profissional é desenvolvimento web. Trabalho com HTML, CSS, JavaScript e React, organizando páginas, componentes, integrações, deploy e manutenção para entregar sites que funcionam bem no celular e no desktop.", ["Frontend", "Backend e dados", "Entrega"], "Responsividade"],
          trust: ["Confiança", "O que precisa ficar claro antes de construir um site.", "O mercado de sites varia muito de preço porque cada projeto tem escopo, conteúdo, prazo e integrações diferentes. Por isso eu trabalho com orçamento por projeto, depois de entender o objetivo do site.", ["Atendimento em Niterói e remoto", "Layout adaptado para celular, tablet e computador", "Orientação sobre domínio e hospedagem", "Escopo e investimento definidos antes do desenvolvimento", "Revisão antes da publicação", "Contato via WhatsApp, e-mail ou formulário configurado"]],
          process: ["Processo", "Como o orçamento vira site publicado.", "Um bom site não começa no código. Começa entendendo o negócio, o público, o objetivo da página e qual ação o visitante precisa tomar.", [["Levantamento do projeto", "Você envia tipo de negócio, objetivo, páginas necessárias, prazo, referências e materiais disponíveis."], ["Definição do escopo", "Eu organizo o que será entregue, quais materiais faltam, prazo estimado e custos externos possíveis."], ["Desenvolvimento", "Desenvolvo o site com foco em clareza, adaptação para celular, contato rápido e aparência profissional."], ["Revisão e publicação", "Reviso os detalhes finais, publico o site e deixo tudo pronto para divulgação."]]],
          contact: ["Proposta", "Precisa de um site profissional para seu negócio?", "Me envie o tipo de site, objetivo, prazo, referências e materiais disponíveis. Com essas informações eu consigo avaliar escopo, prazo e investimento com mais precisão.", "Solicitar proposta", ["Nome", "Tipo de site ou negócio", "Mensagem"], ["Seu nome", "Ex.: clínica, personal trainer, landing page de evento", "Descreva o negócio, objetivo e prazo desejado."], "Enviar informações pelo WhatsApp", "Oi, Luan. Quero conversar sobre um site.", ["Nome", "Tipo de site ou negócio", "Mensagem"], ["Não informado", "Ainda não definido", "Quero entender o melhor formato para meu site."]],
          faq: ["Dúvidas frequentes", "Pontos importantes antes de começar.", "Estas respostas ajudam a alinhar expectativas sobre custos externos, materiais, revisões e publicação.", [["O domínio está incluído?", "O domínio é contratado em nome do cliente. O custo é informado separadamente antes da contratação."], ["A hospedagem está incluída?", "Depende da estrutura do projeto. As opções e possíveis custos são apresentados junto com a proposta."], ["Quanto custa um site?", "O valor depende do escopo. Como referência de mercado, landing pages e sites institucionais costumam variar bastante conforme páginas, conteúdo, integrações e prazo."], ["Quem envia textos e imagens?", "Os materiais são fornecidos pelo cliente. Eu organizo e adapto esse conteúdo para uso no site e oriento sobre o que estiver faltando."], ["O site funciona no celular?", "Sim. Todos os projetos são desenvolvidos com adaptação para celulares, tablets e computadores."], ["Posso solicitar alterações?", "Sim. O número de revisões e os tipos de alteração ficam definidos na proposta antes do início."]]],
          floating: "Tirar dúvida",
          footer: ["Luan Salles · Desenvolvimento de sites", "Niterói/RJ · Atendimento remoto"]
        },
        en: {
          title: "Luan Salles | Web development for professional websites",
          description: "Business website and landing page development for professionals, companies, and small businesses.",
          langLabel: "Select language",
          navAria: "Main navigation",
          nav: ["Services", "Project", "About", "Technical", "Process", "Contact"],
          whatsappText: "Hi, Luan. I want to ask a question about a website project.",
          hero: ["Web development focused on websites", "Professional websites for businesses that need to sell better online.", "I am Luan Salles, a web developer based in Niterói, Brazil. I build business websites, landing pages, and commercial pages for professionals and small businesses that need a clear, fast, mobile-ready online presence.", "Request a proposal", "View live website"],
          services: {
            title: "My focus is building websites. Clear, responsive, and easy to understand.",
            cards: [
              ["Business websites", "For companies, independent professionals, local shops, clinics, studios, and service providers that need to present their brand, services, and contact paths.", ["Home, about, services, and contact", "Strong mobile experience", "Publishing with domain and basic SEO"]],
              ["Landing pages", "For selling a specific offer, promoting a campaign, capturing leads, launching a product, or organizing a focused conversion page.", ["Direct copy and sales sections", "Well-positioned call-to-action buttons", "WhatsApp or form integration"]],
              ["Website improvements", "For businesses that already have a website online but need better visuals, organization, performance, content, mobile experience, or contact flow.", ["Visual and responsive fixes", "New sections or pages", "Content and experience adjustments"]]
            ]
          },
          case: {
            eyebrow: "Case study",
            title: "Alquimia do Bonsai · Bonsai Alchemy",
            text: "A complete, published, live website for Alquimia do Bonsai. The project brings together institutional presentation, book, courses, educational content, catalog, shop, social channels, and contact in a responsive bilingual experience.",
            blocks: [["Goal", "Centralize products, school, book, content, and commercial channels in a professional website instead of relying on scattered links."], ["Solution", "Creation of a bilingual website with commercial pages, catalog, digital materials, clear navigation, and external integrations."], ["My role", "Page structure, frontend development, responsiveness, interactions, content organization, and publishing."], ["Result", "A functional website, published on a custom domain and ready to receive visitors, present the brand, and direct contacts."]],
            proof: ["Page structure and implementation", "Portuguese and English versions", "Catalog with filters, favorites, and local cart", "Integrations with WhatsApp, social networks, PDFs, and forms", "Published on a custom domain"],
            note: "Fully functional and published project. This is the main case study in my portfolio as a web developer focused on websites.",
            liveLabel: "View live website"
          },
          about: ["About me", "The person responsible for understanding, building, and publishing your website.", "I am a Computer Science student in Niterói, Brazil, and a developer of websites and web systems. My experience started in technical support, working directly with users and problem solving, and evolved into building my own projects and digital solutions for small businesses.", ["Niterói/RJ, Brazil", "Remote service", "Computer Science", "GPA 8.24/10", "Technical support experience", "Published website", "System in development"]],
          system: ["Complementary technical background", "I also build web systems, but my commercial focus now is website development.", "FuteGestão CT shows my ability to work with business rules, dashboards, permissions, and data. That experience strengthens my website projects because it helps me think about structure, organization, performance, and technical evolution.", ["active students", "classes", "attendance"], [["Demo Student", "Private · paid"], ["Maria Example", "Gympass · attendance recorded"], ["John Sample", "Monthly plan · high frequency"]]],
          technical: ["Technologies for web development", "I build websites with code, responsiveness, and delivery in mind.", "My professional path is web development. I work with HTML, CSS, JavaScript, and React, organizing pages, components, integrations, deployment, and maintenance to deliver websites that work well on mobile and desktop.", ["Frontend", "Backend and data", "Delivery"], "Responsiveness"],
          trust: ["Trust", "What needs to be clear before building a website.", "Website pricing varies a lot because each project has a different scope, content, timeline, and integrations. That is why I estimate each project after understanding the website goal.", ["Service in Niterói and remotely", "Layout adapted for mobile, tablet, and desktop", "Guidance on domain and hosting", "Scope and investment defined before development", "Review before publishing", "WhatsApp, email, or form contact configured"]],
          process: ["Process", "How a proposal becomes a published website.", "A good website does not start with code. It starts by understanding the business, the audience, the page goal, and the action visitors should take.", [["Project briefing", "You send the business type, goal, required pages, timeline, references, and available materials."], ["Scope definition", "I organize what will be delivered, which materials are missing, the estimated timeline, and possible external costs."], ["Development", "I develop the website with focus on clarity, mobile adaptation, quick contact, and professional presentation."], ["Review and publishing", "I review the final details, publish the website, and leave everything ready for sharing."]]],
          contact: ["Proposal", "Need a professional website for your business?", "Send me the website type, goal, timeline, references, and available materials. With that, I can evaluate scope, timeline, and investment more precisely.", "Request a proposal", ["Name", "Website or business type", "Message"], ["Your name", "Ex.: clinic, personal trainer, event landing page", "Describe the business, goal, and desired timeline."], "Send information on WhatsApp", "Hi, Luan. I want to talk about a website project.", ["Name", "Website or business type", "Message"], ["Not provided", "Not defined yet", "I want to understand the best format for my website."]],
          faq: ["FAQ", "Important points before starting.", "These answers help align expectations about external costs, materials, revisions, and publishing.", [["Is the domain included?", "The domain is registered under the client's name. The cost is informed separately before hiring."], ["Is hosting included?", "It depends on the project structure. Options and possible costs are presented with the proposal."], ["How much does a website cost?", "It depends on the scope. As a market reference, landing pages and business websites vary a lot depending on pages, content, integrations, and timeline."], ["Who sends the text and images?", "The materials are provided by the client. I organize and adapt that content for the website and point out what is missing."], ["Does the website work on mobile?", "Yes. All projects are developed for mobile phones, tablets, and desktop computers."], ["Can I request changes?", "Yes. The number of revisions and types of changes are defined in the proposal before the start."]]],
          floating: "Ask a question",
          footer: ["Luan Salles · Website development", "Niterói/RJ, Brazil · Remote service"]
        }
      };

      const setText = (selector, text) => {
        const element = document.querySelector(selector);
        if (element) element.textContent = text;
      };
      const setList = (selector, items) => {
        document.querySelectorAll(selector).forEach((element, index) => {
          if (items[index]) element.textContent = items[index];
        });
      };
      const setHrefMessage = (selector, text) => {
        const element = document.querySelector(selector);
        if (element) element.href = \`https://wa.me/5521979231817?text=\${encodeURIComponent(text)}\`;
      };

      function applyLanguage(lang) {
        const t = i18n[lang];
        document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
        document.title = t.title;
        document.querySelector('meta[name="description"]').setAttribute("content", t.description);
        document.querySelector(".nav").setAttribute("aria-label", t.navAria);
        document.querySelector(".lang-switch").setAttribute("aria-label", t.langLabel);
        document.querySelectorAll(".lang-switch button").forEach((button) => {
          button.classList.toggle("active", button.dataset.lang === lang);
        });

        setList(".nav a", t.nav);
        setText(".header-whatsapp", "WhatsApp");
        setHrefMessage(".header-whatsapp", t.whatsappText);
        setText(".hero-copy .eyebrow", t.hero[0]);
        setText(".hero-copy h1", t.hero[1]);
        setText(".hero-copy .lead", t.hero[2]);
        setText(".hero-actions .btn-primary", t.hero[3]);
        setText(".hero-actions .btn-secondary", t.hero[4]);
        setText("#servicos .section-head .eyebrow", t.nav[0]);
        setText("#servicos h2", t.services.title);
        document.querySelectorAll(".service").forEach((card, index) => {
          const service = t.services.cards[index];
          if (!service) return;
          card.querySelector("h3").textContent = service[0];
          card.querySelector("p").textContent = service[1];
          card.querySelectorAll("li").forEach((item, itemIndex) => item.textContent = service[2][itemIndex]);
        });

        setText(".case-copy .eyebrow", t.case.eyebrow);
        setText(".case-copy h2", t.case.title);
        setText(".case-copy > p", t.case.text);
        document.querySelectorAll(".case-blocks div").forEach((block, index) => {
          block.querySelector("strong").textContent = t.case.blocks[index][0];
          block.querySelector("span").textContent = t.case.blocks[index][1];
        });
        setList(".proof-list li", t.case.proof);
        setText(".case-actions .btn", t.case.liveLabel);
        setText(".case-note", t.case.note);

        setText(".about .eyebrow", t.about[0]);
        setText(".about h2", t.about[1]);
        setText(".about-profile p", t.about[2]);
        setList(".profile-facts span", t.about[3]);

        setText(".system-band .eyebrow", t.system[0]);
        setText(".system-band h2", t.system[1]);
        setText(".system-band > div:nth-child(2) > p", t.system[2]);
        document.querySelectorAll(".demo-metrics span").forEach((metric, index) => {
          metric.childNodes[1].textContent = \` \${t.system[3][index]}\`;
        });
        document.querySelectorAll(".demo-table div").forEach((row, index) => {
          row.querySelector("strong").textContent = t.system[4][index][0];
          row.querySelector("span").textContent = t.system[4][index][1];
        });

        setText(".technical .eyebrow", t.technical[0]);
        setText(".technical h2", t.technical[1]);
        setText(".technical > div:first-child p:not(.eyebrow)", t.technical[2]);
        setList(".tech-grid h3", t.technical[3]);
        document.querySelectorAll(".tech-grid span").forEach((span) => {
          if (span.textContent === "Responsividade" || span.textContent === "Responsiveness") span.textContent = t.technical[4];
        });

        const sectionHeads = document.querySelectorAll(".section-head");
        const trustHead = sectionHeads[1];
        trustHead.querySelector(".eyebrow").textContent = t.trust[0];
        trustHead.querySelector("h2").textContent = t.trust[1];
        trustHead.querySelector(":scope > p").textContent = t.trust[2];
        setList(".trust-grid article", t.trust[3]);

        setText("#processo .eyebrow", t.process[0]);
        setText("#processo h2", t.process[1]);
        setText("#processo .section-head > p", t.process[2]);
        document.querySelectorAll(".step").forEach((step, index) => {
          step.querySelector("strong").textContent = \`\${index + 1}. \${t.process[3][index][0]}\`;
          step.querySelector("p").textContent = t.process[3][index][1];
        });

        setText(".contact .eyebrow", t.contact[0]);
        setText(".contact h2", t.contact[1]);
        setText(".contact > div:first-child > p:not(.eyebrow)", t.contact[2]);
        setText(".form-cta", t.contact[3]);
        document.querySelectorAll("#contactForm label").forEach((label, index) => {
          label.childNodes[0].textContent = t.contact[4][index];
        });
        document.querySelector("#name").placeholder = t.contact[5][0];
        document.querySelector("#projectType").placeholder = t.contact[5][1];
        document.querySelector("#message").placeholder = t.contact[5][2];
        setText("#contactForm button", t.contact[6]);

        const faqHead = document.querySelectorAll(".section-head")[3];
        faqHead.querySelector(".eyebrow").textContent = t.faq[0];
        faqHead.querySelector("h2").textContent = t.faq[1];
        faqHead.querySelector(":scope > p").textContent = t.faq[2];
        document.querySelectorAll(".faq-grid article").forEach((item, index) => {
          item.querySelector("h3").textContent = t.faq[3][index][0];
          item.querySelector("p").textContent = t.faq[3][index][1];
        });

        setText(".floating-whatsapp", t.floating);
        setHrefMessage(".floating-whatsapp", t.whatsappText);
        setList("footer span", t.footer);
        localStorage.setItem("portfolioLang", lang);
      }

      document.querySelectorAll(".lang-switch button").forEach((button) => {
        button.addEventListener("click", () => applyLanguage(button.dataset.lang));
      });
      applyLanguage(localStorage.getItem("portfolioLang") === "en" ? "en" : "pt");
`;

if (html.includes("const i18n = {")) {
  html = html.replace(
    /\n\s+const i18n = \{[\s\S]*?applyLanguage\(localStorage\.getItem\("portfolioLang"\) === "en" \? "en" : "pt"\);\n/,
    `\n${i18nScript}\n`,
  );
} else {
  html = html.replace("      const form = document.querySelector(\"#contactForm\");", `${i18nScript}\n      const form = document.querySelector("#contactForm");`);
}

html = html.replaceAll("https://alquimiadobonsai.vercel.app/", alquimiaUrl);
html = html.replaceAll("https://alquimiadobonsai.vercel.app", alquimiaUrl);

const contentReplacements = [
  ["Luan Salles | Criação de sites profissionais", "Luan Salles | Desenvolvimento web para sites profissionais"],
  [
    "Criação de sites institucionais, landing pages e soluções web para profissionais e pequenos negócios.",
    "Desenvolvimento de sites institucionais e landing pages para profissionais, empresas e pequenos negócios.",
  ],
  ["Sites profissionais sob medida", "Desenvolvimento web focado em sites"],
  [
    "Sites profissionais para transformar visitas em contatos e oportunidades.",
    "Sites profissionais para negócios que precisam vender melhor online.",
  ],
  [
    "Desenvolvo sites institucionais e landing pages para profissionais e pequenos negócios\n            que precisam apresentar seus serviços com clareza, funcionar bem no celular e levar o\n            cliente direto para o próximo passo.",
    "Sou Luan Salles, desenvolvedor web em Niterói. Crio sites institucionais e landing pages\n            para profissionais e pequenos negócios que precisam de presença digital clara, rápida\n            e pronta para gerar contato.",
  ],
  ["Ver projetos", "Ver site publicado"],
  ["O site certo para cada objetivo.", "Meu foco é construir sites. Bem feitos, responsivos e fáceis de entender."],
  ["Site institucional", "Sites institucionais"],
  [
    "Para profissionais, lojas locais, clínicas, estúdios, prestadores de serviço e pequenos negócios que precisam ser encontrados e gerar contato.",
    "Para empresas, profissionais liberais, lojas locais, clínicas, estúdios e prestadores de serviço que precisam apresentar marca, serviços e formas de contato.",
  ],
  ["Home, sobre, serviços e contato</li><li>WhatsApp, mapa e redes sociais</li><li>Layout responsivo para celular", "Home, sobre, serviços e contato</li><li>Versão mobile bem resolvida</li><li>Publicação com domínio e SEO básico"],
  ["Landing page", "Landing pages"],
  [
    "Para divulgar uma oferta específica, curso, evento, campanha, produto ou serviço com uma página objetiva e pronta para receber leads.",
    "Para vender uma oferta específica, divulgar campanha, captar leads, apresentar um lançamento ou organizar uma página objetiva de conversão.",
  ],
  ["Headline e seções de venda</li><li>Botões de ação bem posicionados</li><li>Publicação em domínio próprio ou Vercel", "Copy direta e seções de venda</li><li>Botões de ação bem posicionados</li><li>Integração com WhatsApp ou formulário"],
  ["Melhoria de site existente", "Evolução de sites"],
  [
    "Para quem já tem um site no ar, mas precisa melhorar aparência, organização, versão mobile ou caminho de contato.",
    "Para quem já tem um site no ar, mas precisa melhorar aparência, organização, performance, conteúdo, versão mobile ou caminho de contato.",
  ],
  ["Correção visual</li><li>Organização e adaptação dos textos e imagens fornecidos</li><li>Novas seções ou páginas", "Correção visual e responsiva</li><li>Novas seções ou páginas</li><li>Ajustes de conteúdo e experiência"],
  [
    "A marca precisava apresentar produtos, cursos, livro, materiais educativos e canais comerciais sem\n              espalhar o visitante por vários links. O projeto organizou essa presença em um site responsivo e\n              bilíngue, com navegação clara e caminhos diretos para compra, inscrição e contato.",
    "Site completo, publicado e em uso para a marca Alquimia do Bonsai. O projeto reúne apresentação\n              institucional, livro, cursos, conteúdos educativos, catálogo, loja, redes sociais e contato\n              em uma experiência responsiva e bilíngue.",
  ],
  ["<strong>Problema</strong><span>Diferentes públicos precisavam encontrar produtos, escola, livro, conteúdos e contato em um único lugar.</span>", "<strong>Objetivo</strong><span>Centralizar produtos, escola, livro, conteúdos e canais comerciais em um site profissional, sem depender de vários links soltos.</span>"],
  ["Criação de uma plataforma bilíngue com catálogo, páginas comerciais, materiais digitais e integrações externas.", "Criação de um site bilíngue com páginas comerciais, catálogo, materiais digitais, navegação clara e integrações externas."],
  ["Uma presença digital única para apresentar a marca e direcionar visitantes para WhatsApp, Amazon, formulários e materiais.", "Um site funcional, publicado em domínio próprio e pronto para receber visitantes, apresentar a marca e direcionar contatos."],
  ["Publicação na Vercel", "Publicação em domínio próprio"],
  ["Projeto finalizado e publicado. O site já reúne a apresentação da marca, conteúdos, catálogo, livro, cursos e canais comerciais.", "Projeto 100% funcional e publicado. Este é o principal estudo de caso do meu portfólio como desenvolvedor web focado em sites."],
  ["Além de sites", "Base técnica complementar"],
  ["FuteGestão CT: sistema em desenvolvimento para gestão de centros de futevôlei.", "Também desenvolvo sistemas web, mas meu foco comercial agora é criação de sites."],
  [
    "O produto organiza alunos, turmas, chamada, frequência, pagamentos, equipe e permissões de acesso.\n              A apresentação pública usa dados fictícios para mostrar a lógica do sistema sem expor nomes,\n              telefones ou informações internas.",
    "O FuteGestão CT mostra minha capacidade de trabalhar com regras de negócio, painéis, permissões\n              e dados. Essa experiência fortalece meus projetos de site, porque me ajuda a pensar em\n              estrutura, organização, performance e evolução técnica.",
  ],
  ["Para recrutadores e parceiros técnicos", "Tecnologias para desenvolvimento web"],
  ["Além do visual, eu trabalho com estrutura, implementação e entrega.", "Construo sites com código, responsividade e atenção à entrega."],
  [
    "Este portfólio é voltado principalmente para clientes, mas também resume minha base técnica:\n              desenvolvimento frontend, construção de sistemas web, autenticação, banco de dados, deploy e\n              organização de produto a partir de problemas reais.",
    "Meu caminho profissional é desenvolvimento web. Trabalho com HTML, CSS, JavaScript e React,\n              organizando páginas, componentes, integrações, deploy e manutenção para entregar sites\n              que funcionam bem no celular e no desktop.",
  ],
  ["O que fica definido antes do desenvolvimento.", "O que precisa ficar claro antes de construir um site."],
  [
    "O cliente envia identidade visual, textos, imagens e informações disponíveis. Quando necessário,\n            oriento sobre formatos e materiais necessários para construir o site.",
    "O mercado de sites varia muito de preço porque cada projeto tem escopo, conteúdo, prazo e\n            integrações diferentes. Por isso eu trabalho com orçamento por projeto, depois de entender\n            o objetivo do site.",
  ],
  ["Mensagens de contato configuradas", "Contato via WhatsApp, e-mail ou formulário configurado"],
  [
    "A entrega começa com informação organizada. Quanto melhor o levantamento, mais preciso fica o escopo,\n            o prazo e o valor.",
    "Um bom site não começa no código. Começa entendendo o negócio, o público, o objetivo da página\n            e qual ação o visitante precisa tomar.",
  ],
  ["Envie as informações do projeto antes da conversa.", "Precisa de um site profissional para seu negócio?"],
  [
    "O formulário reúne objetivo, tipo de site, páginas, prazo, referências e materiais disponíveis.\n              Com isso, eu consigo responder com perguntas melhores e uma proposta mais realista.",
    "Me envie o tipo de site, objetivo, prazo, referências e materiais disponíveis. Com essas informações\n              eu consigo avaliar escopo, prazo e investimento com mais precisão.",
  ],
];

for (const [from, to] of contentReplacements) {
  html = html.replaceAll(from, to);
}

html = html.replaceAll(
  "Link público temporariamente removido do portfólio enquanto o projeto passa por revisão de segurança e conteúdo.",
  "Projeto finalizado e publicado. O site já reúne a apresentação da marca, conteúdos, catálogo, livro, cursos e canais comerciais.",
);
html = html.replaceAll(
  "The public link is temporarily removed from the portfolio while the project goes through security and content review.",
  "Finished and published project. The website brings together the brand presentation, content, catalog, book, courses, and commercial channels.",
);
html = html.replaceAll(
  'note: "Projeto finalizado e publicado. O site já reúne a apresentação da marca, conteúdos, catálogo, livro, cursos e canais comerciais."\n',
  'note: "Projeto finalizado e publicado. O site já reúne a apresentação da marca, conteúdos, catálogo, livro, cursos e canais comerciais.",\n            liveLabel: "Ver site publicado"\n',
);
html = html.replaceAll(
  'note: "Finished and published project. The website brings together the brand presentation, content, catalog, book, courses, and commercial channels."\n',
  'note: "Finished and published project. The website brings together the brand presentation, content, catalog, book, courses, and commercial channels.",\n            liveLabel: "View live website"\n',
);
html = html.replace(
  /<p class="case-note">Projeto finalizado e publicado\. O site já reúne a apresentação da marca, conteúdos, catálogo, livro, cursos e canais comerciais\.<\/p>/,
  `<div class="case-actions"><a class="btn btn-primary" href="${alquimiaUrl}" target="_blank" rel="noreferrer">Ver site publicado</a></div>
            <p class="case-note">Projeto finalizado e publicado. O site já reúne a apresentação da marca, conteúdos, catálogo, livro, cursos e canais comerciais.</p>`,
);
html = html.replaceAll(
  'setList(".proof-list li", t.case.proof);\n        setText(".case-note", t.case.note);',
  'setList(".proof-list li", t.case.proof);\n        setText(".case-actions .btn", t.case.liveLabel);\n        setText(".case-note", t.case.note);',
);

html = html.replaceAll(
  "element.href = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;",
  "element.href = `https://wa.me/5521979231817?text=${encodeURIComponent(text)}`;",
);

html = html.replace(
  /form\.addEventListener\("submit", \(event\) => \{[\s\S]*?window\.open\(`https:\/\/wa\.me\/\$\{phone\}\?text=\$\{encodeURIComponent\(text\)\}`, "_blank", "noreferrer"\);\s+\}\);/,
  `form.addEventListener("submit", (event) => {
        event.preventDefault();
        const lang = localStorage.getItem("portfolioLang") === "en" ? "en" : "pt";
        const labels = i18n[lang].contact[8];
        const fallbacks = i18n[lang].contact[9];
        const name = document.querySelector("#name").value.trim() || fallbacks[0];
        const projectType = document.querySelector("#projectType").value.trim() || fallbacks[1];
        const message = document.querySelector("#message").value.trim() || fallbacks[2];
        const text = [
          i18n[lang].contact[7],
          "",
          \`\${labels[0]}: \${name}\`,
          \`\${labels[1]}: \${projectType}\`,
          \`\${labels[2]}: \${message}\`,
        ].join("\\n");
        window.open(\`https://wa.me/\${phone}?text=\${encodeURIComponent(text)}\`, "_blank", "noreferrer");
      });`,
);

writeFileSync(source, html, "utf8");
for (const target of outputCopies) copyFileSync(source, target);
