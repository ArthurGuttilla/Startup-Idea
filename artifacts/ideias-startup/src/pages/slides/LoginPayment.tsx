const base = import.meta.env.BASE_URL;

export default function LoginPayment() {
  return (
    <div className="w-screen h-screen overflow-hidden relative deck-slide">
      <header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">5 · Validação</span></header>
      <h1>Login e pagamento já vêm prontos no Replit</h1>
      <div className="lp-grid">
        <div className="lp-col">
          <span className="compare-label">Login · Replit Auth</span>
          <p className="lp-prompt">“Adicione login com Replit Auth”</p>
        </div>
        <div className="lp-col">
          <span className="compare-label">Pagamento · Stripe</span>
          <p className="lp-prompt">“Conecte o Stripe em modo de teste”</p>
        </div>
      </div>
      <div className="lp-why"><span className="compare-label">Por que isso importa</span><p>Cada cadastro e cada pagamento mostram se alguém quer o produto de verdade</p></div>
    </div>
  );
}
