import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | Vulan",
  description: "Conheça a Vulan e o fundador Luan Salles.",
};

export default function Sobre() {
  return (
    <main className="simple-page wrap">
      <article>
        <p className="eyebrow">Sobre</p>
        <h1>Tecnologia sem transformar o seu projeto em complicação.</h1>
        <p>A Vulan nasceu para ajudar negócios a construírem uma presença digital profissional de forma mais simples.</p>
        <p>Cada projeto é desenvolvido considerando a realidade da empresa, seus objetivos e a experiência de quem vai acessar o site.</p>
        <h2>Quem está por trás da Vulan</h2>
        <p>A Vulan foi fundada por Luan Salles, desenvolvedor web e estudante de Ciência da Computação. Ele é responsável pela direção técnica e pelo desenvolvimento dos projetos da Vulan.</p>
      </article>
    </main>
  );
}
