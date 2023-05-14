import { useIssuesContext } from '~/contexts/issues/useIssuesContext'
import { ContainerSearchSection } from './styles'

export const SearchSection = () => {
  const { total_count: totalCount } = useIssuesContext()
  return (
    <ContainerSearchSection>
      <div>
        <strong>Posts</strong>

        {totalCount !== undefined && (
          <span>
            {totalCount > 0 ? `${totalCount} posts` : `${totalCount} post`}
          </span>
        )}
      </div>

      <form>
        <input placeholder="Search content" />
      </form>
    </ContainerSearchSection>
  )
}
