import { API } from './api'

export const categoriesAPI = {
  getCategory(category) {
    return API.get(`/categories/${category}`).then((res) => res.data)
  }
}
