const base = import.meta.env.BASE_URL;
export default function Slide6() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide slide-questions">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">1 · Ideias</span></header>
<h1>Perceba o que falta.</h1><div className="big-q"><p><span className="q-mark">?</span><span>Que necessidade específica continua mal atendida?</span></p><p><span className="q-mark">?</span><span>Por que esse grupo mudaria de solução?</span></p></div><div className="footnote source-note">Base: Paul Graham</div>
</div>
); }
