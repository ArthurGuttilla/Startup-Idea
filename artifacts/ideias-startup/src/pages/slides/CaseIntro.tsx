const base = import.meta.env.BASE_URL;

export default function CaseIntro() {
  return (
    <div className="w-screen h-screen overflow-hidden relative deck-slide">
      <header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">2 · Problema</span></header>
      <h1 className="title-with-logo">O caso que vamos seguir<img className="title-logo" src={`${base}images/logos/ifood.svg`} crossOrigin="anonymous" alt="iFood" /></h1>
      <div className="case-timeline">
        <div className="tl-step"><span className="tl-year">1997</span><p><strong>Disk Cook:</strong> um guia impresso com cardápios de restaurantes de São Paulo</p></div>
        <div className="tl-step"><span className="tl-year">Até 2011</span><p>Quem queria comer escolhia no guia e pedia por telefone fixo</p></div>
        <div className="tl-step"><span className="tl-year">2011</span><p>O mesmo guia vira o iFood, quando o celular passa a caber na mão de todo mundo</p></div>
      </div>
      <div className="lp-why"><span className="compare-label">Ao longo da aula</span><p>Vamos refazer esse caminho: problema, hipótese, MVP e validação</p></div>
      <div className="footnote source-note">Fonte: <a className="underline" href="https://borainvestir.b3.com.br/podcasts-b3/de-onde-vem-o-ticker/ifood-do-cardapio-impresso-a-um-gigante-de-tecnologia-da-america-latina/" target="_blank" rel="noopener noreferrer">Podcast De Onde Vem o Ticker, B3</a></div>
    </div>
  );
}
