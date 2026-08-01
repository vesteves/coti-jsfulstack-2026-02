'use client';

import LeftNavbar from '@/components/molecule/LeftNavbar';
import RightNavbar from '@/components/molecule/RightNavbar';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <LeftNavbar />
      <RightNavbar />
    </nav>
  );
}
