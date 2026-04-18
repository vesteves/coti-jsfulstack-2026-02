// const express = require('express')
import express from 'express'
import userRouter from './modules/user/user.controller'
import mongoose from 'mongoose'

const app = express()

app.use(express.json())

// regras de negócio de usuários
app.use('/users', userRouter)

app.listen(8000, () => {
  console.log('Servidor ON!')

  mongoose.connect('mongodb://root:example@localhost:27017/parnaiocadb?authSource=admin')

  const userSchema = new mongoose.Schema({
    name: {
      type: String
    }
  })

  const userModel = mongoose.model('users', userSchema)
})
