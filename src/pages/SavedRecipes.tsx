import { Children, useEffect, useState } from "react";
import styled from "styled-components";

import MealCard from "../components/MealCard";
import Image from "../components/UI/Image";
import Headline from "../components/UI/Headline";
import EmptyIcon from "../assets/empty.svg";
import Text from "../components/UI/Text";
import RouteLink from "../components/UI/RouteLink";

import { LOCALSTORAGE_KEYS } from "../utils/constants";
import { MealProps } from "../utils/component-interfaces";

const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState<MealProps[]>([]);

  useEffect(() => {
    const savedList = JSON.parse(
      localStorage.getItem(LOCALSTORAGE_KEYS.savedRecipes) ?? "{}"
    );
    if (Object.keys(savedList).length) {
      setSavedRecipes(Object.values(savedList));
    }
  }, []);

  const NoSavedRecipes = () => {
    return (
      <EmptyContainer>
        <Image src={EmptyIcon} width="11.2rem" height="11.2rem" alt="empty" />
        <Text type={{ mobile: "small", desktop: "base" }}>
          Your recipe collection is waiting to be filled! <br /> Start exploring
          and find delicious dishes to add to your favorites!
        </Text>
        <RouteLink href="/recipes/category" rightArrow>
          Explore now
        </RouteLink>
      </EmptyContainer>
    );
  };

  const renderMeals = () =>
    Children.toArray(savedRecipes.map((meal) => <MealCard data={meal} />));

  const isEmpty = !savedRecipes?.length;

  return (
    <>
      <Headline type={{ mobile: "h3", desktop: "h2" }}>
        Your favorite recipes
      </Headline>
      <Wrapper isEmpty={isEmpty}>
        {isEmpty ? <NoSavedRecipes /> : renderMeals()}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div<{ isEmpty: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  place-content: flex-start;
  gap: 1.6rem;
  margin-top: 1.6rem;
  overflow: auto;
  height: calc(100dvh - 21rem);
  padding-bottom: 4rem;
  @media (min-width: 870px) {
    grid-template-columns: repeat(
      ${(props) => (props.isEmpty ? "1" : "2")},
      1fr
    );
    gap: 2.4rem;
    margin-top: 2.4rem;
  }
`;

const EmptyContainer = styled.div`
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  p {
    text-align: center;
  }
`;
export default SavedRecipes;
