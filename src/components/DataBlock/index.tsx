import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Image from "../UI/Image";
import Text from "../UI/Text";

import { COLORS, COUNTRY_FLAGS, DEVICE } from "../../utils/constants";
import { MealProps } from "../../utils/component-interfaces";
import { SkeletonShimmer } from "../../styles/skeleton-shimmer";

interface PropsTypes {
  tab: "category" | "area" | "ingredient";
  data: MealProps | { [key: string]: string };
  showSkeleton?: boolean;
}

type FilterTabValues = {
  value: string;
  component: React.ReactElement;
};

interface ComponentMappingTypes {
  category: FilterTabValues;
  area: FilterTabValues;
  ingredient: FilterTabValues;
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
    category: {
      value: strCategory,
      component: (
        <>
          <Image
            src={strCategoryThumb}
            width="12rem"
            height="7.5rem"
            alt={strCategory}
          />
          <TextWrapper>{strCategory}</TextWrapper>
        </>
      ),
    },
    area: {
      value: strArea,
      component: (
        <>
          <FlagEmoji
            dangerouslySetInnerHTML={{ __html: COUNTRY_FLAGS[strArea] }}
          />
          <TextWrapper>{strArea}</TextWrapper>
        </>
      ),
    },
    ingredient: {
      value: strIngredient,
      component: <TextWrapper>{strIngredient}</TextWrapper>,
    },
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if(showSkeleton) {
      e?.stopPropagation();
      e?.preventDefault();
    }
  }

  const filterValue = ComponentMapping[tab].value;
  const route = showSkeleton ? "" : `/recipes/${tab}/${filterValue}`;

  return (
    <Wrapper to={route} height="18rem" showSkeleton={showSkeleton} onClick={handleClick}>
      {showSkeleton ? <></> : ComponentMapping[tab].component}
    </Wrapper>
  );
};

const Wrapper = styled(Link)<{ height: string; showSkeleton: boolean }>`
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
  p {
    text-align: center;
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
