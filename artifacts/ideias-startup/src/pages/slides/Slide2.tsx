const base = import.meta.env.BASE_URL;
export default function Slide2() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide statement-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">1 · Ideias</span></header>
<h1 className="large-title">Se construir ficou mais fácil, o que vale a pena construir?</h1><div className="statement-copy"><p className="">Com IA, construir uma ideia inventada ficou rápido e barato</p><p className="">Paul Graham chama de “sitcom ideas” as que soam plausíveis, mas ninguém precisa</p><p className="emphasis">Antes de “qual app posso fazer?”, pergunte: quem já sente esse problema hoje?</p></div><div className="footnote source-note">Base: Paul Graham, How to Get Startup Ideas</div>
</div>
); }
