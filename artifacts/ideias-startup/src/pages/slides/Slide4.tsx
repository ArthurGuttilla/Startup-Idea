const base = import.meta.env.BASE_URL;
export default function Slide4() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide columns-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">1 · Ideias</span></header>
<h1>Três características das melhores ideias</h1><div className="content columns columns-3"><p className="">Os próprios fundadores querem a solução</p><p className="">Os fundadores conseguem construí-la</p><p className="">Poucas pessoas percebem que vale a pena fazê-la</p></div><div className="footnote source-note">Base: Paul Graham</div>
</div>
); }
