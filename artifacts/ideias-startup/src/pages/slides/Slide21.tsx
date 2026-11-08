const base = import.meta.env.BASE_URL;
export default function Slide21() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide steps-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /></header>
<h1>Seu plano para os próximos sete dias</h1><div className="content steps"><div className="step"><span className="step-number">1</span><p className="">Escolha um problema observado</p></div><div className="step"><span className="step-number">2</span><p className="">Converse com pessoas que o enfrentam</p></div><div className="step"><span className="step-number">3</span><p className="">Construa apenas o necessário para testar a hipótese</p></div><div className="step"><span className="step-number">4</span><p className="">Observe o uso e registre o que mudou na sua compreensão</p></div></div><div className="footnote">Próximos passos</div>
</div>
); }
