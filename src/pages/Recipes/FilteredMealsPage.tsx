import { Children, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { REQUEST } from "../../utils/request/request";
import { API_ROUTES } from "../../utils/request/api-routes";
import MealCard from "../../components/MealCard";
import SkeletonGroup from "../../components/SkeletonGroup";
import { MealProps } from "../../utils/component-interfaces";

const FilteredMealsPage = () => {
  const { filter = "", filterValue = "" } = useParams();

  const [apiData, setApiData] = useState<[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    const EndpointMapping: { [key: string]: string } = {
      category: API_ROUTES.filter_by_category(filterValue),
      area: API_ROUTES.filter_by_area(filterValue),
      ingredient: API_ROUTES.filter_by_ingredient(filterValue),
    };
    const fetchData = async () => {
      try {
        setIsFetching(true);
        const response = await REQUEST.get(EndpointMapping[filter]);
        if (response?.meals?.length) {
          setApiData(response?.meals);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsFetching(false);
      }
    };
    fetchData();
  }, [filter, filterValue]);

  const renderCards = () => {
    const mealCardTag: { [key: string]: string } = {};
    if (filter === "category") {
      mealCardTag["strCategory"] = filterValue;
    }
    if (filter === "area") {
      mealCardTag["strArea"] = filterValue;
    }
    return isFetching ? (
      <SkeletonGroup />
    ) : (
      Children.toArray(
        apiData.map((meal: MealProps) => (
          <MealCard data={{ ...meal, ...mealCardTag }} />
        ))
      )
    );
  };

  return <Wrapper>{renderCards()}</Wrapper>;
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.6rem;
  @media (min-width: 870px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default FilteredMealsPage;
