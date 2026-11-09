const base = import.meta.env.BASE_URL;

const Icon = ({ name }: { name: string }) => (
  <span className="icon" style={{ WebkitMaskImage: `url(${base}images/icons/${name}.svg)`, maskImage: `url(${base}images/icons/${name}.svg)` }} />
);

export default function LoginPayment() {
  return (
    <div className="w-screen h-screen overflow-hidden relative deck-slide slide-lp">
      <header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">5 · Validação</span></header>
      <h1>Login e pagamento já vêm prontos no Replit</h1>
      <div className="lp-cards">
        <div className="lp-card">
          <div className="lp-card-head"><Icon name="user-round-check" /><span className="compare-label">Login · Replit Auth</span></div>
          <p className="lp-prompt">“Adicione login com Replit Auth para salvar o endereço e o histórico de pedidos”</p>
          <p className="lp-measure"><strong>Mede quem volta:</strong> pede de novo sem você chamar</p>
        </div>
        <div className="lp-card">
          <div className="lp-card-head"><Icon name="credit-card" /><span className="compare-label">Pagamento · Stripe</span></div>
          <p className="lp-prompt">“Conecte o Stripe para cobrar uma taxa de entrega de R$ 5”</p>
          <p className="lp-measure"><strong>Mede quem paga:</strong> o sinal mais forte de todos</p>
        </div>
      </div>
      <div className="lp-why"><p>Teste o fluxo em modo de teste; meça interesse com pagamento real</p></div>
    </div>
  );
}
