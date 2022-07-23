import { createContext, useState, useRef } from 'react'
import { useRouter } from 'next/router'

const FlashContext = createContext()

export const FlashProvider = ({ children }) => {
  const [show, setShow] = useState(undefined)
  const [message, setMessage] = useState(null)
  const [type, setType] = useState('')
  const timer = useRef()

  const flash = (type = 'default') => (message = '', duration = 5000) => {
    setType(type)
    setMessage(message)
    setShow(true)

    timer.current = setTimeout(() => {
      setShow(undefined)
    }, duration)
  }

  const value = flash()
  value.default = value
  value.success = flash('success')
  value.error = flash('error')
  value.warn = flash('warn')
  value.info = flash('info')

  let classes = 'flash-message'
  if (type && message) classes = classes + ' ' + type

  return (
    <FlashContext.Provider value={value}>
      <aside className='flash-message' data-show={show}>
        <p>{message}</p>
      </aside>
      {children}
    </FlashContext.Provider>
  )
}

export default FlashContext
