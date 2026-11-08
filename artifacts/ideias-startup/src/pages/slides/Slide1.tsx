const base = import.meta.env.BASE_URL;
export default function Slide1() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide cover-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /></header>
<div className="cover-title"><h1>Como ter ideias para sua startupMVP com IA</h1></div><div className="cover-bottom"><p className="subtitle">Da observação de um problema ao primeiro teste com usuários.</p><p className="duration">1 hora para escolher uma hipótese e planejar como testá-la</p></div>
</div>
); }
