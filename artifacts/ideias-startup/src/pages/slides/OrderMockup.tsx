const base = import.meta.env.BASE_URL;

const restaurants = [
  { name: 'Cantina da Rua 7', kind: 'Italiana · 30–40 min', open: true },
  { name: 'Sushi Vila', kind: 'Japonesa · 40–50 min', open: true },
  { name: 'Padaria Aurora', kind: 'Lanches · 20–30 min', open: false },
];

export default function OrderMockup() {
  return (
    <div className="w-screen h-screen overflow-hidden relative deck-slide">
      <header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">4 · MVP com IA</span></header>
      <h1>O que vamos construir</h1>
      <div className="browser">
        <div className="browser-bar"><span className="dot" /><span className="dot" /><span className="dot" /><span className="browser-url">pedidos-do-bairro.replit.app</span></div>
        <div className="mock-app">
          <div className="mock-main">
            <span className="mock-title">Restaurantes do bairro</span>
            {restaurants.map((r) => (
              <div className={`mock-rest${r.open ? '' : ' is-closed'}`} key={r.name}>
                <div><span className="mock-name">{r.name}</span><span className="mock-kind">{r.kind}</span></div>
                <span className="mock-tag">{r.open ? 'Aberto' : 'Fechado'}</span>
                <span className="mock-btn">Ver cardápio</span>
              </div>
            ))}
          </div>
          <div className="mock-cart">
            <span className="mock-title">Seu pedido</span>
            <div className="mock-line"><span>1× Lasanha</span><span>R$ 42,00</span></div>
            <div className="mock-line"><span>2× Suco de laranja</span><span>R$ 18,00</span></div>
            <div className="mock-line mock-total"><span>Total</span><span>R$ 60,00</span></div>
            <span className="mock-field">Nome</span>
            <span className="mock-field">Endereço de entrega</span>
            <span className="mock-btn is-primary">Revisar e enviar pedido</span>
          </div>
        </div>
      </div>
      <div className="footnote source-note">Protótipo ilustrativo, com restaurantes e preços fictícios</div>
    </div>
  );
}
