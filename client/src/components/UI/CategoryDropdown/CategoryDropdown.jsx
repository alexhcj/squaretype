import { useEffect, useState } from 'react'
import { postsAPI } from '../../../api/posts'
import { CategoryPopover } from './CategoryPopover/CategoryPopover'
import s from './CategoryDropdown.module.sass'

export const CategoryDropdown = ({ children, icon, className }) => {
  const [data, setData] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const handleCategoriesPopover = (e) => {
    if (e.type === 'mouseenter') {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await postsAPI.getPostsCategories()
      setData(data)
    }

    fetchData()
  }, [])

  return (
    <div className={s.block} onMouseEnter={handleCategoriesPopover} onMouseLeave={handleCategoriesPopover}>
      <h3 className={className}>{children}</h3>
      {icon && icon}
      {data.length !== 0 && (
        <CategoryPopover
          isOpen={isOpen}
          categories={data.map((item) => item.category)}
          posts={data.map((item) => item.posts)}
        />
      )}
    </div>
  )
}
