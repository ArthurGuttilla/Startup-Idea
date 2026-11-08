const base = import.meta.env.BASE_URL;
export default function Slide15() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide split-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /></header>
<div className="split-title"><h1>O recorte da demonstração</h1></div><div className="split-copy"><p className="">Caso Nubank: controlar o cartão pelo app, sem ligar para a central</p><p className="">Entrada: cliente fictício com cartão e compras recentes</p><p className="">Saída: ver gastos, bloquear o cartão e ajustar o limite</p><p className="">Fora do MVP: emissão real, análise de crédito e cobrança</p></div><div className="footnote">Preparação do experimento</div>
</div>
); }
