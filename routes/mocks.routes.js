import Router from 'express'
import MocksController from '../controllers/mocks.controller.js'

const router = Router()

router.post('/mock-posts', MocksController.mockPosts)
router.post('/mock-contacts', MocksController.mockContacts)
router.post('/mock-instagram', MocksController.mockInstagram)
router.post('/mock-categories', MocksController.mockCategories)
router.get('/tweets', async (req, res) => {
  try {
    const tweets = []

    for (let i = 1; i <= 10; i++) {
      const tweet = {}

      const date = () => {
        let date = ''
        let month = casual.month_number
        let day = casual.day_of_month
        if (month.length < 2) {
          month = `0${month}`
        }
        if (day.length < 2) {
          day = `0${day}`
        }
        return (date += `2020-${month}-${day}`)
      }

      tweet.text = casual.sentences(2)
      tweet.date = date()
      tweets.push(tweet)
    }

    res.send(tweets)
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, try again please' })
  }
})

export default router
