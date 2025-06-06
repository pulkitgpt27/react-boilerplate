import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import useAuth from '../../auth/useAuth'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()

  const { from } = (location.state as any) || { from: { pathname: '/' } }
  const handleLogin = () => {
    auth?.signIn(() => {
      navigate(from, {replace: true});
    })
  }
  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginPage
