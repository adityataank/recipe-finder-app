type RecipeObjectType = {
  [key: string]: string;
};

type IngredientTypes = {
  ingredient: string;
  measure: string;
};

export const parseIngredients = (
  recipeData: RecipeObjectType = {}
): IngredientTypes[] => {
  const resultArray: IngredientTypes[] = [];
  for (let i = 1; i <= 20; i++) {
    const ingredientObject = {
      measure: recipeData[`strMeasure${i}`],
      ingredient: recipeData[`strIngredient${i}`],
    };
    resultArray.push(ingredientObject);
  }
  return resultArray;
};
