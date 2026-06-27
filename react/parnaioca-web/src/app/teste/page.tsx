'use client'

import Total from '@/components/atom/Total';
import { useState } from 'react';

// Espaço reservado ao JavaScript/TypeScript estático
// function somar(a: number, b: number) {
//   return a + b
// }

// console.log(somar(2, 3))

interface FormProps {
  email: string
  password: string
}

export default function TestePage() {
  const [form, setForm] = useState<FormProps>({
    email: '',
    password: ''
  })

  // Responsável em coletar os dados do formulário e enviar os dados para algum lugar
  const handleClick = () => {
    fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    })
      .then(response => response.json())
      .then((response: any) => {
        alert(response.message)
      })
  }

  // Responsável em saber quais alterações foram feitas nos inputs
  const handleInput = (e: any, name: string="") => {
    setForm({
      ...form,
      [name]: e.target.value
    })
  }

  return (
    <div>
      Algo muito semelhante à um HTML
      <Total frase="8 hóspedes cadastrados" />
      <Total frase="6 quartos cadastrados" />
      <div style={{ textAlign: 'center'}}>{JSON.stringify(form)}</div>
      <form>
        <div>
          <label>E-mail</label>
          <input onInput={(e) => handleInput(e, 'email')} name="email" type="text" placeholder='Digite aqui seu e-mail' />
          {!form.email && <p>É necessário prencher o e-mail</p>}
        </div>

        <div>
          <label>Senha</label>
          <input onInput={(e) => handleInput(e, 'password')} name="password" type="text" placeholder='Digite aqui sua senha' />
          {!form.password ? <p>É necessário prencher a senha</p> : null}
        </div>

        <button type="button" onClick={() => handleClick()}>Entrar</button>
      </form>
    </div>
  );
}
