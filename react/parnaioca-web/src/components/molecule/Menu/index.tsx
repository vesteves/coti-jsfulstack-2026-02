'use client';

import Link from 'next/link';

export default function Menu({
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...rest}>
      <div>
        <Link href="/dashboard">Dashboard</Link>
      </div>
      <div>
        <Link href="/quartos">Quartos</Link>
      </div>
      <div>
        <Link href="/usuarios">Usuários</Link>
      </div>
      <div>
        <Link href="/hospedes">Hóspedes</Link>
      </div>
      <div>
        <Link href="/reservas">Reservas</Link>
      </div>
    </div>
  );
}
