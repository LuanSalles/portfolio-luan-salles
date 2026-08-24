import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços | Vulan",
  description: "Landing pages, sites institucionais e sites com catálogo para pequenos e médios negócios.",
};

export default function Servicos() {
  return (
    <main className="simple-page wrap">
      <article>
        <p className="eyebrow">Serviços</p>
        <h1>Sites para negócios que precisam se apresentar melhor.</h1>
        <p>
          A Vulan desenvolve landing pages, sites institucionais e sites com catálogo. Cada projeto começa pelo objetivo da empresa e pelo que o visitante precisa entender para entrar em contato.
        </p>
        <div className="pillar-grid">
          {["Landing Page", "Site Institucional", "Catálogo"].map((item) => (
            <div className="pillar" key={item}>
              <h3>{item}</h3>
              <p>Escopo definido, layout responsivo, integração com WhatsApp, SEO básico, publicação e duas rodadas de ajustes.</p>
            </div>
          ))}
        </div>
        <p><a className="btn btn-primary" href="/#orcamento">Pedir orçamento</a></p>
      </article>
    </main>
  );
}
