# Vulan

Site comercial oficial da Vulan, empresa de criação de sites para pequenos e médios negócios.

## Site publicado

[portfolio-luan-one.vercel.app](https://portfolio-luan-one.vercel.app/)

## Objetivo

Transformar o antigo portfólio pessoal em um site de empresa. A Vulan comunica serviços, benefícios, processo, case real, orçamento, páginas legais e contato.

## Páginas

- `/`
- `/servicos`
- `/projetos`
- `/projetos/alquimia-do-bonsai`
- `/sobre`
- `/contato`
- `/orcamento`
- `/politica-de-privacidade`
- `/termos-de-uso`

## Serviços apresentados

- Landing Page
- Site Institucional
- Catálogo
- Catálogo com painel administrativo
- Manutenção sob demanda ou plano opcional

## Case principal

[Alquimia do Bonsai](https://alquimiadobonsai.com)

O case apresenta contexto, necessidade, solução desenvolvida e resultado comprovável, sem métricas inventadas.

## Tecnologias

- Next.js
- React
- TypeScript
- CSS
- JavaScript
- Vercel

## Como executar

```bash
npm install
npm run dev
```

Gerar HTML estático:

```bash
node scripts/generate-static-site.mjs
```

Build:

```bash
npm run build
```

Testes:

```bash
node --test tests/rendered-html.test.mjs
```
