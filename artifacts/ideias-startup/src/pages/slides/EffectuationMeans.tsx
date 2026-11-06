const base = import.meta.env.BASE_URL;

export default function EffectuationMeans() {
  return (
    <div className="w-screen h-screen overflow-hidden relative deck-slide">
      <header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /></header>
      <h1>Effectuation: comece com os meios disponíveis</h1>
      <div className="mt-[5vh] grid grid-cols-3 gap-[4vw]">
        <div className="border-t-[0.15vw] border-primary pt-[3vh]">
          <p><strong>Quem sou:</strong> interesses, capacidades e experiências</p>
        </div>
        <div className="border-t-[0.15vw] border-primary pt-[3vh]">
          <p><strong>O que sei:</strong> conhecimentos e problemas que conheço</p>
        </div>
        <div className="border-t-[0.15vw] border-primary pt-[3vh]">
          <p><strong>Quem conheço:</strong> pessoas com quem posso construir</p>
        </div>
      </div>
      <div className="mt-[6vh] bg-accent px-[3vw] py-[3vh]">
        <p>Os objetivos podem evoluir conforme surgem ações e compromissos</p>
      </div>
      <div className="footnote">
        Pássaro na mão · Saras Sarasvathy · <a className="underline" href="https://effectuation.org/the-five-principles-of-effectuation" target="_blank" rel="noopener noreferrer">effectuation.org</a>
      </div>
    </div>
  );
}
