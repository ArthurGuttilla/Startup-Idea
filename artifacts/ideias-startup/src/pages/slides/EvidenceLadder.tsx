const base = import.meta.env.BASE_URL;

const rungs = [
  { name: 'Visita', text: 'Abriu a página e viu os cardápios' },
  { name: 'Cadastro', text: 'Criou conta para poder pedir' },
  { name: 'Pedido pago', text: 'Escolheu, pagou e enviou o pedido' },
  { name: 'Pediu de novo', text: 'Voltou sem você chamar' },
];

export default function EvidenceLadder() {
  return (
    <div className="w-screen h-screen overflow-hidden relative deck-slide">
      <header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">5 · Validação</span></header>
      <h1>Use login e pagamento para medir interesse</h1>
      <span className="ladder-scale compare-label">Sinal mais fraco <span aria-hidden="true">→</span> mais forte</span>
      <div className="ladder">
        {rungs.map((r, i) => (
          <div className={`rung rung-${i + 1}`} key={r.name}>
            <span className="rung-name">{r.name}</span>
            <p>{r.text}</p>
          </div>
        ))}
      </div>
      <div className="ladder-goal"><span className="compare-label">Defina a meta antes do teste</span><p>Ex: em 7 dias, 50 visitas, 15 cadastros, 5 pedidos pagos e 2 que voltam</p></div>
    </div>
  );
}
