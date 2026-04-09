import { API } from './api'
import { buildQueryString } from '../utils/query-params'

export const contactsAPI = {
  getContacts(query = {}) {
    const params = buildQueryString(query)
    return API.get(`/contacts?${params}`).then((res) => res.data)
  }
}
