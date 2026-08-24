import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orçamento | Vulan",
  description: "Solicite um orçamento para criação de site com a Vulan.",
};

export default function Orcamento() {
  return (
    <main className="simple-page wrap">
      <article>
        <p className="eyebrow">Orçamento</p>
        <h1>Conte um pouco sobre o projeto.</h1>
        <p>O formulário principal está na página inicial para montar uma mensagem completa pelo WhatsApp.</p>
        <p><a className="btn btn-primary" href="/#orcamento">Abrir formulário</a></p>
      </article>
    </main>
  );
}
