import { API } from './api'
import {buildQueryString} from "../utils/query-params";

export const instagramAPI = {
  getRecentPosts(query) {
    const params = buildQueryString(query)
    return API.get(`/instagram/recent?${params}`).then((res) => res.data)
  },
  getColophonPosts() {
    return API.get('/instagram/colophon').then((res) => res.data)
  }
}
