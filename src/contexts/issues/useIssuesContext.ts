import { useContext } from 'react'
import { IssuesContext } from '.'

export const useIssuesContext = () => {
  const context = useContext(IssuesContext)

  if (!Object.keys(context).length) {
    throw new Error(
      'useIssuesContext must be used within a IssuesContextProvider',
    )
  }

  return context
}
