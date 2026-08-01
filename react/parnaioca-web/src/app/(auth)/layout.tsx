'use client';

import Menu from '@/components/molecule/Menu';
import Navbar from '@/components/organism/Navbar';
import { NavBarProvider } from '@/contexts/NavBarContext';
import useAuth from '@/hooks/useAuth';
import { useEffect } from 'react';
import { useNavBar } from '@/contexts/NavBarContext';

function AuthLayoutContent({ children }: { children: React.ReactNode }) {
  const { canAccess } = useAuth();
  const { menuOpen } = useNavBar();

  useEffect(() => {
    canAccess();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Menu className={menuOpen ? 'w-64' : 'hidden'} />
        {children}
      </div>
    </div>
  );
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NavBarProvider>
      <AuthLayoutContent>{children}</AuthLayoutContent>
    </NavBarProvider>
  );
}
