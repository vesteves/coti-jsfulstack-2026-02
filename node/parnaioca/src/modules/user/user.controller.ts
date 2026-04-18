import { Router } from 'express'
import type { Request, Response } from 'express'
import userRepository from './user.repository'

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

router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Esta rota irá retornar uma lista de usuários',
    data: userRepository.getAll()
  })
})

router.post('/', (req: Request, res: Response) => {
  userRepository.create(req.body)

  res.status(201).json({
    message: 'Esta rota irá receber um usuário'
  })
})

router.put('/:id', (req: Request, res: Response) => {
  const idNumber = parseInt(req.params.id as string, 10)
  userRepository.update(idNumber, req.body)

  res.json({
    message: 'Esta rota irá atualizar um usuário'
  })
})

router.delete('/:id', (req: Request, res: Response) => {
  const idNumber = Number (req.params.id)
  userRepository.destroy(idNumber)

  res.json({
    message: 'Esta rota irá remover um usuário'
  })
})

export default router
