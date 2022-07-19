import bcrypt from 'bcrypt'

import User from '../models/User.js'

class UserService {
  async create({ username, name, password}) {
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const createdUser = await User.create({ username, name, passwordHash })
    return createdUser
  }

  async get() {
    const users = await User.find().populate('blogs', { user: 0, likes: 0 })
    return users
  }
}

export default new UserService()
