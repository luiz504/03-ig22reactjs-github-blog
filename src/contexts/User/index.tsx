/* eslint-disable react-refresh/only-export-components */
import { useContext } from 'react'
import { UserContext, UserContextProvider } from './context'

const useUserContext = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider')
  }

  return context
}

export { UserContextProvider, useUserContext }
