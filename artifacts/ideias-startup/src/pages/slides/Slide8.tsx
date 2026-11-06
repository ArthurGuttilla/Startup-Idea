const base = import.meta.env.BASE_URL;
export default function Slide8() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide statement-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /></header>
<h1 className="large-title">Concorrência não encerra a investigação</h1><div className="statement-copy"><p className="">Que necessidade específica continua mal atendida?</p><p className="">Por que esse grupo mudaria de solução?</p><p className="emphasis">“Fazer melhor” é vago: identifique a lacuna concreta</p></div><div className="footnote">Base: Paul Graham</div>
</div>
); }
