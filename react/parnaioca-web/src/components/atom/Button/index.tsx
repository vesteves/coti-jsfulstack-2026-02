'use client';

import { twMerge } from "tailwind-merge";

// import style from './style.module.css'

interface ButtonProps {
  text: string;
  type: 'button';
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  status: boolean
}

export default function Button({ text, type, onClick, status = true }: ButtonProps) {
  // style modular
  // const backgroundcolor = status ? style.success : style.danger

  const background = status ? 'bg-green-500' : 'bg-red-500'

  return (
    // style modular
    // className={[style.button, backgroundcolor].join(' ')}   
    // "border px-4 py-2 rounded-sm"

    <button
      className={twMerge(
        'border px-4 py-2 rounded-sm',
        background
      )}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
