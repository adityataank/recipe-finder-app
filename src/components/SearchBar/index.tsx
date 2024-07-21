import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";

import SearchIcon from "../UI/Icons/SearchIcon";
import CloseIcon from "../UI/Icons/CloseIcon";

import { COLORS, DEVICE, OVERLAY_Z_INDEX } from "../../utils/constants";
import { debounce } from "../../lib/debounce";

interface SearchBarProps {
  isFocused?: boolean;
  setIsFocused?: (isFocused: boolean) => void;
  query: string;
  setQuery: (query: string) => void;
  setOpenSearchModal?: (state: boolean) => void;
  expandSearchBar: boolean;
}

const SearchBar = ({
  isFocused = false,
  setIsFocused = () => {},
  query = "",
  setQuery = () => {},
  setOpenSearchModal = () => {},
  expandSearchBar = false,
}: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [inputText, setInputText] = useState<string>("");

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(false);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedHandleChange = useCallback(
    debounce((event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    }, 500),
    []
  );

  // resetting every state on close
  const handleClose = () => {
    if (expandSearchBar) {
      setOpenSearchModal(false);
      setIsFocused(false);
      setQuery("");
      setInputText("");
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val: string = e.target.value;
    setInputText(val);
    if (val === "") {
      return setQuery(val);
    }
    debouncedHandleChange(e);
  };

  const Icon = isFocused || inputText ? <CloseIcon /> : <SearchIcon />;

  return (
    <Wrapper
      isFocused={isFocused}
      isSearched={Boolean(query)}
      expandSearchBar={expandSearchBar}
    >
      <Input
        value={inputText}
        placeholder="Search for any recipe"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleInput}
        ref={inputRef}
        isFocused={isFocused}
      />
      <IconWrapper onMouseDown={handleClose}>{Icon}</IconWrapper>
    </Wrapper>
  );
};

const changeBackground = (color: string | number, isImp?: boolean) => {
  return `background: ${color} ${isImp ? "!important" : ""};
    input {
      background: ${color} ${isImp ? "!important" : ""};
    }`;
};

const Wrapper = styled.form<{
  isFocused: boolean;
  isSearched: boolean;
  expandSearchBar: boolean;
}>`
  z-index: ${OVERLAY_Z_INDEX + 1};
  height: 5.6rem;
  border-radius: 0.8rem;
  border: 0.1rem solid
    ${(props) => (props.isFocused ? COLORS["green-600"] : COLORS["gray-200"])};
  display: grid;
  grid-template-columns: auto 6rem;
  background: ${COLORS.white};
  transition: all 150ms linear;
  width: 100%;
  &:hover {
    ${changeBackground(COLORS["gray-50"], false)}
    svg {
      path {
        fill: ${COLORS["gray-700"]};
      }
    }
  }

  @media ${DEVICE.tablet} {
    width: 30rem;
  }
  @media ${DEVICE.laptop} {
    width: 44.8rem;
  }

  ${(props) =>
    props.isFocused &&
    `
    transition: all 300ms linear;
    box-shadow: 0 0 0 .4rem #15C4213D;
      ${changeBackground(COLORS["white"], true)}
      &:hover {
      svg {
      path{
        fill: ${COLORS["gray-500"]};
      }}
    }
    `}
  ${(props) =>
    props.expandSearchBar &&
    `@media ${DEVICE.tablet} {
      width: 100%;
    }`}
  ${(props) => props.isSearched && "width: 100% !important;"}
`;

const Input = styled.input<{ isFocused: boolean }>`
  height: 100%;
  font-size: 1.8rem;
  line-height: 2.4rem;
  letter-spacing: -0.01em;
  color: ${COLORS["primary-black"]};
  outline: none;
  border: none;
  border-radius: 0.8rem 0 0 0.8rem;
  padding-left: 2rem;
  transition: all 150ms linear;
  &::placeholder {
    color: ${COLORS["gray-400"]};
  }
  &:hover {
    &::placeholder {
      color: ${COLORS["gray-500"]};
    }
  }

  ${(props) => props.isFocused && "transition: all 300ms linear;"}
`;

const IconWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  border-radius: 0 0.8rem 0.8rem 0;
  svg {
    width: 2rem;
    height: 2rem;
  }
  cursor: pointer;
`;

export default SearchBar;
