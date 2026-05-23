import { Router } from 'express'
import type { Request, Response } from 'express'
import userRepository from './user.repository'
import authMiddleware from '../../middleware/authMiddleware'
import bcrypt from 'bcrypt'
import { createUserSchema, updateUserSchema } from './user.schema'
import { validationMiddleware } from '../../middleware/validationMiddleware'

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

router.get('/', async (req: Request, res: Response) => {
  res.json({
    message: 'Usuários listados com sucesso',
    data: await userRepository.getAll()
  })
})

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string

    const response = await userRepository.getOneById(id)

    if(response === null) {
      res.status(404).json({
        message: `Usuário ${id} não encontrado`
      })
      return
    }

    res.json({
      message: 'Usuário encontrado',
      data: response 
    })
  } catch (error: any) {
    res.status(422).json({
      message: 'Falha ao listar usuário',
      log: error.message
    })
  }
})

router.post('/', authMiddleware, validationMiddleware(createUserSchema), async (_req: Request, res: Response) => {
  const passwordBody = res.locals.validation.password
  const password = bcrypt.hashSync(passwordBody, 10)
  res.locals.validation.password = password

  // validar se o e-mail é uma string
  await userRepository.create(res.locals.validation)

  res.status(201).json({
    message: 'Usuário salvo com sucesso'
  })
})

router.put('/:id', authMiddleware, validationMiddleware(updateUserSchema), async (req: Request, res: Response) => {
  const id = req.params.id as string

  try {
    const response = await userRepository.update(id, res.locals.validation)
    // caso não encontre o usuário na base de dados

    if(response === null) {
      res.status(404).json({
        message: `Usuário ${id} não encontrado`
      })
      return
    }

    // caso encontre o usuário e consiga atualizar as informações
    res.json({
      message: `Usuário ${response._id} atualizado com sucesso`
    })
  } catch (error: any) {
    // caso tenha dado algum problema na atualização de usuário no mongodb
    res.status(422).json({
      message: 'Falha ao atualizar usuário',
      log: error.message
    })
  }
})

router.delete('/:id', authMiddleware, async (req: Request, res: Response) => {
  const id = req.params.id as string

  try {
    const response = await userRepository.destroy(id)

    if(response === null) {
      res.status(404).json({
        message: `Usuário ${id} não encontrado`
      })
      return
    }

    res.json({
      message: `Usuário ${response._id} removido com sucesso`
    })
  } catch (error: any) {
    res.status(422).json({
      message: 'Falha ao remover usuário',
      log: error.message
    })
  }
})

export default router
