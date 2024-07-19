import { keyframes, styled } from "styled-components";
import { LargeText, BaseText } from "../../../styles/text";
import { COLORS, DEVICE } from "../../../utils/constants";

const LOADER_NAME = "Cooking up something tasty...";

const Loader = () => {
  return (
    <Overlay>
      <LoaderWrapper />
    </Overlay>
  );
};

const Overlay = styled.section`
  width: 100%;
  height: 100dvh;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  cursor: progress;
`;

const loadingAnimation = keyframes`
  to {
    background-size: 100% 0.2rem;
  }
`;

const LoaderWrapper = styled.div`
  width: fit-content;
  padding-bottom: 0.8rem;
  background: linear-gradient(currentColor 0 0) 0 100%/0% 0.2rem no-repeat;
  animation: ${loadingAnimation} 1.3s ease infinite;

  &:before {
    content: "${LOADER_NAME}";
    ${BaseText}
    font-weight: 600;
    color: ${COLORS["gray-800"]};
    @media ${DEVICE.tablet} {
      ${LargeText}
      font-weight: 600;
    }
  }
`;

export default Loader;
