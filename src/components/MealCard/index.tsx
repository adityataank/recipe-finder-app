import { Children } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Image from "../UI/Image";
import FlexBox from "../UI/FlexBox";
import RecipeOverview from "../RecipeMeta/RecipeOverview";
import RecipeTag from "../RecipeMeta/RecipeTag";

import { DEVICE } from "../../utils/constants";
import {
  DetailsWrapperStyles,
  ImageWrapperStyles,
  MealCardWrapperStyles,
} from "../../styles/meal-card";
import { BaseText, LargeText } from "../../styles/text";
import { MealProps, TagProps } from "../../utils/component-interfaces";
import { Analytics } from "../../lib/analytics";

interface MealCardProps {
  data: MealProps;
}

const DishImage = ({ src, alt }: { src: string; alt: string }) => (
  <ImageWrapper>
    <Image src={src} width="15rem" height="12rem" alt={alt} />
  </ImageWrapper>
);

const renderTags = (tags: TagProps) =>
  Children.toArray(
    Object.entries(tags).map(
      ([key, value]) => value && <RecipeTag filter={key}>{value}</RecipeTag>
    )
  );

const Details = ({ name, tags }: { name: string; tags: TagProps }) => {
  return (
    <DetailsWrapper>
      <FlexBox type="column" gap="0.4rem">
        <EllipsisWrapper>{name}</EllipsisWrapper>
        <FlexBox gap="2rem">
          <RecipeOverview type="time" value="2h 30m" />
          <RecipeOverview type="difficulty" value="Advance" />
        </FlexBox>
      </FlexBox>
      <FlexBox gap="0.4rem">{renderTags(tags)}</FlexBox>
    </DetailsWrapper>
  );
};

// -----------------------------------------------------------------------------------

const MealCard = ({ data }: MealCardProps) => {
  const {
    strMeal: name,
    strMealThumb: thumbSrc,
    strCategory: category,
    strArea: area,
    idMeal: id,
  } = data ?? {};

  const handleClick = () => {
    Analytics.track("meal-card-click", {
      recipe_name: name,
    });
  };

  const recipeDetailPageRoute = encodeURI(
    `/recipes/category/${category}/detail/${id}`
  );

  return (
    <CardWrapper to={recipeDetailPageRoute} onClick={handleClick}>
      <DishImage src={thumbSrc} alt={name} />
      <Details name={name} tags={{ category, area }} />
    </CardWrapper>
  );
};

// -----------------------------------------------------------------------------------

const CardWrapper = styled(Link)`
  ${MealCardWrapperStyles}
`;

const ImageWrapper = styled.div`
  ${ImageWrapperStyles}
  @media (max-width: 338px) {
    display: none;
  }
`;

const DetailsWrapper = styled.div`
  ${DetailsWrapperStyles}
`;

const EllipsisWrapper = styled.div`
  // background: red;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 97%;
  ${BaseText}
  @media ${DEVICE.tablet} {
    ${LargeText}
  }
  font-weight: 500 !important;
`;

export default MealCard;
