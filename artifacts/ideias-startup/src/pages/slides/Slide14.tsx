const base = import.meta.env.BASE_URL;
export default function Slide14() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide comparison-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /></header>
<h1>Construir com IA não exige vender IA</h1><div className="content comparison"><p className="">IA na construção: ajudar a transformar instruções em software</p><p className="">IA no produto: executar uma tarefa útil para o usuário</p><p className="">Use IA no produto apenas quando ela melhorar o resultado</p><p className="">O valor está no problema resolvido, não no rótulo</p></div><div className="footnote">Aplicação prática</div>
</div>
); }
