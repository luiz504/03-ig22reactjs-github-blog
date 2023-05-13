import styled from 'styled-components'

export const ContainerSearchSection = styled.section`
  margin-top: 4.5rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  input {
    width: 100%;
    height: 3.625rem;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme['base-border']};
    background: ${({ theme }) => theme['base-input']};
    color: ${({ theme }) => theme['base-text']};

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
      line-height: 1.6;
    }
  }
`
