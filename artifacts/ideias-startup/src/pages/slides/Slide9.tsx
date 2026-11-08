const base = import.meta.env.BASE_URL;
export default function Slide9() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide exercise-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">2 · Problema</span></header>
<div className="exercise-title"><h1>Registre seus problemas reais</h1></div><div className="exercise-copy"><p className="">Pense na última semana de trabalho ou estudo</p><p className="">Onde houve repetição, espera, erro ou improviso?</p><p className="">Para cada problema, escreva quem sofreu e quanto</p></div>
</div>
); }
