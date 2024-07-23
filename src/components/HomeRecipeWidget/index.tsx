import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Button from "../UI/Button";
import FlexBox from "../UI/FlexBox";
import Headline from "../UI/Headline";
import Image from "../UI/Image";

import { DEVICE } from "../../utils/constants";

import BackgroundImage from "../../assets/home-widget-bg.webp";
import DishImage from "../../assets/home-widget-dish.webp";

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
        <Image src={DishImage} width="12.6rem" height="10.9rem" alt="dish" />
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
    background: url(${BackgroundImage}) no-repeat center center;
    background-size: cover;
    transform-origin: center;
    background-color: #f9fbfeb2;
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
