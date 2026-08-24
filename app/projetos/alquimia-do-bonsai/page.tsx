import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Alquimia do Bonsai | Vulan",
  description: "Case comercial do site Alquimia do Bonsai desenvolvido pela Vulan.",
};

export default function CaseAlquimia() {
  return (
    <main className="simple-page wrap">
      <article>
        <p className="eyebrow">Case principal</p>
        <h1>Alquimia do Bonsai</h1>
        <h2>Contexto</h2>
        <p>Marca dedicada a bonsais, catálogo de produtos e conteúdo relacionado ao cultivo.</p>
        <h2>Necessidade</h2>
        <p>Criar uma presença digital profissional que permitisse apresentar a marca, divulgar bonsais disponíveis e publicar conteúdos sem depender de alterações no código.</p>
        <h2>Solução desenvolvida</h2>
        <p>A Vulan criou uma estrutura com presença institucional, catálogo de bonsais e pré-bonsais, administração de conteúdo, vídeos, integração com WhatsApp e interface responsiva.</p>
        <h2>Resultado</h2>
        <p>A marca passou a possuir um ambiente próprio para apresentar seus produtos e conteúdos, com autonomia para atualizar as informações principais através do painel administrativo.</p>
        <p><a className="btn btn-primary" href="https://alquimiadobonsai.com" target="_blank" rel="noreferrer">Visitar projeto</a></p>
      </article>
    </main>
  );
}
