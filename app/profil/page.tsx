"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Models } from "appwrite";
import { account } from "@/lib/appwrite";

export default function ProfilPage() {
  const router = useRouter();
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    account.get()
      .then((currentUser) => { if (active) setUser(currentUser); })
      .catch(() => { if (active) router.replace("/login"); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [router]);

  async function deconnecter() {
    setError("");
    try {
      await account.deleteSession("current");
      router.replace("/login");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Déconnexion impossible.");
    }
  }

  if (loading) return <main className="auth-layout"><p className="muted">Chargement du profil AGORA…</p></main>;
  if (!user) return null;

  return (
    <main className="auth-layout">
      <Link className="back-link" href="/">← Accueil AGORA</Link>
      <section className="auth-card profile-card">
        <div className="eyebrow"><span className="pulse" /> AGORA ID / ESPACE PERSONNEL</div>
        <h1>Bienvenue, {user.name || "membre"}.</h1>
        <p className="muted">Ta session AGORA est active.</p>
        <div className="profile-data"><span>ADRESSE E-MAIL</span><strong>{user.email}</strong><span>IDENTIFIANT AGORA</span><strong className="id-value">{user.$id}</strong></div>
        <p className="small-note">Cet espace confirme la connexion au compte Appwrite. Les grades et les profils Minecraft seront ajoutés dans une prochaine étape sécurisée.</p>
        {error && <p className="notice error">{error}</p>}
        <button className="button secondary full" onClick={deconnecter}>Se déconnecter</button>
      </section>
    </main>
  );
}
