import FlexBox from "../UI/FlexBox";
import Text from "../UI/Text";
import Image from "../UI/Image";

import { COLORS } from "../../utils/constants";

import TimeIcon from "../../assets/Icons/time.svg";
import DifficultyIcon from "../../assets/Icons/difficulty.svg";

interface PropsTypes {
  iconSize?: string;
  fontSize?: "tiny" | "small";
  type: "time" | "difficulty";
  value: string;
}

const ICON_MAPPING = {
  time: TimeIcon,
  difficulty: DifficultyIcon,
};

const RecipeOverview = ({
  type,
  value,
  iconSize = "1.6rem",
  fontSize = "tiny",
}: PropsTypes) => {
  const icon = ICON_MAPPING[type];
  return (
    <FlexBox align="center" gap="0.4rem" width="auto">
      <Image src={icon} width={iconSize} height={iconSize} alt={type} />
      <Text
        type={{ mobile: fontSize, desktop: fontSize }}
        styles={{ color: COLORS["gray-700"] }}
      >
        {value}
      </Text>
    </FlexBox>
  );
};

export default RecipeOverview;
