import { createContext, useContext, useState } from 'react';

export const NavBarContext = createContext({
  menuOpen: false,
  setMenuOpen: () => {},
  count: 0,
  increment: () => {},
});

export const NavBarProvider = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <NavBarContext.Provider
      value={{
        menuOpen,
        setMenuOpen: () => setMenuOpen(!menuOpen),
        count,
        increment,
      }}
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
