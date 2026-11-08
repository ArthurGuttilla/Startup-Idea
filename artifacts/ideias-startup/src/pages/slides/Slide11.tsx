const base = import.meta.env.BASE_URL;
export default function Slide11() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide comparison-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">2 · Problema</span></header>
<h1>Troque a ideia vaga por uma situação concreta</h1>
<div className="content compare">
  <div className="compare-col"><span className="compare-label">Vago</span><p className="compare-main">“Um banco melhor”</p></div>
  <div className="compare-col is-accent"><span className="compare-label">Concreto</span><p className="compare-main">“Clientes pagam anuidade e enfrentam burocracia para gerenciar o cartão”</p></div>
</div>
<div className="compare-foot">
  <div><span className="compare-label">Recorte Nubank</span><p>Cartão sem anuidade, controlado pelo app</p></div>
  <div><span className="compare-label">Hipótese didática</span><p>Mais autonomia pode reduzir atrito</p></div>
</div>
<div className="footnote source-note">Caso: <a className="underline" href="https://blog.nubank.com.br/como-fazer-um-cartao-de-credito" target="_blank" rel="noopener noreferrer">Blog Nubank</a> · leitura didática, não hipótese oficial</div>
</div>
); }
