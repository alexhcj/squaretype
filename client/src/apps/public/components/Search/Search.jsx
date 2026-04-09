import React, { useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import { useNavigate } from 'react-router-dom'

import { SearchItem } from './SearchItem/SearchItem'
import {useThemeContext} from "../../../../context/ThemeContext";
import {useDebounce} from "../../../../hooks/useDebounce";
import {postsAPI} from "../../../../shared/api/posts";
import {Input} from "../../../../shared/components/Form/Input/Input";
import {Preloader} from "../../../../shared/components/UI/Preloader/Preloader";
import { ReactComponent as XMarkSVG } from '../../../../assets/svg/xmark.svg'
import { ReactComponent as MagnifierSVG } from '../../../../assets/svg/magnifier.svg'
import s from './Search.module.sass'

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
      if (search === '') {
        setPosts([])
        setIsResultOpen(false)
        return
      }
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
    setPosts([])
    setIsResultOpen(false)
  }

  const handleFullSearch = (search) => {
    navigate(`/search?search=${search}`)
  }

  const handleCloseSearch = () => {
    setIsResultOpen(false)
    setIsSearchOpen(false)
    setSearch('')
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handlePostClick = () => {
    setSearch('')
    setIsResultOpen(false)
    setIsSearchOpen(false)
  }

  const handleFocus = (e) => {
    if (e.target.nodeName === 'BUTTON') return
    if (search !== '') setIsResultOpen(true)
  }

  return (
    <div className={cn(s.box, theme === 'light' ? s.light : s.dark)}>
      <div className={s.container}>
        <div className={cn(s.block, { [s.open]: isOpen }, theme === 'light' ? s.light : s.dark)}>
          <div className={s.search} ref={ref} onFocus={handleFocus}>
            <form className={s.form}>
              <button className={s.btn_search} type="button" onClick={() => handleFullSearch(debouncedSearch)}>
                <MagnifierSVG className={s.icon} />
              </button>

              <Input
                className={cn(s.input, theme === 'light' ? s.light : s.dark)}
                id="search"
                name="search"
                value={search}
                placeholder="Enter your search topic"
                onChange={handleSearch}
                autoComplete="off"
              />

              <div className={cn(s.result, { [s.open]: isResultOpen }, theme === 'light' ? s.light : s.dark)}>
                {isLoading && <Preloader />}
                {posts && posts.map((post) => (
                  <SearchItem key={post.title} {...post} onClick={handlePostClick} />
                ))}
                {posts.length === 0 && search !== '' && !isLoading && (
                   <div className={s.no_results}>No results found</div>
                )}
              </div>

              {search && <button className={s.btn_reset} type="button" onClick={clearSearch}>x</button>}
              <button className={s.btn_close} type="button" onClick={handleCloseSearch}>
                <XMarkSVG className={s.icon} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}