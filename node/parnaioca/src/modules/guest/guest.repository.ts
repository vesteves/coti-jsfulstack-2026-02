// arquivo que vai conter a comunicacao com o banco de dados
// relacionado a usuarios
import { guestModel } from './guest.model'

import type { Guest } from './guest.type'

const getOneById = async (_id: string) => {
  try {
    return await guestModel.findById(_id)
  } catch (error: any) {
    throw error
  }
}

const getOneByEmail = async (email: string) => {
  try {
    return await guestModel.findOne({ email })
  } catch (error: any) {
    throw error
  }
}

const getAll = async () => {
  return await guestModel.find()
}

const create = async (param: Guest) => {
  try {
    await guestModel.create(param)
  } catch(error: any) {
    throw error
  }
}

const update = async (_id: string, param: Partial<Guest>) => {
  try {
    return await guestModel.findByIdAndUpdate(_id, param)
  } catch(error: any) {
    throw error
  }
}

const destroy = async (_id: string) => {
  try {
    return await guestModel.findByIdAndDelete(_id)
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