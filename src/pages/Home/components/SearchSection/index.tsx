import React from 'react'
import { useIssuesContext } from '~/contexts/issues/useIssuesContext'
import { ContainerSearchSection } from './styles'

export const SearchSection = () => {
  const {
    total_count: totalCount,
    onChangeSearchValue,
    searchValue,
  } = useIssuesContext()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const input = (event.target as HTMLFormElement)[
      'search-field'
    ] as HTMLInputElement

    onChangeSearchValue(input.value)
  }

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

      <form onSubmit={handleSubmit}>
        <input
          name="search-field"
          type="text"
          placeholder="Search content"
          defaultValue={searchValue}
        />
      </form>
    </ContainerSearchSection>
  )
}
