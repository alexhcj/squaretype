import Contact from '../models/Contact.js'

export default {
  getContacts: async () => {
    return Contact.find()
  }
}
