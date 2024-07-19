import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import SearchBar from "../SearchBar";
import FlexBox from "../UI/FlexBox";
import Modal from "../UI/Modal";
import Headline from "../UI/Headline";
import RecipeFilterSection from "../RecipeFilterSection";

import { DEVICE } from "../../utils/constants";

interface SearchModalProps {
  open: boolean;
  handleClose: () => void;
  query: string;
}

const ModalStyles = {
  placement: { top: "6.4rem" },
  width: "100%",
  height: "100%",
};

const SearchModal = ({ open, handleClose, query }: SearchModalProps) => (
  <Modal
    open={open}
    handleClose={handleClose}
    position="absolute"
    styles={ModalStyles}
  >
    <RecipeFilterSection startSearch={open} query={query} />
  </Modal>
);

// -------------------------------------------------------------------------------------------

const SearchSection = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [openSearchModal, setOpenSearchModal] = useState<boolean>(false);

  const { pathname } = useLocation();
  const isHomePage: boolean = pathname.length === 1 || pathname === "/";

  const expandSearchBar: boolean =
    openSearchModal || Boolean(isFocused || query);

  useEffect(() => {
    if (isFocused) {
      setOpenSearchModal(true);
    }
  }, [isFocused, query]);

  useEffect(() => {
    if (pathname) {
      setOpenSearchModal(false);
    }
  }, [pathname]);

  return (
    <FlexBox justify="between" align="center">
      <SearchModal
        open={openSearchModal}
        handleClose={() => setOpenSearchModal(false)}
        query={query}
      />

      <HeadlineWrapper hideSearch={isHomePage} shrinkHeadline={expandSearchBar}>
        <Headline
          styles={{ weight: 400, color: "#000000" }}
          type={{ mobile: "h1", desktop: "h1" }}
        >
          Discover Recipes
        </Headline>
      </HeadlineWrapper>
      <FlexBox justify="end">
        <SearchBar
          isFocused={isFocused}
          setIsFocused={setIsFocused}
          query={query}
          setQuery={setQuery}
          setOpenSearchModal={setOpenSearchModal}
          expandSearchBar={expandSearchBar}
        />
      </FlexBox>
    </FlexBox>
  );
};

// -------------------------------------------------------------------------------------------

const HeadlineWrapper = styled.div<{
  hideSearch: boolean;
  shrinkHeadline: boolean;
}>`
  display: none;
  @media ${DEVICE.tablet} {
    display: block;
    h1 {
      white-space: nowrap;
    }
  }
  ${({ shrinkHeadline }) => shrinkHeadline && "width: 0;"}
`;

export default SearchSection;
