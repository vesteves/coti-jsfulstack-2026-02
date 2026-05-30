import { z } from 'zod'

export const createUserSchema = z.object({
  email: z.email({
    error: 'O campo email está inválido'
  }),
  password: z.string({
    error: 'O campo senha está inválido'
  }).min(8, {
    error: 'O campo senha deverá conter no mínimo 8 caracteres'
  }).trim(),
  name: z.string({
    error: 'O campo nome está inválido'
  }).trim(),
})

export const updateUserSchema = z.object({
  email: z.email({
    error: 'O campo email está inválido'
  }).optional(),
  password: z.string({
    error: 'O campo senha está inválido'
  }).min(8, {
    error: 'O campo senha deverá conter no mínimo 8 caracteres'
  }).trim().optional(),
  name: z.string({
    error: 'O campo nome está inválido'
  }).trim().optional(),
})

export type CreateUser = z.infer<typeof createUserSchema>
export type UpdateUser = z.infer<typeof updateUserSchema>
