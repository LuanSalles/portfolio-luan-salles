import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | Vulan",
  description: "Termos de uso do site institucional da Vulan.",
};

export default function TermosDeUso() {
  return (
    <main className="legal-page wrap">
      <article>
        <p className="eyebrow">Legal</p>
        <h1>Termos de Uso</h1>
        <p>Estes termos regulam o uso do site institucional da Vulan. Eles não substituem proposta comercial, contrato ou aceite específico de projeto.</p>

        <h2>Finalidade do site</h2>
        <p>O site apresenta serviços, informações comerciais, cases e canais de contato da Vulan.</p>

        <h2>Conteúdo e propriedade</h2>
        <p>Textos, estrutura, identidade e materiais da Vulan não devem ser copiados ou reutilizados sem autorização.</p>

        <h2>Formulários e informações enviadas</h2>
        <p>Ao enviar dados por formulário ou WhatsApp, o visitante declara que as informações são verdadeiras e podem ser usadas para atendimento e orçamento.</p>

        <h2>Links externos</h2>
        <p>O site pode direcionar para ferramentas externas, como WhatsApp, LinkedIn, Vercel, YouTube ou sites de clientes. A Vulan não controla as políticas desses serviços.</p>

        <h2>Resultados comerciais</h2>
        <p>A Vulan desenvolve sites considerando objetivos do negócio e boas práticas digitais, mas não garante vendas, faturamento, tráfego ou posicionamento específico em buscadores.</p>

        <h2>Alterações</h2>
        <p>Conteúdo, serviços, páginas e termos do site podem ser atualizados quando necessário.</p>

        <h2>Legislação</h2>
        <p>Estes termos seguem a legislação brasileira aplicável.</p>
      </article>
    </main>
  );
}
