import { z } from 'zod'

export const createGuestSchema = z.object({
  email: z.email({
    error: 'O campo email está inválido'
  }),
  phone: z.string({
    error: 'O campo telefone está inválido'
  }).min(11, {
    error: 'O campo telefone deverá conter no mínimo 11 caracteres'
  }).trim(),
  name: z.string({
    error: 'O campo nome está inválido'
  }).trim(),
})

export const updateGuestSchema = z.object({
  email: z.email({
    error: 'O campo email está inválido'
  }).optional(),
  phone: z.string({
    error: 'O campo telefone está inválido'
  }).min(11, {
    error: 'O campo telefone deverá conter no mínimo 11 caracteres'
  }).trim().optional(),
  name: z.string({
    error: 'O campo nome está inválido'
  }).trim().optional(),
})

export type CreateGuest = z.infer<typeof createGuestSchema>
export type UpdateGuest = z.infer<typeof updateGuestSchema>
