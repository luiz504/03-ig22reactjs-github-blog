import styled from 'styled-components'
import { SubHeaderBase } from '~/components/SubHeader'

export const ContainerCardIssueResume = styled(SubHeaderBase)`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  > div {
    display: flex;
  }

  .row-1 {
    justify-content: space-between;
    margin-bottom: 1rem;
    > a {
      display: flex;
      align-items: center;
      padding: 0.25rem;
      gap: 0.5rem;
      border-radius: 2px;

      color: ${({ theme }) => theme.blue};
      font-size: 0.75rem;
      line-height: 1.6;
      font-weight: bold;
      text-decoration: none;
      outline: 2px solid transparent;
    }
  }

  > strong {
    line-height: 1.3;
    color: ${({ theme }) => theme['base-title']};
    margin-bottom: 0.5rem;
  }

  .row-2 {
    gap: 2rem;
    > div,
    a {
      padding: 0.25rem 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: ${({ theme }) => theme['base-span']};
      > svg {
        color: ${({ theme }) => theme['base-label']};
      }
      > span {
        line-height: 1.6;
      }
    }
  }
`
