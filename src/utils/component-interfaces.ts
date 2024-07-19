// props types for Meal card
export interface MealProps {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
  strTags: string;
  strCategoryThumb: string;
  strIngredient: string;
}

// props types for Recipe page Breadcrumb
export type HistoryItemTypes = {
  name: string | undefined;
  route: string;
};

export type TagProps = { category: string; area: string };
