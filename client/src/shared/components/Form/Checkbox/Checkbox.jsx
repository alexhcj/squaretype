import React from 'react'
import s from './Checkbox.module.sass'
import cn from 'classnames'

// types: 'checkbox' | 'radio'
export const Checkbox = ({ type = 'checkbox', id, name, children, required, onChange, className }) => {
  return (
    <label className={cn(s.label, className)} htmlFor={id}>
      <input className={s.checkbox} type={type} name={name} id={id} required={required} onChange={onChange} />
      <span className={s.text}>{children}</span>
    </label>
  )
}
