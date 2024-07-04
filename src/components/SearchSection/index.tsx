import HeadlineOne from "../UI/Headlines/HeadlineOne";
import SearchBar from "../SearchBar";
import FlexBox from "../UI/FlexBox";

const SearchSection = () => {
  return (
    <FlexBox style={{ "justify-content": "space-between" }}>
      <HeadlineOne styles={{ "font-weight": "normal" }}>
        Discover Recipes
      </HeadlineOne>
      <SearchBar />
    </FlexBox>
  );
};

export default SearchSection;
