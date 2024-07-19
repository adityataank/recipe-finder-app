import { Children } from "react";

import FlexBox from "../UI/FlexBox";
import RecipeTag from "../RecipeMeta/RecipeTag";

import { TagProps } from "../../utils/component-interfaces";

type PropsTypes = {
  tags: TagProps;
};

const RecipeTags = ({ tags }: PropsTypes) => {
  return (
    <FlexBox gap="0.4rem">
      {Children.toArray(
        Object.entries(tags).map(
          ([key, value]) => value && <RecipeTag filter={key}>{value}</RecipeTag>
        )
      )}
    </FlexBox>
  );
};

export default RecipeTags;
