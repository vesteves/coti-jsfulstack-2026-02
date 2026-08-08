'use client';

import Total from '@/components/atom/Total';
import Contador1 from '@/components/Contador1';
import Contador2 from '@/components/Contador2';
import LoginForm from '@/components/organism/LoginForm';
import Link from 'next/link';

export default function TestePage() {
  return (
    <div className="w-full">
      {/* Algo muito semelhante à um HTML
      <Total frase="8 hóspedes cadastrados" />
      <Total frase="6 quartos cadastrados" />
      <LoginForm /> */}

      <div className="grid grid-cols-2 gap-4 p-4">
        <Contador1 />
        <Contador2 />
      </div>

      <Link href="/teste_context">Ir para o contexto</Link>
    </div>
  );
}
