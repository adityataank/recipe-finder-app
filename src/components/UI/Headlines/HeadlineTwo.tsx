import styled from "styled-components";

interface TextProps {
  children: string;
  styles: { [key: string]: string | number };
}

function HeadlineTwo({ children, styles }: TextProps) {
  return <H2 style={styles}>{children}</H2>;
}

const H2 = styled.h2`
  font-size: var(--font-size, 2.8rem);
  line-height: var(--line-height, 3.6rem);
  font-weight: var(--font-weight, bold);
`;

export default HeadlineTwo;
