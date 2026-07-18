import { NextRequest, NextResponse } from 'next/server';

// BFF - Backend for Frontend

export async function POST(request: NextRequest) {
  const data = await request.json()

  if (data.email === 'teste@teste.com') {
    return NextResponse.json({
      success: true,
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30',
      message: 'Usuário autenticado com sucesso'
    });
  }

  return NextResponse.json({
    success: false,
    message: 'Usuário não autenticado'
  });
}
