import styled from "styled-components";

interface FlexBoxProps {
  children: React.ReactNode;
  type?: string;
  style?: { [key: string]: string | number };
}

function FlexBox({ children, type = "row", style }: FlexBoxProps) {
  return (
    <Wrapper flexDirection={type} style={style}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ flexDirection: string }>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: var(--align-items, center);
  justify-content: var(--justify-content, center);
`;

export default FlexBox;
