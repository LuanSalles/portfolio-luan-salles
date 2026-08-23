import assert from "node:assert/strict";
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

test("server-renders the web development portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Luan Salles \| Desenvolvimento web para sites profissionais/);
  assert.match(html, /Desenvolvimento web focado em sites/);
  assert.match(html, /Sites profissionais para negócios que precisam vender melhor online/);
  assert.match(html, /Alquimia do Bonsai/);
  assert.match(html, /https:\/\/alquimiadobonsai\.com/);
  assert.match(html, /Base técnica complementar/);
  assert.doesNotMatch(html, /Codex is working|Your site is taking shape|codex-preview/i);
});

test("published static site contains SEO and bilingual contact behavior", async () => {
  const html = await readFile(new URL("../site/index.html", import.meta.url), "utf8");

  assert.match(html, /<link rel="canonical" href="https:\/\/portfolio-luan-one\.vercel\.app\/" \/>/);
  assert.match(html, /<meta property="og:title" content="Luan Salles \| Desenvolvimento web para sites profissionais" \/>/);
  assert.match(html, /<meta name="twitter:card" content="summary_large_image" \/>/);
  assert.match(html, /const i18n = \{/);
  assert.match(html, /Web development focused on websites/);
  assert.match(html, /Need a professional website for your business\?/);
  assert.match(html, /localStorage\.getItem\("portfolioLang"\)/);
  assert.match(html, /https:\/\/alquimiadobonsai\.com/);
  assert.doesNotMatch(html, /Link público temporariamente removido|Starter Project|SkeletonPreview/i);
});
