import PostsService from '../services/posts.service.js'
import asyncHandler from "../utils/async-handler.js";

import {
  validateGetPosts,
  validateGetPostBySlug,
  validateGetPostsByCategory,
  validateGetPostsCategories,
  validateGetPostsToSwitch
} from '../middlewares/validators/posts.validators.js'

export default {
  getPosts: asyncHandler(async (req, res) => {
    let query = req.query

    let result = await PostsService.getPosts(query)
    res.status(200).send(result)
  }),
  getPostBySlug: asyncHandler(async (req, res) => {
    let slug = req.params.slug

    let result = await PostsService.getPostBySlug(slug)
    res.status(200).send(result)
  }),
  getPostsCategories: asyncHandler(async (req, res) => {
    let result = await PostsService.getPostsCategories()
    res.status(200).send(result)
  }),
  getPostsByCategory: asyncHandler(async (req, res) => {
    let query = req.query

    let result = await PostsService.getPostsByCategory(query)
    res.status(200).send(result)
  }),
  getPostsToSwitch: asyncHandler(async (req, res) => {
    const slug = req.params.slug

    let result = await PostsService.getPostsToSwitch(slug)
    res.status(200).send(result)
  })
}

export const validators = {
  validateGetPosts,
  validateGetPostBySlug,
  validateGetPostsByCategory,
  validateGetPostsCategories,
  validateGetPostsToSwitch
}