import PostsService from '../services/posts.service.js'
// import validationResult from 'express-validator'
// import reqResponse from '../cors/responseHandler.js'

export default {
  getPosts: async (req, res) => {
    // console.log(req)
    // const errors = validationResult(req)
    // if (!errors.isEmpty()) {
    // 	return res.status(402).send(reqResponse.errorResponse(402))
    // }
    let query = req.query

    try {
      let result = await PostsService.getPosts(query)
      res.status(200).send(result)
      // res.status(200).send(reqResponse.successResponse(200, "Posts Fetched", "Posts has been fetched successfully"))
    } catch (e) {
      console.error(e)
      // res.status(502).send(reqResponse.errorResponse(502))
    }
  },
  getPostBySlug: async (req, res) => {
    let slug = req.params.slug

    try {
      let result = await PostsService.getPostBySlug(slug)
      res.status(200).send(result)
    } catch (e) {
      console.error(e)
    }
  },
  getPostsCategories: async (req, res) => {
    try {
      let result = await PostsService.getPostsCategories()
      res.status(200).send(result)
    } catch (e) {
      console.error(e)
    }
  },
  getPostsByCategory: async (req, res) => {
    let query = req.query

    try {
      let result = await PostsService.getPostsByCategory(query)
      res.status(200).send(result)
    } catch (e) {
      console.error(e)
    }
  }
}
