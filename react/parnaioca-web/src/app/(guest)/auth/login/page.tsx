'use client';

import LoginForm from '@/components/organism/LoginForm';
import useAuth from '@/hooks/useAuth';
import { useEffect } from 'react';

export default function LoginPage() {
  const { canNotAccess } = useAuth();

  useEffect(() => {
    canNotAccess();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <LoginForm />;
}
