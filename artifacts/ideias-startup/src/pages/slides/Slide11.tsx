const base = import.meta.env.BASE_URL;
export default function Slide11() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide comparison-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /></header>
<h1>Troque a ideia vaga por uma situação concreta</h1>
<div className="content comparison">
  <p>Vago: “um banco melhor”</p>
  <p>Concreto: “clientes pagam anuidade e enfrentam burocracia para gerenciar o cartão”</p>
  <p>Recorte Nubank: cartão sem anuidade, controlado pelo app</p>
  <p>Hipótese didática: mais autonomia pode reduzir atrito</p>
</div>
<div className="footnote source-note">Caso: <a className="underline" href="https://blog.nubank.com.br/como-fazer-um-cartao-de-credito" target="_blank" rel="noopener noreferrer">Blog Nubank</a> · leitura didática, não hipótese oficial</div>
</div>
); }
