import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Text from "../Text";
import Image from "../Image";

import ArrowIcon from "../../../assets/Icons/arrow_right.svg";
import { COLORS } from "../../../utils/constants";

interface LinkProps {
  children: React.ReactElement | string;
  href: string;
  leftArrow?: boolean;
  rightArrow?: boolean;
}

const RouteLink = ({
  children,
  href,
  leftArrow = false,
  rightArrow = false,
}: LinkProps) => {
  return (
    <Wrapper to={href}>
      {leftArrow && (
        <Image src={ArrowIcon} width={1.6} height={1.6} alt="arrow" />
      )}
      <Text
        type={{ mobile: "base", desktop: "base" }}
        styles={{ weight: 500, color: COLORS["green-600"] }}
      >
        {children}
      </Text>
      {rightArrow && (
        <Image src={ArrowIcon} width={1.6} height={1.6} alt="arrow" />
      )}
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: -0.2rem;
    width: 0;
    height: 0.2rem;
    background-color: ${COLORS["green-600"]};
    transition: width 150ms linear;
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

export default RouteLink;
