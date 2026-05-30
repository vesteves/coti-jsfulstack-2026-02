import { Router } from 'express'
import type { Request, Response } from 'express'
import bedroomRepository from './bedroom.repository'
import { createBedroomSchema, updateBedroomSchema } from './bedroom.schema'
import { validationMiddleware } from '../../middleware/validationMiddleware'

export const router = Router()

router.get('/', async (req: Request, res: Response) => {
  res.json({
    message: 'Quartos listados com sucesso',
    data: await bedroomRepository.getAll()
  })
})

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string

    const response = await bedroomRepository.getOneById(id)

    if(response === null) {
      res.status(404).json({
        message: `Quarto ${id} não encontrado`
      })
      return
    }

    res.json({
      message: 'Quarto encontrado',
      data: response 
    })
  } catch (error: any) {
    res.status(422).json({
      message: 'Falha ao listar quarto',
      log: error.message
    })
  }
})

router.post('/', validationMiddleware(createBedroomSchema), async (_req: Request, res: Response) => {
  await bedroomRepository.create(res.locals.validation)

  res.status(201).json({
    message: 'Quarto salvo com sucesso'
  })
})

router.put('/:id', validationMiddleware(updateBedroomSchema), async (req: Request, res: Response) => {
  const id = req.params.id as string

  try {
    const response = await bedroomRepository.update(id, res.locals.validation)
    if(response === null) {
      res.status(404).json({
        message: `Quarto ${id} não encontrado`
      })
      return
    }

    res.json({
      message: `Quarto ${response._id} atualizado com sucesso`
    })
  } catch (error: any) {
    res.status(422).json({
      message: 'Falha ao atualizar quarto',
      log: error.message
    })
  }
})

router.delete('/:id', async (req: Request, res: Response) => {
  const id = req.params.id as string

  try {
    const response = await bedroomRepository.destroy(id)

    if(response === null) {
      res.status(404).json({
        message: `Quarto ${id} não encontrado`
      })
      return
    }

    res.json({
      message: `Quarto ${response._id} removido com sucesso`
    })
  } catch (error: any) {
    res.status(422).json({
      message: 'Falha ao remover quarto',
      log: error.message
    })
  }
})

export default router
