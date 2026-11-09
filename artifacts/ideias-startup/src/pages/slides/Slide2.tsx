const base = import.meta.env.BASE_URL;
export default function Slide2() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide statement-slide slide-balanced">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">1 · Ideias</span></header>
<h1 className="large-title">Se construir ficou mais fácil, o que vale a pena construir?</h1><div className="statement-copy"><p className="">Com <strong>Replit</strong>, construir uma ideia ficou <strong>rápido e barato</strong></p><p className="emphasis">Antes de “qual app posso fazer?”, pergunte: <br />que problema vou resolver hoje?</p></div><div className="footnote source-note">Base: Paul Graham, How to Get Startup Ideas</div>
</div>
); }
