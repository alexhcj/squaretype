import { API } from './api'

export const contactsAPI = {
  getContacts(query) {
    return API.get(`/contacts?${query}`).then((res) => res.data)
  }
}
