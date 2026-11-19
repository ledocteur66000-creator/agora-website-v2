import { Account, Client } from "appwrite";

const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;

if (!endpoint || !projectId) {
  throw new Error(
    "Configuration Appwrite manquante : vérifie NEXT_PUBLIC_APPWRITE_ENDPOINT et NEXT_PUBLIC_APPWRITE_PROJECT_ID dans .env.local."
  );
}

const client = new Client().setEndpoint(endpoint).setProject(projectId);

export const account = new Account(client);
