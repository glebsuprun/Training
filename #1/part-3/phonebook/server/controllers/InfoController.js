import InfoService from '../services/InfoService.js'

class InfoController {
  async getInfo(request, response) {
    try {
      const count = await InfoService.getInfo()
      response.send(`<p>Phonebook has info for ${count} people</p> <p>${new Date()}</p>`)
    } catch (error) {
      response.status(500).json(error)
    }
  }
}

export default new InfoController()
