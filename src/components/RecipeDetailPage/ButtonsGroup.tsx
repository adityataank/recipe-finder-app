import Button from "../UI/Button";
import FlexBox from "../UI/FlexBox";

import DownArrowIcon from "../UI/Icons/DownArrowIcon";
import SaveIcon from "../UI/Icons/SaveIcon";

interface ButtonsGroupProps {
  clickHandlers: { goToRecipe: () => void; saveRecipe: () => void };
}

const ButtonsGroup = ({ clickHandlers }: ButtonsGroupProps) => {
  return (
    <FlexBox height="auto" gap="1.2rem" styles={{ flexWrap: "wrap" }}>
      <Button
        RightIcon={<DownArrowIcon />}
        handleClick={clickHandlers.goToRecipe}
      >
        Go to recipe
      </Button>
      <Button
        type="secondary"
        RightIcon={<SaveIcon />}
        handleClick={clickHandlers.saveRecipe}
      >
        Save recipe
      </Button>
    </FlexBox>
  );
};

export default ButtonsGroup;
