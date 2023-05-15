import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const IssuesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 1440px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .loading-box-placeholder {
    height: 16rem;
    border-radius: 18px;
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
      -webkit-line-clamp: 2;
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
`

export const IssueCardBody = styled.div`
  display: flex;
  flex-direction: column;
  max-height: calc(3rem * 1.6 * 2);
  overflow: hidden;
  flex: 1;
  color: ${({ theme }) => theme['base-text']};
  margin-top: auto;

  .content {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.6;

    color: ${({ theme }) => theme['base-text']};

    > ul,
    ol {
      display: flex;
      flex-direction: column;
      padding: 0 2rem;
    }

    .span-a {
      color: ${({ theme }) => theme.blue};
    }

    i {
      color: ${({ theme }) => theme['base-text']};
    }
    pre,
    code,
    .span-img {
      background: ${({ theme }) => theme['base-background']};
      color: ${({ theme }) => theme['base-subtitle']};
      padding: 0.25rem;
      border-radius: 4px;
    }
  }
`
