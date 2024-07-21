import Button from "../UI/Button";
import FlexBox from "../UI/FlexBox";

import DownArrowIcon from "../UI/Icons/DownArrowIcon";
import SaveIcon from "../UI/Icons/SaveIcon";
import SavedIcon from "../UI/Icons/NavIcons/Saved";

interface ButtonsGroupProps {
  clickHandlers: {
    goToRecipe: () => void;
    saveRecipe: () => void;
    removeSavedRecipe: () => void;
  };
  isSaved: boolean;
}

const ButtonsGroup = ({
  clickHandlers,
  isSaved = false,
}: ButtonsGroupProps) => {
  const secondaryButtonText = isSaved ? "Saved" : "Save recipe";
  const secondaryButtonIcon = isSaved ? (
    <SavedIcon color="red" />
  ) : (
    <SaveIcon />
  );

  const { goToRecipe, saveRecipe, removeSavedRecipe } = clickHandlers;

  return (
    <FlexBox height="auto" gap="1.2rem" styles={{ flexWrap: "wrap" }}>
      <Button RightIcon={<DownArrowIcon />} handleClick={goToRecipe}>
        Go to recipe
      </Button>
      <Button
        type="secondary"
        RightIcon={secondaryButtonIcon}
        handleClick={isSaved ? removeSavedRecipe : saveRecipe}
      >
        {secondaryButtonText}
      </Button>
    </FlexBox>
  );
};

export default ButtonsGroup;
