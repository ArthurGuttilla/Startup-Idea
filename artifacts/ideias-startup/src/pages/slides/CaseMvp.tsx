const base = import.meta.env.BASE_URL;

export default function CaseMvp() {
  return (
    <div className="w-screen h-screen overflow-hidden relative deck-slide cards-slide slide-case-mvp">
      <header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">4 · MVP com IA</span></header>
      <h1 className="title-with-logo">O MVP aplicado ao caso<img className="title-logo" src={`${base}images/logos/ifood.svg`} crossOrigin="anonymous" alt="iFood" /></h1>
      <div className="content cards-ex">
        <div className="card-ex"><span className="icon" style={{ WebkitMaskImage: `url(${base}images/icons/users.svg)`, maskImage: `url(${base}images/icons/users.svg)` }} /><p>Quem pede comida em casa em São Paulo</p></div>
        <div className="card-ex"><span className="icon" style={{ WebkitMaskImage: `url(${base}images/icons/target.svg)`, maskImage: `url(${base}images/icons/target.svg)` }} /><p>Descobrir quem entrega e como pedir</p></div>
        <div className="card-ex"><span className="icon" style={{ WebkitMaskImage: `url(${base}images/icons/route.svg)`, maskImage: `url(${base}images/icons/route.svg)` }} /><p>Ver cardápios, escolher e pedir por telefone</p></div>
        <div className="card-ex"><span className="icon" style={{ WebkitMaskImage: `url(${base}images/icons/chart-line.svg)`, maskImage: `url(${base}images/icons/chart-line.svg)` }} /><p>Pedidos chegando aos restaurantes</p></div>
      </div>
    </div>
  );
}
