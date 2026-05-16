import jwt from 'jsonwebtoken'
import type { NextFunction, Request, Response } from 'express'
import userRepository from '../modules/user/user.repository'

export default async function authMiddleware (req: Request, res: Response, next: NextFunction) {
  if (!req.headers.authorization) {
    res.status(403).json({
      message: 'Usuário não autorizado'
    })
    return
  }

  const token = req.headers.authorization

  try {
    const userId = jwt.verify(token, process.env.JWT_SECRET || '')

    const user =  await userRepository.getOneById(userId as string)

    if (!user) {
      res.status(403).json({
        message: 'Usuário não autorizado'
      })
      return
    }

    res.locals.user = user

    next()
  } catch (error: any) {
    res.status(403).json({
      message: 'Usuário não autorizado',
      log: error.message
    })
  }
}
