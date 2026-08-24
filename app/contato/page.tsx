import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Vulan",
  description: "Entre em contato com a Vulan para conversar sobre seu site.",
};

export default function Contato() {
  return (
    <main className="simple-page wrap">
      <article>
        <p className="eyebrow">Contato</p>
        <h1>Vamos conversar sobre o seu site.</h1>
        <p>Envie uma mensagem pelo WhatsApp ou preencha o formulário de orçamento para detalhar melhor o projeto.</p>
        <p>
          <a className="btn btn-primary" href="https://wa.me/5521979231817?text=Ol%C3%A1!%20Conheci%20a%20Vulan%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20a%20cria%C3%A7%C3%A3o%20de%20um%20site%20para%20meu%20neg%C3%B3cio." target="_blank" rel="noreferrer">Falar pelo WhatsApp</a>
        </p>
        <p><a href="mailto:luanspctrabalho@gmail.com">luanspctrabalho@gmail.com</a></p>
      </article>
    </main>
  );
}
