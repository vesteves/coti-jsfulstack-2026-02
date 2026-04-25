// arquivo que vai conter a comunicacao com o banco de dados
// relacionado a usuarios
import { userModel } from './user.model'

import type { User } from './user.type'

const getOneById = async (_id: string) => {
  try {
    return await userModel.findById(_id)
  } catch (error: any) {
    // posso mandar este erro para uma ferramenta de observabilidade
    // sentry || datadog || papertrail
    throw error
  }
}

const getAll = async () => {
  return await userModel.find()
}

const create = async (param: User) => {
  return await userModel.create(param)
}

const update = async (_id: string, param: Partial<User>) => {
  try {
    return await userModel.findByIdAndUpdate(_id, param)
  } catch(error: any) {
    throw error
  }
}

const destroy = async (_id: string) => {
  try {
    return await userModel.findByIdAndDelete(_id)
  } catch(error: any) {
    throw error
  }
}

export default {
  getOneById,
  getAll,
  create,
  update,
  destroy
}