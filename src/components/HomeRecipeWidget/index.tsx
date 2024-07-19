import styled from "styled-components";

import Button from "../UI/Button";
import FlexBox from "../UI/FlexBox";
import Headline from "../UI/Headline";

import {
  DEVICE,
  HOME_RECIPE_WIDGET_BACKGROUND_IMAGE,
} from "../../utils/constants";
import Image from "../UI/Image";
import { useNavigate } from "react-router-dom";

const TEMP_IMAGE =
  "https://s3-alpha-sig.figma.com/img/8f76/ce19/777b8ffd0e6987f13822a8a3600f922b?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BaP-8ATAc1MrskMmbRjWztnhUw~1inUlJ3FPviRtNfCe-VbHBmHLNyCDxq4DRMUzazABWV0hlh30l3esG6OzVLR5GXYEid5mt2P5nilTNI8CwCas~O8NyB8wD~FcpwIiVSWDE3~EPckUmi5Nc~MRNmFa80ylsDbJsvXxttkUseTA~ZYv0qxl4D4wimo6WflIGBGdfP4Eb8t1GfaPu7q0RUsWrZ~zuQvaQey3YsdFgiJjHNg-Hjg92KqMqrr4C5qLWAoWVzewkwz63ovmZJyJfsrJFi89mvj1jIMS37QHd9KrGipbBic6-xAiGLI0VMR8ntxpsG5Vpvac1kdCztBNSg__";

const HomeRecipeWidget = () => {
  const navigate = useNavigate();

  const handleViewRecipe = () => {
    // having temporary route for now
    const tempRoute = "/recipes/category/Vegetarian/detail/53073";
    navigate(tempRoute);
  };

  return (
    <Wrapper>
      <SubWrapper>
        <Content>
          <FlexBox type="column" align="start" justify="between">
            <Headline
              type={{ mobile: "h3", desktop: "h1" }}
              styles={{ weight: 700 }}
            >
              Poached eggs with <br />
              broccoli and avocado
            </Headline>
            <Button type="primary" handleClick={handleViewRecipe}>
              View Recipe
            </Button>
          </FlexBox>
        </Content>
      </SubWrapper>
      <ImageWrapper>
        <Image src={TEMP_IMAGE} width="12.6rem" height="10.9rem" alt="dish" />
      </ImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 17.6rem;
  @media ${DEVICE.tablet} {
    height: 25.6rem;
  }
`;

const SubWrapper = styled.div`
  border-radius: 1.2rem;
  padding: 2.4rem;
  position: relative;
  height: 100%;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${HOME_RECIPE_WIDGET_BACKGROUND_IMAGE}) no-repeat center
      center;
    background-size: cover;
    transform: rotate(-180deg) scale(2);
    transform-origin: center;
    background-color: #f9fbfeb2;
    background-blend-mode: color-burn;
  }
  @media ${DEVICE.tablet} {
    padding: 4rem;
  }
`;

const Content = styled.div`
  z-index: 1;
  position: relative;
  height: 100%;
  @media ${DEVICE.tablet} {
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 9.6rem;
  right: 2.8rem;
  img {
    filter: drop-shadow(-7px 0px 8px #00000030);
    transform: scale(1.1);
  }
  @media ${DEVICE.tablet} {
    top: 16.6rem;
  }
  @media (min-width: 710px) {
  right: 7rem;
    img {
      transform: scale(1.8);
    }
  }
  @media (min-width: 890px) {
    top: 1.5rem;
    right: 3.3rem;
    img {
      width: 34.8rem;
      height: 30.2rem;
      transform: scale(1.1);
    }
  }
`;

export default HomeRecipeWidget;
