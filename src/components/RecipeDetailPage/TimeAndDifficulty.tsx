import { Children } from "react";

import RecipeOverview from "../RecipeMeta/RecipeOverview";
import FlexBox from "../UI/FlexBox";

type RecipeOverviewItemsTypes = {
  type: "time" | "difficulty";
  value: string;
};

// VALUES ARE HARD CODED AS THEY ARE NOT PRESENT IN API RESPONSE !!!
const TimeAndDifficulty = () => {
  const propsArr: RecipeOverviewItemsTypes[] = [
    { type: "time", value: "2h 30m" },
    { type: "difficulty", value: "Intermediate" },
  ];
  return (
    <FlexBox gap="2rem" height="auto" styles={{ marginBottom: "0.8rem" }}>
      {Children.toArray(
        propsArr.map(({ type, value }) => (
          <RecipeOverview
            type={type}
            value={value}
            iconSize="2rem"
            fontSize="small"
          />
        ))
      )}
    </FlexBox>
  );
};

export default TimeAndDifficulty;
