import styled from "styled-components";

interface TextProps {
  children: string;
  styles: { [key: string]: string | number };
  type: string;
}

const Text = ({ children, styles, type = "base" }: TextProps) => {
  const stylesObject: { [key: string]: { [key: string]: string | number } } = {
    large: {
      "font-size": "2rem",
      "line-height": "2.8rem",
    },
    base: {
      "font-size": "1.8rem",
      "line-height": "2.4rem",
    },
    small: {
      "font-size": "1.6rem",
      "line-height": "2.4rem",
    },
    tiny: {
      "font-size": "1.4rem",
      "line-height": "2rem",
    },
  };
  return <P style={{ ...stylesObject[type], ...styles }}>{children}</P>;
};

const P = styled.p`
  font-size: var(--font-size);
  line-height: var(--line-height);
  font-weight: var(--font-weight, 400);
`;

export default Text;
