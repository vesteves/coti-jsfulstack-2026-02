import { Router } from 'express'
import type { Request, Response } from 'express'
import reservationRepository from './reservation.repository'
import { createReservationSchema, updateReservationSchema } from './reservation.schema'
import { validationMiddleware } from '../../middleware/validationMiddleware'

export const router = Router()

router.get('/', async (req: Request, res: Response) => {
  res.json({
    message: 'Reservas listados com sucesso',
    data: await reservationRepository.getAll(req.query)
  })
})

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string

    const response = await reservationRepository.getOneById(id)

    if(response === null) {
      res.status(404).json({
        message: `Reserva ${id} não encontrado`
      })
      return
    }

    res.json({
      message: 'Reserva encontrado',
      data: response 
    })
  } catch (error: any) {
    res.status(422).json({
      message: 'Falha ao listar reserva',
      log: error.message
    })
  }
})

router.post('/', validationMiddleware(createReservationSchema), async (_req: Request, res: Response) => {
  await reservationRepository.create(res.locals.validation)

  res.status(201).json({
    message: 'Reserva salvo com sucesso'
  })
})

router.put('/:id', validationMiddleware(updateReservationSchema), async (req: Request, res: Response) => {
  const id = req.params.id as string

  try {
    const response = await reservationRepository.update(id, res.locals.validation)
    if(response === null) {
      res.status(404).json({
        message: `Reserva ${id} não encontrado`
      })
      return
    }

    res.json({
      message: `Reserva ${response._id} atualizado com sucesso`
    })
  } catch (error: any) {
    res.status(422).json({
      message: 'Falha ao atualizar reserva',
      log: error.message
    })
  }
})

router.delete('/:id', async (req: Request, res: Response) => {
  const id = req.params.id as string

  try {
    const response = await reservationRepository.destroy(id)

    if(response === null) {
      res.status(404).json({
        message: `Reserva ${id} não encontrado`
      })
      return
    }

    res.json({
      message: `Reserva ${response._id} removido com sucesso`
    })
  } catch (error: any) {
    res.status(422).json({
      message: 'Falha ao remover reserva',
      log: error.message
    })
  }
})

export default router
