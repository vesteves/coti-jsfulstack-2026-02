import { Router } from 'express'
import type { Request, Response } from 'express'
import guestRepository from './guest.repository'
import { createGuestSchema, updateGuestSchema } from './guest.schema'
import { validationMiddleware } from '../../middleware/validationMiddleware'

export const router = Router()

router.get('/', async (req: Request, res: Response) => {
  res.json({
    message: 'Hóspedes listados com sucesso',
    data: await guestRepository.getAll()
  })
})

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string

    const response = await guestRepository.getOneById(id)

    if(response === null) {
      res.status(404).json({
        message: `Hóspede ${id} não encontrado`
      })
      return
    }

    res.json({
      message: 'Hóspede encontrado',
      data: response 
    })
  } catch (error: any) {
    res.status(422).json({
      message: 'Falha ao listar hóspede',
      log: error.message
    })
  }
})

router.post('/', validationMiddleware(createGuestSchema), async (_req: Request, res: Response) => {
  await guestRepository.create(res.locals.validation)

  res.status(201).json({
    message: 'Hóspede salvo com sucesso'
  })
})

router.put('/:id', validationMiddleware(updateGuestSchema), async (req: Request, res: Response) => {
  const id = req.params.id as string

  try {
    const response = await guestRepository.update(id, res.locals.validation)
    if(response === null) {
      res.status(404).json({
        message: `Hóspede ${id} não encontrado`
      })
      return
    }

    res.json({
      message: `Hóspede ${response._id} atualizado com sucesso`
    })
  } catch (error: any) {
    res.status(422).json({
      message: 'Falha ao atualizar hóspede',
      log: error.message
    })
  }
})

router.delete('/:id', async (req: Request, res: Response) => {
  const id = req.params.id as string

  try {
    const response = await guestRepository.destroy(id)

    if(response === null) {
      res.status(404).json({
        message: `Hóspede ${id} não encontrado`
      })
      return
    }

    res.json({
      message: `Hóspede ${response._id} removido com sucesso`
    })
  } catch (error: any) {
    res.status(422).json({
      message: 'Falha ao remover hóspede',
      log: error.message
    })
  }
})

export default router
