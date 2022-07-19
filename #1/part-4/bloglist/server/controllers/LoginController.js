import LoginService from '../services/LoginService.js'

class LoginController {
  async signIn(request, response) {
    try {
      const login = await LoginService.signIn(request.body)
      response.send(login)
    } catch (error) {
      response.status(500).json(error)
    }
  }
}

export default new LoginController()
