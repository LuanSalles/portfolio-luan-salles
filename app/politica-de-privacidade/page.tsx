import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Vulan",
  description: "Como a Vulan coleta e utiliza dados enviados pelo site.",
};

export default function PoliticaDePrivacidade() {
  return (
    <main className="legal-page wrap">
      <article>
        <p className="eyebrow">Legal</p>
        <h1>Política de Privacidade</h1>
        <p>Esta política explica como a Vulan utiliza informações enviadas por visitantes interessados em solicitar orçamento ou contato.</p>

        <h2>Dados coletados</h2>
        <p>O site pode coletar nome, empresa, WhatsApp, e-mail, cidade, segmento, informações sobre o projeto, referências e demais dados enviados voluntariamente pelo formulário ou WhatsApp.</p>

        <h2>Finalidade</h2>
        <p>Os dados são utilizados para atendimento, análise do projeto, elaboração de orçamento, contato comercial e organização interna das solicitações recebidas.</p>

        <h2>Serviços externos</h2>
        <p>O atendimento pode envolver WhatsApp, e-mail, hospedagem, ferramentas de formulário, analytics e outros serviços necessários para operação do site e comunicação com clientes.</p>

        <h2>Armazenamento</h2>
        <p>As informações podem ser mantidas pelo período necessário para atendimento, histórico comercial, segurança e cumprimento de obrigações aplicáveis.</p>

        <h2>Correção ou exclusão</h2>
        <p>Você pode solicitar correção ou exclusão dos seus dados pelo e-mail luanspctrabalho@gmail.com.</p>

        <h2>Cookies e analytics</h2>
        <p>Se ferramentas de analytics forem configuradas, os dados coletados serão usados para entender visitas, páginas acessadas e interações relevantes, sem criação de promessas comerciais individuais.</p>

        <h2>Contato</h2>
        <p>Para dúvidas sobre privacidade, entre em contato pelo e-mail luanspctrabalho@gmail.com.</p>
      </article>
    </main>
  );
}
