import { z } from 'zod'

export const createBedroomSchema = z.object({
  description: z.string({
    error: 'O campo descrição está inválido'
  }),
  price: z.number({
    error: 'O campo preço está inválido'
  }),
  name: z.string({
    error: 'O campo nome está inválido'
  }).trim(),
  size: z.number({
    error: 'O campo nome está inválido'
  }),
})

export const updateBedroomSchema = z.object({
    description: z.string({
    error: 'O campo descrição está inválido'
  }).optional(),
  price: z.number({
    error: 'O campo preço está inválido'
  }).optional(),
  name: z.string({
    error: 'O campo nome está inválido'
  }).trim().optional(),
  size: z.number({
    error: 'O campo nome está inválido'
  }).optional(),
})

export type CreateBedroom = z.infer<typeof createBedroomSchema>
export type UpdateBedroom = z.infer<typeof updateBedroomSchema>
