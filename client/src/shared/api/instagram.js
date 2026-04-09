import { API } from './api'

export const instagramAPI = {
  getPosts(query) {
    return API.get(`/instagram?${query}`).then((res) => res.data)
  }
}
