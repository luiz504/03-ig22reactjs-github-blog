/* eslint-disable react/no-unescaped-entities */

import { useIssuesContext } from '~/contexts/issues/useIssuesContext'
import { IssueCard, IssuesContainer } from './styles'

import { formatDistanceToNowStrict } from 'date-fns'

export const IssuesList = () => {
  const { issues } = useIssuesContext()

  return (
    <IssuesContainer>
      {issues?.map((issue) => (
        <IssueCard key={issue.id} to="/issue/x">
          <header>
            <strong>{issue.title}</strong>
            <time>
              {formatDistanceToNowStrict(new Date(issue.created_at), {
                addSuffix: true,
              })}
            </time>
          </header>
          <p>{issue.body}</p>
        </IssueCard>
      ))}
    </IssuesContainer>
  )
}
