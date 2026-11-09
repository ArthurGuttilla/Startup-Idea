const STEPS = ['MVP', 'PRD', 'Prompt', 'Entregável'] as const;

export type FlowStep = (typeof STEPS)[number];

/** Breadcrumb shown in the header of the "MVP com IA" slides, with the current step highlighted. */
export function FlowTrail({ current }: { current: FlowStep }) {
  return (
    <span className="flow-trail" aria-label={`Passo atual: ${current}`}>
      {STEPS.map((s, i) => (
        <span key={s} className={s === current ? 'is-current' : undefined}>
          {i > 0 && <span className="flow-sep" aria-hidden="true">→</span>}
          {s}
        </span>
      ))}
    </span>
  );
}
