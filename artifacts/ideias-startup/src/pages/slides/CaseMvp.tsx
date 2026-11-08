const base = import.meta.env.BASE_URL;

export default function CaseMvp() {
  return (
    <div className="w-screen h-screen overflow-hidden relative deck-slide cards-slide">
      <header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">4 · MVP com IA</span></header>
      <h1>O MVP aplicado ao caso iFood</h1>
      <div className="content cards-ex">
        <div className="card-ex"><span className="compare-label">Público inicial</span><p>Quem pede comida em casa em São Paulo</p></div>
        <div className="card-ex"><span className="compare-label">Problema prioritário</span><p>Descobrir quem entrega e como pedir</p></div>
        <div className="card-ex"><span className="compare-label">Fluxo completo e limitado</span><p>Ver cardápios, escolher e pedir por telefone</p></div>
        <div className="card-ex"><span className="compare-label">Evidência</span><p>Pedidos chegando aos restaurantes do guia</p></div>
      </div>
      <div className="case-ref"><span className="compare-label">Mesma lógica no DoorDash, em 2013</span><p>Uma página com cardápios em PDF, um telefone e os próprios fundadores entregando. O primeiro pedido chegou em poucas horas.</p></div>
    </div>
  );
}
