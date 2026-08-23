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

test("server-renders the web development portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Luan Salles \| Desenvolvimento web para sites profissionais/);
  assert.match(html, /Desenvolvedor web/);
  assert.match(html, /Sites profissionais para apresentar seu negócio com clareza e gerar contatos/);
  assert.match(html, /Alquimia do Bonsai/);
  assert.match(html, /https:\/\/alquimiadobonsai\.com/);
  assert.match(html, /Quem está por trás do projeto/);
  assert.doesNotMatch(html, /Base técnica complementar|Dúvidas frequentes|FuteGestão CT/);
  assert.doesNotMatch(html, /Codex is working|Your site is taking shape|codex-preview/i);
});

test("published static site contains SEO and bilingual contact behavior", async () => {
  const html = await readFile(new URL("../site/index.html", import.meta.url), "utf8");

  assert.match(html, /<link rel="canonical" href="https:\/\/portfolio-luan-one\.vercel\.app\/" \/>/);
  assert.match(html, /<meta property="og:title" content="Luan Salles \| Desenvolvimento web para sites profissionais" \/>/);
  assert.match(html, /<meta name="twitter:card" content="summary_large_image" \/>/);
  assert.match(html, /const i18n = /);
  assert.match(html, /Website and landing page development for professionals/);
  assert.match(html, /Want to create or improve your website\?/);
  assert.match(html, /localStorage\.getItem\("portfolioLang"\)/);
  assert.match(html, /https:\/\/alquimiadobonsai\.com/);
  assert.match(html, /srcset="alquimia-bonsai-760\.jpg 760w, alquimia-bonsai-1180\.jpg 1180w"/);
  assert.match(html, /fetchpriority="high"/);
  assert.match(html, /loading="lazy"/);
  assert.match(html, /alquimia-bonsai-mobile\.jpg/);
  assert.match(html, /type="application\/ld\+json"/);
  assert.match(html, /aria-pressed="true"/);
  assert.match(html, /<a class="skip-link" href="#conteudo">/);
  assert.match(html, /name="name" required/);
  assert.match(html, /name="message" required/);
  assert.doesNotMatch(html, /Link público temporariamente removido|Starter Project|SkeletonPreview|Base técnica complementar|Dúvidas frequentes/i);
});

test("optimized case images stay lightweight", async () => {
  const desktop = await stat(new URL("../site/alquimia-bonsai-1180.jpg", import.meta.url));
  const mobile = await stat(new URL("../site/alquimia-bonsai-760.jpg", import.meta.url));
  const phone = await stat(new URL("../site/alquimia-bonsai-mobile.jpg", import.meta.url));

  assert.ok(desktop.size < 300_000);
  assert.ok(mobile.size < 150_000);
  assert.ok(phone.size < 120_000);
});
