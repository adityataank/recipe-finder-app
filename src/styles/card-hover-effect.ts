import { css } from "styled-components";

import { COLORS } from "../utils/constants";

export const CardHoverEffect = css`
  transition: background 150ms linear;
  &:hover {
    border-color: ${COLORS["gray-200"]};
    background: ${COLORS["gray-50"]};
  }
`;
