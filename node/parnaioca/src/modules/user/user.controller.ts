import { Router } from 'express'
import type { Request, Response } from 'express'

export const router = Router()

// API - Restfull - rest

/**
 * O Sergio, me dê uma listagem de usuarios
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
 * 
 * Status Code
*/

interface User {
  id: number
  name: string
  age?: number
}

// users é uma lista de objetos que contém id e name onde
// id é do tipo número e name é do tipo texto
let users: Array<User> = [
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

router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Esta rota irá retornar uma lista de usuários',
    data: users
  })
})

router.post('/', (req: Request, res: Response) => {
  users.push(req.body as User)
  // users = [...users, req.body]

  res.status(201).json({
    message: 'Esta rota irá receber um usuário'
  })
})

router.put('/:id', (req: Request, res: Response) => {
  users = users.map(user => {
    if(user.id === parseInt(req.params.id as string, 10)) {
      return {
        ...user,
        ...req.body as Partial<User>
      }
    }

    return user
  })
  res.json({
    message: 'Esta rota irá atualizar um usuário'
  })
})

router.delete('/:id', (req: Request, res: Response) => {
  users = users.filter(user => user.id != Number (req.params.id))
  res.json({
    message: 'Esta rota irá remover um usuário'
  })
})

export default router