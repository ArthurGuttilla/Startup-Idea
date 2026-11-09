const base = import.meta.env.BASE_URL;
export default function UserInterviews() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide comparison-slide slide-single-q">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">2 · Problema</span></header>
<h1>Converse sobre o problema, não sobre a ideia</h1>
<div className="content compare">
  <div className="compare-col is-accent"><p className="compare-main">“Qual foi a última vez que você quis pedir comida e desistiu? Por quê?”</p></div>
</div>
<div className="footnote source-note">Base: Rob Fitzpatrick, The Mom Test</div>
</div>
); }
