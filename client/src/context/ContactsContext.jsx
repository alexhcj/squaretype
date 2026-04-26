import React, { createContext, useContext, useState, useEffect, useMemo } from 'react'
import { contactsAPI } from '../shared/api/contacts'

const ContactsContext = createContext()

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const data = await contactsAPI.getContacts()
        setContacts(data)
      } catch (e) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchContacts()
  }, [])

  const value = useMemo(
    () => ({
      contacts,
      isLoading,
      isError
    }),
    [contacts, isLoading, isError]
  )

  return <ContactsContext.Provider value={value}>{children}</ContactsContext.Provider>
}

export const useContactsContext = () => {
  const context = useContext(ContactsContext)
  if (!context) {
    throw new Error('useContactsContext must be used within a ContactsProvider')
  }
  return context
}
