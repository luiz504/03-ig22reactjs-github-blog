import styled from 'styled-components'
import { SubHeaderBase } from '~/components/SubHeader'

export const ContainerCardIssueResume = styled(SubHeaderBase)`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  max-width: 80rem;

  @media (max-width: 1440px) {
    max-width: 54rem;
  }
  > div {
    display: flex;
  }

  .row-1 {
    justify-content: space-between;
    margin-bottom: 1rem;
    flex-wrap: wrap;
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

      > svg {
        font-size: 0.75rem;
        margin-top: -2px;
      }
    }
  }

  > strong {
    line-height: 1.3;
    color: ${({ theme }) => theme['base-title']};
    margin-bottom: 0.5rem;
  }

  .row-2 {
    gap: 0 2rem;
    flex-wrap: wrap;
    > div,
    a,
    time {
      padding: 0.25rem 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: ${({ theme }) => theme['base-span']};
      > svg {
        color: ${({ theme }) => theme['base-label']};
        margin-top: -2px;
      }
      > span {
        line-height: 1.6;
        white-space: nowrap;
      }
    }
    div,
    time {
      cursor: default;
    }
  }

  .loading-box-placeholder.link {
    height: 1.6rem;
    width: 8rem;
  }
  .loading-box-placeholder.strong {
    height: calc(1rem * 1.3);
    margin-bottom: 0.5rem;
  }
  .loading-box-placeholder.row-2 {
    width: 100%;
    height: calc(1rem * 1.6);
  }
`
