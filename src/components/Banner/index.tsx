import styled from "styled-components";

import Image from "../UI/Image";
import Text from "../UI/Text";
import FlexBox from "../UI/FlexBox";

import { COLORS, DEVICE } from "../../utils/constants";

import LogoIcon from '../../assets/logo.svg';

function BrandBanner() {
  return (
    <BannerWrapper>
      <FlexBox type="row" style={{ gap: "1.2rem" }}>
        <Image src={LogoIcon} width={4.4} height={3} mobile_width={3.7} mobile_height={2.5} alt="logo" />
        <FlexBox type="column" style={{ "align-items": "start" }}>
          <Text styles={{ color: "#FFF", "font-weight": "900", "line-height": "2rem" }} type="large">
            Meal Deal
          </Text>
          <Text styles={{ color: "#AAB1BB" }} type="tiny">
            Recipes for healthy life
          </Text>
        </FlexBox>
      </FlexBox>
    </BannerWrapper>
  );
}

const BannerWrapper = styled.div`
  background-color: var(--background-color, ${COLORS["primary-black"]});
  width: inherit;
  min-height: 12rem;
  border-radius: 0.8rem;
  position: fixed;
  display: grid;
  place-items: center;
  @media ${DEVICE.mobile} {
    width: initial;
    min-height: 8rem;
    display: flex;
    padding-left: 2.4rem;
    top: 0.8rem;
    left: 0.8rem;
    right: 0.8rem;
    z-index: 10000;
  }
`;

export default BrandBanner;
