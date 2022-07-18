import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'

import infoRouter from './routes/info.routes.js'
import personRouter from './routes/person.routes.js'

const app = express()

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :custom'))

morgan.token('custom', (request) => 'POST' === request.method ? JSON.stringify(request.body) : ' ')

app.use('/', infoRouter)
app.use('/api', personRouter)

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)

async function start() {
  try {
    const DB_URL = process.env.DB_URL
    await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })

    const PORT = process.env.PORT;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

start()
