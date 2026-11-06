const base = import.meta.env.BASE_URL;
export default function Slide11() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide comparison-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /></header>
<h1>Troque a ideia vaga por uma situação concreta</h1><div className="content comparison"><p className="">Vago: “uma IA para freelancers”</p><p className="">Concreto: “freelancers perdem detalhes ao transformar briefings em propostas”</p><p className="">Hipótese: organizar requisitos pode reduzir retrabalho</p><p className="">Exemplo didático: a demanda ainda precisa ser investigada</p></div><div className="footnote">Compartilhamento em duplas</div>
</div>
); }
