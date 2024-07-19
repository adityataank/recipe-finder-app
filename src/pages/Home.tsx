import styled from "styled-components";
import { Children, useEffect, useState } from "react";

import HomeRecipeWidget from "../components/HomeRecipeWidget";
import FlexBox from "../components/UI/FlexBox";
import SkeletonGroup from "../components/SkeletonGroup";
import MealCard from "../components/MealCard";
import RouteLink from "../components/UI/RouteLink";
import Headline from "../components/UI/Headline";

import { DEVICE } from "../utils/constants";
import { REQUEST } from "../utils/request/request";
import { API_ROUTES } from "../utils/request/api-routes";
import { MealProps } from "../utils/component-interfaces";

const Header = () => (
  <FlexBox justify="between" align="center">
    <Headline type={{ mobile: "h3", desktop: "h2" }}>New Recipes</Headline>
    <RouteLink href="/recipes/category" rightArrow>
      See all recipes
    </RouteLink>
  </FlexBox>
);

const RecipesList = ({ meals }: { meals: [] }) => (
  <RecipesContainer>
    {meals?.length ? (
      Children.toArray(
        meals.map((mealData: MealProps) => <MealCard data={mealData} />)
      )
    ) : (
      <SkeletonGroup />
    )}
  </RecipesContainer>
);

// ---------------------------------------------------------------

function Home() {
  const [meals, setMeals] = useState<[]>([]);

  const fetchRecipes = async () => {
    try {
      const response = await REQUEST.get(API_ROUTES.search_by_name("prawn")); // hard coding recipe name as latest meals API is not free.
      if (response?.meals?.length) {
        setMeals(response.meals.slice(0, 4));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <PageWrapper>
      <HomeRecipeWidget />
      <FlexBox type="column" gap="1.6rem">
        <Header />
        <RecipesList meals={meals} />
      </FlexBox>
    </PageWrapper>
  );
}

// ---------------------------------------------------------------

const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  @media ${DEVICE.tablet} {
    gap: 12rem;
    margin-top: 0.4rem;
  }
`;

const RecipesContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.6rem;
  padding-bottom: 5rem;
  @media (min-width: 870px) {
    grid-template-columns: 1fr 1fr;
    gap: 2.4rem;
  }
  @media ${DEVICE.tablet} {
    padding-bottom: 0;
  }
`;

export default Home;
