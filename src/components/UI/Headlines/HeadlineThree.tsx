import styled from "styled-components";

interface TextProps {
  children: string;
  styles: { [key: string]: string | number };
}

function HeadlineThree({ children, styles }: TextProps) {
  return <H3 style={styles}>{children}</H3>;
}

const H3 = styled.h3`
  font-size: var(--font-size, 2.4rem);
  line-height: var(--line-height, 3.2rem);
  font-weight: var(--font-weight, bold);
`;

export default HeadlineThree;
