import { css, keyframes } from "styled-components";

const shimmer = keyframes`
to {
    background-position: -100% 0;
  }
`;

export const SkeletonShimmer = css<{ height?: string }>`
  background-image: linear-gradient(
    90deg,
    #ccc 0px,
    rgb(229 229 229 / 90%) 40px,
    #ccc 80px
  );
  background-size: 300%;
  background-position: 100% 0;
  animation: ${shimmer} 1.5s infinite;
  width: 100%;
  border-radius: 0.4rem;
  height: ${(props) => props.height ?? "auto"};
`;
