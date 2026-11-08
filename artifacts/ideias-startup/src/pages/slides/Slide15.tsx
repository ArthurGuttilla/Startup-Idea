const base = import.meta.env.BASE_URL;
export default function Slide15() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide split-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">4 · MVP com IA</span></header>
<div className="split-title"><h1>O recorte da demonstração</h1></div><div className="split-copy"><p className="">Caso iFood: um guia digital com os cardápios do bairro</p><p className="">Entrada: restaurantes fictícios com cardápio e telefone</p><p className="">Saída: escolher os pratos e enviar o pedido</p><p className="">Fora do MVP: app, pagamento online e entregadores</p></div><div className="footnote">Preparação do experimento</div>
</div>
); }
