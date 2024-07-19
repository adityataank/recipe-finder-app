import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Image from "../UI/Image";
import Text from "../UI/Text";
import FlexBox from "../UI/FlexBox";

import { COLORS, DEVICE } from "../../utils/constants";

import LogoIcon from "../../assets/logo.svg";
import { useLocation } from "react-router-dom";

function BrandBanner() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const pageName: string = pathname.split("/")[1];

  return (
    <Wrapper page={pageName} onClick={() => navigate("/")}>
      <BannerWrapper>
        <FlexBox gap="1.2rem" justify="center" align="center">
          <Image src={LogoIcon} width="4rem" height="4rem" alt="logo" />
          <FlexBox type="column" align="start" justify="center">
            <Text
              type={{ mobile: "large", desktop: "large" }}
              styles={{
                color: COLORS["white"],
                weight: 900,
              }}
            >
              Meal Deal
            </Text>
            <Text
              styles={{ color: COLORS["gray-300"] }}
              type={{ mobile: "tiny", desktop: "tiny" }}
            >
              Recipes for healthy life
            </Text>
          </FlexBox>
        </FlexBox>
      </BannerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ page?: string }>`
  height: 8.8rem;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.8rem;
  padding-bottom: 0;
  cursor: pointer;
  display: ${(props) => (!props.page ? "block" : "none")};
  @media ${DEVICE.tablet} {
    display: block;
    width: 26.8rem;
    height: 12.8rem;
    padding: 0.8rem 0 0 0.8rem;
    img {
      width: 4.8rem;
      height: 4.8rem;
    }
  }
`;

const BannerWrapper = styled.div`
  height: 8rem;
  padding-left: 2.4rem;
  background-color: var(--background-color, ${COLORS["primary-black"]});
  border-radius: 0.8rem;
  @media ${DEVICE.tablet} {
    width: 100%;
    height: 100%;
    img {
      width: 4.8rem;
      height: 4.8rem;
    }
  }
`;

export default BrandBanner;
