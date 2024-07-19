import { Children, useEffect, useState } from "react";
import styled from "styled-components";

import FilterTab from "../FilterTab";
import EmptySearch from "./EmptySearch";
import MealCard from "../MealCard";
import SkeletonGroup from "../SkeletonGroup";

import {
  AllowedTabs,
  COLORS,
  DEVICE,
  RECIPE_FILTERS,
} from "../../utils/constants";
import { MealProps } from "../../utils/component-interfaces";
import { REQUEST } from "../../utils/request/request";
import { API_ROUTES } from "../../utils/request/api-routes";
import DataBlock from "../DataBlock";

const [RECIPES, CATEGORY, AREA, INGRDEINT] = [
  "recipes",
  "category",
  "area",
  "ingredient",
];

interface PropsTypes {
  startSearch: boolean;
  query: string;
}

const ComponentMapping = {
  [RECIPES]: (mealData: MealProps) => <MealCard data={mealData} />,
  [CATEGORY]: (data: MealProps) => <DataBlock data={data} tab="category" />,
  [AREA]: (data: MealProps) => <DataBlock data={data} tab="area" />,
  [INGRDEINT]: (data: MealProps) => <DataBlock data={data} tab="ingredient" />,
};

// ------------------------------------------------------------------------------

const RecipeFilterSection = ({ startSearch, query }: PropsTypes) => {
  const [activeTab, setActiveTab] = useState<AllowedTabs>("recipes");
  const [apiData, setApiData] = useState<[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const startLoading = () => setIsFetching(true);
  const stopLoading = () => setIsFetching(false);

  useEffect(() => {
    const fetchData = async (url: string) => {
      try {
        startLoading();
        const response = await REQUEST.get(url);
        if (response) {
          if (activeTab === CATEGORY) {
            setApiData(response?.categories ?? []);
          } else {
            setApiData(response?.meals ?? []);
          }
        } else {
          setApiData([]);
        }
      } catch (err) {
        console.error(err);
      } finally {
        stopLoading();
      }
    };
    if (startSearch) {
      if (activeTab === RECIPES && query) {
        fetchData(API_ROUTES.search_by_name(query));
      }
      if (activeTab === CATEGORY) {
        fetchData(API_ROUTES.get_categories());
      }
      if (activeTab === AREA) {
        fetchData(API_ROUTES.get_areas());
      }
      if (activeTab === INGRDEINT) {
        fetchData(API_ROUTES.get_ingredients());
      }
    }
    if (!query) {
      setApiData([]);
    }
  }, [activeTab, startSearch, query]);

  const renderCards = () =>
    Children.toArray(apiData?.map((data) => ComponentMapping[activeTab](data)));

  const renderFilterTabs = () =>
    Children.toArray(
      RECIPE_FILTERS.map((filter) => (
        <FilterTab
          text={filter}
          isActive={filter === activeTab}
          setActiveTab={setActiveTab}
        />
      ))
    );

  const renderResults = () => (
    <ResultsWrapper
      isEmpty={Boolean(!isFetching && !apiData?.length)}
      tab={activeTab}
    >
      {isFetching ? (
        <SkeletonGroup type={activeTab} />
      ) : apiData?.length ? (
        renderCards()
      ) : (
        <EmptySearch isSearched={Boolean(query)} />
      )}
    </ResultsWrapper>
  );

  return (
    <Wrapper>
      <Tabs>{renderFilterTabs()}</Tabs>
      {renderResults()}
    </Wrapper>
  );
};

// ------------------------------------------------------------------------------

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  max-height: calc(100dvh - 32.9rem);
  background: ${COLORS.white};
  border-radius: 0.8rem;
  overflow: auto;
`;

const Tabs = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  margin-bottom: 0.8rem;
  background: ${COLORS.white};
  padding: 1.6rem;
  position: sticky;
  top: 0;
  z-index: 1;
  @media ${DEVICE.tablet} {
    padding: 2.4rem;
    margin-bottom: 0;
  }
`;

const ResultsWrapper = styled.div<{ isEmpty: boolean; tab: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 1.6rem;
  padding-top: 0;
  ${(props) =>
    props.tab !== RECIPES &&
    `
      display: grid;
    grid-template-columns: 1fr 1fr;
    @media (min-width: 870px) {
      grid-template-columns: repeat(4, 1fr) !important;
    }
    `}
  @media (min-width: 870px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.4rem;
    ${(props) => props.isEmpty && "grid-template-columns: 1fr;"}
  }
  @media ${DEVICE.tablet} {
    padding: 2.4rem;
    padding-top: 0;
  }
`;

export default RecipeFilterSection;
