import ContactsService from '../services/contacts.service.js'

export default {
  getContacts: async (req, res) => {
    try {
      let result = await ContactsService.getContacts()
      res.status(200).send(result)
    } catch (e) {
      console.error(e)
    }
  }
}
