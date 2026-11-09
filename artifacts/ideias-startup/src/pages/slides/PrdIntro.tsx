const base = import.meta.env.BASE_URL;

export default function PrdIntro() {
  return (
    <div className="w-screen h-screen overflow-hidden relative deck-slide">
      <header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">4 · MVP com IA</span></header>
      <h1>PRD e Markdown, em uma frase cada</h1>
      <div className="content compare">
        <div className="compare-col"><span className="compare-label">PRD</span><p className="compare-main">O documento que descreve o produto: o problema, para quem, o que entra e o que fica de fora</p></div>
        <div className="compare-col"><span className="compare-label">Markdown</span><p className="compare-main">Texto simples com marcações leves, como <code className="md-inline"># título</code> e <code className="md-inline">- lista</code>, que pessoas e IA leem com facilidade</p></div>
      </div>
      <div className="lp-why"><span className="compare-label">Juntos</span><p>Você escreve o plano, e a IA constrói a partir dele</p></div>
    </div>
  );
}
