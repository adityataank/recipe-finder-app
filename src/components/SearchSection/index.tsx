import { useLocation } from "react-router-dom";
import styled from "styled-components";

import HeadlineOne from "../UI/Headlines/HeadlineOne";
import SearchBar from "../SearchBar";
import FlexBox from "../UI/FlexBox";
import { DEVICE } from "../../utils/constants";

const SearchSection = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname.length === 1 || pathname.startsWith("/home");
  return (
    <FlexBox style={{ "justify-content": "space-between" }}>
      <SearchWrapper hideSearch={isHomePage}>
        <HeadlineOne styles={{ "font-weight": "normal" }}>
          Discover Recipes
        </HeadlineOne>
      </SearchWrapper>
      <SearchBar />
    </FlexBox>
  );
};
const SearchWrapper = styled.div<{ hideSearch: boolean }>`
  display: none;
  @media ${DEVICE.tablet} {
    display: block;
  }
`;

export default SearchSection;
