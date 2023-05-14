/* eslint-disable react-refresh/only-export-components */
import { useContext } from 'react'
import { UserContext } from './index'

export const useUserContext = () => {
  const context = useContext(UserContext)

  if (!Object.keys(context).length) {
    throw new Error('useUserContext must be used within a UserContextProvider')
  }

  return context
}
