import InstagramService from '../services/instagram.service.js'
import asyncHandler from "../utils/async-handler.js";

import {
  validateGetRecentPosts,
  validateGetColophonPosts
} from "../middlewares/validators/instagram.validators.js";

export default {
  getRecentPosts: asyncHandler( async (req, res) => {
    const query = req.query

    const result = await InstagramService.getRecentPosts(query)
    res.status(200).send(result)
  }),
  getColophonPosts: asyncHandler( async (req, res) => {
    const result = await InstagramService.getColophonPosts()
    res.status(200).send(result)
  })
}

export const validators = {
  validateGetRecentPosts,
  validateGetColophonPosts,
}