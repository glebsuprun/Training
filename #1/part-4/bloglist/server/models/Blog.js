import mongoose from 'mongoose'

const Blog = new mongoose.Schema({
  title: { type: String, required: true},
  author: { type: String, required: true},
  url: { type: String, required: true},
  likes:  { type: Number, required: true}
})

export default mongoose.model('Blog', Blog)
