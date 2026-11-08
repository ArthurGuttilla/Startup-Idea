const base = import.meta.env.BASE_URL;

export default function LoginPayment() {
  return (
    <div className="w-screen h-screen overflow-hidden relative deck-slide columns-slide">
      <header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">4 · MVP com IA</span></header>
      <h1>Login e pagamento: não construa do zero</h1>
      <div className="content columns">
        <p><strong>Login:</strong> use um serviço pronto, como o Replit Auth, em vez de criar cadastro e senha</p>
        <p><strong>Pagamento:</strong> cobre em modo de teste ou faça uma pré-venda. Pagar é a evidência mais forte de interesse</p>
      </div>
    </div>
  );
}
