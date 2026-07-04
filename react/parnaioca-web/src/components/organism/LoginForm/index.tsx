'use client';

import Button from '@/components/atom/Button';
import FormItem from '@/components/molecule/FormItem';
import { useState } from 'react';

interface FormProps {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [form, setForm] = useState<FormProps>({
    email: '',
    password: '',
  });

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
      .then((response: any) => {
        alert(response.message);
        // redirecionar para a dashboard
      });
  };

  // Responsável em saber quais alterações foram feitas nos inputs
  const handleInput = (e: any, name: string = '') => {
    setForm({
      ...form,
      [name]: e.target.value,
    });
  };

  return (
    <form>
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

      <Button text="Entrar" type="button" onClick={handleClick} />
    </form>
  );
}
