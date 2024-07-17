import styled from "styled-components";

interface FlexBoxProps {
  children: React.ReactNode;
  type?: "row" | "column";
  gap?: string;
  justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
  align?: "strech" | "start" | "center" | "end" | "baseline";
  width?: "auto" | "100%";
  height?: "auto" | "100%";
}

type FlexWrapperProps = {
  flexDirection: string;
  gap: string;
  justifyContent: string;
  alignItems: string;
  width: string;
  height: string;
};

const FlexPropsMapping: { [key: string]: string } = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
  baseline: "baseline",
  strech: "strech",
};

// .........................................................................

function FlexBox({
  children,
  type = "row",
  gap = "0",
  justify = "start",
  align = "start",
  width = "100%",
  height = "100%",
}: FlexBoxProps) {
  const justifyContent = FlexPropsMapping[justify];
  const alignItems = FlexPropsMapping[align];
  return (
    <Wrapper
      flexDirection={type}
      gap={gap}
      justifyContent={justifyContent}
      alignItems={alignItems}
      width={width}
      height={height}
    >
      {children}
    </Wrapper>
  );
}

// .........................................................................

const Wrapper = styled.div<FlexWrapperProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  gap: ${(props) => props.gap};
  position: relative;
`;

export default FlexBox;
