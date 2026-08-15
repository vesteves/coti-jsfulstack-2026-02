import { NextRequest, NextResponse } from 'next/server';

// BFF - Backend for Frontend

export async function POST(request: NextRequest) {
  const data = await request.json()

  const response = await fetch('https://coti-jsfulstack-2026-02-3zw8.vercel.app/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })

  const responseData = await response.json()

  if (responseData.token) {
    return NextResponse.json({
      success: true,
      token: responseData.token,
      message: 'Usuário autenticado com sucesso'
    });
  }

  return NextResponse.json({
    success: false,
    message: 'Usuário não autenticado'
  });
}
