const base = import.meta.env.BASE_URL;

export default function Slide19() {
  return (
    <div className="w-screen h-screen overflow-hidden relative deck-slide slide-praise">
      <header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">5 · Validação</span></header>
      <h1>Elogio não é evidência</h1>
      <div className="content compare">
        <div className="compare-col">
          <span className="compare-label">O que a pessoa diz</span>
          <p>“Que ideia legal!”</p>
          <p>“Eu usaria, com certeza”</p>
          <p>“Ficou bonito”</p>
        </div>
        <div className="compare-col is-accent">
          <span className="compare-label">O que a pessoa faz</span>
          <p>Faz o pedido sozinha, sem ajuda</p>
          <p>Pede em menos tempo do que por telefone</p>
          <p>Volta para pedir de novo</p>
        </div>
      </div>
      <div className="lp-why"><p>Design bom é quando a pessoa consegue fazer o que veio fazer</p></div>
    </div>
  );
}
