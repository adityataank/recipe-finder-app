import { Children, useEffect, useState } from "react";
import styled from "styled-components";

import FlexBox from "../UI/FlexBox";
import RouteLink from "../UI/RouteLink";

import { H3 } from "../../styles/headline";
import { COLORS, DEVICE } from "../../utils/constants";
import { MealProps } from "../../utils/component-interfaces";
import { REQUEST } from "../../utils/request/request";
import { API_ROUTES } from "../../utils/request/api-routes";
import MealCard from "../MealCard";

interface MoreRecipesProps {
  category: string;
}

const MoreRecipes = ({ category }: MoreRecipesProps) => {
  const [recipes, setRecipes] = useState<MealProps[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await REQUEST.get(
          API_ROUTES.filter_by_category(category)
        );
        if (response?.meals?.length) {
          setRecipes(response?.meals?.slice(0, 2));
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (category) {
      fetchRecipes();
    }
  }, [category]);
  const seeAllRoute = `/recipes/category/${category}`;
  return (
    <FlexBox type="column" gap="2.4rem">
      <FlexBox align="center" justify="between">
        <Headline>More {category} Recipes</Headline>
        <RouteLink href={seeAllRoute} rightArrow>
          See all
        </RouteLink>
      </FlexBox>
      <RecipesList>
        {Children.toArray(
          recipes.map((recipe) => (
            <MealCard data={{ ...recipe, strCategory: category }} />
          ))
        )}
      </RecipesList>
    </FlexBox>
  );
};

const Headline = styled.span`
  ${H3}
  text-transform: capitalize;
  color: ${COLORS["primary-black"]};
  max-width: 75%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const RecipesList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.4rem;
  width: 100%;
  @media (min-width: 870px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.4rem;
  }
`;

export default MoreRecipes;
