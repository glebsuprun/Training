import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import User from '../models/User.js'

class LoginService {
  async signIn({ username, password }) {
    const user = await User.findOne({ username })
    const passwordCorrect = user === null ? false : bcrypt.compare(password, user.passwordHash)

    if (!(user && passwordCorrect)) {
     throw new Error('invalid username or password')
    }

    const userForToken = {
      username: user.username,
      id: user._id,
    }

    const token = jwt.sign(userForToken, process.env.SECRET)

    return { token, username: user.username, name: user.name }
  }
}

export default new LoginService()
