import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { useQuery } from 'react-query'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import dracula from 'react-syntax-highlighter/dist/esm/styles/prism/dracula'

import { CardIssueResume } from './components/CardIssueResume'
import { LoadingBoxPlaceholder } from '~/components/placeholders/LoadingBoxPlaceholder'

import { ContainerIssue, IssueBody } from './styles'

import { api } from '~/libs/api'

import { ownerName, repoName } from '~/setup'
import { useTheme } from 'styled-components'

export interface IssueType {
  title: string
  body: string | null
  created_at: string
  comments: number
  number: number
  user: {
    login: string
  }
}

export const Issue = () => {
  const { issueNumber } = useParams()
  const theme = useTheme()

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['fetch-issue-data', issueNumber],
    queryFn: async ({ signal }) => {
      const response = await api.get<IssueType>(
        `repos/${ownerName}/${repoName}/issues/${issueNumber} `,
        { signal },
      )
      return response.data
    },
    enabled: !!issueNumber,
    retry: false,
  })

  return (
    <ContainerIssue>
      <CardIssueResume
        issueData={data}
        isLoading={isLoading}
        isSuccess={isSuccess}
      />

      <IssueBody>
        {!isLoading && isSuccess && (
          <>
            {!data.body && <i>No description Provided</i>}
            {!!data.body && (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  a: ({ children, ...rest }) => (
                    <a target="_blank" {...rest}>
                      {children}
                    </a>
                  ),
                  code: ({ node, inline, className, children, ...props }) => {
                    const match = /language-(\w+)/.exec(className || '')

                    return (
                      <SyntaxHighlighter
                        {...props}
                        style={dracula}
                        customStyle={{ background: theme?.['base-post'] }}
                        language={match?.[1] || 'js'}
                        PreTag="div"
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    )
                  },
                }}
              >
                {data.body}
              </ReactMarkdown>
            )}
          </>
        )}

        {isLoading && <LoadingBoxPlaceholder style={{ height: '10rem' }} />}
      </IssueBody>
    </ContainerIssue>
  )
}
