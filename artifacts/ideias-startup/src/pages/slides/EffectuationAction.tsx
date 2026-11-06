const base = import.meta.env.BASE_URL;

export default function EffectuationAction() {
  return (
    <div className="w-screen h-screen overflow-hidden relative deck-slide columns-slide">
      <header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /></header>
      <h1>Effectuation: quatro princípios para avançar</h1>
      <div className="content columns">
        <p><strong>Perda aceitável:</strong> defina quanto tempo e dinheiro pode arriscar</p>
        <p><strong>Colcha de retalhos:</strong> busque parceiros que assumam compromissos</p>
        <p><strong>Limonada:</strong> transforme surpresas em novas possibilidades</p>
        <p><strong>Piloto no avião:</strong> concentre-se no que pode fazer e cocriar</p>
      </div>
      <div className="footnote source-note">
        Saras Sarasvathy · <a className="underline" href="https://effectuation.org/the-five-principles-of-effectuation" target="_blank" rel="noopener noreferrer">effectuation.org</a>
      </div>
    </div>
  );
}
