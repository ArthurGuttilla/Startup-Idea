const base = import.meta.env.BASE_URL;
export default function Slide19() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide quote-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /></header>
<h1 className="large-title">Elogio não é evidência suficiente</h1><div className="statement-copy"><p className="">Peça que a pessoa execute uma tarefa real</p><p className="">Observe onde ela trava e o que precisa corrigir</p><p className="">Compare o resultado com a alternativa atual</p><p className="emphasis">Procure retorno espontâneo e compromisso concreto</p></div><div className="footnote">Validação proposta · 2 min</div>
</div>
); }
