const base = import.meta.env.BASE_URL;

export default function CaseHypothesis() {
  return (
    <div className="w-screen h-screen overflow-hidden relative deck-slide formula-slide">
      <header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">3 · Hipótese</span></header>
      <h1 className="title-with-logo">A hipótese aplicada ao caso<img className="title-logo" src={`${base}images/logos/ifood.svg`} crossOrigin="anonymous" alt="iFood" /></h1>
      <div className="content formula">
        <p>Para <strong>quem pede comida em casa</strong>, quando <strong>escolhe onde pedir</strong>, existe <strong>falta de informação sobre quem entrega</strong></p>
        <p>Hoje, a pessoa usa <strong>panfletos soltos e a lista telefônica</strong></p>
        <p>Vamos testar se <strong>um guia com cardápios e telefones</strong> aumenta <strong>os pedidos</strong></p>
        <p>Estaremos errados se os restaurantes do guia não receberem mais pedidos</p>
      </div>
      <div className="footnote source-note">Fonte: <a className="underline" href="https://borainvestir.b3.com.br/podcasts-b3/de-onde-vem-o-ticker/ifood-do-cardapio-impresso-a-um-gigante-de-tecnologia-da-america-latina/" target="_blank" rel="noopener noreferrer">Podcast De Onde Vem o Ticker, B3</a></div>
    </div>
  );
}
