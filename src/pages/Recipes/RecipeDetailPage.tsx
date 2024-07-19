import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

import FlexBox from "../../components/UI/FlexBox";
import Headline from "../../components/UI/Headline";
import RecipeImage from "../../components/RecipeDetailPage/RecipeImage";
import TimeAndDifficulty from "../../components/RecipeDetailPage/TimeAndDifficulty";
import ButtonsGroup from "../../components/RecipeDetailPage/ButtonsGroup";
import RecipeTags from "../../components/RecipeDetailPage/RecipeTags";
import Ingredients from "../../components/RecipeDetailPage/Ingredients";
import Instructions from "../../components/RecipeDetailPage/Instructions";
import Loader from "../../components/UI/Loader";
import MoreRecipes from "../../components/RecipeDetailPage/MoreRecipes";

import { REQUEST } from "../../utils/request/request";
import { API_ROUTES } from "../../utils/request/api-routes";
import { COLORS, DEVICE } from "../../utils/constants";
import { SmallText } from "../../styles/text";

const RecipeDetailPage = () => {
  const { mealId, filterValue } = useParams();
  const navigate = useNavigate();
  const instructionsSectionRef = useRef<HTMLDivElement>(null);

  const [recipeData, setRecipeData] = useState<{ [key: string]: string }>({});
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const {
    strMealThumb,
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strYoutube,
  } = recipeData;

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setIsFetching(true);
        const response = await REQUEST.get(
          API_ROUTES.get_recipe_details(mealId)
        );
        const data = response?.meals?.[0];
        if (data) {
          setRecipeData(response.meals[0]);
          if (filterValue === "undefined" || !filterValue) {
            // shallow replacing the current route to remove the undefined slug in any case.
            navigate(
              {
                pathname: `/recipes/category/${data?.strCategory}/detail/${mealId}`,
              },
              { replace: true }
            );
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsFetching(false);
      }
    };
    if (mealId) {
      fetchRecipe();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mealId]);

  const goToRecipe = () => {
    if (instructionsSectionRef.current) {
      instructionsSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  };

  const saveRecipe = () => {};

  const clickHandlers = {
    goToRecipe,
    saveRecipe,
  };

  const RecipeName = () => (
    <Headline
      type={{ mobile: "h2", desktop: "h1" }}
      styles={{ weight: 700, color: COLORS["primary-black"] }}
    >
      {strMeal}
    </Headline>
  );

  const RecipeDescription = () => (
    <DescriptionTextWrapper>
      For a more immersive experience, check out the video of the recipe—it's
      packed with helpful tips and visual guidance!
      <br />
      🎥
      <a href={strYoutube} target="_blank">
        Youtube
      </a>
    </DescriptionTextWrapper>
  );

  return isFetching ? (
    <Loader />
  ) : (
    recipeData?.idMeal && (
      <PageWrapper>
        <TopSection>
          <RecipeImage strMeal={strMeal} strMealThumb={strMealThumb} />
          <FlexBox type="column" justify="between" gap="4rem" height="auto">
            <FlexBox type="column">
              <TimeAndDifficulty />
              <FlexBox gap="1.2rem" type="column">
                <RecipeName />
                <RecipeDescription />
                <RecipeTags tags={{ category: strCategory, area: strArea }} />
              </FlexBox>
            </FlexBox>
            <ButtonsGroup clickHandlers={clickHandlers} />
          </FlexBox>
        </TopSection>
        <InstructionsWrapper ref={instructionsSectionRef}>
          <Ingredients recipeData={recipeData} />
          <Instructions instructions={strInstructions} />
        </InstructionsWrapper>
        <DividerLine />
        <MoreRecipes category={strCategory} />
      </PageWrapper>
    )
  );
};

const PageWrapper = styled.section``;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-bottom: 4rem;
  @media ${DEVICE.tablet} {
    flex-direction: row;
    margin-bottom: 8rem;
  }
`;

const InstructionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media ${DEVICE.tablet} {
    flex-direction: row;
    gap: 2.4rem;
  }
`;

const DividerLine = styled.hr`
  width: 100%;
  height: 0.1rem;
  background: ${COLORS["gray-100"]};
  margin: 4rem 0;
  border: none;
  @media ${DEVICE.tablet} {
    margin: 8rem 0;
  }
`;

const DescriptionTextWrapper = styled.div`
  ${SmallText}
  color: ${COLORS["gray-700"]};
  a {
    color: ${COLORS["gray-700"]};
    text-decoration: underline;
    font-weight: 500;
    margin-left: 0.8rem;
  }
`;

export default RecipeDetailPage;
