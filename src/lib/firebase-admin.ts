"use server"

import { initializeApp, getApps, cert } from 'firebase-admin/app';

// Validação das variáveis de ambiente
function validateEnvironmentVariables() {
  const requiredVars = {
    PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY,
    CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
  };

  const missingVars = Object.entries(requiredVars)
    .filter(([, value]) => !value || typeof value !== 'string' || value.trim() === '')
    .map(([key]) => key);

  if (missingVars.length > 0) {
    throw new Error(
      `Variáveis de ambiente do Firebase faltando ou inválidas: ${missingVars.join(', ')}\n` +
      'Para usar o Firebase Admin SDK, você precisa configurar uma Service Account.\n' +
      'Consulte o arquivo FIREBASE_SETUP.md para instruções detalhadas.'
    );
  }

  return requiredVars;
}

// Configuração do Firebase Admin
function createFirebaseAdminConfig() {
  const envVars = validateEnvironmentVariables();
  
  return {
    credential: cert({
      projectId: envVars.PROJECT_ID,
      clientEmail: envVars.CLIENT_EMAIL,
      privateKey: envVars.PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  };
}

export async function getFirebaseAdminApp() {
  try {
    if (getApps().length === 0) {
      const config = createFirebaseAdminConfig();
      return initializeApp(config);
    }
    return getApps()[0];
  } catch (error) {
    console.error('Erro ao inicializar Firebase Admin:', error);
    throw new Error(
      'Falha ao inicializar Firebase Admin SDK. Verifique suas variáveis de ambiente.\n' +
      'Para funcionalidade completa, configure uma Service Account conforme FIREBASE_SETUP.md'
    );
  }
} 