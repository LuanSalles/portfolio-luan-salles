# Luan Salles Web

Site inicial da Luan Salles Web, empresa de criação de sites institucionais, landing pages e melhorias em sites existentes para pequenos negócios e profissionais.

![Prévia do site](./docs/portfolio-preview.png)

## Site publicado

[portfolio-luan-one.vercel.app](https://portfolio-luan-one.vercel.app/)

## Objetivo

O site foi reformulado para deixar de funcionar como portfólio pessoal e passar a comunicar uma oferta de empresa:

- criação de sites institucionais;
- landing pages;
- reforma de sites existentes;
- manutenção mensal opcional;
- processo de atendimento e publicação;
- prova real com o projeto Alquimia do Bonsai;
- contato direto por WhatsApp;
- briefing pelo Google Forms.

## Projeto em destaque

O principal case público é o site da Alquimia do Bonsai:

[alquimiadobonsai.com](https://alquimiadobonsai.com)

O case apresenta problema, solução e resultado, além de uma demonstração interativa do site publicado. O projeto reúne versão em português e inglês, catálogo, favoritos, carrinho local, páginas institucionais, cursos, vídeos, links externos e contato via WhatsApp.

## O que foi desenvolvido

- Home comercial da empresa Luan Salles Web.
- Posicionamento focado em pequenos negócios.
- Seções de soluções, método, projeto publicado, empresa, FAQ e contato.
- Mensagem de WhatsApp pré-preenchida.
- Link para briefing de orçamento.
- Alternância de conteúdo em português e inglês.
- Metadados, favicon, Open Graph e JSON-LD.
- Versão estática publicada pela Vercel.

## Tecnologias

- Next.js
- React
- TypeScript
- CSS
- JavaScript
- Vercel

## Como executar localmente

Pré-requisito:

- Node.js `>=22.13.0`

Instale as dependências:

```bash
npm install
```

Execute em desenvolvimento:

```bash
npm run dev
```

Gere a versão estática usada no deploy:

```bash
node scripts/generate-static-site.mjs
```

Gere a build de produção:

```bash
npm run build
```

## Estrutura principal

```text
app/
  layout.tsx
  page.tsx
  globals.css
scripts/
  generate-static-site.mjs
public/
  favicon-ls.svg
  alquimia-bonsai-1180.jpg
  alquimia-bonsai-760.jpg
docs/
  portfolio-preview.png
site/
  index.html
```

## Deploy

O projeto publicado utiliza Vercel. A configuração em `vercel.json` publica a pasta `site/`, que contém a versão estática gerada do site.

Depois de conectar o repositório à Vercel, novos commits na branch principal geram uma nova publicação automaticamente.
