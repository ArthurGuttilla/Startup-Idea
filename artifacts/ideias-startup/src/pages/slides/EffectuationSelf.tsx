const base = import.meta.env.BASE_URL;

export default function EffectuationSelf() {
  return (
    <div className="w-screen h-screen overflow-hidden relative deck-slide slide-eff">
      <header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">1 · Ideias</span></header>
      <h1>Effectuation: comece com o que você tem</h1>
      <div className="eff-self">
        <div><span className="eff-q">Quem sou?</span><p>Interesses, capacidades e experiências</p></div>
        <div><span className="eff-q">O que sei?</span><p>Conhecimentos e problemas que conheço</p></div>
        <div><span className="eff-q">Quem conheço?</span><p>Pessoas com quem posso construir e testar</p></div>
      </div>
      <div className="footnote source-note">
        Saras Sarasvathy · <a className="underline" href="https://effectuation.org/the-five-principles-of-effectuation" target="_blank" rel="noopener noreferrer">effectuation.org</a>
      </div>
    </div>
  );
}
