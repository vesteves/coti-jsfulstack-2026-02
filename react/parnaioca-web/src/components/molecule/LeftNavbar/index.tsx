'use client';

import { useNavBar } from '@/contexts/NavBarContext';

export default function LeftNavbar() {
  const { menuOpen, setMenuOpen } = useNavBar();

  return (
    <div>
      <button className="border border-red-500 h-10" onClick={setMenuOpen}>
        {menuOpen ? 'Fechar' : 'Abrir'}
      </button>
    </div>
  );
}
