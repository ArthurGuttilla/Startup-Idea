const base = import.meta.env.BASE_URL;
export default function Slide2() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide statement-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /></header>
<h1 className="large-title">Se construir ficou mais fácil, o que vale a pena construir?</h1><div className="statement-copy"><p className="">Um produto funcionando não prova que alguém precisa dele</p><p className="">A pergunta inicial não é “qual app posso fazer?”</p><p className="emphasis">É “quem precisa resolver qual problema agora?”</p></div><div className="footnote">Discussão inicial</div>
</div>
); }
