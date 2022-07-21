import { useContext } from 'react'
import FlashContext from '@contexts/flash-messages'

const useFlashMessages = () => useContext(FlashContext)
export default useFlashMessages
