import styled from "styled-components";

import Image from "../UI/Image";
import Text from "../UI/Text";
import FlexBox from "../UI/FlexBox";

import { COLORS, DEVICE } from "../../utils/constants";

import LogoIcon from "../../assets/logo.svg";

function BrandBanner() {
  return (
    <BannerWrapper>
      <FlexBox type="row" style={{ gap: "1.2rem" }}>
        <Image src={LogoIcon} width={4} height={4} alt="logo" />
        <FlexBox type="column" style={{ "align-items": "start" }}>
          <Text
            styles={{
              "--color": COLORS["white"],
              "font-weight": "900",
              "line-height": "2rem",
            }}
            type="large"
          >
            Meal Deal
          </Text>
          <Text styles={{ color: COLORS["gray-300"] }} type="tiny">
            Recipes for healthy life
          </Text>
        </FlexBox>
      </FlexBox>
    </BannerWrapper>
  );
}

const BannerWrapper = styled.div`
  height: 8rem;
  display: flex;
  padding-left: 2.4rem;
  top: 0.8rem;
  left: 0.8rem;
  right: 0.8rem;
  z-index: 10000;
  position: fixed;
  background-color: var(--background-color, ${COLORS["primary-black"]});
  border-radius: 0.8rem;
  @media ${DEVICE.tablet} {
    width: inherit;
    height: 12rem;
    display: grid;
    place-items: center;
    padding: 0;
    img {
      width: 4.8rem;
      height: 4.8rem;
    }
  }
`;

export default BrandBanner;
