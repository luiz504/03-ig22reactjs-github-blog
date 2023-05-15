import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

import { useUserContext } from '~/contexts/user/useUserContext'

import { CardProfileContainer, InfoSection } from './styles'
import { LoadingBoxPlaceholder } from '~/components/placeholders/LoadingBoxPlaceholder'

export const CardProfile = () => {
  const { userData, isLoading, isSuccess } = useUserContext()

  const showRealContent = !isLoading && isSuccess

  return (
    <CardProfileContainer>
      <div className="placeholder-thumb">
        {showRealContent ? (
          <img src={userData?.avatar_url} alt="" />
        ) : (
          <LoadingBoxPlaceholder className="img" />
        )}
      </div>
      <InfoSection>
        <div className="row-title-redirect">
          {showRealContent ? (
            <>
              <strong>{userData?.name}</strong>

              <a
                href="https://github.com/luiz504"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </>
          ) : (
            <LoadingBoxPlaceholder className="row-title" />
          )}
        </div>

        {showRealContent ? (
          <p>{userData?.bio}</p>
        ) : (
          <LoadingBoxPlaceholder className="p" />
        )}

        <ol className="row-more-info">
          {showRealContent ? (
            <>
              {' '}
              <li>
                <FontAwesomeIcon icon={faGithub} />{' '}
                <span>{userData?.login}</span>
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
            </>
          ) : (
            <LoadingBoxPlaceholder className="li" />
          )}
        </ol>
      </InfoSection>
    </CardProfileContainer>
  )
}
