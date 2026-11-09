const base = import.meta.env.BASE_URL;

export default function AiShift() {
  return (
    <div className="w-screen h-screen overflow-hidden relative deck-slide slide-ai-shift">
      <header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">4 · MVP com IA</span></header>
      <h1>Com IA, construir ficou rápido. Saber o que pedir, não.</h1>
      <div className="content compare">
        <div className="compare-col"><span className="compare-label">Antes</span><p className="compare-main">O difícil era programar: cada tela levava semanas</p></div>
        <div className="compare-col is-accent"><span className="compare-label">Agora</span><p className="compare-main">O aplicativo constrói em minutos o que você pedir, inclusive o que você não pensou direito</p></div>
      </div>
      <div className="lp-why"><span className="compare-label">Por isso</span><p>Estruture o pensamento antes de começar a conversa com o aplicativo</p></div>
    </div>
  );
}
