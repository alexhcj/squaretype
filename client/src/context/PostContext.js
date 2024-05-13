import { createContext, useContext, useState } from 'react'

const PostContext = createContext({})

export const usePostContext = () => useContext(PostContext)

export const PostProvider = ({ children }) => {
  const [post, setPost] = useState({})
  const [total, setTotal] = useState(0)
  const [category, setCategory] = useState(null)

  return (
    <PostContext.Provider value={{ post, setPost, total, setTotal, category, setCategory }}>
      {children}
    </PostContext.Provider>
  )
}
