'use client';

import Input from '@/components/atom/Input';
import Label from '@/components/atom/Label';

interface FormItemProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  onInput: (e: React.InputEvent<HTMLInputElement>) => void;
  helperText: string;
}

export default function FormItem({
  label,
  type,
  name,
  placeholder,
  onInput,
  helperText,
}: FormItemProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label text={label} />
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        onInput={onInput}
      />
      {helperText && <p>{helperText}</p>}
    </div>
  );
}
