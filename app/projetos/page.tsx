import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos | Vulan",
  description: "Cases e projetos publicados pela Vulan.",
};

export default function Projetos() {
  return (
    <main className="simple-page wrap">
      <article>
        <p className="eyebrow">Projetos</p>
        <h1>Cases com problema, solução e entrega real.</h1>
        <div className="service">
          <h2>Alquimia do Bonsai</h2>
          <p>Site institucional, catálogo, conteúdo educativo, vídeos, WhatsApp e painel administrativo para atualização de informações principais.</p>
          <a className="btn btn-secondary" href="/projetos/alquimia-do-bonsai">Ver case</a>
        </div>
      </article>
    </main>
  );
}
