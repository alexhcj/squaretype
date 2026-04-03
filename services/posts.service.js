import Post from '../models/Post.js'
import AppError from "../utils/app-error.js";

export default {
  getPosts: async (query) => {
    const { limit = 10, offset = 0, sort = 'date', order = -1, category, search } = query

    const find = {}

    // Edge case: search filter
    if (search) find.title = { $regex: `${search}`, $options: 'i' }

    // Execute query
    const posts = await Post.find(find)
      .sort({ [`${sort}`]: +order })
      .skip(+offset)
      .limit(+limit)
      .populate('category')
      .exec()

    const totalEntities = await Post.find(find).countDocuments()

    // Edge case: category filter
    const filteredPosts = category
      ? posts.filter((post) => post.category && post.category.category === category)
      : posts

    return {
      posts: filteredPosts,
      total: totalEntities,
      queryTotal: filteredPosts.length
    }
  },

  getPostBySlug: async (slug) => {
    // Edge case: slug not found
    const post = await Post.findOne({ slug }).populate('category')

    if (!post) {
      throw new AppError('Post not found', 404)
    }

    return post
  },

  getPostsCategories: async () => {
    const data = await Post.find().populate('category')

    // Edge case: no posts exist
    if (!data || data.length === 0) {
      return []
    }

    let posts = []

    for (const [index, post] of data.entries()) {
      // Edge case: post without category
      if (!post.category || !post.category.category) {
        continue
      }

      if (posts.length === 0 || !posts.find((item) => item.category === post.category.category)) {
        // First post for this category
        posts.push({ category: post.category.category, posts: [post] })
      } else if (posts.find((item) => item.category === post.category.category).posts.length === 4) {
        // Edge case: category already has 4 posts, skip
        continue
      } else {
        // Add post to existing category
        posts.find((item) => item.category === post.category.category).posts.push(post)
      }
    }

    return posts
  },

  getPostsByCategory: async (query) => {
    const { limit = 10, offset = 0, category, sort = 'date', order = -1 } = query

    // Edge case: no category provided
    if (!category) {
      const posts = await Post.find()
        .sort({ [`${sort}`]: +order })
        .skip(+offset)
        .limit(+limit)
        .populate('category')
        .exec()

      const total = await Post.countDocuments()

      return {
        posts,
        total
      }
    }

    // Get all posts sorted
    const posts = await Post.find()
      .sort({ [`${sort}`]: +order })
      .populate('category')
      .exec()

    // Filter by category
    const postsByCategory = posts.filter((post) => post.category && post.category.category === category)

    // Edge case: category not found or no posts in category
    if (!postsByCategory || postsByCategory.length === 0) {
      return {
        posts: [],
        total: 0
      }
    }

    const postsWithOffsetAndLimit = postsByCategory.filter(
      (post, index) => index >= +offset && index < +offset + +limit
    )

    return {
      posts: postsWithOffsetAndLimit,
      total: postsByCategory.length
    }
  },

  getPostsToSwitch: async (slug) => {
    const currentPost = await Post.findOne({ slug })

    if (!currentPost) {
      throw new AppError('Post not found', 404)
    }

    const { _id } = currentPost

    // Find previous post (post with _id less than current, sorted descending)
    const prevPost = await Post.findOne({ _id: { $lt: _id } })
      .sort({ _id: -1 })
      .populate('category')
      .exec()

    // Find next post (post with _id greater than current, sorted ascending)
    const nextPost = await Post.findOne({ _id: { $gt: _id } })
      .sort({ _id: 1 })
      .populate('category')
      .exec()

    // Return array with exactly 2 elements
    // [0] = previous post or null (edge case: post is first in list)
    // [1] = next post or null (edge case: post is last in list)
    return [
      prevPost
        ? {
          category: prevPost.category.category,
          slug: prevPost.slug,
          title: prevPost.title
        }
        : null,
      nextPost
        ? {
          category: nextPost.category.category,
          slug: nextPost.slug,
          title: nextPost.title
        }
        : null
    ]
  }
}