import React from "react";
import styled from "styled-components";

import { H1, H2, H3 } from "../../../styles/headline";
import { DEVICE } from "../../../utils/constants";

interface HeadlineProps {
  children: string | React.ReactNode;
  type: {
    mobile: "h1" | "h2" | "h3";
    tablet?: "h1" | "h2" | "h3";
    desktop: "h1" | "h2" | "h3";
  };
  styles?: { color?: string; weight?: number };
}

type StyleProps = {
  type: { [key: string]: string };
  weight?: number;
  color?: string;
};

// ----------------------------------------------------------------------------------

const Headline = ({ children, type, styles = {} }: HeadlineProps) => {
  const { color = "", weight = 400 } = styles;

  return (
    <HeadlineWrapper type={type} color={color} weight={weight}>
      {children}
    </HeadlineWrapper>
  );
};

// ----------------------------------------------------------------------------------

const getStyles = (type: string) =>
  type === "h1" ? H1 : type === "h2" ? H2 : H3;

const HeadlineWrapper = styled.h1<StyleProps>`
  ${({ type: { mobile } }) => getStyles(mobile)}

  @media ${DEVICE.tablet} {
    ${({ type: { desktop } }) => getStyles(desktop)}
  }
`;
export default Headline;
