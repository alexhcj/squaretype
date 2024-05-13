import casual from 'casual'
import CategoriesService from './categories.service.js'
import Post from '../models/Post.js'
import Contact from '../models/Contact.js'
import Instagram from '../models/Instagram.js'
import Category from '../models/Category.js'
import { stringToSlug } from '../utils/index.js'

export default {
  mockPosts: async (quantity = 55) => {
    let posts = []
    const categories = await CategoriesService.getCategories()

    for (let i = 1; i <= quantity; i++) {
      const post = {}

      const category = () => {
        const n = ran()

        function ran(max = categories.length) {
          return Math.floor(Math.random() * Math.floor(max))
        }

        return categories[n]._id
      }

      const text = (sizeX) => {
        let text = ''
        for (let i = 0; i < sizeX; i++) {
          text += casual.text
        }
        return text
      }

      const img = () => `${process.env.API_URL}${process.env.PORT}/static/images/posts/demo-${i}`

      const views = casual.integer(0, 100000)
      const viewsWeek = casual.integer(0, 60000)
      const shares = casual.integer(0, 6000)
      const author = casual.full_name
      const read = casual.integer(2, 10)

      post.category = category()
      post.title = casual.title
      post.slug = stringToSlug(post.title)
      post.text = text(8).slice(0, -1)
      post.previewText = post.text.slice(0, 180)
      post.author = author
      post.img = img()
      post.date = casual.date('YYYY-MM-DD')
      post.views = views
      post.viewsWeek = viewsWeek
      post.shares = shares
      post.read = read
      posts.push(post)
    }

    return await Post.create(posts)
  },
  mockContacts: async () => {
    const contactsList = [
      { contact: 'facebook', subsType: 'likes' },
      { contact: 'github', subsType: 'followers' },
      { contact: 'twitter', subsType: 'followers' },
      { contact: 'instagram', subsType: 'followers' },
      { contact: 'youtube', subsType: 'subscribers' },
      { contact: 'pinterest', subsType: 'followers' },
      { contact: 'vk', subsType: 'followers' },
      { contact: 'behance', subsType: 'followers' },
      { contact: 'telegram', subsType: 'followers' }
    ]
    let contacts = []

    contactsList.forEach(({ contact, subsType }) => {
      contacts.push({
        contact,
        link: '/',
        subsType,
        subsTotal: casual.integer(0, 10000)
      })
    })

    return await Contact.create(contacts)
  },
  mockInstagram: async (quantity = 6) => {
    let posts = []

    for (let i = 1; i <= quantity; i++) {
      const post = {}

      const img = () => `${process.env.API_URL}${process.env.PORT}/static/images/instagram/demo-${i}`

      post.img = img()
      post.date = casual.date('YYYY-MM-DD')
      post.likes = casual.integer(0, 3000)
      post.comments = casual.integer(0, 3000)
      posts.push(post)
    }

    return await Instagram.create(posts)
  },
  mockCategories: async (quantity = 10) => {
    let categories = []

    for (let i = 1; i <= quantity; i++) {
      const category = {}
      category.category = casual.word
      category.description = casual.text
      category.color = casual.rgb_hex
      categories.push(category)
    }

    return await Category.create(categories)
  }
}
