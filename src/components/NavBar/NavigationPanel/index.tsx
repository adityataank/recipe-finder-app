import { Children } from "react";
import styled from "styled-components";

import NavLink from "./NavLink";

import { NAV_LINKS } from "../../../utils/nav-links";
import { COLORS, DEVICE } from "../../../utils/constants";

const NavigationPanel = () => {
  return (
    <NavigationPanelWrapper>
      <LinkBox>
        {Children.toArray(
          NAV_LINKS.map((link) => (
            <NavLink name={link.name} linkKey={link.key} />
          ))
        )}
      </LinkBox>
    </NavigationPanelWrapper>
  );
};

const NavigationPanelWrapper = styled.div`
  background-color: ${COLORS["gray-100"]};
  width: inherit;
  border-radius: 0.8rem;
  position: fixed;
  top: 13.6rem;
  @media ${DEVICE.mobile} {
    width: initial;
    height: 7.2rem;
    top: initial;
    bottom: 0.8rem;
    left: 0.8rem;
    right: 0.8rem;
    border-radius: 3.2rem;
    display: flex;
    align-items: center;
  }
`;

const LinkBox = styled.nav`
  margin: 3.2rem 2.8rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  height: calc(100dvh - 21rem);
  @media ${DEVICE.mobile} {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 3.2rem;
    height: initial;
    width: 100%;
  }
`;

export default NavigationPanel;
