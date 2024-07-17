import styled from "styled-components";

import FlexBox from "../FlexBox";

import {
  DetailsWrapperStyles,
  ImageWrapperStyles,
  MealCardWrapperStyles,
} from "../../../styles/meal-card";
import { SkeletonShimmer } from "../../../styles/skeleton-shimmer";

const DishImage = () => (
  <ImageWrapper>
    <ShimmerWrapper height="100%" />
  </ImageWrapper>
);

const Details = () => (
  <DetailsWrapper>
    <FlexBox type="column" gap="1.2rem">
      <ShimmerWrapper height="2rem" />

      <FlexBox gap="2rem">
        <ShimmerWrapper height="2rem" />
        <ShimmerWrapper height="2rem" />
      </FlexBox>
    </FlexBox>
    <FlexBox gap="0.4rem">
      <ShimmerWrapper height="2rem" />
      <ShimmerWrapper height="2rem" />
    </FlexBox>
  </DetailsWrapper>
);

// -----------------------------------------------------------------------------------

const SkeletonCard = () => {
  return (
    <CardWrapper>
      <DishImage />
      <Details />
    </CardWrapper>
  );
};

// -----------------------------------------------------------------------------------

const CardWrapper = styled.div`
  ${MealCardWrapperStyles}
`;

const ImageWrapper = styled.div`
  ${ImageWrapperStyles}
`;

const DetailsWrapper = styled.div`
  ${DetailsWrapperStyles}
`;

const ShimmerWrapper = styled.span<{ height: string }>`
  ${SkeletonShimmer}
`;

export default SkeletonCard;
