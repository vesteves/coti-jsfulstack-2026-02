// const express = require('express')
import express from 'express'
import userRouter from './modules/user/user.controller'
import authRouter from './modules/auth/auth.controller'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
// import authMiddleware from './middleware/authMiddleware'
dotenv.config()

const app = express()

app.use(express.json())

// regras de negócio de usuários
// app.use('/users', authMiddleware, userRouter)
app.use('/users', userRouter)
app.use('/auth', authRouter)

app.listen(8000, () => {
  console.log('Servidor ON!')

  // ORM
  mongoose.connect(process.env.DB_STRING || '')
})
