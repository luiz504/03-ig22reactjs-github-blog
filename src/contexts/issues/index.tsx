import { ReactNode, createContext } from 'react'
import { useQuery } from 'react-query'

import { api } from '~/libs/api'

import { useUserContext } from '../user/useUserContext'

type Issue = {
  id: string | number
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
}
export const IssuesContext = createContext<IssuesContextType>({})

interface IssuesContextProviderProps {
  children: ReactNode
}
export const IssuesContextProvider = ({
  children,
}: IssuesContextProviderProps) => {
  const { userData } = useUserContext()

  const { data } = useQuery({
    queryKey: ['issues', { user: userData?.login }],
    queryFn: async () => {
      const ownerName = userData?.login || 'rocketseat-education'
      const repoName =
        '03-igniter-challenge-github-blog' || 'reactjs-github-blog-challenge'
      const searchValue = ''
      const response = await api.get<ISearchIssuesResponse>('/search/issues', {
        params: { q: `${searchValue} repo:${ownerName}/${repoName}` },
      })
      return response.data
    },
    enabled: !!userData?.login,
    retry: false,
  })

  const contextValue: IssuesContextType = {
    issues: data?.items,
    total_count: data?.total_count,
  }

  return (
    <IssuesContext.Provider value={contextValue}>
      {children}
    </IssuesContext.Provider>
  )
}
