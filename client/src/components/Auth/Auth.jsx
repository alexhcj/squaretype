import React, { useEffect, useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import s from './Auth.module.sass'

const Auth = () => {
  // const auth = useContext(AuthContext)
  const { loading, request, error } = useHttp()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {}, [error])

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      const data = request('/api/auth/register', 'POST', { ...form })
      console.log('Data', data)
    } catch (e) {}
  }

  const loginHandler = async () => {
    try {
      const data = request('/api/auth/login', 'POST', { ...form })
      // auth.login(data.token, data.userId)
    } catch (e) {}
  }

  return (
    <div className={s.form}>
      <div className={s.inputGroup}>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" placeholder="Enter email" onChange={changeHandler} />
      </div>
      <div className={s.inputGroup}>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" placeholder="Enter password" onChange={changeHandler} />
      </div>
      <div className={s.buttonsGroup}>
        <button onClick={loginHandler} disabled={loading}>
          Login
        </button>
        <button onClick={registerHandler} disabled={loading}>
          Registr
        </button>
      </div>
    </div>
  )
}

export default Auth
