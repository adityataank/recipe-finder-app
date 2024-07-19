import React from "react";
import styled from "styled-components";

import { LargeText, BaseText, SmallText, TinyText } from "../../../styles/text";
import { DEVICE } from "../../../utils/constants";

interface TextProps {
  children: string | React.ReactElement;
  type: {
    mobile: "large" | "base" | "small" | "tiny";
    tablet?: "large" | "base" | "small" | "tiny";
    desktop: "large" | "base" | "small" | "tiny";
  };
  styles?: { color?: string; weight?: number };
}

type StyleProps = {
  type: { [key: string]: string };
  weight?: number;
  color?: string;
};

// ----------------------------------------------------------------------

const Text = ({ children, type, styles = {} }: TextProps) => {
  const { color = "", weight = 400 } = styles;

  return (
    <TextWrapper type={type} color={color} weight={weight}>
      {children}
    </TextWrapper>
  );
};

// ----------------------------------------------------------------------

const getStyles = (type: string) =>
  type === "large"
    ? LargeText
    : type === "base"
    ? BaseText
    : type === "small"
    ? SmallText
    : TinyText;

const TextWrapper = styled.p<StyleProps>`
  ${({ type: { mobile } }) => getStyles(mobile)}

  @media ${DEVICE.tablet} {
    ${({ type: { desktop } }) => getStyles(desktop)}
  }
`;
export default Text;
