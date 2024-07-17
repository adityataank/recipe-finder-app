import styled from "styled-components";

import Image from "../UI/Image";
import Text from "../UI/Text";
import FlexBox from "../UI/FlexBox";
import RecipeOverview from "../RecipeMeta/RecipeOverview";
import RecipeTag from "../RecipeMeta/RecipeTag";

import { DEVICE, MealProps } from "../../utils/constants";
import {
  DetailsWrapperStyles,
  ImageWrapperStyles,
  MealCardWrapperStyles,
} from "../../styles/meal-card";
import { BaseText, LargeText } from "../../styles/text";

interface MealCardProps {
  data: MealProps;
}

const DishImage = ({ src, alt }: { src: string; alt: string }) => (
  <ImageWrapper>
    <Image src={src} width={15} height={12} alt={alt} />
  </ImageWrapper>
);

const Details = ({ name, tags }: { name: string; tags: [string, string] }) => {
  return (
    <DetailsWrapper>
      <FlexBox type="column" gap="0.4rem">
        <EllipsisWrapper>
          {/* <Text
            type={{ mobile: "base", desktop: "large" }}
            styles={{ weight: 500 }}
          > */}
          {name}
          {/* </Text> */}
        </EllipsisWrapper>
        <FlexBox gap="2rem">
          <RecipeOverview type="time" value="2h 30m" />
          <RecipeOverview type="difficulty" value="Advance" />
        </FlexBox>
      </FlexBox>
      <FlexBox gap="0.4rem">
        <RecipeTag>{tags[0]}</RecipeTag>
        <RecipeTag>{tags[1]}</RecipeTag>
      </FlexBox>
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
  } = data ?? {};
  return (
    <CardWrapper>
      <DishImage src={thumbSrc} alt={name} />
      <Details name={name} tags={[category, area]} />
    </CardWrapper>
  );
};

// -----------------------------------------------------------------------------------

const CardWrapper = styled.div`
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
