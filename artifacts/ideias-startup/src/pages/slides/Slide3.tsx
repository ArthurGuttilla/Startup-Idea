const base = import.meta.env.BASE_URL;
export default function Slide3() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide split-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">1 · Ideias</span></header>
<div className="split-title"><h1>Não comece pela ideia. Comece pelo problema.</h1></div><div className="split-copy"><p className="">Paul Graham recomenda procurar problemas, preferencialmente os seus</p><p className="">A proximidade com a dor ajuda a perceber necessidades reais</p><p className="">Melhor ainda se você consegue construir a solução</p><p className="">E se poucas pessoas percebem que vale a pena fazê-la</p></div><div className="footnote source-note">Base: How to Get Startup Ideas</div>
</div>
); }
