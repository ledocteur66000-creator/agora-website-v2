"use client";

import { ID } from "appwrite";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { account } from "@/lib/appwrite";

export default function InscriptionPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function inscrire(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setLoading(true);
    try {
      await account.create(ID.unique(), email.trim(), password, username.trim());
      router.push("/login?created=1");
    } catch (error: unknown) {
      setMessage(error instanceof Error ? error.message : "Impossible de créer le compte.");
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

      <div className="auth-shell auth-shell-signup">
        <section className="auth-aside">
          <div className="auth-brand">
            <span className="auth-brand-mark">A</span>
            <span>AGORA<small>SHADOW NOVA NETWORK</small></span>
          </div>
          <div className="auth-aside-content">
            <span className="auth-kicker"><i /> NOUVELLE IDENTITÉ</span>
            <h1>Le réseau<br /><span>commence avec toi.</span></h1>
            <p>Crée ton identité AGORA et rejoins un écosystème pensé pour rassembler les joueurs, les créateurs et les communautés.</p>
          </div>
          <div className="auth-aside-footer">
            <span>AGORA ID <b>•</b> UN ACCÈS, PLUSIEURS UNIVERS</span>
            <span className="auth-version">SYSTEM / 02</span>
          </div>
          <div className="auth-orbit orbit-one" />
          <div className="auth-orbit orbit-two" />
        </section>

        <section className="auth-panel">
          <div className="auth-panel-top">
            <span className="auth-kicker">REJOINDRE AGORA</span>
            <span className="auth-secure"><span /> CRÉATION DE COMPTE</span>
          </div>

          <div className="auth-heading">
            <span className="auth-step">02 / 02 — INSCRIPTION</span>
            <h2>Construisons la suite.</h2>
            <p>Quelques informations pour créer ton identité.</p>
          </div>

          <form className="auth-form" onSubmit={inscrire}>
            <label htmlFor="username">Pseudonyme</label>
            <div className="auth-input-wrap">
              <span className="auth-input-icon" aria-hidden="true">◎</span>
              <input id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Ton nom sur AGORA" minLength={3} maxLength={32} autoComplete="nickname" required />
            </div>

            <label htmlFor="email">Adresse e-mail</label>
            <div className="auth-input-wrap">
              <span className="auth-input-icon" aria-hidden="true">✉</span>
              <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="nom@exemple.com" autoComplete="email" required />
            </div>

            <label htmlFor="password">Mot de passe <span className="auth-hint">8 caractères minimum</span></label>
            <div className="auth-input-wrap">
              <span className="auth-input-icon" aria-hidden="true">⌑</span>
              <input id="password" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Choisis un mot de passe" minLength={8} autoComplete="new-password" required />
              <button className="auth-reveal" type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}>{showPassword ? "MASQUER" : "VOIR"}</button>
            </div>

            <button className="auth-submit" type="submit" disabled={loading}>
              <span>{loading ? "Création en cours…" : "Créer mon identité AGORA"}</span>
              <span aria-hidden="true">↗</span>
            </button>
          </form>

          {message && <p className="auth-message" role="alert">{message}</p>}

          <div className="auth-switch">
            <span>Tu possèdes déjà une identité ?</span>
            <Link href="/login">Se connecter <span aria-hidden="true">→</span></Link>
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
