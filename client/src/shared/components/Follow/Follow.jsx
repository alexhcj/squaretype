import React, { useMemo } from 'react'
import cn from 'classnames'
import { useThemeContext } from '../../../context/ThemeContext'
import { useContactsContext } from '../../../context/ContactsContext'
import { FollowItem } from './FollowItem/FollowItem'
import { Title } from '../UI/Title/Title'
import { Preloader } from '../UI/Preloader/Preloader'
import s from './Follow.module.sass'

export const Follow = ({ type = 'square' }) => {
  const { theme } = useThemeContext()
  const { contacts, isLoading, isError } = useContactsContext()

  const memoizedItems = useMemo(() => {
    return contacts.map((social, index) => (
      <FollowItem type={type} {...social} key={social.id || index} theme={theme} />
    ))
  }, [contacts, theme, type])

  if (isError) return <div>Error loading socials</div>

  return (
    <div>
      <Title title="Follow me" theme={theme === 'light' ? 'dark' : 'light'} className={s.title} />
      {isLoading ? <Preloader /> : <div className={cn(s.items, s[`grid_${type}`])}>{memoizedItems}</div>}
    </div>
  )
}
