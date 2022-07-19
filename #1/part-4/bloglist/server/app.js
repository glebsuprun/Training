import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'

import blogRouter from './routes/blog.routes.js'
import userRouter from './routes/user.routes.js'
import loginRouter from './routes/login.routes.js'

const app = express()

app.use(express.json())

app.use('/api/blogs', blogRouter)
app.use('/users', userRouter)
app.use('/api/login', loginRouter)

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
