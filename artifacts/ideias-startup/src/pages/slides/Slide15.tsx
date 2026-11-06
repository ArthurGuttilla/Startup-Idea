const base = import.meta.env.BASE_URL;
export default function Slide15() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide split-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /></header>
<div className="split-title"><h1>O recorte da demonstração</h1></div><div className="split-copy"><p className="">Exemplo didático: briefing → rascunho de proposta revisável</p><p className="">Entrada: briefing fictício em texto</p><p className="">Saída: escopo, entregáveis, dúvidas e exclusões</p><p className="">Fora do MVP: cobrança, assinatura e envio automático</p></div><div className="footnote">Preparação do experimento</div>
</div>
); }
