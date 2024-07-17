
import FlexBox from "../UI/FlexBox";
import Text from "../UI/Text";
import Image from "../UI/Image";

import { COLORS } from "../../utils/constants";

import TimeIcon from "../../assets/Icons/time.svg";
import DifficultyIcon from "../../assets/Icons/difficulty.svg";

const ICON_MAPPING = {
  time: TimeIcon,
  difficulty: DifficultyIcon,
};

const RecipeOverview = ({
    type,
    value,
  }: {
    type: "time" | "difficulty";
    value: string;
  }) => {
    const icon = ICON_MAPPING[type];
    return (
      <FlexBox align="center" gap="0.4rem" width="auto">
        <Image src={icon} width={1.6} height={1.6} alt={type} />
        <Text
          type={{ mobile: "tiny", desktop: "tiny" }}
          styles={{ color: COLORS["gray-700"] }}
        >
          {value}
        </Text>
      </FlexBox>
    );
  };

export default RecipeOverview