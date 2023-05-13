import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HomeContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;

  @media (max-width: 1440px) {
    max-width: 54rem;
  }
`

export const IssuesList = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 1440px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const IssueCard = styled(Link)`
  text-decoration: none;
  padding: 2rem;
  border-radius: 18px;
  background: ${({ theme }) => theme['base-post']};
  border: 2px solid transparent;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  &:hover {
    border-color: ${({ theme }) => theme['base-label']};
    transition: border-color 150ms;
  }

  > header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    strong {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      line-height: 1.6;
      font-size: 1.25rem;
      color: ${({ theme }) => theme['base-title']};
    }
    time {
      font-size: 0.875rem;
      white-space: nowrap;
      line-height: 2.3;
      color: ${({ theme }) => theme['base-span']};
    }
  }

  > p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.6;
    color: ${({ theme }) => theme['base-text']};
  }
`
