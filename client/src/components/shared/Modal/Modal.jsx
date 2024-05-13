import { useCallback, useEffect } from 'react'
import cn from 'classnames'
import { Portal } from './Portal'
import s from './Modal.module.sass'

export const Modal = ({ isOpen, setIsOpen, children, className }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const onKeyHandler = useCallback((e) => (e.key === 'Escape' && setIsOpen ? setIsOpen(false) : null), [setIsOpen])

  useEffect(() => {
    document.body.addEventListener('keydown', onKeyHandler)

    return () => {
      document.body.removeEventListener('keydown', onKeyHandler)
    }
  }, [onKeyHandler])

  return (
    <>
      {isOpen && (
        <Portal>
          <div className={cn(s.modal, className)}>
            <div role="presentation" className={s.overlay} onClick={() => setIsOpen(false)} />
            {children}
          </div>
        </Portal>
      )}
    </>
  )
}
