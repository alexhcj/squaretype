const { Router } = require('express')
const router = Router()
const casual = require('casual')



router.get('/', async (req, res) => {
	try {
		let posts = []

		for (let i = 1; i <= 35; i++) {
			const post = {}

            const title = () => {
                return casual.title
            }
            
            const category = () => {
                const n = ran()
                
                function ran(max = 5) {
                    return Math.floor(Math.random() * Math.floor(max))
                }
                
                switch (n) {
                    case 1:
                        return 'Etiam'
                    case 2:
                        return 'Vulputate'
                    case 3:
                        return 'Aenean Eleifend'
                    case 4:
                        return 'Maecenas'
                    default:
                        return 'Etiam'
                }
            }
            
            const text = (sizeX) => {
                let text = ''
                for (let i = 0; i < sizeX; i++) {
                    text += casual.text
                }
                return text
            }
            
            const date = () => {
                let date = ''
                return date += `${casual.month_name} ${casual.month_number}, 2019`
            }

            const img = () => {
                const path = `http://localhost:5000/static/images/demo-${i}`
                return path
            }
            
			const views = casual.integer((from = 0), (to = 2000))
			const shares = casual.integer((from = 0), (to = 800))
			const author = casual.full_name
            
			post.category = category()
			post.title = title()
			post.text = text(8)
			post.author = author
			post.data = date()
            post.img = img()
			post.views = views
            post.shares = shares
			posts.push(post)
		}

		res.send(posts)
	} catch (e) {
		res.status(500).json({ message: 'Server Error 500' })
	}
})

module.exports = router
