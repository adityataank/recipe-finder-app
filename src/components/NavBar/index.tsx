import styled from "styled-components";

import BrandBanner from "../Banner";
import NavigationPanel from "./NavigationPanel";

import { DEVICE } from "../../utils/constants";

function NavBar() {
  return (
    <NavBarWrapper>
      <BrandBanner />
      <NavigationPanel />
    </NavBarWrapper>
  );
}

const NavBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.8rem;
  width: 100%;
  @media ${DEVICE.tablet} {
    width: 26rem;
    height: calc(100dvh - 1.6rem);
    position: fixed;
    top: 0.8rem;
    left: 0.8rem;
  }
`;

export default NavBar;
