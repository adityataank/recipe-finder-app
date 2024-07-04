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
  width: 26rem;
  height: calc(100dvh - 1.6rem);
  position: fixed;
  left: 0.8rem;
  @media ${DEVICE.mobile} {
    width: 100%;
  }
`;

export default NavBar;
