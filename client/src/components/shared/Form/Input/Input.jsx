import React from 'react'
import s from './Input.module.sass'
import cn from 'classnames'

export const Input = ({ type = 'text', name, id, value, placeholder, onChange, className }) => {
  return (
    <label className={cn(s.label, className)} htmlFor={id}>
      <input
        className={s.input}
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  )
}
