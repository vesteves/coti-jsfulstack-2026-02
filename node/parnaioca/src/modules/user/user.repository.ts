// arquivo que vai conter a comunicacao com o banco de dados
// relacionado a usuarios

import type { User } from './user.type'

// users é uma lista de objetos que contém id e name onde
// id é do tipo número e name é do tipo texto

let users: Array<User> = [
  {
    id: 1,
    name: 'Vitor'
  },
  {
    id: 2,
    name: 'Kaio'
  },
  {
    id: 3,
    name: 'Sérgio'
  },
  {
    id: 4,
    name: 'Snaymi'
  },
  {
    id: 5,
    name: 'Leandro'
  }
]

const getAll = () => {
  return users
}

const create = (param: User) => {
  users.push(param)
}

const update = (id: number, param: Partial<User>) => {
  users = users.map(user => {
    if(user.id === id) {
      return {
        ...user,
        ...param
      }
    }

    return user
  })
}

const destroy = (id: number) => {
  users = users.filter(user => user.id != id)
}

export default {
  getAll,
  create,
  update,
  destroy
}