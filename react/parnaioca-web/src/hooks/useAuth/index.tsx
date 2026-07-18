'use client';

import { useRouter } from 'next/navigation';

const useAuth = () => {
  const router = useRouter();
  // No servidor (SSR) não existe localStorage, então consideramos "não autenticado".
  // typeof window !== 'undefined' garante que só lemos o localStorage no navegador.
  const isAuthenticated: boolean =
    typeof window !== 'undefined' && localStorage.getItem('token')
      ? true
      : false;

  const canAccess = () => {
    if (!isAuthenticated) {
      router.push('/auth/login');
      return;
    }
    return;
  };

  const canNotAccess = () => {
    if (isAuthenticated) {
      router.push('/dashboard');
      return;
    }
    return;
  };

  return {
    isAuthenticated,
    canAccess,
    canNotAccess,
  };
};

export default useAuth;
