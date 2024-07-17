import { css } from "styled-components";
import { COLORS } from "../utils/constants";

interface HeadlineProps {
  weight?: number;
  color?: string;
}

const CommonStyles = css<HeadlineProps>`
  font-weight: ${(props) => props.weight};
  letter-spacing: -0.01em;
  color: ${(props) => props.color || COLORS["primary-black"]};
`;

export const H1 = css<HeadlineProps>`
  ${CommonStyles}
  font-size: 4rem;
  line-height: 5.2rem;
`;

export const H2 = css<HeadlineProps>`
  ${CommonStyles}
  font-size: 2.8rem;
  line-height: 3.6rem;
`;

export const H3 = css<HeadlineProps>`
  ${CommonStyles}
  font-size: 2.4rem;
  line-height: 3.2rem;
`;
