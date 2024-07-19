import { Link } from "react-router-dom";
import styled from "styled-components";

import Text from "../UI/Text";
import { COLORS } from "../../utils/constants";

interface TagProps {
  children: string;
  filter: string;
}

const TextProps = {
  styles: { color: COLORS["blue-600"], weight: 500 },
};

const RecipeTag = ({ children, filter }: TagProps) => {
  const route = `/recipes/${filter}/${children}`;
  return (
    <TagWrapper to={route}>
      <Text
        type={{ mobile: "tiny", desktop: "tiny" }}
        styles={TextProps.styles}
      >
        {children}
      </Text>
    </TagWrapper>
  );
};

const TagWrapper = styled(Link)`
  height: fit-content;
  width: fit-content;
  border-radius: 0.4rem;
  padding: 0.2rem 0.8rem;
  background: ${COLORS["blue-100"]};
  &:hover {
    outline: 0.1rem dotted ${COLORS["blue-600"]};
  }
`;

export default RecipeTag;
