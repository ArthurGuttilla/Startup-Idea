const base = import.meta.env.BASE_URL;
export default function Slide22() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide close-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /></header>
<h1 className="closing-title">Qual problema você vai investigar primeiro?</h1><div className="closing-questions"><p className="">Quem sente essa dor agora?</p><p className="">Qual é a menor experiência que pode gerar evidência?</p></div><div className="sources"><p className="">Ideias de startup: Paul Graham, How to Get Startup Ideas, novembro de 2012</p><p className="">Effectuation: Saras Sarasvathy, effectuation.org</p><p className="">Entrevistas: Rob Fitzpatrick, The Mom Test, 2013</p><p className="">Caso Nubank: Blog Nubank, em leitura didática</p><p className="">Identidade visual: replit.com/brand · MVP e IA: aplicação prática desta apresentação</p></div>
</div>
); }
