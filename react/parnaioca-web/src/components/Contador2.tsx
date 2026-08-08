'use client';

import { useNavBar } from '@/contexts/NavBarContext';
// import useCont from '@/hooks/useCont';

export default function Contador2() {
  // const { count, increment } = useCont();
  const { count, increment } = useNavBar();

  return (
    <div className="border border-gray-300 rounded-md p-4">
      <h1 className="text-2xl font-bold text-center">Contador via Hook 2</h1>

      <div>
        <label>
          Contador: <span className="text-2xl font-bold">{count}</span>
        </label>
      </div>

      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={increment}
      >
        Incrementar
      </button>
    </div>
  );
}
