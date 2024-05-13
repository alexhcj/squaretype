import React, {useEffect, useState} from 'react'
import cn from 'classnames'
import {contactsAPI} from '../../../api/contacts'
import {useThemeContext} from '../../../context/ThemeContext'
import {FollowItem} from './FollowItem/FollowItem'
import {Title} from '../../UI/Title/Title'
import {Preloader} from '../../Preloader/Preloader'
import s from './Follow.module.sass'

// types: 'row' | 'square'
export const Follow = ({type = 'square'}) => {
    const {theme} = useThemeContext()
    const [socials, setContacts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false)
            setIsLoading(true)

            try {
                const data = await contactsAPI.getContacts()
                setContacts(data)
            } catch (e) {
                setIsError(true)
            }
            setIsLoading(false)
        }

        fetchData()
    }, [])

    return (
        <div>
            <Title title="Follow me" theme={theme === 'light' ? 'dark' : 'light'} className={s.title}/>

            {isError && <div>Something went wrong ...</div>}

            {isLoading ? (
                <Preloader/>
            ) : (
                <div className={cn(s.items, s[`grid_${type}`])}>
                    {socials.map((social, index) => {
                        return <FollowItem type={type} {...social} key={index} theme={theme}/>
                    })}
                </div>
            )}
        </div>
    )
}
