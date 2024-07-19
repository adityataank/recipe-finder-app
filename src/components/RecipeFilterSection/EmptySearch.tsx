import styled from "styled-components";

import Text from "../UI/Text";
import FlexBox from "../UI/FlexBox";
import Image from "../UI/Image";

import { COLORS } from "../../utils/constants";

import EmptyIcon from "../../assets/empty.svg";

interface PropsTypes {
  isSearched: boolean;
}

const noResultsText = "Sorry, there are no recipes like that";

const SearchPrompt = () => (
  <Text
    type={{ mobile: "tiny", desktop: "tiny" }}
    styles={{ color: COLORS["gray-500"] }}
  >
    Start Searching for your recipe
  </Text>
);

const NoResults = () => (
  <FlexBox type="column" align="center" width="auto" height="auto" gap="1.6rem">
    <Image src={EmptyIcon} width="11.2rem" height="11.2rem" alt="empty" />
    <Text type={{ mobile: "tiny", desktop: "tiny" }}>{noResultsText}</Text>
  </FlexBox>
);

const EmptySearch = ({ isSearched }: PropsTypes) => {
  return <Wrapper>{isSearched ? <NoResults /> : <SearchPrompt />}</Wrapper>;
};

const Wrapper = styled.div`
  height: 30.4rem;
  border-radius: 0.4rem;
  background: ${COLORS["gray-50"]};
  display: grid;
  place-items: center;
`;

export default EmptySearch;
