const base = import.meta.env.BASE_URL;
export default function UserInterviews() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide comparison-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">2 · Problema</span></header>
<h1>Converse sobre o passado, não sobre a ideia</h1>
<div className="content compare">
  <div className="compare-col"><span className="compare-label">Evite</span><p className="compare-main">“Você usaria um app de delivery?”</p><p>Sobre o futuro, as pessoas tendem a ser gentis, não precisas</p></div>
  <div className="compare-col is-accent"><span className="compare-label">Prefira</span><p className="compare-main">“Qual foi a última vez que você quis pedir comida e desistiu? Por quê?”</p><p className="ref-line"><img className="ref-logo" src={`${base}images/logos/doordash.svg`} crossOrigin="anonymous" alt="DoorDash" /><span>O DoorDash nasceu ouvindo uma dona de restaurante falar dos pedidos que ela já perdia</span></p></div>
</div>
<div className="footnote source-note">Base: Rob Fitzpatrick, The Mom Test</div>
</div>
); }
