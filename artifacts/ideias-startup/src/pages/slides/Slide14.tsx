const base = import.meta.env.BASE_URL;
export default function Slide14() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide comparison-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">4 · MVP com IA</span></header>
<h1>Construir com IA não exige vender IA</h1><div className="content compare"><div className="compare-col"><span className="compare-label">Na construção</span><p className="compare-main">IA ajuda a transformar instruções em software</p></div><div className="compare-col is-accent"><span className="compare-label">No produto</span><p className="compare-main">IA executa uma tarefa útil para o usuário</p></div></div><div className="compare-note"><p>O valor está no problema resolvido, não no rótulo</p><p className="emphasis">Agora vamos usar IA para construir o MVP do caso</p></div><div className="footnote">Aplicação prática</div>
</div>
); }
