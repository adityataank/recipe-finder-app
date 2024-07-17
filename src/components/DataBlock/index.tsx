import React from "react";
import styled from "styled-components";

import Image from "../UI/Image";
import Text from "../UI/Text";

import {
  COLORS,
  COUNTRY_FLAGS,
  DEVICE,
  MealProps,
} from "../../utils/constants";
import { SkeletonShimmer } from "../../styles/skeleton-shimmer";

interface PropsTypes {
  tab: "category" | "area" | "ingredient";
  data: MealProps | { [key: string]: string };
  showSkeleton?: boolean;
}

interface ComponentMappingTypes {
  category: React.ReactElement;
  area: React.ReactElement;
  ingredient: React.ReactElement;
}

const TextWrapper = ({
  children,
}: {
  children: React.ReactElement | string;
}) => (
  <Text type={{ mobile: "base", desktop: "large" }} styles={{ weight: 500 }}>
    {children}
  </Text>
);

const DataBlock = ({ data, tab, showSkeleton = false }: PropsTypes) => {
  const { strCategoryThumb, strCategory, strArea, strIngredient } = data ?? {};
  const ComponentMapping: ComponentMappingTypes = {
    category: (
      <>
        <Image
          src={strCategoryThumb}
          width={12}
          height={7.5}
          alt={strCategory}
        />
        <TextWrapper>{strCategory}</TextWrapper>
      </>
    ),
    area: (
      <>
        <FlagEmoji
          dangerouslySetInnerHTML={{ __html: COUNTRY_FLAGS[strArea] }}
        />
        <TextWrapper>{strArea}</TextWrapper>
      </>
    ),
    ingredient: <TextWrapper>{strIngredient}</TextWrapper>,
  };
  return (
    <Wrapper height="18rem" showSkeleton={showSkeleton}>
      {showSkeleton ? <></> : ComponentMapping[tab]}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ height: string; showSkeleton: boolean }>`
  cursor: pointer;
  height: 15.1rem;
  max-height: 15.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  background: ${COLORS["gray-50"]};
  padding: 2rem 1rem;
  border-radius: 0.8rem;
  transition: background 150ms linear;
  &:hover {
    background: ${COLORS["gray-100"]};
  }
  ${(props) => props.showSkeleton && SkeletonShimmer};
`;

const FlagEmoji = styled.h6`
  font-size: 2.4rem;
  margin: 0;
  @media ${DEVICE.tablet} {
    font-size: 3rem;
  }
`;

export default DataBlock;
