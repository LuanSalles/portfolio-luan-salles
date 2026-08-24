import assert from "node:assert/strict";
import { stat } from "node:fs/promises";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
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

test("server-renders the Vulan website", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Vulan \| Criação de Sites para Negócios/);
  assert.match(html, /Sites profissionais pensados para o seu negócio, sem complicação/);
  assert.match(html, /Pedir orçamento/);
  assert.match(html, /Landing Page/);
  assert.match(html, /Site Institucional/);
  assert.match(html, /Catálogo/);
  assert.match(html, /Alquimia do Bonsai/);
  assert.match(html, /Do primeiro contato à publicação/);
  assert.match(html, /Política de Privacidade/);
  assert.doesNotMatch(html, /Luan Salles Web|portfolio de desenvolvedor|FuteGestão CT|Codex is working|Your site is taking shape|codex-preview/i);
});

test("static site contains Vulan SEO and case preview", async () => {
  const html = await readFile(new URL("../site/index.html", import.meta.url), "utf8");

  assert.match(html, /<title>Vulan \| Criação de Sites para Negócios<\/title>/);
  assert.match(html, /<link rel="canonical" href="https:\/\/portfolio-luan-one\.vercel\.app\/" \/>/);
  assert.match(html, /<meta property="og:title" content="Vulan \| Criação de Sites para Negócios" \/>/);
  assert.match(html, /<meta name="twitter:card" content="summary_large_image" \/>/);
  assert.match(html, /type="application\/ld\+json"/);
  assert.match(html, /"@type":"Organization"/);
  assert.match(html, /<iframe class="case-frame" src="https:\/\/alquimiadobonsai\.com"/);
  assert.match(html, /loading="lazy"/);
  assert.match(html, /href="\/politica-de-privacidade"/);
  assert.match(html, /href="\/termos-de-uso"/);
  assert.doesNotMatch(html, /Luan Salles Web|companySiteLang|aria-pressed|Business websites|Sites que explicam|operação enxuta|em construção/i);
});

test("legal routes render", async () => {
  const privacy = await render("/politica-de-privacidade");
  const terms = await render("/termos-de-uso");

  assert.equal(privacy.status, 200);
  assert.equal(terms.status, 200);
  assert.match(await privacy.text(), /Política de Privacidade/);
  assert.match(await terms.text(), /Termos de Uso/);
});

test("budget route renders a real form", async () => {
  const response = await render("/orcamento");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Conte um pouco sobre o projeto/);
  assert.match(html, /Empresa \/ negócio/);
  assert.match(html, /Seu negócio já possui site/);
  assert.match(html, /Enviar pelo WhatsApp/);
  assert.doesNotMatch(html, /O formulário principal está na página inicial/);
});

test("optimized social images stay lightweight", async () => {
  const desktop = await stat(new URL("../site/alquimia-bonsai-1180.jpg", import.meta.url));
  const mobile = await stat(new URL("../site/alquimia-bonsai-760.jpg", import.meta.url));

  assert.ok(desktop.size < 300_000);
  assert.ok(mobile.size < 150_000);
});
