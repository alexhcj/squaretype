import TwitterService from '../services/twitter.service.js'

export default {
  getTwitter: async (req, res) => {
    try {
      let result = await TwitterService.getTwitter()
      res.status(200).send(result)
    } catch (e) {
      console.error(e)
    }
  }
}
