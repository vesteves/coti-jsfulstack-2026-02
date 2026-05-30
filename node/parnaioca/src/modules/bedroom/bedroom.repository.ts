// arquivo que vai conter a comunicacao com o banco de dados
// relacionado a usuarios
import { bedroomModel } from './bedroom.model'

import type { Bedroom } from './bedroom.type'

const getOneById = async (_id: string) => {
  try {
    return await bedroomModel.findById(_id)
  } catch (error: any) {
    throw error
  }
}

const getOneByEmail = async (email: string) => {
  try {
    return await bedroomModel.findOne({ email })
  } catch (error: any) {
    throw error
  }
}

const getAll = async () => {
  return await bedroomModel.find()
}

const create = async (param: Bedroom) => {
  try {
    await bedroomModel.create(param)
  } catch(error: any) {
    throw error
  }
}

const update = async (_id: string, param: Partial<Bedroom>) => {
  try {
    return await bedroomModel.findByIdAndUpdate(_id, param)
  } catch(error: any) {
    throw error
  }
}

const destroy = async (_id: string) => {
  try {
    return await bedroomModel.findByIdAndDelete(_id)
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