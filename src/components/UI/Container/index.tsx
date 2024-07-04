import React from "react";
import styled from "styled-components";

import { COLORS } from "../../../utils/constants";

interface ContainerProps {
  children: React.ReactNode;
  styles: {
    [key: string]: string | number;
  };
}

const Container = ({ children, styles }: ContainerProps) => {
  return <Wrapper style={{ ...styles }}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  background-color: var(--background-color, ${COLORS["gray-100"]});
  width: var(--width);
  height: var(--height);
  border-radius: var(--border-radius, 0.8rem);
`;

export default Container;
