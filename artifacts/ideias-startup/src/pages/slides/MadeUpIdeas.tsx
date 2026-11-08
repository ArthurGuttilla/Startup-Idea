const base = import.meta.env.BASE_URL;
export default function MadeUpIdeas() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide statement-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /></header>
<h1 className="large-title">Cuidado com ideias inventadas</h1><div className="statement-copy"><p className="">Paul Graham as chama de “sitcom ideas”: soam plausíveis, mas ninguém precisa delas</p><p className="">Com IA, construir uma ideia inventada ficou rápido e barato</p><p className="emphasis">Antes de construir, pergunte: quem já sente esse problema hoje?</p></div><div className="footnote source-note">Base: Paul Graham, How to Get Startup Ideas</div>
</div>
); }
