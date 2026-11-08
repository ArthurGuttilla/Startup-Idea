const base = import.meta.env.BASE_URL;

export default function CustomerQuotes() {
  return (
    <div className="w-screen h-screen overflow-hidden relative deck-slide">
      <header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">1 · Ideias</span></header>
      <h1>Olhe para a necessidade, não para o pedido</h1>
      <div className="quotes">
        <figure className="quote-card">
          <img src={`${base}images/bezos.jpg`} crossOrigin="anonymous" alt="Jeff Bezos" />
          <figcaption>
            <p className="quote-text">“Daqui a dez anos, os clientes ainda vão querer preços baixos, entrega rápida e muita variedade.”</p>
            <span className="quote-author">Jeff Bezos</span>
            <span className="quote-source">AWS re:Invent 2012, em paráfrase</span>
          </figcaption>
        </figure>
        <figure className="quote-card">
          <img src={`${base}images/ford.jpg`} crossOrigin="anonymous" alt="Henry Ford" />
          <figcaption>
            <p className="quote-text">“Se eu tivesse perguntado às pessoas o que elas queriam, elas teriam dito cavalos mais rápidos.”</p>
            <span className="quote-author">Henry Ford</span>
            <span className="quote-source">Frase atribuída, sem registro original</span>
          </figcaption>
        </figure>
      </div>
      <div className="footnote source-note">Fotos: Seattle City Council, CC BY 2.0 · Fred Hartsook, Library of Congress, domínio público</div>
    </div>
  );
}
