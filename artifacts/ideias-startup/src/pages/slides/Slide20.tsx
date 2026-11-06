const base = import.meta.env.BASE_URL;
export default function Slide20() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide columns-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /></header>
<h1>Decida o que aprender antes de adicionar funcionalidades</h1><div className="content columns"><p className="">Registre uma hipótese e o critério de sucesso antes do teste</p><p className="">Observe conclusão da tarefa, correções e intenção acompanhada de ação</p><p className="">Continue se houver valor; ajuste se houver atrito</p><p className="">Reconsidere a hipótese quando a necessidade não aparecer</p></div><div className="footnote">Próximo experimento</div>
</div>
); }
