const base = import.meta.env.BASE_URL;
export default function Slide17() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide flow-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">4 · MVP com IA</span></header>
<h1>Construa o menor fluxo completo</h1><div className="content flow"><div className="step"><span className="step-number">1</span><p className="">Abra a lista de restaurantes</p></div><div className="step"><span className="step-number">2</span><p className="">Escolha os pratos</p></div><div className="step"><span className="step-number">3</span><p className="">Envie o pedido com o endereço</p></div><div className="step"><span className="step-number">4</span><p className="">Compare com o caminho atual: achar um panfleto e ligar</p></div></div><div className="footnote">Demonstração ao vivo</div>
</div>
); }
