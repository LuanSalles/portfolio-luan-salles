"use client";

import { FormEvent, useMemo, useState } from "react";

const phone = "5521979231817";

function whatsappUrl(message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function BudgetForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    business: "",
    whatsapp: "",
    email: "",
    need: "Landing Page",
    hasSite: "Não",
    goal: "",
    deadline: "Assim que possível",
    budget: "Ainda não sei",
    companyUrl: "",
  });

  const message = useMemo(
    () =>
      [
        "Olá! Quero solicitar um orçamento com a Vulan.",
        "",
        `Nome: ${form.name || "Não informado"}`,
        `Empresa: ${form.business || "Não informado"}`,
        `WhatsApp: ${form.whatsapp || "Não informado"}`,
        `E-mail: ${form.email || "Não informado"}`,
        `Tipo de projeto: ${form.need}`,
        `Possui site: ${form.hasSite}`,
        `Objetivo: ${form.goal || "Não informado"}`,
        `Prazo: ${form.deadline}`,
        `Faixa de investimento: ${form.budget}`,
      ].join("\n"),
    [form],
  );

  function update(key: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (form.companyUrl) return;
    setSent(true);
    window.open(whatsappUrl(message), "_blank", "noreferrer");
  }

  return (
    <form className="budget-form" onSubmit={submit}>
      <input className="hp-field" tabIndex={-1} autoComplete="off" value={form.companyUrl} onChange={(event) => update("companyUrl", event.target.value)} aria-hidden="true" />
      <div className="form-grid">
        <label>Nome*<input required value={form.name} onChange={(event) => update("name", event.target.value)} autoComplete="name" /></label>
        <label>Empresa / negócio*<input required value={form.business} onChange={(event) => update("business", event.target.value)} /></label>
        <label>WhatsApp*<input required value={form.whatsapp} onChange={(event) => update("whatsapp", event.target.value)} inputMode="tel" /></label>
        <label>E-mail<input value={form.email} onChange={(event) => update("email", event.target.value)} type="email" autoComplete="email" /></label>
      </div>
      <div className="form-grid">
        <label>
          O que você precisa?
          <select value={form.need} onChange={(event) => update("need", event.target.value)}>
            <option>Landing Page</option>
            <option>Site Institucional</option>
            <option>Catálogo</option>
            <option>Catálogo com painel administrativo</option>
            <option>Ainda não sei</option>
          </select>
        </label>
        <label>
          Seu negócio já possui site?
          <select value={form.hasSite} onChange={(event) => update("hasSite", event.target.value)}>
            <option>Não</option>
            <option>Sim</option>
          </select>
        </label>
      </div>
      <label>Principal objetivo do novo site<textarea required value={form.goal} onChange={(event) => update("goal", event.target.value)} /></label>
      <div className="form-grid">
        <label>
          Quando gostaria de publicar?
          <select value={form.deadline} onChange={(event) => update("deadline", event.target.value)}>
            <option>Assim que possível</option>
            <option>Dentro de 30 dias</option>
            <option>1-2 meses</option>
            <option>Sem prazo definido</option>
          </select>
        </label>
        <label>
          Faixa de investimento
          <select value={form.budget} onChange={(event) => update("budget", event.target.value)}>
            <option>Até R$1.000</option>
            <option>R$1.000-2.000</option>
            <option>R$2.000-4.000</option>
            <option>Acima de R$4.000</option>
            <option>Ainda não sei</option>
          </select>
        </label>
      </div>
      <button className="btn btn-primary" type="submit">Enviar pelo WhatsApp</button>
      {sent ? <p className="success-message" role="status">Recebemos seu projeto. A Vulan vai analisar as informações e retornar pelo contato informado.</p> : <p className="form-note">Ao enviar, o WhatsApp abre com a mensagem pronta para envio.</p>}
    </form>
  );
}
