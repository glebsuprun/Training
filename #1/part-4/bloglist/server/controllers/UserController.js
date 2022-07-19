import UserService from '../services/UserService.js'

class UserController {
  async create(request, response) {
    try {
      const user = await UserService.create(request.body)
      response.json(user)
    } catch (error) {
      response.status(500).json(error)
    }
  }

  async get(request,response) {
    try {
      const users = await UserService.get()
      response.json(users.map((user) => user.toJSON()))
    } catch (error) {
      response.status(500).json(error)
    }
  }
}

export default new UserController()
