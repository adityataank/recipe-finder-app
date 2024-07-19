import FlexBox from "../UI/FlexBox";
import Headline from "../UI/Headline";
import Text from "../UI/Text";

import { COLORS } from "../../utils/constants";
import { Children } from "react";

const Instructions = ({ instructions }: { instructions: string }) => {
  const instructionsArray = instructions?.split("\r\n");

  return (
    <FlexBox type="column" gap="2.4rem" width="auto">
      <Headline type={{ mobile: "h3", desktop: "h2" }} styles={{ weight: 400 }}>
        Instructions
      </Headline>
      {Children.toArray(
        instructionsArray.map(
          (instruction) =>
            instruction && (
              <Text
                type={{ mobile: "small", desktop: "small" }}
                styles={{ color: COLORS["gray-700"] }}
              >
                {instruction}
              </Text>
            )
        )
      )}
    </FlexBox>
  );
};

export default Instructions;
