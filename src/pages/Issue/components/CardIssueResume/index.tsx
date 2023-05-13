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

export const CardIssueResume = () => (
  <ContainerCardIssueResume>
    <div className="row-1">
      <Link to="/">
        <FontAwesomeIcon icon={faChevronLeft} />
        GO BACK
      </Link>

      <a href="https://github.com/">
        SEE ON GITHUB
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </a>
    </div>

    <strong> Title loren ipnsum </strong>

    <div className="row-2">
      <a href="https://github.com/">
        <FontAwesomeIcon icon={faGithub} />
        <span>luiz504</span>
      </a>

      <div>
        <FontAwesomeIcon icon={faCalendar} /> <span>1 day ago</span>
      </div>

      <a href="https://github.com/">
        <FontAwesomeIcon icon={faComment} /> <span>5 comments</span>
      </a>
    </div>
  </ContainerCardIssueResume>
)
