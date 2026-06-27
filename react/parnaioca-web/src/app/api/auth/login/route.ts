import { NextRequest, NextResponse } from 'next/server';

export async function POST (request: NextRequest) {
  const data = await request.json()
  return NextResponse.json({
    success: true, 
    data,
    message: 'Usuário autenticado com sucesso'
  });
}
