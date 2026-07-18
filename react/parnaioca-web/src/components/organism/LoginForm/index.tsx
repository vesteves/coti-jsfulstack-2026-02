'use client';

import Button from '@/components/atom/Button';
import FormItem from '@/components/molecule/FormItem';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface FormProps {
  email: string;
  password: string;
}

interface ResponseProps {
  success: boolean;
  token?: string;
  message: string;
}

export default function LoginForm() {
  const [form, setForm] = useState<FormProps>({
    email: '',
    password: '',
  });

  const router = useRouter();

  // Responsável em coletar os dados do formulário e enviar os dados para algum lugar
  // RESTfull API
  const handleClick = () => {
    fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response: ResponseProps) => {
        console.log('response', response);

        if (response.success) {
          // redirecionar para a dashboard
          // response.token

          if (!response.token) {
            alert('Houve uma falha no servidor');
            return;
          }

          localStorage.setItem('token', response.token);
          router.push('/dashboard');
        } else {
          alert(response.message);
        }
      });
  };

  // Responsável em saber quais alterações foram feitas nos inputs
  const handleInput = (e: any, name: string = '') => {
    setForm({
      ...form,
      [name]: (e.target as HTMLInputElement).value,
    });
  };

  return (
    <form className="flex flex-col gap-4 w-full max-w-md mx-auto mt-10">
      <FormItem
        label="E-mail"
        type="text"
        name="email"
        placeholder="Digite aqui seu e-mail"
        onInput={(e) => handleInput(e, 'email')}
        helperText={form.email ? '' : 'É necessário prencher o e-mail'}
      />

      <FormItem
        label="Senha"
        type="password"
        name="password"
        placeholder="Digite aqui sua senha"
        onInput={(e) => handleInput(e, 'password')}
        helperText={form.password ? '' : 'É necessário prencher a senha'}
      />

      <Button
        text="Entrar"
        type="button"
        onClick={handleClick}
        status={!!(form.password && form.email)}
      />
    </form>
  );
}
