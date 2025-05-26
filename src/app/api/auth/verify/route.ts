import { NextResponse } from 'next/server';
import { getAuth } from 'firebase-admin/auth';
import { getFirebaseAdminApp } from '@/lib/firebase-admin';

export async function POST(request: Request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { error: 'Token não fornecido' },
        { status: 400 }
      );
    }

    // Inicializa o app do Firebase Admin
    getFirebaseAdminApp();
    
    // Verifica o token
    const decodedToken = await getAuth().verifyIdToken(token);
    
    return NextResponse.json({
      uid: decodedToken.uid,
      email: decodedToken.email,
      emailVerified: decodedToken.email_verified,
    });
  } catch (error) {
    console.error('Erro ao verificar token:', error);
    
    // Tratamento específico para erros de configuração do Firebase
    if (error instanceof Error) {
      if (error.message.includes('Para usar o Firebase Admin SDK')) {
        return NextResponse.json(
          { 
            error: 'Erro de configuração do servidor',
            details: 'Firebase Admin SDK não configurado corretamente'
          },
          { status: 500 }
        );
      }
    }
    
    return NextResponse.json(
      { error: 'Token inválido' },
      { status: 401 }
    );
  }
} 