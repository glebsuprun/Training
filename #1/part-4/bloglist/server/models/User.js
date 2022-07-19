import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const User = new mongoose.Schema({
  username: { type: String, required: true, minlength: 3, unique: true },
  name: { type: String, required: true, minlength: 3 },
  passwordHash: { type: String },
  blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Blog' }]
})

User.plugin(uniqueValidator)

User.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  },
})

export default mongoose.model('User', User)
