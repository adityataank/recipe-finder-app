import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import Text from "../Text";
import Image from "../Image";

import ArrowIcon from "../../../assets/Icons/arrow_right.svg";
import { COLORS } from "../../../utils/constants";

interface LinkProps {
  children: React.ReactElement | string;
  href: string;
  leftArrow?: boolean;
  rightArrow?: boolean;
  color?: string;
  shouldGoBack?: boolean;
}

const RouteLink = ({
  children,
  href,
  leftArrow = false,
  rightArrow = false,
  color = COLORS["green-600"],
  shouldGoBack = false,
}: LinkProps) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (shouldGoBack) {
      e.stopPropagation();
      e.preventDefault();
      navigate(-1);
    }
  };

  return (
    <Wrapper
      to={href}
      color={color}
      leftArrow={leftArrow}
      onClick={handleClick}
    >
      {leftArrow && (
        <Image src={ArrowIcon} width="1.6rem" height="1.6rem" alt="arrow" />
      )}
      <Text
        type={{ mobile: "base", desktop: "base" }}
        styles={{ weight: 500, color }}
      >
        {children}
      </Text>
      {rightArrow && (
        <Image src={ArrowIcon} width="1.6rem" height="1.6rem" alt="arrow" />
      )}
    </Wrapper>
  );
};

const Wrapper = styled(Link)<{ color?: string; leftArrow?: boolean }>`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  position: relative;
  width: fit-content;
  &::after {
    content: "";
    position: absolute;
    bottom: -0.2rem;
    width: 0;
    height: 0.2rem;
    background-color: ${(props) => props.color};
    transition: width 150ms linear;
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }

  ${(props) =>
    props.leftArrow &&
    `
      img {
        transform: scaleX(-1);
      }
    `}
`;

export default RouteLink;
