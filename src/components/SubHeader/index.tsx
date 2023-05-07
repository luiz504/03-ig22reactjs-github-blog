import { styled } from 'styled-components'

const SubHeacerContainer = styled.div`
  margin-top: -5.5rem;
  width: 100%;
  max-width: 54rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  height: 212px;
  background: ${({ theme }) => theme['base-profile']};
  border-radius: 18px;
`

export const SubHeaderBase = () => (
  <SubHeacerContainer> SubHeader </SubHeacerContainer>
)
