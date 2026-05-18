import Instagram from '../models/Instagram.js'

export default {
  getRecentPosts: async (query) => {
    const { limit, sort = 'date', order = -1 } = query

    const posts = await Instagram.find()
      .sort({ [sort]: +order  })
      .limit(+limit)
      .exec()

    if (!posts || posts.length === 0) {
      return {
        posts: [],
        total: 0
      }
    }

    return {
      posts,
      total: posts.length
    }
  },
  getColophonPosts: async () => {
    const colophonPostsMarkers = [
      'post-10',
      'post-11',
      'post-12',
      'post-13',
      'post-14',
      'post-15',
      'post-16',
      'post-17',
      'post-18',
      'post-19',
      'post-20',
      'post-21'
    ]

    const posts = await Instagram.find({
      img: { $in: colophonPostsMarkers }
    }).exec()

    if (!posts || posts.length === 0) {
      return {
        posts: [],
        total: 0
      }
    }

    return {
      posts,
      total: posts.length
    }
  }
}
