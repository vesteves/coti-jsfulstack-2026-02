'use client';

interface ButtonProps {
  text: string;
  type: 'button';
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ text, type, onClick }: ButtonProps) {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
}
