import {useState} from 'react'
import cn from 'classnames'

import {useThemeContext} from "../../../../../context/ThemeContext";
import {PostItem} from './PostItem/PostItem'
import {CategoryItem} from './CategoryItem/CategoryItem'
import s from './CategoryPopover.module.sass'

export const CategoryPopover = ({isOpen, categories, posts}) => {
    const {theme} = useThemeContext()
    const [showedCategory, setShowedCategory] = useState(categories[0] || '')

    const handleShowedCategory = (category) => {
        setShowedCategory(category)
    }

    return (
        <div className={cn(s.popover, {[s.open]: isOpen}, theme === 'light' ? s.light : s.dark)}>
            <div className={s.tabs}>
                <div className={s.categories}>
                    {categories &&
                        categories.map((category) => (
                            <CategoryItem
                                key={category}
                                category={category}
                                showedCategory={showedCategory}
                                onMouseEnter={() => handleShowedCategory(category)}
                            />
                        ))}
                </div>
                <div className={s.posts}>
                    {posts.length !== 0 &&
                        posts[categories.indexOf(showedCategory) || 0].map((post) => <PostItem
                            key={post.title} {...post} />)}
                </div>
            </div>
        </div>
    )
}
