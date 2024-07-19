import React from "react";
import styled from "styled-components";

import Text from "../UI/Text";

import { AllowedTabs, COLORS, IconType } from "../../utils/constants";

import RecipeIcon from "../UI/Icons/TabIcons/RecipeIcon";
import CategoryIcon from "../UI/Icons/TabIcons/CategoryIcon";
import AreaIcon from "../UI/Icons/TabIcons/AreaIcon";
import IngredientIcon from "../UI/Icons/TabIcons/IngredientIcon";

interface FilterTabProps {
  text: IconType;
  isActive: boolean;
  setActiveTab: (name: AllowedTabs) => void;
}

type IconMapTypes = {
  recipes: React.ReactElement;
  category: React.ReactElement;
  area: React.ReactElement;
  ingredient: React.ReactElement;
};

const IconMap: IconMapTypes = {
  recipes: <RecipeIcon />,
  category: <CategoryIcon />,
  area: <AreaIcon />,
  ingredient: <IngredientIcon />,
};

// --------------------------------------------------------------------

const FilterTab = ({ text, isActive, setActiveTab }: FilterTabProps) => {
  const Icon = IconMap[text];

  const handleClick = () => {
    setActiveTab(text);
  };

  return (
    <Wrapper isActive={isActive} onClick={handleClick}>
      {Icon}
      <Text
        type={{ mobile: "tiny", desktop: "tiny" }}
        styles={{ weight: 500, color: COLORS["gray-600"] }}
      >
        {text}
      </Text>
    </Wrapper>
  );
};

// --------------------------------------------------------------------

const changeColors = ({
  bgColor,
  textColor,
  svgColor,
}: {
  bgColor?: string;
  textColor?: string;
  svgColor?: string;
}) => `
outline-color: ${bgColor};
      background: ${bgColor};
      svg {
      path {
        fill: ${svgColor};
      }
    }
    p {
      color: ${textColor};
    }
    `;

const Wrapper = styled.button<{ isActive: boolean }>`
  border: none;
  width: fit-content;
  height: auto;
  box-sizing: border-box;
  outline: 0.1rem solid ${COLORS["gray-100"]};
  border-radius: 0.4rem;
  padding: 0.4rem 1.2rem 0.4rem 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: ${COLORS["gray-50"]};
  text-transform: capitalize;
  svg {
    width: 1.6rem;
    height: 1.6rem;
  }

  ${(props) =>
    props.isActive
      ? changeColors({
          bgColor: COLORS["green-500"],
          svgColor: COLORS.white,
          textColor: COLORS.white,
        })
      : `&:hover {
    ${changeColors({
      bgColor: COLORS["gray-100"],
      svgColor: COLORS["gray-500"],
      textColor: COLORS["gray-700"],
    })}
  }`}
`;

export default FilterTab;
