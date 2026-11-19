
import { Account, Client } from "appwrite";

const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;

if (!endpoint || !projectId) {
  throw new Error(
    "Configuration Appwrite manquante : vérifie les variables d'environnement."
  );
}

const client = new Client()
  .setEndpoint(endpoint.trim())
  .setProject(projectId.trim());

export const account = new Account(client);
