const base = import.meta.env.BASE_URL;
export default function Slide11() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide comparison-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">2 · Problema</span></header>
<h1>Troque a ideia vaga por uma situação concreta</h1>
<div className="content compare">
  <div className="compare-col"><span className="compare-label">Vago</span><p className="compare-main">“Um app de delivery”</p></div>
  <div className="compare-col is-accent"><span className="compare-label">Concreto</span><p className="compare-main">“Quem quer pedir comida não sabe quais restaurantes entregam nem como pedir”</p></div>
</div>
<div className="compare-foot">
  <div><span className="compare-label">Recorte iFood</span><p>Disk Cook: um guia impresso de cardápios, com pedidos por telefone</p></div>
  <div><span className="compare-label">Hipótese didática</span><p>Reunir cardápios num só lugar facilita pedir</p></div>
</div>
<div className="footnote source-note">Caso: <a className="underline" href="https://borainvestir.b3.com.br/podcasts-b3/de-onde-vem-o-ticker/ifood-do-cardapio-impresso-a-um-gigante-de-tecnologia-da-america-latina/" target="_blank" rel="noopener noreferrer">Podcast De Onde Vem o Ticker, B3</a> · leitura didática, não hipótese oficial</div>
</div>
); }
