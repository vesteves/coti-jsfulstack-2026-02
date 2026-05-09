import { Router } from 'express'
import type { Request, Response } from 'express'
import userRepository from '../user/user.repository'
import jwt from 'jsonwebtoken'

const router = Router()

router.post('/login', async (req: Request, res: Response) => {
  // validar se o e-mail e senha veio na requisição
  // se o e-mail e senha existem no banco de dados, eu permito a criação deste usuário
  // qualquer desvio da regra anterior, não permito que o usuário seja criado

  if(!req.body.email || !req.body.password) {
    res.status(401).json({
      message: 'Falha ao autenticar usuário',
    })
    return
  }

  // eu SEI que tenho email e uma senha no query parameter
  const users = await userRepository.getAll()
  const user = users.find((userRow) => userRow.email === req.body.email && userRow.password === req.body.password)

  if (!user) {
    res.status(401).json({
      message: 'Usuário não tem permissão para efetuar esta requisição',
    })
    return
  }

  // crachá
  const token = jwt.sign(user._id.toString(), process.env.JWT_SECRET || '')

  res.json({
    message: 'Usuário autenticado com sucesso',
    token
  })
})

export default router
