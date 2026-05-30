// arquivo que vai conter a comunicacao com o banco de dados
// relacionado a usuarios
import { reservationModel } from './reservation.model'

import type { Reservation } from './reservation.type'

const getOneById = async (_id: string) => {
  try {
    return await reservationModel.findById(_id)
  } catch (error: any) {
    throw error
  }
}

const getOneByEmail = async (email: string) => {
  try {
    return await reservationModel.findOne({ email })
  } catch (error: any) {
    throw error
  }
}

const getAll = async (param: { active?: boolean } = {}) => {
  let query: any = {
    ...param
  }
  if (query.active) {
    query = {
      deletedAt: null
    }
  }
  return await reservationModel.find(query).populate(['guest', 'bedroom'])
}

const create = async (param: Reservation) => {
  try {
    await reservationModel.create(param)
  } catch(error: any) {
    throw error
  }
}

const update = async (_id: string, param: Partial<Reservation>) => {
  try {
    return await reservationModel.findByIdAndUpdate(_id, param)
  } catch(error: any) {
    throw error
  }
}

const destroy = async (_id: string) => {
  try {
    return await reservationModel.findByIdAndUpdate(_id, {
      deletedAt: new Date()
    })
  } catch(error: any) {
    throw error
  }
}

export default {
  getOneById,
  getOneByEmail,
  getAll,
  create,
  update,
  destroy
}