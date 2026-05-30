import { z } from 'zod'

export const createReservationSchema = z.object({
  checkinAt: z.string({
    error: 'O campo início está inválido'
  }),
  checkoutAt: z.string({
    error: 'O campo fim está inválido'
  }),
  price: z.number({
    error: 'O campo preço está inválido'
  }),
  guest: z.string({
    error: 'O campo hóspede está inválido'
  }),
  bedroom: z.string({
    error: 'O campo hóspede está inválido'
  }),
})

export const updateReservationSchema = z.object({
  checkinAt: z.string({
    error: 'O campo início está inválido'
  }).optional(),
  checkoutAt: z.string({
    error: 'O campo fim está inválido'
  }).optional(),
  price: z.number({
    error: 'O campo preço está inválido'
  }).optional(),
  guest: z.string({
    error: 'O campo hóspede está inválido'
  }).optional(),
  bedroom: z.string({
    error: 'O campo hóspede está inválido'
  }).optional(),
})

export type CreateReservation = z.infer<typeof createReservationSchema>
export type UpdateReservation = z.infer<typeof updateReservationSchema>
