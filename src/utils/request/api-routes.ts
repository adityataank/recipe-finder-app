const MEALDB_API_ENDPOINT: string = "https://themealdb.com/api/json/v1/1";

export const API_ROUTES = {
  search_by_name: (name: string) =>
    `${MEALDB_API_ENDPOINT}/search.php?s=${name}`,

  get_recipe_details: (id: number) =>
    `${MEALDB_API_ENDPOINT}/lookup.php?i=${id}`,

  get_categories: () => `${MEALDB_API_ENDPOINT}/categories.php`,

  get_areas: () => `${MEALDB_API_ENDPOINT}/list.php?a=list`,

  get_ingredients: () => `${MEALDB_API_ENDPOINT}/list.php?i=list`,

  filter_by_ingredient: (ingredient: string) =>
    `${MEALDB_API_ENDPOINT}/filter.php?i=${ingredient}`,

  filter_by_category: (category: string) =>
    `${MEALDB_API_ENDPOINT}/filter.php?c=${category}`,

  filter_by_area: (area: string) => `${MEALDB_API_ENDPOINT}/filter?a=${area}`,
};
