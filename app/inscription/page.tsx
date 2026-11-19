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
    <main className="auth-layout">
      <Link className="back-link" href="/">← Retour à AGORA</Link>
      <section className="auth-card">
        <div className="eyebrow"><span className="pulse" /> AGORA ID / INSCRIPTION</div>
        <h1>Rejoins le réseau.</h1>
        <p className="muted">Crée ton identité AGORA pour accéder à l’écosystème Shadow Nova.</p>
        <form onSubmit={inscrire}>
          <label htmlFor="username">Pseudonyme</label>
          <input id="username" value={username} onChange={(e) => setUsername(e.target.value)} minLength={3} maxLength={32} autoComplete="nickname" required />
          <label htmlFor="email">Adresse e-mail</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
          <label htmlFor="password">Mot de passe</label>
          <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength={8} autoComplete="new-password" required />
          <button className="button primary full" type="submit" disabled={loading}>{loading ? "Création du compte…" : "Créer mon compte"}</button>
        </form>
        {message && <p className="notice error" role="alert">{message}</p>}
        <p className="switch-auth">Déjà membre ? <Link href="/login">Se connecter</Link></p>
      </section>
    </main>
  );
}
