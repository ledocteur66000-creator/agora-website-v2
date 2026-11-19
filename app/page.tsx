import Link from "next/link";

export default function HomePage() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <Link className="brand" href="/">AGORA<span>ID</span></Link>
        <nav><Link href="/login">Connexion</Link><Link className="nav-cta" href="/inscription">Créer un compte</Link></nav>
      </header>
      <section className="hero">
        <div className="eyebrow"><span className="pulse" /> SHADOW NOVA NETWORK</div>
        <h1>Un seul compte.<br /><span>Tout l’univers AGORA.</span></h1>
        <p className="hero-copy">Retrouve les services, les expériences Minecraft et les univers roleplay de l’écosystème Shadow Nova depuis un portail unique.</p>
        <div className="hero-actions"><Link className="button primary" href="/inscription">Créer mon AGORA ID</Link><Link className="button secondary" href="/login">J’ai déjà un compte</Link></div>
        <div className="hero-foot"><span>IDENTITÉ NUMÉRIQUE</span><span>·</span><span>COMMUNAUTÉ</span><span>·</span><span>JEUX & ROLEPLAY</span></div>
      </section>
      <footer className="footer"><span>AGORA / SHADOW NOVA</span><span>Portail communautaire</span></footer>
    </main>
  );
}
