import React, { useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import { postsAPI } from '../../api/posts'
import { useThemeContext } from '../../context/ThemeContext'
import { useDebounce } from '../../hooks/useDebounce'
import { Input } from '../shared/Form/Input/Input'
import { SearchItem } from './SearchItem/SearchItem'
import { Preloader } from '../Preloader/Preloader'
import { ReactComponent as XMarkSVG } from '../../assets/svg/xmark.svg'
import { ReactComponent as MagnifierSVG } from '../../assets/svg/magnifier.svg'
import s from './Search.module.sass'
import { useNavigate } from 'react-router-dom'

export const Search = ({ isOpen, setIsSearchOpen }) => {
  const { theme } = useThemeContext()
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 350)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [posts, setPosts] = useState([])
  const [isResultOpen, setIsResultOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const fetchData = async () => {
      if (search === '') return
      setIsError(false)
      setIsLoading(true)
      setIsResultOpen(true)

      const query = new URLSearchParams({
        search: debouncedSearch,
        limit: 4
      }).toString()

      try {
        const { posts } = await postsAPI.getPosts(query)
        setPosts(posts)
      } catch (e) {
        setIsError(true)
      }
      setIsLoading(false)
    }

    fetchData()
  }, [debouncedSearch])

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey)
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsResultOpen(false)
    }
  }

  const handleEscapeKey = (e) => {
    if (e.key === 'Escape') {
      setIsResultOpen(false)
      setIsSearchOpen(false)
    }
  }

  const clearSearch = () => {
    setSearch('')
  }

  const handleFullSearch = (search) => {
    navigate(`/search?${search}`)
  }

  const handleCloseSearch = () => {
    setIsResultOpen(false)
    setIsSearchOpen(false)
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handlePostClick = () => {
    setSearch('')
    setIsSearchOpen(true)
  }

  const handleFocus = (e) => {
    if (e.target.nodeName === 'BUTTON') return
    setIsResultOpen(true)
  }

  return (
    <div className={s.box}>
      <div className={s.container}>
        <div className={cn(s.block, { [s.open]: isOpen }, theme === 'light' ? s.light : s.dark)}>
          <div className={s.search} ref={ref} onFocus={handleFocus}>
            <form className={s.form}>
              <button className={s.btn_search} type="button" onClick={() => handleFullSearch(debouncedSearch)}>
                <MagnifierSVG className={s.icon} />
              </button>
              <Input
                className={s.input}
                id="search"
                name="search"
                value={search}
                placeholder="Enter your search topic"
                onChange={handleSearch}
              />
              {search && (
                <button className={s.btn_reset} type="button" onClick={clearSearch}>
                  x
                </button>
              )}
              <button className={s.btn_close} type="button" onClick={handleCloseSearch}>
                <XMarkSVG className={s.icon} />
              </button>
            </form>
          </div>
        </div>
        <div className={cn(s.result, { [s.open]: isResultOpen })}>
          {isLoading && <Preloader />}
          {isError && <div>Error</div>}
          {posts &&
            !isLoading &&
            !isError &&
            posts.map((post) => <SearchItem key={post.title} {...post} onClick={handlePostClick} />)}
        </div>
      </div>
    </div>
  )
}
