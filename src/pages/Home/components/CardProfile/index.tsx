import { CardProfileContainer, InfoSection } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

export const CardProfile = () => (
  <CardProfileContainer>
    <div className="placeholder-thumb">
      <img src={'https://github.com/luiz504.png'} alt="" />
    </div>
    <InfoSection>
      <div className="row-title-redirect">
        <strong> John Doe</strong>

        <a href="https://github.com/luiz504" target="_blank" rel="noreferrer">
          GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia natus
        minima impedit magnam cupiditate deserunt laboriosam? Doloribus
        assumenda repellat tenetur rem reiciendis, quidem aut architecto
        quisquam natus animi eveniet vitae.
      </p>

      <ol className="row-more-info">
        <li>
          <FontAwesomeIcon icon={faGithub} /> <span>ShortName</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faBuilding} /> <span>CompName</span>
        </li>
        <li>
          <a
            href="https://github.com/luiz504?tab=followers"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faUserGroup} /> <span>followers</span>
          </a>
        </li>
      </ol>
    </InfoSection>
  </CardProfileContainer>
)
