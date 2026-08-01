'use client';

import useAuth from '@/hooks/useAuth';
import { useEffect } from 'react';

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { canNotAccess } = useAuth();

  useEffect(() => {
    canNotAccess();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>{children}</div>;
}
