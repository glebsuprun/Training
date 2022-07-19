import Blog from '../models/Blog.js'

class BlogService {
  async create(blog) {
      const createdBlog = await Blog.create(blog)
      return createdBlog
  }

  async getAll() {
      const blogs = await Blog.find()
      return blogs
  }
}

export default new BlogService()
