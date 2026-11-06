const base = import.meta.env.BASE_URL;
export default function Slide5() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide quote-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /></header>
<h1 className="large-title">Poucos usuários com muita necessidade</h1><div className="statement-copy"><p className="">Prefira uma necessidade intensa a um interesse superficial</p><p className="">Quem usaria uma primeira versão limitada hoje?</p><p className="emphasis">Começar por um nicho não significa ficar nele para sempre</p></div><div className="footnote source-note">Base: Paul Graham</div>
</div>
); }
