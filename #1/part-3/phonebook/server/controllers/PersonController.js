import PersonService from '../services/PersonService.js'

class PersonController {
  async getAll(request, response) {
    try {
      const persons = await PersonService.getAll()
      response.json(persons)
    } catch (error) {
      response.status(500).json(error)
    }
  }

  async getOne(request, response) {
    try {
      const person = await PersonService.getOne(request.params.id)
      response.json(person)
    } catch (error) {
      response.status(500).json(error)
    }
  }

  async create(request, response) {
    try {
      const person = await PersonService.create(request.body)
      response.json(person)
    } catch (error) {
      response.status(500).json(error)
    }
  }

  async update(request, response) {
    try {
      const person = await PersonService.update(request.params.id, request.body)
      response.json(person)
    } catch (error) {
      response.status(500).json(error)
    }
  }

  async delete(request, response) {
    try {
      await PersonService.delete(request.params.id)
      response.json({ success: true })
    } catch (error) {
      response.status(500).json(error)
    }
  }
}

export default new PersonController()
