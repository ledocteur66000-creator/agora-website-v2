"use client";

import Link from "next/link";
import { Suspense, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { account } from "@/lib/appwrite";

function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function connecter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      // Une session déjà ouverte signifie que le membre est déjà connecté.
      try {
        await account.get();
        router.replace("/profil");
        return;
      } catch {
        // Pas de session active : on peut poursuivre la connexion.
      }

      await account.createEmailPasswordSession(email.trim(), password);
      router.replace("/profil");
    } catch (error: unknown) {
      setMessage(error instanceof Error ? error.message : "Connexion impossible. Réessaie dans quelques instants.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="auth-screen">
      <div className="auth-grid" aria-hidden="true" />
      <Link className="auth-back" href="/">
        <span aria-hidden="true">←</span> Retour au portail
      </Link>

      <div className="auth-shell">
        <section className="auth-aside">
          <div className="auth-brand">
            <span className="auth-brand-mark">A</span>
            <span>AGORA<small>SHADOW NOVA NETWORK</small></span>
          </div>
          <div className="auth-aside-content">
            <span className="auth-kicker"><i /> IDENTITÉ NUMÉRIQUE</span>
            <h1>Un seul accès.<br /><span>Plus loin, ensemble.</span></h1>
            <p>Retrouve ton espace au sein de l’écosystème AGORA. Ton identité te suit sur les services et les expériences du réseau.</p>
          </div>
          <div className="auth-aside-footer">
            <span>AGORA ID <b>•</b> AUTHENTIFICATION SÉCURISÉE</span>
            <span className="auth-version">SYSTEM / 01</span>
          </div>
          <div className="auth-orbit orbit-one" />
          <div className="auth-orbit orbit-two" />
        </section>

        <section className="auth-panel">
          <div className="auth-panel-top">
            <span className="auth-kicker">ESPACE MEMBRE</span>
            <span className="auth-secure"><span /> CONNEXION SÉCURISÉE</span>
          </div>

          <div className="auth-heading">
            <span className="auth-step">01 / 02 — AUTHENTIFICATION</span>
            <h2>Heureux de te revoir.</h2>
            <p>Connecte-toi pour continuer ton aventure.</p>
          </div>

          <form className="auth-form" onSubmit={connecter}>
            <label htmlFor="email">Adresse e-mail</label>
            <div className="auth-input-wrap">
              <span className="auth-input-icon" aria-hidden="true">✉</span>
              <input id="email" type="email" placeholder="nom@exemple.com" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
            </div>

            <div className="auth-label-row">
              <label htmlFor="password">Mot de passe</label>
            </div>
            <div className="auth-input-wrap">
              <span className="auth-input-icon" aria-hidden="true">⌑</span>
              <input id="password" type={showPassword ? "text" : "password"} placeholder="Ton mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" required />
              <button className="auth-reveal" type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}>{showPassword ? "MASQUER" : "VOIR"}</button>
            </div>

            <button className="auth-submit" type="submit" disabled={loading}>
              <span>{loading ? "Connexion en cours…" : "Accéder à mon compte"}</span>
              <span aria-hidden="true">↗</span>
            </button>
          </form>

          {message && <p className="auth-message" role="alert">{message}</p>}

          <div className="auth-switch">
            <span>Tu n’as pas encore de compte ?</span>
            <Link href="/inscription">Créer mon identité <span aria-hidden="true">→</span></Link>
          </div>
          <div className="auth-panel-bottom">
            <span>© AGORA / SHADOW NOVA</span>
            <span>PROTECTED ACCESS</span>
          </div>
        </section>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<main className="auth-screen"><div className="auth-loading">Chargement d’AGORA ID…</div></main>}>
      <LoginForm />
    </Suspense>
  );
}
