import { css } from "styled-components";
import { COLORS, DEVICE } from "../utils/constants";
import { CardHoverEffect } from "./card-hover-effect";

export const MealCardWrapperStyles = css`
  width: 100%;
  height: 12rem;
  border-radius: 0.8rem;
  border: 0.1rem solid ${COLORS["gray-100"]};
  background: ${COLORS.white};
  display: flex;
  overflow: hidden;
  cursor: pointer;
  div {
    height: auto;
  }
  ${CardHoverEffect}
  @media ${DEVICE.tablet} {
    height: 14rem;
  }
`;

export const ImageWrapperStyles = css`
  width: 12rem;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  outline: 1px solid ${COLORS["gray-100"]};
  img {
    width: 100%;
    height: 100%;
    disaply: none;
  }
  @media ${DEVICE.tablet} {
    width: 14rem;
  }

  @media (max-width: 365px) {
    // display: none;
  }
`;

export const DetailsWrapperStyles = css`
  width: 100%;
  padding: 1.6rem;
  padding-top: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${DEVICE.tablet} {
    padding: 2rem;
    padding-top: 1.6rem;
  }
`;
