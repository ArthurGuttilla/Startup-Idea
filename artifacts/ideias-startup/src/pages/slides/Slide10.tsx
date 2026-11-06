const base = import.meta.env.BASE_URL;
export default function Slide10() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide index-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /></header>
<h1>Escolha uma dor que você consegue investigar</h1><div className="content index"><p className="">Intensidade: qual é a consequência do problema?</p><p className="">Frequência: quando ele volta a acontecer?</p><p className="">Acesso: com quem você consegue conversar?</p><p className="">Evidência: o que essa pessoa já faz para resolvê-lo?</p></div><div className="footnote">Critérios propostos para o exercício</div>
</div>
); }
