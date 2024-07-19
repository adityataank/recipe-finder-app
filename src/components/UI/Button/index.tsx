import styled from "styled-components";

import { COLORS, DEVICE } from "../../../utils/constants";

interface ButtonProps {
  type?: "primary" | "secondary";
  children: string | number;
  RightIcon?: React.ReactElement;
  handleClick: () => void;
}

const Button = (props: ButtonProps) => {
  const { type = "primary", children = "", RightIcon, handleClick } = props;

  const isSecondaryButton = type === "secondary";

  return (
    <Wrapper isSecondaryButton={isSecondaryButton} onClick={handleClick}>
      {children}
      {RightIcon}
    </Wrapper>
  );
};

const Wrapper = styled.button<{ isSecondaryButton: boolean }>`
  background: ${COLORS["green-500"]};
  border: none;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 0.8rem 2rem;
  color: ${COLORS["white"]};
  font-weight: 560;
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: 0;
  transition: background 150ms linear;
  white-space: nowrap;
  &:hover {
    background: ${COLORS["green-600"]};
  }
  @media ${DEVICE.tablet} {
    padding: 1.2rem 2.4rem;
    font-size: 1.8rem;
    letter-spacing: -0.01em;
  }
  ${(props) =>
    props.isSecondaryButton &&
    ` 
        outline: 0.1rem solid ${COLORS["green-500"]};
        background: ${COLORS.white};
        color: ${COLORS["green-600"]};
        &:hover {
          background: ${COLORS["green-500"]};
          color: ${COLORS.white};
          border: none;
          svg {
            path {
              fill: ${COLORS.white}
            }
          }
        }
      `}
`;

export default Button;
