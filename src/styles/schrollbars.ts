import { css } from 'styled-components'

export const scrollbarDark = css`
  scroll-behavior: smooth;
  scrollbar-width: thin;
  -webkit-overflow-scrolling: touch;
  //prettier-ignore
  scrollbar-color: ${({ theme }) => theme['base-label']} ${({ theme }) =>
    theme['base-background']} ;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme['base-background']};
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme['base-label']};
    border-radius: 4px;
  }
`
