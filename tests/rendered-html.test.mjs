import assert from "node:assert/strict";
import { stat } from "node:fs/promises";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the company website", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Luan Salles Web \| Criação de sites para pequenos negócios/);
  assert.match(html, /Criação de sites para negócios/);
  assert.match(html, /Uma presença digital clara/);
  assert.match(html, /Alquimia do Bonsai/);
  assert.match(html, /https:\/\/alquimiadobonsai\.com/);
  assert.match(html, /Luan Salles Web/);
  assert.match(html, /Manutenção mensal/);
  assert.match(html, /Dúvidas comuns/);
  assert.match(html, /Problema/);
  assert.match(html, /Solução/);
  assert.match(html, /Resultado/);
  assert.doesNotMatch(html, /Codex is working|Your site is taking shape|codex-preview/i);
});

test("published static site contains SEO and bilingual contact behavior", async () => {
  const html = await readFile(new URL("../site/index.html", import.meta.url), "utf8");

  assert.match(html, /<link rel="canonical" href="https:\/\/portfolio-luan-one\.vercel\.app\/" \/>/);
  assert.match(html, /<meta property="og:title" content="Luan Salles Web \| Criação de sites para pequenos negócios" \/>/);
  assert.match(html, /<meta property="og:image:height" content="533" \/>/);
  assert.match(html, /<meta name="twitter:card" content="summary_large_image" \/>/);
  assert.match(html, /const i18n = /);
  assert.match(html, /Business websites, landing pages, and website improvements/);
  assert.match(html, /Website creation for small businesses/);
  assert.match(html, /localStorage\.getItem\("companySiteLang"\)/);
  assert.match(html, /https:\/\/alquimiadobonsai\.com/);
  assert.match(html, /class="hero-panel"/);
  assert.match(html, /class="case-browser"/);
  assert.match(html, /<iframe class="case-frame" src="https:\/\/alquimiadobonsai\.com"/);
  assert.match(html, /loading="lazy"/);
  assert.match(html, /https:\/\/www\.linkedin\.com\/in\/luan-salles\//);
  assert.match(html, /Falar sobre meu site/);
  assert.match(html, /Preencher briefing/);
  assert.match(html, /O formulário é obrigatório\?/);
  assert.doesNotMatch(html, /case-summary|project-card|case-mobile|case-desktop|case-site|case-proof|alquimia-bonsai-mobile\.jpg/);
  assert.match(html, /type="application\/ld\+json"/);
  assert.match(html, /aria-pressed="true"/);
  assert.match(html, /<a class="skip-link" href="#conteudo">/);
  assert.match(html, /name="name" required/);
  assert.match(html, /name="message" required/);
  assert.doesNotMatch(html, /Link público temporariamente removido|Starter Project|SkeletonPreview|Base técnica complementar|FuteGestão CT/i);
});

test("optimized social images stay lightweight", async () => {
  const desktop = await stat(new URL("../site/alquimia-bonsai-1180.jpg", import.meta.url));
  const mobile = await stat(new URL("../site/alquimia-bonsai-760.jpg", import.meta.url));

  assert.ok(desktop.size < 300_000);
  assert.ok(mobile.size < 150_000);
});
