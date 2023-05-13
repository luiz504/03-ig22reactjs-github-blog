import { styled } from 'styled-components'

import { ReactComponent as Logo } from '~/assets/logo.svg'
import cover from '~/assets/Cover.svg'

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding: 4rem 1rem 8.375rem 1rem;

  background-image: url(${cover});
  background-repeat: no-repeat;
  background-size: cover;

  > h1 {
    font: 400 1.5rem 'Coda', sans-serif;
    color: ${({ theme }) => theme.blue};
  }
`

export const Header = () => (
  <HeaderContainer>
    <Logo />
    <h1>GITHUB BLOG</h1>
  </HeaderContainer>
)
