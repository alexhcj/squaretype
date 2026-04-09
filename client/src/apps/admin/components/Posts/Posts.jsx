import React, {useEffect, useState} from 'react'
import {useLocation} from "react-router-dom";

import {postsAPI} from "../../../../shared/api/posts";
import {Preloader} from "../../../../shared/components/UI/Preloader/Preloader";
import {PostCard} from "../../../../shared/components/PostCard/PostCard";
import s from './Posts.module.sass'

export const Posts = () => {
	const location = useLocation()

	const [postsData, setPostsData] = useState([])
	const [total, setTotal] = useState(0)
	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)

	const [offset, setOffset] = useState(0)
	const category = location.state ? location.state.category : ''
	const search = location.search.slice(1)
	const limit = 10

	useEffect(() => {
		const fetchData = async () => {
			setIsError(false)
			setIsLoading(true)

			const query = new URLSearchParams({
				limit,
				sort: 'date',
				offset,
				category,
				search
			}).toString()

			try {
				const { posts, total } = await postsAPI.getPosts(query)
				postsData.length === 0 ? setPostsData(posts) : setPostsData((prev) => [...prev, ...posts])
				setTotal(total)
			} catch (e) {
				setIsError(true)
				console.log(`Error while fetching data: ${e}`)
				throw e
			}
			setIsLoading(false)
		}

		fetchData()
	}, [offset])

	return (
		<div>
			<div className={s.header}>
				<span>{total} posts</span>
				<div className={s.grid}>
					<span>Grid 1</span>
					<span>Grid 2</span>
					<span>Grid 3</span>
					<span>Grid 4</span>
					<span>Grid list</span>
				</div>
				<div className={s.filters}>Sort + filters</div>
			</div>
			<div className={s.posts}>
				{isLoading && <Preloader className={s.preloader} />}
				{postsData && postsData.map((post, index) => <PostCard post={post} key={index} />)}
			</div>
		</div>
	)
}
