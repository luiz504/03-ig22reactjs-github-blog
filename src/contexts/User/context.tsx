import { ReactNode, createContext } from 'react'
import { useQuery } from 'react-query'
import { api } from '~/libs/api'

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
}
export const UserContext = createContext({} as UserContextData)

interface UserContextProviderProps {
  children: ReactNode
}
export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: 'user-data',
    queryFn: async () => {
      const response = await api.get<UserProfile>('/users/luiz504')
      return response.data
    },
  })

  return (
    <UserContext.Provider value={{ userData: data, isLoading, isError }}>
      {children}
    </UserContext.Provider>
  )
}
