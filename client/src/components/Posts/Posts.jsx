import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import {postsAPI} from '../../api/posts'
import {usePostContext} from '../../context/PostContext'
import {PostItem} from '../shared/PostItem/PostItem'
import {Preloader} from '../Preloader/Preloader'
import {Button} from '../UI/Button/Button'
import {ReactComponent as ChevronSVG} from '../../assets/svg/chevron.svg'
import s from './Posts.module.sass'

export const Posts = () => {
    const {total, setTotal} = usePostContext()
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [firstRender, setFirstRender] = useState(true)
    const location = useLocation()
    const category = location.state ? location.state.category : ''
    const search = location.search.slice(1)

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false)
            setIsLoading(true)

            const query = new URLSearchParams({
                limit: 10,
                sort: 'date',
                category,
                search
            }).toString()

            try {
                const {posts, total} = await postsAPI.getPosts(query)
                setPosts(posts)
                setTotal(total)
            } catch (e) {
                setIsError(true)
                console.log(`Error while fetching data: ${e}`)
                throw e
            }
            setFirstRender(false)
            setIsLoading(false)
        }

        fetchData()
    }, [])

    const loadMoreHandler = (e) => {
        e.preventDefault()
        // setPrev(prev + total)
    }

    return (
        <div className={s.postsBox}>
            <section className={s.posts}>
                {isError && <div>Something went wrong ...</div>}

                {firstRender && isLoading ? (
                    <div className={s.preloader}>
                        <Preloader/>
                    </div>
                ) : (
                    posts.map((post, index) => {
                        return <PostItem post={post} key={index}/>
                    })
                )}
            </section>
            {total < 30 ? null : (
                <div className={s.btnBox}>
                    <Button
                        size="xxl"
                        onClick={loadMoreHandler}
                        isLoading={isLoading}
                        icon={<ChevronSVG className={s.chevron_icon}/>}
                    >
                        Load more
                    </Button>
                </div>
            )}
        </div>
    )
}
