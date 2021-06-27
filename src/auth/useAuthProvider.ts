import { useState } from 'react'
import fakeAuth from './fakeAuth'

export interface IUseAuthProvider {
  user: null | string
  signIn: (cb: () => void) => void
  signOut: (cb: () => void) => void
}

const useAuthProvider = (): IUseAuthProvider => {
  const [user, setUser] = useState<null | string>(null)
  const signIn = (cb: () => void) => {
    fakeAuth.signIn(() => {
      setUser('foo')
      cb()
    })
  }
  const signOut = (cb: () => void) => {
    fakeAuth.signOut(() => {
      setUser(null)
      cb()
    })
  }

  return {
    user,
    signIn,
    signOut,
  }
}

export default useAuthProvider
