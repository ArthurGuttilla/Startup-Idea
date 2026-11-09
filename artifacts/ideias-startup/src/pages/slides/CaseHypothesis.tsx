const base = import.meta.env.BASE_URL;

export default function CaseHypothesis() {
  return (
    <div className="w-screen h-screen overflow-hidden relative deck-slide formula-slide">
      <header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">3 · Hipótese</span></header>
      <h1 className="title-with-logo">A hipótese aplicada ao caso<img className="title-logo" src={`${base}images/logos/ifood.svg`} crossOrigin="anonymous" alt="iFood" /></h1>
      <div className="content formula">
        <p>Para <strong>quem pede comida em casa</strong>, quando <strong>escolhe onde pedir</strong>, existe <strong>falta de informação sobre quem entrega e como pedir</strong></p>
        <p>Hoje, a pessoa usa <strong>panfletos soltos e o telefone</strong></p>
        <p>Vamos testar se <strong>um site com cardápios e pedido online</strong> faz a pessoa <strong>pedir em menos tempo do que por telefone</strong></p>
        <p>Estaremos errados se ela levar mais tempo ou desistir no meio do pedido</p>
      </div>
      <div className="footnote source-note">Leitura didática a partir do <a className="underline" href="https://borainvestir.b3.com.br/podcasts-b3/de-onde-vem-o-ticker/ifood-do-cardapio-impresso-a-um-gigante-de-tecnologia-da-america-latina/" target="_blank" rel="noopener noreferrer">Podcast De Onde Vem o Ticker, B3</a></div>
    </div>
  );
}
