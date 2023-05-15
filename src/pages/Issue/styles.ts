import styled from 'styled-components'
import { scrollbarDark } from '~/styles/schrollbars'

export const ContainerIssue = styled.div`
  max-width: 80rem;
  margin: 0 auto;

  @media (max-width: 1440px) {
    max-width: 54rem;
  }
`

export const IssueBody = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem;

  color: ${({ theme }) => theme['base-text']};

  a {
    color: ${({ theme }) => theme.blue};
  }
  ul,
  ol {
    padding: 0.5rem 1rem;
    line-height: 1.6;
  }
  div {
    ${scrollbarDark}
  }
`
