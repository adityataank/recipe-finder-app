import styled from "styled-components";
import { COLORS, DEVICE } from "../../../utils/constants";

interface ButtonProps {
  type?: "primary" | "secondary";
  text: string | number;
}

const Button = (props: ButtonProps) => {
  const { type = "primary", text = "" } = props;

  const isSecondaryButton = type === "secondary";

  return (
    <Wrapper isSecondaryButton={isSecondaryButton}>
      {text}
    </Wrapper>
  );
};

const Wrapper = styled.button<{ isSecondaryButton: boolean }>`
  background: ${COLORS["green-500"]};
  border: none;
  border-radius: 0.8rem;
  display: grid;
  place-items: center;
  padding: 0.8rem 2rem;
  color: ${COLORS["white"]};
  font-weight: 560;
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: 0;
  transition: background 150ms linear;
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
        }
      `}
`;

export default Button;
