const base = import.meta.env.BASE_URL;

export default function BuildFlow() {
  return (
    <div className="w-screen h-screen overflow-hidden relative deck-slide steps-slide slide-plan slide-flow">
      <header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">4 · MVP com IA</span></header>
      <h1>Do MVP ao link, em quatro passos</h1>
      <div className="content steps">
        <div className="step"><span className="step-number">1</span><span className="flow-name">MVP</span><p>Defina o menor teste possível</p></div>
        <div className="step"><span className="step-number">2</span><span className="flow-name">PRD</span><p>Estruture o pensamento, em conjunto</p></div>
        <div className="step"><span className="step-number">3</span><span className="flow-name">Prompt</span><p>Transforme o PRD em instruções para a Replit</p></div>
        <div className="step"><span className="step-number">4</span><span className="flow-name">Entregável</span><p>Um link que alguém consegue usar</p></div>
      </div>
    </div>
  );
}
