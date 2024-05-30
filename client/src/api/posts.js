import { API } from './api'

export const postsAPI = {
  getPosts(query) {
    return API.get(`/posts?${query}`).then((res) => res.data)
  },
  getPostBySlug(slug) {
    return API.get(`/posts/${slug}`).then((res) => res.data)
  },
  getPostsCategories() {
    return API.get('/posts/categories').then((res) => res.data)
  },
  getPostsByCategory(query) {
    return API.get(`/posts/by-category?${query}`).then((res) => res.data)
  },
  getPostsToSwitch(slug) {
    return API.get(`/posts/switch/${slug}`).then((res) => res.data)
  }
}
