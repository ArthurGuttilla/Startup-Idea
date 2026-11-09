const base = import.meta.env.BASE_URL;

export default function LoginPayment() {
  return (
    <div className="w-screen h-screen overflow-hidden relative deck-slide">
      <header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">4 · MVP com IA</span></header>
      <h1>Login e pagamento no Replit: peça ao Agent</h1>
      <div className="lp-grid">
        <div className="lp-col">
          <span className="compare-label">Login · Replit Auth</span>
          <p className="lp-prompt">“Adicione login com Replit Auth”</p>
          <ul>
            <li>Tela de login pronta, com Google, GitHub ou e-mail</li>
            <li>Cada pessoa que entra vira um usuário no banco do app</li>
            <li>Você não guarda senha nem cria recuperação de acesso</li>
          </ul>
        </div>
        <div className="lp-col">
          <span className="compare-label">Pagamento · Stripe</span>
          <p className="lp-prompt">“Conecte o Stripe em modo de teste”</p>
          <ul>
            <li>O cliente paga na página do Stripe; seu app nunca vê o cartão</li>
            <li>Teste com o cartão 4242 4242 4242 4242</li>
            <li>Modo de teste valida o fluxo, não a ideia: ninguém pagou de verdade</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
