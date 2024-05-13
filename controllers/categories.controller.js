import CategoriesService from '../services/categories.service.js'

export default {
  getCategories: async (req, res) => {
    try {
      const result = await CategoriesService.getCategories()
      res.status(200).send(result)
    } catch (e) {
      console.error(e)
      res.status(500).json({ message: 'Something went wrong, try again please' })
    }
  },
  getCategory: async (req, res) => {
    const category = req.params.category

    try {
      const result = await CategoriesService.getCategory(category)
      res.status(200).send(result)
    } catch (e) {
      console.error(e)
      res.status(500).json({ message: 'Something went wrong, try again please' })
    }
  },
  updateCategory: async (req, res) => {
    const category = req.params.category
    const data = req.body

    try {
      const result = await CategoriesService.updateCategory(data, category)
      res.status(201).send(result)
    } catch (e) {
      console.error(e)
      res.status(500).json({ message: 'Something went wrong, try again please' })
    }
  }
}
