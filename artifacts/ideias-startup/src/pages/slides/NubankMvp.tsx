const base = import.meta.env.BASE_URL;

export default function NubankMvp() {
  return (
    <div className="w-screen h-screen overflow-hidden relative deck-slide cards-slide">
      <header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">4 · MVP com IA</span></header>
      <h1>O MVP aplicado ao caso Nubank</h1>
      <div className="content cards-ex">
        <div className="card-ex"><span className="compare-label">Público inicial</span><p>Clientes que se irritam com a burocracia do cartão</p></div>
        <div className="card-ex"><span className="compare-label">Problema prioritário</span><p>Bloquear e acompanhar o cartão sem ligar para a central</p></div>
        <div className="card-ex"><span className="compare-label">Fluxo completo e limitado</span><p>Ver compras, bloquear o cartão e ajustar o limite</p></div>
        <div className="card-ex"><span className="compare-label">Evidência</span><p>Clientes resolvem sozinhos, sem recorrer à central</p></div>
      </div>
      <div className="footnote source-note">Caso: <a className="underline" href="https://blog.nubank.com.br/como-fazer-um-cartao-de-credito" target="_blank" rel="noopener noreferrer">Blog Nubank</a></div>
    </div>
  );
}
