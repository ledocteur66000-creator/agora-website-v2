"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { account } from "@/lib/appwrite";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchParams.get("created") === "1") setMessage("Compte créé. Tu peux maintenant te connecter.");
  }, [searchParams]);

  async function connecter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setLoading(true);
    try {
      await account.createEmailPasswordSession(email.trim(), password);
      router.replace("/profil");
    } catch (error: unknown) {
      setMessage(error instanceof Error ? error.message : "Connexion impossible.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="auth-layout">
      <Link className="back-link" href="/">← Retour à AGORA</Link>
      <section className="auth-card">
        <div className="eyebrow"><span className="pulse" /> AGORA ID / CONNEXION</div>
        <h1>Content de te revoir.</h1>
        <p className="muted">Connecte-toi à ton identité AGORA.</p>
        <form onSubmit={connecter}>
          <label htmlFor="email">Adresse e-mail</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
          <label htmlFor="password">Mot de passe</label>
          <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" required />
          <button className="button primary full" type="submit" disabled={loading}>{loading ? "Connexion…" : "Se connecter"}</button>
        </form>
        {message && <p className="notice" role="status">{message}</p>}
        <p className="switch-auth">Pas encore membre ? <Link href="/inscription">Créer un compte</Link></p>
      </section>
    </main>
  );
}
