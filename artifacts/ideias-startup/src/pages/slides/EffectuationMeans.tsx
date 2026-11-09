const base = import.meta.env.BASE_URL;

export default function EffectuationMeans() {
  return (
    <div className="w-screen h-screen overflow-hidden relative deck-slide">
      <header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">1 · Ideias</span></header>
      <h1>Effectuation: comece com o que você tem</h1>
      <div className="eff-principles">
        <div><span className="eff-name">Perda aceitável</span><p>Arrisque só o tempo e o dinheiro que pode perder</p></div>
        <div><span className="eff-name">Colcha de retalhos</span><p>Construa com parceiros que se comprometem</p></div>
        <div><span className="eff-name">Limonada</span><p>Use as surpresas a seu favor</p></div>
        <div><span className="eff-name">Piloto no avião</span><p>Foque no que você controla</p></div>
      </div>
      <div className="eff-means">
        <span className="compare-label">Seus meios</span>
        <div className="eff-means-grid">
          <p><strong>Quem sou:</strong> interesses, capacidades e experiências</p>
          <p><strong>O que sei:</strong> conhecimentos e problemas que conheço</p>
          <p><strong>Quem conheço:</strong> pessoas com quem posso construir e testar</p>
        </div>
      </div>
      <div className="footnote source-note">
        Saras Sarasvathy · <a className="underline" href="https://effectuation.org/the-five-principles-of-effectuation" target="_blank" rel="noopener noreferrer">effectuation.org</a>
      </div>
    </div>
  );
}
