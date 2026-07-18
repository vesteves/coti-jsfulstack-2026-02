'use client';

import useAuth from '@/hooks/useAuth';

export default function HospedesPage() {
  const { isAuthenticated } = useAuth();

  console.log('isAuthenticated', isAuthenticated);

  return <div>Hospedes</div>;
}
