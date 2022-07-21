import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { fetch } from '@services/fetch'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    if (sessionStorage.user) {
      setUser(JSON.parse(sessionStorage.user))
    } else if (localStorage.user) {
      setUser(JSON.parse(localStorage.user))
    }
  }, [])

  const value = {
    get id () {
      return user?.id
    },

    get current () {
      return user
    },
  
    get name() {
      if (!user) return null
      return `${user.first_name} ${user.last_name}`
    },

    update: values => {
      if (!user) return null
      const next = { ...user, ...values }

      if (window.sessionStorage.getItem('user')) {
        window.sessionStorage.setItem('user', JSON.stringify(next))
      } else {
        window.localStorage.setItem('user', JSON.stringify(next))
      }

      setUser(next)
    },
  
    login: values => fetch.post('/v1/users/login', values)
      .then(({ message, user }) => {
        if (message) return { message }
        if (user) {
          setUser(user)
          const storage = values.remember ? localStorage : sessionStorage
          storage.setItem('user', JSON.stringify(user))
          router.push(router.query.redirect ?? '/')
          return true
        }
      }),
  
    logout: (redirect = true) => fetch.post('/v1/users/logout')
      .then(() => {
        setUser(null)
        sessionStorage.removeItem('user')
        localStorage.removeItem('user')
        redirect && router.push('/')
        return true
      })
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
