'use client';

import Total from '@/components/atom/Total';
import LoginForm from '@/components/organism/LoginForm';

export default function TestePage() {
  return (
    <div>
      Algo muito semelhante à um HTML
      <Total frase="8 hóspedes cadastrados" />
      <Total frase="6 quartos cadastrados" />
      <LoginForm />
    </div>
  );
}
