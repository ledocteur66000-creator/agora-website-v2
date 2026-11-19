
import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "Communauté",
    description: "Retrouve les membres et les activités de notre organisation.",
    icon: "◈",
  },
  {
    number: "02",
    title: "Minecraft",
    description: "Accède aux serveurs, aux informations et à l'univers Minecraft.",
    icon: "▦",
  },
  {
    number: "03",
    title: "Roleplay",
    description: "Découvre nos univers RP et nos différentes expériences.",
    icon: "⬡",
  },
  {
    number: "04",
    title: "Téléchargements",
    description: "Retrouve le launcher et les outils officiels AGORA.",
    icon: "↓",
  },
];

export default function Home() {
  return (
    <main className="agora">
      <header className="topbar">
        <Link href="/" className="brand">
          <span className="brand-symbol">A</span>
          <span>AGORA<small>SHADOW NOVA NETWORK</small></span>
        </Link>

        <nav className="navigation">
          <a href="#accueil">Accueil</a>
          <a href="#univers">Nos univers</a>
          <a href="#communaute">Communauté</a>
        </nav>

        <Link href="/login" className="login-button">
          AGORA ID ↗
        </Link>
      </header>

      <section className="hero" id="accueil">
        <div className="hero-content">
          <span className="eyebrow">
            <span className="status-dot" />
            SHADOW NOVA NETWORK — SYSTEM ONLINE
          </span>

          <h1>
            UN SEUL POINT.
            <br />
            <span>PLUSIEURS UNIVERS.</span>
          </h1>

          <p>
            Bienvenue sur AGORA, le centre de connexion de
            Shadow Nova. Rejoins notre communauté et découvre
            de nouvelles expériences de jeu.
          </p>

          <div className="hero-actions">
            <Link href="/inscription" className="primary-button">
              Rejoindre AGORA →
            </Link>
            <a href="#univers" className="secondary-button">
              Explorer nos univers
            </a>
          </div>
        </div>

        <div className="hero-panel">
          <div className="panel-top">
            <span>AGORA CORE</span>
            <span className="online">● ONLINE</span>
          </div>
          <div className="core">
            <div className="core-ring">
              <div className="core-center">A</div>
            </div>
          </div>
          <div className="panel-bottom">
            <span>NETWORK STATUS</span>
            <strong>OPERATIONAL</strong>
          </div>
        </div>
      </section>

      <section className="info-strip">
        <div><span>NETWORK</span><strong>SHADOW NOVA</strong></div>
        <div><span>PLATFORM</span><strong>AGORA</strong></div>
        <div><span>IDENTITY</span><strong>AGORA ID</strong></div>
        <div><span>ACCESS</span><strong>OPEN</strong></div>
      </section>

      <section className="univers" id="univers">
        <div className="section-heading">
          <span className="eyebrow">EXPLORE THE NETWORK</span>
          <h2>Nos univers</h2>
          <p>Un portail unique pour accéder à l'ensemble de nos activités.</p>
        </div>

        <div className="universe-grid">
          {sections.map((section) => (
            <article className="universe-card" key={section.number}>
              <span className="card-number">{section.number}</span>
              <span className="card-icon">{section.icon}</span>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
              <span className="card-arrow">EXPLORER ↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="community" id="communaute">
        <div>
          <span className="eyebrow">JOIN THE NETWORK</span>
          <h2>Ta place est parmi nous.</h2>
          <p>
            Crée ton identité AGORA ID et rejoins l'écosystème
            Shadow Nova.
          </p>
        </div>
        <Link href="/inscription" className="primary-button">
          Créer mon compte →
        </Link>
      </section>

      <footer className="footer">
        <span>AGORA © 2026 — SHADOW NOVA NETWORK</span>
        <span>UNIFIED COMMUNITY PLATFORM</span>
      </footer>
    </main>
  );
}
