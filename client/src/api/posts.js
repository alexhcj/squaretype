import { API } from './api'
import { buildQueryString } from '../utils/query-params'

export const postsAPI = {
  getPosts(query) {
    const params = buildQueryString(query)
    return API.get(`/posts?${params}`).then((res) => res.data)
  },
  getPostBySlug(slug) {
    return API.get(`/posts/${slug}`).then((res) => res.data)
  },
  getPostsCategories() {
    return API.get('/posts/categories').then((res) => res.data)
  },
  getPostsCategory(query) {
    const params = buildQueryString(query)
    return API.get(`/posts/by-category?${params}`).then((res) => res.data)
  },
  getPostsToSwitch(slug) {
    return API.get(`/posts/${slug}/switch`).then((res) => res.data)
  }
}
