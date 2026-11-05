const base = import.meta.env.BASE_URL;
export default function Slide13() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide cards-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /></header>
<h1>MVP é um teste, não uma lista de funcionalidades</h1><div className="content cards"><p className="">Um público inicial</p><p className="">Um problema prioritário</p><p className="">Um fluxo completo e limitado</p><p className="">Uma evidência que orienta a próxima decisão</p></div><div className="footnote">Aplicação prática · 2 min</div>
</div>
); }
