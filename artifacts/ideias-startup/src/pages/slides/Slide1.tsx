const base = import.meta.env.BASE_URL;
export default function Slide1() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide cover-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /></header>
<div className="cover-title"><h1>Como ter ideias para sua startup<br />e construir um MVP com IA</h1></div><div className="cover-bottom"><p className="subtitle">Da observação de um problema ao primeiro teste com usuários.</p><div className="cover-refs"><span className="compare-label">Referências da aula</span><p><em>How to Get Startup Ideas</em>, Paul Graham (2012)</p><p><em>Effectuation</em>, Saras Sarasvathy (2008)</p></div></div>
</div>
); }
