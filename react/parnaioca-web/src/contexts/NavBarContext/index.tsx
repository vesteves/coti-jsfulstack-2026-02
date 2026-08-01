import { createContext, useContext, useState } from 'react';

export const NavBarContext = createContext({
  menuOpen: false,
  setMenuOpen: () => {},
});

export const NavBarProvider = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavBarContext.Provider
      value={{ menuOpen, setMenuOpen: () => setMenuOpen(!menuOpen) }}
    >
      {children}
    </NavBarContext.Provider>
  );
};

export const useNavBar = () => {
  const context = useContext(NavBarContext);
  if (!context) {
    throw new Error('useNavBar must be used within a NavBarProvider');
  }
  return context;
};
