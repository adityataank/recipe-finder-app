import styled from "styled-components";
import ErrorImage from "../assets/error.png";
import Image from "../components/UI/Image";
import { BaseText, LargeText } from "../styles/text";
import { DEVICE } from "../utils/constants";
import RouteLink from "../components/UI/RouteLink";

const ErrorPage = () => {
  return (
    <PageWrapper>
      <ImageWrapper>
        <Image src={ErrorImage} width="100%" height="auto" alt="error" />
      </ImageWrapper>
      <Text>
        We couldn’t find the page you’re looking for, or it’s currently in
        development.
        <br /> Stay tuned for exciting updates!
      </Text>
      <RouteLink href="/" rightArrow>
        Continue looking for recipes
      </RouteLink>
    </PageWrapper>
  );
};

const PageWrapper = styled.section`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: flex-start;
  align-items: center;
  padding-top: 10rem;
  height: fit-content;
`;

const ImageWrapper = styled.div`
  width: 30rem;
  height: 20.36rem;
`;

const Text = styled.div`
  ${BaseText}
  text-align: center;
  font-weight: 500 !important;
  @media ${DEVICE.tablet} {
    ${LargeText}
  }
`;

export default ErrorPage;
