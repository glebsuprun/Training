import Person from '../models/Person.js'

class InfoService {
  async getInfo() {
    const info = await Person.estimatedDocumentCount({})
    return info
  }
}

export default new InfoService()
