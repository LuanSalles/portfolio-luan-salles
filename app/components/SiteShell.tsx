const phone = "5521979231817";
const email = "luanspctrabalho@gmail.com";
const whatsappText =
  "Olá! Conheci a Vulan pelo site e gostaria de conversar sobre a criação de um site para meu negócio.";

function whatsappUrl() {
  return `https://wa.me/${phone}?text=${encodeURIComponent(whatsappText)}`;
}

export function SiteHeader() {
  return (
    <header className="topbar">
      <a className="brand" href="/" aria-label="Vulan">
        <span className="brand-mark">V</span>
        <span>VULAN</span>
      </a>
      <nav className="nav" aria-label="Navegação principal">
        <a href="/">Início</a>
        <a href="/servicos">Serviços</a>
        <a href="/projetos">Projetos</a>
        <a href="/sobre">Sobre</a>
        <a href="/contato">Contato</a>
      </nav>
      <a className="btn btn-primary header-cta" href="/orcamento" data-track="header-budget">
        Pedir orçamento
      </a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="wrap footer">
      <div>
        <strong>VULAN</strong>
        <p>Sites pensados para negócios.</p>
        <p><a href={`mailto:${email}`}>{email}</a></p>
      </div>
      <nav aria-label="Links do rodapé">
        <a href="/servicos">Serviços</a>
        <a href="/projetos">Projetos</a>
        <a href="/sobre">Sobre</a>
        <a href="/orcamento">Orçamento</a>
        <a href="/contato">Contato</a>
        <a href="/politica-de-privacidade">Política de Privacidade</a>
        <a href="/termos-de-uso">Termos de Uso</a>
        <a href={whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp</a>
      </nav>
      <p className="footer-copy">© 2026 Vulan. Todos os direitos reservados.</p>
    </footer>
  );
}
