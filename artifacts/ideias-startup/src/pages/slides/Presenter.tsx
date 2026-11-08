const base = import.meta.env.BASE_URL;

export default function Presenter() {
  return (
    <div className="w-screen h-screen overflow-hidden relative deck-slide">
      <header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /></header>
      <div className="absolute left-[6vw] top-[21vh] bottom-[10vh] w-[30vw] bg-primary">
        <img
          src={`${base}images/arthur-guttilla.jpg`}
          crossOrigin="anonymous"
          alt="Arthur Guttilla"
          className="h-full w-full object-cover object-[50%_18%]"
        />
      </div>
      <div className="ml-[36vw] mt-[2vh] pl-[5vw] grid gap-[3vh]">
        <h1>Arthur Guttilla</h1>
        <p className="!text-[2.3vw] text-primary">Head of Product Marketing na Strattum AI</p>
        <div className="grid gap-[2.2vh] border-t-[0.15vw] border-primary pt-[3vh] [&_p]:!text-[1.9vw]">
          <p>Passou pela <strong>AWS</strong> e pelo <strong>Google</strong>, atuando junto a startups e fundos de venture capital.</p>
          <p>Fundou a <strong>Tropicalia</strong>, startup de infraestrutura de IA adquirida pela Strattum AI em 2026.</p>
          <p>É professor de IA na <strong>Link School of Business</strong> desde 2022, investidor anjo e mentor de startups.</p>
        </div>
      </div>
    </div>
  );
}
