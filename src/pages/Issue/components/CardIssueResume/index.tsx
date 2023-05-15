import { ContainerCardIssueResume } from './styles'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import type { IssueType } from '../..'
import { LoadingBoxPlaceholder } from '~/components/placeholders/LoadingBoxPlaceholder'
import { format, formatDistanceToNowStrict } from 'date-fns'
import { ownerName, repoName } from '~/common'

interface CardIssueResumeProps {
  issueData?: IssueType
  isLoading: boolean
  isSuccess: boolean
}
export const CardIssueResume = ({
  issueData,
  isLoading,
  isSuccess,
}: CardIssueResumeProps) => {
  const showRealContent = !isLoading && isSuccess && issueData
  return (
    <ContainerCardIssueResume>
      <div className="row-1">
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>GO BACK</span>
        </Link>

        {showRealContent ? (
          <a
            href={`https://github.com/${ownerName}/${repoName}/issues/${issueData.number}`}
            target="_blank"
            rel="noreferrer"
          >
            <span>SEE ON GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        ) : (
          <LoadingBoxPlaceholder className="link" />
        )}
      </div>
      {showRealContent ? (
        <strong> {issueData.title} </strong>
      ) : (
        <LoadingBoxPlaceholder className="strong" />
      )}

      {showRealContent ? (
        <div className="row-2">
          <a
            href={`https://github.com/${issueData.user.login}`}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
            <span>{issueData.user.login}</span>
          </a>

          <time
            title={format(
              new Date(issueData.created_at),
              "LLL dd yyyy 'at' HH:mm",
            )}
          >
            <FontAwesomeIcon icon={faCalendar} />{' '}
            <span>
              {formatDistanceToNowStrict(new Date(issueData.created_at), {
                addSuffix: true,
              })}
            </span>
          </time>

          <div>
            <FontAwesomeIcon icon={faComment} />{' '}
            <span>
              {issueData.comments} comment{issueData.comments === 1 ? '' : 's'}
            </span>
          </div>
        </div>
      ) : (
        <LoadingBoxPlaceholder className="row-2" />
      )}
    </ContainerCardIssueResume>
  )
}
