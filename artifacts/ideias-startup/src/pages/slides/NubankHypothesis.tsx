const base = import.meta.env.BASE_URL;

export default function NubankHypothesis() {
  return (
    <div className="w-screen h-screen overflow-hidden relative deck-slide formula-slide">
      <header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /></header>
      <h1>A hipótese aplicada ao caso Nubank</h1>
      <div className="content formula">
        <p>Para <strong>clientes de cartão</strong>, quando <strong>gerenciam seus gastos</strong>, existe <strong>burocracia e pouca autonomia</strong>.</p>
        <p>Hoje, a pessoa usa <strong>um cartão de banco tradicional</strong>.</p>
        <p>Vamos testar se <strong>um cartão sem anuidade, controlado pelo app</strong>, melhora <strong>a autonomia</strong>.</p>
      </div>
      <div className="footnote source-note">Fonte: <a className="underline" href="https://blog.nubank.com.br/como-fazer-um-cartao-de-credito" target="_blank" rel="noopener noreferrer">Blog Nubank</a></div>
    </div>
  );
}
