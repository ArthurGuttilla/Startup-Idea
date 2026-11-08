const base = import.meta.env.BASE_URL;

export default function EffectuationMeans() {
  return (
    <div className="w-screen h-screen overflow-hidden relative deck-slide">
      <header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">1 · Ideias</span></header>
      <h1>Effectuation: comece com o que você tem</h1>
      <div className="mt-[5vh] grid grid-cols-3 gap-[4vw]">
        <div className="border-t-[0.15vw] border-primary pt-[2.4vh]">
          <p><strong>Quem sou:</strong> interesses, capacidades e experiências</p>
        </div>
        <div className="border-t-[0.15vw] border-primary pt-[2.4vh]">
          <p><strong>O que sei:</strong> conhecimentos e problemas que conheço</p>
        </div>
        <div className="border-t-[0.15vw] border-primary pt-[2.4vh]">
          <p><strong>Quem conheço:</strong> pessoas com quem posso construir e testar</p>
        </div>
      </div>
      <div className="mt-[5vh] grid grid-cols-4 gap-[1.6vw] bg-accent px-[2.4vw] py-[3vh] [&_p]:!text-[1.75vw]">
        <p><strong>Perda aceitável:</strong> arrisque só o tempo e o dinheiro que pode perder</p>
        <p><strong>Colcha de retalhos:</strong> construa com parceiros que se comprometem</p>
        <p><strong>Limonada:</strong> use as surpresas a seu favor</p>
        <p><strong>Piloto no avião:</strong> foque no que você controla</p>
      </div>
      <div className="footnote source-note">
        Saras Sarasvathy · <a className="underline" href="https://effectuation.org/the-five-principles-of-effectuation" target="_blank" rel="noopener noreferrer">effectuation.org</a>
      </div>
    </div>
  );
}
