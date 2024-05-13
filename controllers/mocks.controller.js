import MocksService from '../services/mocks.service.js'

export default {
  mockPosts: async (req, res) => {
    const quantity = req.query.quantity

    try {
      let result = await MocksService.mockPosts(quantity)

      if (result.length > 0) return res.status(200).send(result)
    } catch (e) {
      console.error(e)
    }
  },
  mockContacts: async (req, res) => {
    try {
      let result = await MocksService.mockContacts()
      if (result.length > 0) return res.status(200).send(result)
    } catch (e) {
      console.error(e)
    }
  },
  mockInstagram: async (req, res) => {
    try {
      let result = await MocksService.mockInstagram()
      if (result.length > 0) return res.status(200).send(result)
    } catch (e) {
      console.error(e)
    }
  },
  mockCategories: async (req, res) => {
    const quantity = req.query.quantity

    try {
      let result = await MocksService.mockCategories(quantity)
      if (result.length > 0) return res.status(200).send(result)
    } catch (e) {
      console.error(e)
    }
  }
}
