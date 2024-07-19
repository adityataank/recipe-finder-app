import styled from "styled-components";
import { DEVICE } from "../../utils/constants";
import Image from "../UI/Image";

interface RecipeImageProps {
  strMeal: string;
  strMealThumb: string;
}

const RecipeImage = ({ strMeal, strMealThumb }: RecipeImageProps) => {
  return (
    <RecipeImageWrapper>
      <Image width="100%" height="100%" src={strMealThumb} alt={strMeal} />
    </RecipeImageWrapper>
  );
};

const RecipeImageWrapper = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  border-radius: 1.2rem;
  overflow: hidden;
  @media ${DEVICE.tablet} {
    flex-shrink: 0;
    width: 29.1rem;
    height: 29.1rem;
  }
`;

export default RecipeImage;
