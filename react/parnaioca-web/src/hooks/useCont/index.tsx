import { useState } from 'react';

export default function useCont() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return { count, increment };
}
