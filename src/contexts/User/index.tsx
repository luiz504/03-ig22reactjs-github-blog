import { ReactNode, createContext } from 'react'
import { useQuery } from 'react-query'

import { api } from '~/libs/api'

import { ownerName } from '~/common'

interface UserProfile {
  id: number
  name: string
  avatar_url: string
  bio: string
  login: string
  company: string
  followers: number
  followers_url: string
  following: number
}

interface UserContextData {
  userData?: UserProfile
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
}

export const UserContext = createContext({} as UserContextData)

interface UserContextProviderProps {
  children: ReactNode
}

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: 'user-data',
    queryFn: async () => {
      const response = await api.get<UserProfile>(`/users/${ownerName}`)
      return response.data
    },
  })

  const contextValue: UserContextData = {
    userData: data,
    isLoading,
    isError,
    isSuccess,
  }

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  )
}
