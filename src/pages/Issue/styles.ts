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
  line-height: 1.6;

  a {
    color: ${({ theme }) => theme.blue};
    text-decoration: none;
  }
  ul,
  ol {
    padding: 0.5rem 1rem;
    line-height: 1.6;
  }
  div {
    ${scrollbarDark}
  }

  p,
  blockquote,
  ul,
  ol,
  dl,
  table,
  pre,
  details {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
    line-height: 1.25;
  }
`
