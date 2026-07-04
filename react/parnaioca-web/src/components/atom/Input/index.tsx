'use client';

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  onInput: (e: React.InputEvent<HTMLInputElement>) => void;
}

export default function Input({
  type,
  name,
  placeholder,
  onInput,
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onInput={onInput}
    />
  );
}
