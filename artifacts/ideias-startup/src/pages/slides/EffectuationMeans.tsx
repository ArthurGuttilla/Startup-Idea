const base = import.meta.env.BASE_URL;

const Icon = ({ name }: { name: string }) => (
  <span className="icon" style={{ WebkitMaskImage: `url(${base}images/icons/${name}.svg)`, maskImage: `url(${base}images/icons/${name}.svg)` }} />
);

export default function EffectuationMeans() {
  return (
    <div className="w-screen h-screen overflow-hidden relative deck-slide slide-eff">
      <header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">1 · Ideias</span></header>
      <h1>Effectuation: quatro princípios para avançar</h1>
      <div className="eff-principles">
        <div><Icon name="piggy-bank" /><span className="eff-name">Perda aceitável</span><p>Arrisque só o tempo e o dinheiro que pode perder</p></div>
        <div><Icon name="puzzle" /><span className="eff-name">Colcha de retalhos</span><p>Construa com parceiros que se comprometem</p></div>
        <div><Icon name="citrus" /><span className="eff-name">Limonada</span><p>Use as surpresas a seu favor</p></div>
        <div><Icon name="plane" /><span className="eff-name">Piloto no avião</span><p>Foque no que você controla</p></div>
      </div>
      <div className="footnote source-note">
        Saras Sarasvathy · <a className="underline" href="https://effectuation.org/the-five-principles-of-effectuation" target="_blank" rel="noopener noreferrer">effectuation.org</a>
      </div>
    </div>
  );
}
