import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { fetch } from '@services/fetch'

const AdminContext = createContext()

export const AdminProvider = ({ children }) => {
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
    get current() {
      return user
    },
  
    get authorized() {
      return !!user
    },
  
    get name() {
      return `${user.first_name} ${user.last_name}`
    },
  
    login: values => fetch.post('/v1/users/login', { user: values })
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
  
    logout: () => fetch.post('/v1/users/logout')
      .then(() => {
        setUser(null)
        sessionStorage.removeItem('user')
        localStorage.removeItem('user')
        router.push('/login')
        return true
      })
  }

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  )
}

export default AdminContext
