const base = import.meta.env.BASE_URL;
export default function Slide13() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide cards-slide slide-case-mvp">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">4 · MVP com IA</span></header>
<h1>MVP é um teste, não uma lista de funcionalidades</h1><div className="content cards-ex"><div className="card-ex"><span className="icon" style={{ WebkitMaskImage: `url(${base}images/icons/users.svg)`, maskImage: `url(${base}images/icons/users.svg)` }} /><p>Um público inicial</p></div><div className="card-ex"><span className="icon" style={{ WebkitMaskImage: `url(${base}images/icons/target.svg)`, maskImage: `url(${base}images/icons/target.svg)` }} /><p>Um problema prioritário</p></div><div className="card-ex"><span className="icon" style={{ WebkitMaskImage: `url(${base}images/icons/route.svg)`, maskImage: `url(${base}images/icons/route.svg)` }} /><p>Um fluxo completo e limitado</p></div><div className="card-ex"><span className="icon" style={{ WebkitMaskImage: `url(${base}images/icons/chart-line.svg)`, maskImage: `url(${base}images/icons/chart-line.svg)` }} /><p>Uma evidência que orienta a próxima decisão</p></div></div><div className="footnote">Aplicação prática</div>
</div>
); }
