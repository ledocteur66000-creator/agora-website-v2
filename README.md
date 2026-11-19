# AGORA Website — base corrigée

Projet Next.js + TypeScript + Appwrite pour le portail AGORA ID.

## 1. Prérequis
- Node.js 20.9 ou plus récent
- Un projet Appwrite Cloud
- Le SDK Appwrite est installé automatiquement avec `npm install`

## 2. Installation Windows
Ouvre le dossier `agora-website-corrige` dans VS Code. Dans le terminal intégré, exécute :

```bash
npm install
```

Crée ensuite un fichier nommé `.env.local` à la racine du projet (au même niveau que `package.json`) et mets-y :

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT_ID=TON_PROJECT_ID
```

Remplace `TON_PROJECT_ID` par le véritable Project ID affiché dans Appwrite. Si Appwrite affiche un endpoint différent, utilise exactement celui affiché dans la console.

## 3. Autoriser le site dans Appwrite
Dans Appwrite Console :
1. Ouvre le projet AGORA-ID.
2. Va dans **Settings / Platforms** (ou **Platforms** selon l'interface).
3. Ajoute une plateforme **Web**.
4. Ajoute `localhost` comme hostname pour le développement local.
5. Pour la production, ajoute le hostname exact de ton domaine Vercel, sans `https://` et sans chemin.
6. Dans **Auth**, vérifie que **Email/Password** est activé.

Ne mets jamais une API key Appwrite dans `.env.local` avec un préfixe `NEXT_PUBLIC_`, ni dans le code envoyé au navigateur.

## 4. Démarrer le site
Dans le terminal :

```bash
npm run dev
```

Ouvre `http://localhost:3000`.

Pages disponibles :
- `/` accueil
- `/inscription` création de compte
- `/login` connexion
- `/profil` espace personnel (nécessite une session)

## 5. Vérification
Après inscription, le site renvoie vers `/login`. Connecte-toi avec le même e-mail et mot de passe, puis vérifie que `/profil` affiche ton compte.

## Important — état actuel
Cette archive fournit une base fonctionnelle d'authentification Appwrite côté navigateur. Elle ne crée pas encore de ligne dans `agora_profiles`, ne définit pas les grades et ne met pas en place les autorisations de production. Les grades devront être attribués côté serveur, jamais librement depuis le navigateur. Vérifie les permissions Appwrite avant toute mise en production.
