// const express = require('express')
import express from 'express'
import userRouter from './modules/user/user.controller'

const app = express()

app.use(express.json())

// regras de negócio de usuários
app.use('/users', userRouter)

app.listen(8000, () => {
  console.log('Servidor ON!')
})
