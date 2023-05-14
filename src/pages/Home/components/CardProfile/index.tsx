import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

import { useUserContext } from '~/contexts/user/useUserContext'

import { CardProfileContainer, InfoSection } from './styles'

export const CardProfile = () => {
  const { userData } = useUserContext()

  return (
    <CardProfileContainer>
      <div className="placeholder-thumb">
        <img src={userData?.avatar_url} alt="" />
      </div>
      <InfoSection>
        <div className="row-title-redirect">
          <strong>{userData?.name}</strong>

          <a href="https://github.com/luiz504" target="_blank" rel="noreferrer">
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>

        <p>{userData?.bio}</p>

        <ol className="row-more-info">
          <li>
            <FontAwesomeIcon icon={faGithub} /> <span>{userData?.login}</span>
          </li>

          {userData?.company && (
            <li>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{userData?.company}</span>
            </li>
          )}

          <li>
            <a
              href={`https://github.com/${userData?.login}?tab=followers`}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faUserGroup} />
              <span> {userData?.followers} followers</span>
            </a>
          </li>
        </ol>
      </InfoSection>
    </CardProfileContainer>
  )
}
