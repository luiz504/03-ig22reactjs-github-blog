import { useIssuesContext } from '~/contexts/issues/useIssuesContext'
import { IssueCard, IssueCardBody, IssuesContainer } from './styles'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import dracula from 'react-syntax-highlighter/dist/esm/styles/prism/dracula'

import { format, formatDistanceToNowStrict } from 'date-fns'
import ReactMarkdown from 'react-markdown'
import { useTheme } from 'styled-components'
import { LoadingBoxPlaceholder } from '~/components/placeholders/LoadingBoxPlaceholder'

export const IssuesList = () => {
  const { issues, isLoading, isSuccess, searchValue, isError, error } =
    useIssuesContext()
  const theme = useTheme()

  const formatDate = (date: string | Date) => {
    return format(new Date(date), 'LLL dd yyyy HH:mm')
  }

  const showNoResultFeedback =
    !isLoading && isSuccess && !!searchValue && !issues?.length
  const showErrorFeedback = !isLoading && isError
  const showNoPostFound =
    !isLoading && isSuccess && !searchValue && !issues?.length

  return (
    <IssuesContainer>
      {issues?.map((issue) => (
        <IssueCard key={issue.id} to={`/issue/${issue.number}`}>
          <header>
            <strong>{issue.title}</strong>
            <time
              title={formatDate(issue.created_at)}
              dateTime={issue.created_at}
            >
              {formatDistanceToNowStrict(new Date(issue.created_at), {
                addSuffix: true,
              })}
            </time>
          </header>

          <IssueCardBody>
            <div className="content">
              {issue.body && (
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    a: ({ children }) => (
                      <span className="span-a">{children}</span>
                    ),
                    img: () => (
                      <span className="span-img">image hidden...</span>
                    ),
                    p: ({ children, node, ...rest }) =>
                      children?.length ? (
                        <div {...rest}>{children}</div>
                      ) : (
                        <p {...rest}>{children}</p>
                      ),
                    code: ({ node, inline, className, children, ...props }) => {
                      const match = /language-(\w+)/.exec(className || '')
                      return (
                        <SyntaxHighlighter
                          {...props}
                          style={dracula}
                          customStyle={{
                            background: theme?.['base-post'],
                            overflow: 'hidden',
                            padding: 0,
                          }}
                          language={match?.[1] || 'js'}
                          CodeTag={'div'}
                          PreTag="div"
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      )
                    },
                    pre: ({ node, className, children, ...props }) => {
                      return (
                        <SyntaxHighlighter
                          {...props}
                          style={dracula}
                          customStyle={{
                            background: theme?.['base-post'],
                            overflow: 'hidden',
                            padding: 0,
                          }}
                          language={'js'}
                          PreTag="div"
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      )
                    },
                  }}
                >
                  {issue.body}
                </ReactMarkdown>
              )}
              {!issue.body && <i>No description provided</i>}
            </div>
          </IssueCardBody>
        </IssueCard>
      ))}
      {isLoading && <LoadingBoxPlaceholder className="card" />}

      {showNoResultFeedback && (
        <div>
          No match found with <strong>&quot;{searchValue}&quot;</strong>
        </div>
      )}

      {showNoPostFound && (
        <div>
          No Posts found, try to create a new Issue on this Repository and try
          again.
        </div>
      )}

      {showErrorFeedback && (
        <div>{(error as any)?.message || 'Something went wrong'}</div>
      )}
    </IssuesContainer>
  )
}
