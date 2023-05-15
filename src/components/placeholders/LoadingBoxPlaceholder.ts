import { styled } from 'styled-components'

export const LoadingBoxPlaceholder = styled.div.attrs((props) => ({
  className: `loading-box-placeholder ${
    props.className ? ` ${props.className}` : ''
  }`,
}))`
  @keyframes placeHolderShimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: rgba(255, 255, 255, 1);
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.1) 8%,
    rgba(255, 255, 255, 0.2) 18%,
    rgba(255, 255, 255, 0.1) 33%
  );
  background-size: 1000px 104px;
  position: relative;
  overflow: hidden;
  border-radius: 2px;
`
