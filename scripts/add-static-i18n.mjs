import { copyFileSync, readFileSync, writeFileSync } from "node:fs";

const source = "outputs/portfolio-luan-completo.html";
const outputCopies = ["outputs/portfolio-vercel/index.html", "site/index.html"];

let html = readFileSync(source, "utf8");

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

if (!html.includes(".lang-switch")) {
  html = html.replace(
    "      .nav a:hover { color: var(--green); background: rgba(16, 44, 34, 0.08); }",
    `      .nav a:hover { color: var(--green); background: rgba(16, 44, 34, 0.08); }\n${languageCss}`,
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
          title: "Luan Salles | Criação de sites profissionais",
          description: "Criação de sites institucionais, landing pages e soluções web para profissionais e pequenos negócios.",
          langLabel: "Selecionar idioma",
          navAria: "Navegação principal",
          nav: ["Serviços", "Projeto", "Sobre", "Técnico", "Processo", "Contato"],
          whatsappText: "Oi, Luan. Quero tirar uma dúvida sobre criação de site.",
          hero: ["Sites profissionais sob medida", "Sites profissionais para transformar visitas em contatos e oportunidades.", "Desenvolvo sites institucionais e landing pages para profissionais e pequenos negócios que precisam apresentar seus serviços com clareza, funcionar bem no celular e levar o cliente direto para o próximo passo.", "Solicitar proposta", "Ver projetos"],
          services: {
            title: "O site certo para cada objetivo.",
            cards: [
              ["Site institucional", "Para profissionais, lojas locais, clínicas, estúdios, prestadores de serviço e pequenos negócios que precisam ser encontrados e gerar contato.", ["Home, sobre, serviços e contato", "WhatsApp, mapa e redes sociais", "Layout responsivo para celular"]],
              ["Landing page", "Para divulgar uma oferta específica, curso, evento, campanha, produto ou serviço com uma página objetiva e pronta para receber leads.", ["Headline e seções de venda", "Botões de ação bem posicionados", "Publicação em domínio próprio ou Vercel"]],
              ["Melhoria de site existente", "Para quem já tem um site no ar, mas precisa melhorar aparência, organização, versão mobile ou caminho de contato.", ["Correção visual", "Organização e adaptação dos textos e imagens fornecidos", "Novas seções ou páginas"]]
            ]
          },
          case: {
            eyebrow: "Estudo de caso",
            title: "Alquimia do Bonsai · Bonsai Alchemy",
            text: "A marca precisava apresentar produtos, cursos, livro, materiais educativos e canais comerciais sem espalhar o visitante por vários links. O projeto organizou essa presença em um site responsivo e bilíngue, com navegação clara e caminhos diretos para compra, inscrição e contato.",
            blocks: [["Problema", "Diferentes públicos precisavam encontrar produtos, escola, livro, conteúdos e contato em um único lugar."], ["Solução", "Criação de uma plataforma bilíngue com catálogo, páginas comerciais, materiais digitais e integrações externas."], ["Minha atuação", "Estrutura das páginas, desenvolvimento frontend, responsividade, interações, organização dos conteúdos e publicação."], ["Resultado", "Uma presença digital única para apresentar a marca e direcionar visitantes para WhatsApp, Amazon, formulários e materiais."]],
            proof: ["Estrutura e implementação das páginas", "Versões em português e inglês", "Catálogo com filtros, favoritos e carrinho local", "Integrações com WhatsApp, redes sociais, PDFs e formulários", "Publicação na Vercel"],
            note: "Link público temporariamente removido do portfólio enquanto o projeto passa por revisão de segurança e conteúdo."
          },
          about: ["Sobre mim", "O responsável por entender, construir e publicar seu site.", "Sou estudante de Ciência da Computação em Niterói e desenvolvedor de sites e sistemas web. Minha experiência começou no suporte técnico, trabalhando diretamente com usuários e resolução de problemas, e evoluiu para o desenvolvimento de projetos próprios e soluções digitais para pequenos negócios.", ["Niterói/RJ", "Atendimento remoto", "Ciência da Computação", "CR 8,24", "Experiência em suporte", "Site publicado", "Sistema em desenvolvimento"]],
          system: ["Além de sites", "FuteGestão CT: sistema em desenvolvimento para gestão de centros de futevôlei.", "O produto organiza alunos, turmas, chamada, frequência, pagamentos, equipe e permissões de acesso. A apresentação pública usa dados fictícios para mostrar a lógica do sistema sem expor nomes, telefones ou informações internas.", ["alunos ativos", "turmas", "presença"], [["Aluno Demo", "Particular · em dia"], ["Maria Exemplo", "Gympass · chamada feita"], ["João Teste", "Plano mensal · frequência alta"]]],
          technical: ["Para recrutadores e parceiros técnicos", "Além do visual, eu trabalho com estrutura, implementação e entrega.", "Este portfólio é voltado principalmente para clientes, mas também resume minha base técnica: desenvolvimento frontend, construção de sistemas web, autenticação, banco de dados, deploy e organização de produto a partir de problemas reais.", ["Frontend", "Backend e dados", "Entrega"], "Responsividade"],
          trust: ["Confiança", "O que fica definido antes do desenvolvimento.", "O cliente envia identidade visual, textos, imagens e informações disponíveis. Quando necessário, oriento sobre formatos e materiais necessários para construir o site.", ["Atendimento em Niterói e remoto", "Layout adaptado para celular, tablet e computador", "Orientação sobre domínio e hospedagem", "Escopo e investimento definidos antes do desenvolvimento", "Revisão antes da publicação", "Mensagens de contato configuradas"]],
          process: ["Processo", "Como o orçamento vira site publicado.", "A entrega começa com informação organizada. Quanto melhor o levantamento, mais preciso fica o escopo, o prazo e o valor.", [["Levantamento do projeto", "Você envia tipo de negócio, objetivo, páginas necessárias, prazo, referências e materiais disponíveis."], ["Definição do escopo", "Eu organizo o que será entregue, quais materiais faltam, prazo estimado e custos externos possíveis."], ["Desenvolvimento", "Desenvolvo o site com foco em clareza, adaptação para celular, contato rápido e aparência profissional."], ["Revisão e publicação", "Reviso os detalhes finais, publico o site e deixo tudo pronto para divulgação."]]],
          contact: ["Proposta", "Envie as informações do projeto antes da conversa.", "O formulário reúne objetivo, tipo de site, páginas, prazo, referências e materiais disponíveis. Com isso, eu consigo responder com perguntas melhores e uma proposta mais realista.", "Solicitar proposta", ["Nome", "Tipo de site ou negócio", "Mensagem"], ["Seu nome", "Ex.: clínica, personal trainer, landing page de evento", "Descreva o negócio, objetivo e prazo desejado."], "Enviar informações pelo WhatsApp", "Oi, Luan. Quero conversar sobre um site.", ["Nome", "Tipo de site ou negócio", "Mensagem"], ["Não informado", "Ainda não definido", "Quero entender o melhor formato para meu site."]],
          faq: ["Dúvidas frequentes", "Pontos importantes antes de começar.", "Estas respostas ajudam a alinhar expectativas sobre custos externos, materiais, revisões e publicação.", [["O domínio está incluído?", "O domínio é contratado em nome do cliente. O custo é informado separadamente antes da contratação."], ["A hospedagem está incluída?", "Depende da estrutura do projeto. As opções e possíveis custos são apresentados junto com a proposta."], ["Quem envia textos e imagens?", "Os materiais são fornecidos pelo cliente. Eu organizo e adapto esse conteúdo para uso no site e oriento sobre o que estiver faltando."], ["O site funciona no celular?", "Sim. Todos os projetos são desenvolvidos com adaptação para celulares, tablets e computadores."], ["Posso solicitar alterações?", "Sim. O número de revisões e os tipos de alteração ficam definidos na proposta antes do início."], ["Há mensalidade?", "Depende das ferramentas, hospedagem, banco de dados e manutenção escolhidos. Todos os custos recorrentes são informados antes da contratação."]]],
          floating: "Tirar dúvida",
          footer: ["Luan Salles · Desenvolvimento de sites", "Niterói/RJ · Atendimento remoto"]
        },
        en: {
          title: "Luan Salles | Professional website development",
          description: "Business websites, landing pages, and web solutions for professionals and small businesses.",
          langLabel: "Select language",
          navAria: "Main navigation",
          nav: ["Services", "Project", "About", "Technical", "Process", "Contact"],
          whatsappText: "Hi, Luan. I want to ask a question about a website project.",
          hero: ["Custom professional websites", "Professional websites that turn visits into contacts and opportunities.", "I build institutional websites and landing pages for professionals and small businesses that need to present their services clearly, work well on mobile, and guide visitors to the next step.", "Request a proposal", "View projects"],
          services: {
            title: "The right website for each goal.",
            cards: [
              ["Business website", "For professionals, local shops, clinics, studios, service providers, and small businesses that need to be found and receive qualified contacts.", ["Home, about, services, and contact", "WhatsApp, map, and social links", "Responsive layout for mobile"]],
              ["Landing page", "For promoting a specific offer, course, event, campaign, product, or service with a focused page designed to receive leads.", ["Headline and sales sections", "Well-positioned call-to-action buttons", "Publishing on a custom domain or Vercel"]],
              ["Existing website improvement", "For businesses that already have a website online but need better visuals, organization, mobile experience, or contact flow.", ["Visual corrections", "Organization and adaptation of provided text and images", "New sections or pages"]]
            ]
          },
          case: {
            eyebrow: "Case study",
            title: "Alquimia do Bonsai · Bonsai Alchemy",
            text: "The brand needed to present products, courses, a book, educational materials, and commercial channels without sending visitors through scattered links. The project organized that presence into a responsive bilingual website with clear navigation and direct paths to purchase, sign up, and contact.",
            blocks: [["Problem", "Different audiences needed to find products, the school, the book, content, and contact channels in one place."], ["Solution", "Creation of a bilingual platform with a catalog, commercial pages, digital materials, and external integrations."], ["My role", "Page structure, frontend development, responsiveness, interactions, content organization, and publishing."], ["Result", "A single digital presence to present the brand and direct visitors to WhatsApp, Amazon, forms, and materials."]],
            proof: ["Page structure and implementation", "Portuguese and English versions", "Catalog with filters, favorites, and local cart", "Integrations with WhatsApp, social networks, PDFs, and forms", "Published on Vercel"],
            note: "The public link is temporarily removed from the portfolio while the project goes through security and content review."
          },
          about: ["About me", "The person responsible for understanding, building, and publishing your website.", "I am a Computer Science student in Niterói, Brazil, and a developer of websites and web systems. My experience started in technical support, working directly with users and problem solving, and evolved into building my own projects and digital solutions for small businesses.", ["Niterói/RJ, Brazil", "Remote service", "Computer Science", "GPA 8.24/10", "Technical support experience", "Published website", "System in development"]],
          system: ["Beyond websites", "FuteGestão CT: a web system in development for managing footvolley training centers.", "The product organizes students, classes, attendance, frequency, payments, staff, and access permissions. The public presentation uses fictitious data to show the system logic without exposing names, phone numbers, or internal information.", ["active students", "classes", "attendance"], [["Demo Student", "Private · paid"], ["Maria Example", "Gympass · attendance recorded"], ["John Sample", "Monthly plan · high frequency"]]],
          technical: ["For recruiters and technical partners", "Beyond visuals, I work with structure, implementation, and delivery.", "This portfolio is mainly focused on clients, but it also summarizes my technical base: frontend development, web systems, authentication, databases, deployment, and product organization from real problems.", ["Frontend", "Backend and data", "Delivery"], "Responsiveness"],
          trust: ["Trust", "What gets defined before development starts.", "The client sends available brand identity, text, images, and business information. When needed, I provide guidance on formats and materials required to build the website.", ["Service in Niterói and remotely", "Layout adapted for mobile, tablet, and desktop", "Guidance on domain and hosting", "Scope and investment defined before development", "Review before publishing", "Contact messages configured"]],
          process: ["Process", "How a proposal becomes a published website.", "Delivery starts with organized information. The better the initial briefing, the more precise the scope, timeline, and investment become.", [["Project briefing", "You send the business type, goal, required pages, timeline, references, and available materials."], ["Scope definition", "I organize what will be delivered, which materials are missing, the estimated timeline, and possible external costs."], ["Development", "I develop the website with focus on clarity, mobile adaptation, quick contact, and professional presentation."], ["Review and publishing", "I review the final details, publish the website, and leave everything ready for sharing."]]],
          contact: ["Proposal", "Send the project information before the conversation.", "The form gathers the goal, website type, pages, timeline, references, and available materials. With that, I can respond with better questions and a more realistic proposal.", "Request a proposal", ["Name", "Website or business type", "Message"], ["Your name", "Ex.: clinic, personal trainer, event landing page", "Describe the business, goal, and desired timeline."], "Send information on WhatsApp", "Hi, Luan. I want to talk about a website project.", ["Name", "Website or business type", "Message"], ["Not provided", "Not defined yet", "I want to understand the best format for my website."]],
          faq: ["FAQ", "Important points before starting.", "These answers help align expectations about external costs, materials, revisions, and publishing.", [["Is the domain included?", "The domain is registered under the client's name. The cost is informed separately before hiring."], ["Is hosting included?", "It depends on the project structure. Options and possible costs are presented with the proposal."], ["Who sends the text and images?", "The materials are provided by the client. I organize and adapt that content for the website and point out what is missing."], ["Does the website work on mobile?", "Yes. All projects are developed for mobile phones, tablets, and desktop computers."], ["Can I request changes?", "Yes. The number of revisions and types of changes are defined in the proposal before the start."], ["Is there a monthly fee?", "It depends on the tools, hosting, database, and maintenance chosen. All recurring costs are informed before hiring."]]],
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

if (!html.includes("const i18n = {")) {
  html = html.replace("      const form = document.querySelector(\"#contactForm\");", `${i18nScript}\n      const form = document.querySelector("#contactForm");`);
}

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
