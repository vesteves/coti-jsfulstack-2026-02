const express = require('express')
const app = express()

app.use(express.json())

// API - Restfull - rest

/**
 * O Sergio me dê uma listagem de usuarios
 * 
 * GET - Pegar informacao
 * POST - Entregar informacao
 * PUT - Atualizar informacao
 * DELETE - Apagar informacao
 * 
 * GET /users = Pegar usuarios
 * POST /users = Entregar usuario (criar usuario)
 * PUT /users/3 = Atualizar usuario (nome, senha, idade)
 * DELETE /users/3 = Remover usuario
 * 
 * CRUD = Create Read Update Delete
*/

let users = [
  {
    id: 1,
    name: 'Vitor'
  },
  {
    id: 2,
    name: 'Kaio'
  },
  {
    id: 3,
    name: 'Sérgio'
  },
  {
    id: 4,
    name: 'Snaymi'
  },
  {
    id: 5,
    name: 'Leandro'
  }
]

app.get('/users', (req, res) => {
  res.json({
    message: 'Esta rota irá retornar uma lista de usuários',
    data: users
  })
})

app.post('/users', (req, res) => {
  users.push(req.body)
  // users = [...users, req.body]

  res.json({
    message: 'Esta rota irá receber um usuário'
  })
})

app.put('/users/:id', (req, res) => {
  users = users.map(user => {
    if(user.id == req.params.id) {
      return {
        ...user,
        ...req.body
      }
    }

    return user
  })
  res.json({
    message: 'Esta rota irá atualizar um usuário'
  })
})

app.delete('/users/:id', (req, res) => {
  users = users.filter(user => user.id != req.params.id)
  res.json({
    message: 'Esta rota irá remover um usuário'
  })
})

app.listen(8000, () => {
  console.log('Servidor ON!')
})
