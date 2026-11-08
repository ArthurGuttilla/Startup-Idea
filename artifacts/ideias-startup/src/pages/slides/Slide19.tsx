const base = import.meta.env.BASE_URL;
export default function Slide19() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide quote-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">5 · Validação</span></header>
<h1 className="large-title">Elogio não é evidência suficiente</h1><div className="statement-copy"><p className="">Peça que a pessoa bloqueie o cartão sozinha</p><p className="">Observe onde ela trava e o que precisa perguntar</p><p className="">Compare com o tempo de resolver pela central</p><p className="">Design bom é quando a pessoa consegue fazer o que veio fazer</p><p className="emphasis">Procure retorno espontâneo e compromisso concreto</p></div><div className="footnote">Validação proposta</div>
</div>
); }
