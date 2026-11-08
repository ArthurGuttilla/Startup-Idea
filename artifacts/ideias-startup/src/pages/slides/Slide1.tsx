const base = import.meta.env.BASE_URL;
export default function Slide1() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide cover-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /></header>
<div className="cover-title"><h1>Como ter ideias para sua startup<br />MVP com IA</h1></div><div className="cover-bottom"><p className="subtitle">Da observação de um problema ao primeiro teste com usuários.</p><p className="presenter"><strong>Arthur Guttilla</strong><br />Head of Product Marketing, Strattum AI</p></div>
</div>
); }
