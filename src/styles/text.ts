import { css } from "styled-components";
import { COLORS } from "../utils/constants";

interface TextProps {
  weight?: number;
  color?: string;
}

const CommonStyles = css<TextProps>`
  color: ${(props) => props.color || COLORS["primary-black"]};
  font-weight: ${(props) => props.weight || 400};
  text-align: center;
`;

export const LargeText = css<TextProps>`
  ${CommonStyles}
  font-size: 2rem;
  line-height: 2.8rem;
  letter-spacing: -0.01em;
`;

export const BaseText = css<TextProps>`
  ${CommonStyles}
  font-size: 1.8rem;
  line-height: 2.4rem;
  letter-spacing: -0.01em;
`;

export const SmallText = css<TextProps>`
  ${CommonStyles}
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: 0;
`;

export const TinyText = css<TextProps>`
  ${CommonStyles}
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: 0;
`;
