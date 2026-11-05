const base = import.meta.env.BASE_URL;
export default function Slide7() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide columns-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /></header>
<h1>As oportunidades que seus filtros escondem</h1><div className="content columns"><p className="">Problemas trabalhosos podem afastar outros fundadores</p><p className="">Problemas pouco glamourosos também podem ser valiosos</p><p className="">Investigue a necessidade antes de descartar a dificuldade</p></div><div className="footnote">Base: Paul Graham · 2 min</div>
</div>
); }
