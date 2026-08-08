'use client';

import { useNavBar } from '@/contexts/NavBarContext';
import Link from 'next/link';

export default function TesteContext() {
  const { count } = useNavBar();

  return (
    <div>
      <h1>Teste Context {count}</h1>

      <Link href="/teste">Ir para o teste</Link>
    </div>
  );
}
