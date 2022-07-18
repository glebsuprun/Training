import Person from '../models/Person.js';

class PersonService {
  async getAll() {
    const persons = await Person.find()
    return persons
  }

  async getOne(id) {
    if (!id ) {
      throw new Error('id not specified')
    }

    const person = await Person.findById(id)
    return person
  }

  async create(person) {
    const { name, number } = person
    if (!name || !number) { 
      throw new Error('The name or number is missing')
    }

    const personExists = await Person.findOne({ name })
    if (personExists) {
      throw new Error('The name already exists in the phonebook')
    }

    const createdPerson = await Person.create(person)
    return createdPerson
  }

  async update(id, person) {
    const updatePerson = await Person.findByIdAndUpdate(id, person, { new: true })
    return updatePerson
  }

  async delete(id) {
      const personExists = await Person.findById(id)
      if (!personExists) {
        throw new Error('The person not exists in the phonebook')
      }

      await Person.findByIdAndRemove(id)
  }
}

export default new PersonService()
