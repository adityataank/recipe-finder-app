import { Children, useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import DataBlock from "../../components/DataBlock";
import SkeletonGroup from "../../components/SkeletonGroup";

import { DEVICE } from "../../utils/constants";
import { REQUEST } from "../../utils/request/request";
import { API_ROUTES } from "../../utils/request/api-routes";
import { MealProps } from "../../utils/component-interfaces";

type Filtertypes = "category" | "area" | "ingredient";

type EndpointMappingTypes = {
  category: string;
  area: string;
  ingredient: string;
};

const EndpointMapping: EndpointMappingTypes = {
  category: API_ROUTES.get_categories(),
  area: API_ROUTES.get_areas(),
  ingredient: API_ROUTES.get_ingredients(),
};

const RecipeFilterPage = () => {
  const [categories, setCategories] = useState<[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const { filter = "category" } = useParams<{ filter: Filtertypes }>();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsFetching(true);
        const response = await REQUEST.get(EndpointMapping[filter]);
        if (response) {
          if (filter === "category") {
            setCategories(response?.categories);
          } else {
            setCategories(response?.meals);
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsFetching(false);
      }
    };
    fetchCategories();
  }, [filter]);

  const renderCategories = () =>
    isFetching ? (
      <SkeletonGroup type={filter} />
    ) : (
      Children.toArray(
        [...categories, ...categories].map((category: MealProps) => (
          <DataBlock data={category} tab={filter} />
        ))
      )
    );

  return <PageWrapper>{renderCategories()}</PageWrapper>;
};

const PageWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;
  @media ${DEVICE.tablet} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default RecipeFilterPage;
