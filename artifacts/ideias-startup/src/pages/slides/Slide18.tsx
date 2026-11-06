const base = import.meta.env.BASE_URL;
export default function Slide18() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide index-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /></header>
<h1>Teste os casos que quebram a promessa</h1><div className="content index"><p className="">Briefing vazio: orientar, não inventar</p><p className="">Informação ausente: perguntar, não presumir</p><p className="">Falha na geração: comunicar e permitir nova tentativa</p><p className="">Conteúdo incorreto: manter revisão humana</p></div><div className="footnote">Demonstração e ajuste</div>
</div>
); }
