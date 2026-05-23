import type { NextFunction, Request, Response } from 'express'
import { ZodSchema } from 'zod'

export const validationMiddleware = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  try {
    const validation = schema.parse(req.body)

    res.locals.validation = validation
    next()
  } catch (error: any) {
    // const message = error.issues.map((issue: any) => `${issue.path[0]}: ${issue.message}`)
    const messageMap = (issue:any) => ({
      field: issue.path[0],
      message: issue.message
    })

    const message = error.issues.map(messageMap)

    res.status(400).json({
      message
    })
    return
  }
}