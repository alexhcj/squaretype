import InstagramService from '../services/instagram.service.js'

export default {
  getPosts: async (req, res) => {
    const query = req.query

    try {
      const result = await InstagramService.getPosts(query)
      res.status(200).send(result)
    } catch (e) {
      console.error(e)
      res.status(500).json({ message: 'Something went wrong, try again please' })
    }
  }
}
