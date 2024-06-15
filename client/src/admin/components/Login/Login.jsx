import { useState } from 'react'
import s from './Login.module.sass'

export const Login = () => {
  const [form, setForm] = useState({
    login: '',
    password: ''
  })

	const handleChange = (field) => (e) => {
		setForm({
			...form,
			[field]: e.target.value,
		})
	}

  return (
    <form className={s.form} >
      <label htmlFor="login">
        <input type="text" id="login" name="login" value={form.login} onChange={handleChange('login')} />
      </label>
      <label htmlFor="password">
        <input type="text" id="password" name="password" value={form.password} onChange={handleChange('password')} />
      </label>
    </form>
  )
}
