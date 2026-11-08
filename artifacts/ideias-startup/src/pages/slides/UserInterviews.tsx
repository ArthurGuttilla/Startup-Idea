const base = import.meta.env.BASE_URL;
export default function UserInterviews() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide comparison-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /></header>
<h1>Converse sobre o passado, não sobre a ideia</h1>
<div className="content comparison">
  <p>Evite: “Você usaria um app para controlar o cartão?”</p>
  <p>Prefira: “Qual foi a última vez que você precisou ligar para o banco por causa do cartão?”</p>
  <p>Sobre o futuro, as pessoas tendem a ser gentis, não precisas</p>
  <p>Fatos recentes mostram a dor, a frequência e o que ela já tenta fazer</p>
</div>
<div className="footnote source-note">Base: Rob Fitzpatrick, The Mom Test</div>
</div>
); }
