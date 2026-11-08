const base = import.meta.env.BASE_URL;
export default function Slide22() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide close-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /></header>
<div className="thanks-copy"><h1 className="thanks-title">Obrigado!</h1><p className="thanks-question">Qual problema você vai investigar primeiro?</p><a className="site-cta thanks-cta" href="https://guttil.la/" target="_blank" rel="noopener noreferrer"><img src={`${base}images/qr-guttilla.svg`} crossOrigin="anonymous" alt="QR Code para guttil.la" /><span className="site-cta-copy"><span className="compare-label">Me siga nas redes sociais</span><span className="site-cta-url">guttil.la →</span></span></a></div>
<div className="qr-panel"><div className="qr-frame"><img src={`${base}images/qr-material.svg`} crossOrigin="anonymous" alt="QR Code para startups-mvp.replit.app" /></div><span className="compare-label">Material da aula</span><p className="qr-url">startups-mvp.replit.app</p></div>
</div>
); }
