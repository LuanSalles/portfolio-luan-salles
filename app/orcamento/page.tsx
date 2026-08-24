import type { Metadata } from "next";
import { BudgetForm } from "../components/BudgetForm";

export const metadata: Metadata = {
  title: "Orçamento | Vulan",
  description: "Solicite um orçamento para criação de site com a Vulan.",
};

export default function Orcamento() {
  return (
    <main className="simple-page budget-page wrap">
      <article>
        <p className="eyebrow">Orçamento</p>
        <h1>Conte um pouco sobre o projeto.</h1>
        <p>Preencha as informações principais para a Vulan entender o escopo, prazo e tipo de site adequado para o seu negócio.</p>
      </article>
      <BudgetForm />
    </main>
  );
}
