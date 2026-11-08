const base = import.meta.env.BASE_URL;
export default function Slide18() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide index-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">4 · MVP com IA</span></header>
<h1>Teste os casos que quebram a promessa</h1><div className="content index"><p className="">Restaurante fechado: avisar antes do pedido</p><p className="">Endereço fora da área: dizer que não entrega ali</p><p className="">Falha ao enviar: avisar e permitir nova tentativa</p><p className="">Pedido errado: mostrar resumo e permitir corrigir</p></div><div className="footnote">Demonstração e ajuste</div>
</div>
); }
