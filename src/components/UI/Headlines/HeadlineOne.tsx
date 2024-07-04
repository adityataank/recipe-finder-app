import styled from "styled-components";

interface TextProps {
  children: string;
  styles?: { [key: string]: string | number };
}

function HeadlineOne({ children, styles }: TextProps) {
  return <H1 style={styles}>{children}</H1>;
}

const H1 = styled.h1`
  font-size: var(--font-size, 4rem);
  line-height: var(--line-height, 5.2rem);
  font-weight: var(--font-weight, bold);
  letter-spacing: 0.14rem;
  width: fit-content;
`;

export default HeadlineOne;
