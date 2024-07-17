import styled from "styled-components";
import Text from "../UI/Text";
import { COLORS } from "../../utils/constants";
import React from "react";

interface TagProps {
  children: string | React.ReactElement;
}

const TextProps = {
  styles: { color: COLORS["blue-600"], weight: 500 },
};

const RecipeTag = ({ children }: TagProps) => {
  return (
    <TagWrapper>
      <Text
        type={{ mobile: "tiny", desktop: "tiny" }}
        styles={TextProps.styles}
      >
        {children}
      </Text>
    </TagWrapper>
  );
};

const TagWrapper = styled.div`
  height: fit-content;
  width: fit-content;
  border-radius: 0.4rem;
  padding: 0.2rem 0.8rem;
  background: ${COLORS["blue-100"]};
`;

export default RecipeTag;
