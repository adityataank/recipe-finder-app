import { Children } from "react";

import FlexBox from "../UI/FlexBox";
import Headline from "../UI/Headline";
import Text from "../UI/Text";

import { COLORS } from "../../utils/constants";
import { parseIngredients } from "../../utils/parse-ingredients";

interface RecipeObjectType {
  recipeData: { [key: string]: string };
}

// ------------------------------------------------------------------------------------------------------

const Ingredients = ({ recipeData }: RecipeObjectType) => {
  const ingredientsList = parseIngredients(recipeData);
  return (
    <FlexBox
      type="column"
      gap="2.4rem"
      width="auto"
      styles={{ paddingRight: "7.5rem" }}
    >
      <Headline type={{ mobile: "h3", desktop: "h2" }} styles={{ weight: 400 }}>
        Ingredients
      </Headline>
      <div>
        {Children.toArray(
          ingredientsList.map(({ ingredient, measure }) => (
            <FlexBox gap="0.8rem" align="center" styles={{whiteSpace: 'nowrap'}}>
              <Text
                type={{ mobile: "small", desktop: "small" }}
                styles={{ color: COLORS["primary-black"], weight: 700 }}
              >
                {measure}
              </Text>
              <Text
                type={{ mobile: "small", desktop: "small" }}
                styles={{ color: COLORS["gray-700"] }}
              >
                {ingredient}
              </Text>
            </FlexBox>
          ))
        )}
      </div>
    </FlexBox>
  );
};

// ------------------------------------------------------------------------------------------------------

// const Wrapper = styled.div`
//     display: flex;
//     flex-direction: column;

// `

export default Ingredients;
