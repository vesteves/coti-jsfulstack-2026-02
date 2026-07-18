'use client';

import useAuth from '@/hooks/useAuth';
import { useEffect } from 'react';

export default function DashboardPage() {
  const { canAccess } = useAuth();

  useEffect(() => {
    canAccess();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Dashboard</div>;
}
