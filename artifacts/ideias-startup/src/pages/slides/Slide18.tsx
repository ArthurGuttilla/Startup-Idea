const base = import.meta.env.BASE_URL;
export default function Slide18() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide index-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /></header>
<h1>Teste os casos que quebram a promessa</h1><div className="content index"><p className="">Compra não reconhecida: mostrar o que fazer a seguir</p><p className="">Limite insuficiente: explicar o motivo, sem jargão</p><p className="">Falha ao bloquear: avisar e permitir nova tentativa</p><p className="">Ação por engano: pedir confirmação e permitir desfazer</p></div><div className="footnote">Demonstração e ajuste</div>
</div>
); }
