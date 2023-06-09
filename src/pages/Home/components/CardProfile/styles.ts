import styled from 'styled-components'
import { SubHeaderBase } from '~/components/SubHeader'

export const CardProfileContainer = styled(SubHeaderBase)`
  padding: 2rem 2rem 2rem 2.5rem;

  gap: 2rem;
  display: flex;
  max-width: 80rem;
  @media (max-width: 1440px) {
    max-width: 54rem;
  }
  .placeholder-thumb {
    border-radius: 8px;
    width: 148px;
    min-width: 148px;
    height: 148px;
    overflow: hidden;
    background-color: ${({ theme }) => theme['base-background']};

    img {
      height: 100%;
      max-width: 100%;
    }
    .loading-box-placeholder.img {
      height: 100%;
    }
  }
`

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  .row-title-redirect {
    display: flex;
    justify-content: space-between;

    > strong {
      font-size: 1.5rem;
      line-height: 1.3;
      color: ${({ theme }) => theme['base-title']};
      margin-bottom: 0.5rem;
    }

    > a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.25rem;

      font-size: 0.75rem;
      color: ${({ theme }) => theme.blue};
      font-weight: 700;
      line-height: 1.6;
      height: fit-content;

      text-decoration: none;
    }

    .loading-box-placeholder.row-title {
      height: calc(1.5rem * 1.3);
      width: 100%;
      margin-bottom: 0.5rem;
    }
  }

  > p {
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }
  .loading-box-placeholder.p {
    height: calc(1rem * 1.6 * 3);
  }

  .row-more-info {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: auto;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        font-size: 1.125rem;
        color: ${({ theme }) => theme['base-label']};
      }

      span {
        color: ${({ theme }) => theme['base-subtitle']};
        cursor: default;
      }

      > a {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        > span {
          cursor: inherit;
        }
        &:focus {
          box-shadow: none;
          outline: 2px solid ${({ theme }) => theme.blue};
          outline-offset: 5px;
        }
      }
    }

    .loading-box-placeholder.li {
      height: 1.375rem;
      width: 100%;
    }
  }
`
