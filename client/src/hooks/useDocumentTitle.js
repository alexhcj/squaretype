import { useEffect } from 'react'

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = `Squaretype | ${title}`
  }, [title])
}

export default useDocumentTitle

