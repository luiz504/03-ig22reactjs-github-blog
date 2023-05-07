import * as styled from 'styled-components'
import { scrollbarDark } from './schrollbars'

export const GlobalStyles = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme['base-background']};
    color: ${({ theme }) => theme['base-text']};
    -webkit-font-smoothing: antialiased;
    ${scrollbarDark}
  }

  body,
  input,
  textarea,
  button {
    font: 400 1rem 'Nunito', sans-serif;
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.blue};
    transition: box-shadow 150ms;
  }
`
