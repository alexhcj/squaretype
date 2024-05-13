import Category from '../models/Category.js'

export default {
  getCategories: async () => {
    return Category.find()
  },
  getCategory: async (category) => {
    const entity = await Category.find({ category })

    return entity[0]
  },
  updateCategory: async (data, category) => {
    const entity = await Category.find({ category })

    const updatedEntity = {
      category: data.category,
      description: data.description
    }

    return Category.findOneAndUpdate({ category }, updatedEntity, { new: true })
  }
}
