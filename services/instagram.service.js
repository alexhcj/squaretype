import Instagram from '../models/Instagram.js'

export default {
  getPosts: async (query) => {
    const { limit, sort = 'date', order = -1 } = query

    return Instagram.find()
      .sort({ [`${sort}`]: +order })
      .limit(+limit)
  }
}
