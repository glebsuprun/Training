import BlogService from "../services/BlogService.js"

class BlogController {
  async create(request, response) {
    try {
      const blog = await BlogService.create(request.body)
      response.json(blog)
    } catch (error) {
      response.status(500).json(error)
    }
  }

  async getAll(request,response) {
    try {
      const blogs = await BlogService.getAll()
      response.json(blogs)
    } catch (error) {
      response.status(500).json(error)
    }
  }
}

export default new BlogController()
