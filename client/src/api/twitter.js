import { API } from './api'

export const twitterAPI = {
  getTwitter() {
    return API.get('/twitter').then((res) => res.data)
  }
}
