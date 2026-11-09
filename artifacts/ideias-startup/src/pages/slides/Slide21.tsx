const base = import.meta.env.BASE_URL;
export default function Slide21() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide steps-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">5 · Validação</span></header>
<h1>Seu plano para os próximos dias</h1><div className="content steps steps-5"><div className="step"><span className="step-number">1</span><p className="">Escolha um problema que você observou</p></div><div className="step"><span className="step-number">2</span><p className="">Converse com quem o enfrenta</p></div><div className="step"><span className="step-number">3</span><p className="">Escreva a hipótese e a meta</p></div><div className="step"><span className="step-number">4</span><p className="">Construa o menor MVP com Replit</p></div><div className="step"><span className="step-number">5</span><p className="">Meça e decida o próximo passo</p></div></div><div className="footnote">Próximos passos</div>
</div>
); }
