import Post from '../models/Post.js'

export default {
  getPosts: async (query) => {
    const { limit = 10, offset = 0, sort = 'date', order = -1, category, search } = query
    const find = {}

    if (search) find.title = { $regex: `${search}`, $options: 'i' }

    const posts = await Post.find(find)
      .sort({ [`${sort}`]: +order })
      .skip(+offset)
      .limit(+limit)
      .populate('category')
      .exec()
    category && posts.filter((post) => post.category.category === category)

    return {
      posts: posts,
      total: posts.length
    }
  },
  getPostBySlug: async (slug) => {
    return Post.findOne({ slug }).populate('category')
  },
  getPostsCategories: async () => {
    const data = await Post.find().populate('category')

    let posts = []

    for (const [index, post] of data.entries()) {
      // if (index > (uniqueCategories.size * 4)) break
      if (posts.length === 0 || !posts.find((item) => item.category === post.category.category)) {
        posts.push({ category: post.category.category, posts: [post] })
      } else if (posts.find((item) => item.category === post.category.category).posts.length === 4) {
        continue
      } else {
        posts.find((item) => item.category === post.category.category).posts.push(post)
      }
    }

    return posts
  },
  getPostsByCategory: async (query) => {
    const { limit = 10, offset = 0, category, sort = 'date', order = -1 } = query

    const posts = await Post.find()
      .sort({ [`${sort}`]: +order })
      .populate('category')
      .exec()

    const postsByCategory = category && posts.filter((post) => post.category.category === category)
    const postsWithOffsetAndLimit = postsByCategory.filter((post, index) => index >= +offset && index < limit)

    return {
      posts: postsWithOffsetAndLimit,
      total: postsByCategory.length
    }
  }
}
