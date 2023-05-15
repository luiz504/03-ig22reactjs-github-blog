import { ReactNode, createContext, useState } from 'react'
import { useQuery } from 'react-query'

import { api } from '~/libs/api'
import { useUserContext } from '../user/useUserContext'

type Issue = {
  id: string | number
  number: number
  title: string
  body: string | null
  created_at: string
}

type ISearchIssuesResponse = {
  total_count: number
  incomplete_results: boolean
  items: Issue[]
}

type IssuesContextType = {
  total_count?: ISearchIssuesResponse['total_count']
  issues?: ISearchIssuesResponse['items']
  onChangeSearchValue: (value: string) => void
  searchValue: string
}
export const IssuesContext = createContext<IssuesContextType>(
  {} as IssuesContextType,
)

interface IssuesContextProviderProps {
  children: ReactNode
}
export const IssuesContextProvider = ({
  children,
}: IssuesContextProviderProps) => {
  const { userData } = useUserContext()
  const [searchValue, setSearchValue] = useState('')

  const { data } = useQuery({
    queryKey: ['issues', { user: userData?.login, searchValue }],
    queryFn: async () => {
      const ownerName = userData?.login || 'rocketseat-education'
      const repoName =
        '03-igniter-challenge-github-blog' || 'reactjs-github-blog-challenge'

      const response = await api.get<ISearchIssuesResponse>('/search/issues', {
        params: { q: `${searchValue} repo:${ownerName}/${repoName}` },
      })
      return response.data
    },
    enabled: !!userData?.login,
    retry: false,
  })

  const onChangeSearchValue = (value: string = '') => {
    setSearchValue(value)
  }

  const contextValue: IssuesContextType = {
    issues: data?.items,
    total_count: data?.total_count,
    onChangeSearchValue,
    searchValue,
  }

  return (
    <IssuesContext.Provider value={contextValue}>
      {children}
    </IssuesContext.Provider>
  )
}
