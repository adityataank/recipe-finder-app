import { useState, useRef } from "react";
import styled from "styled-components";

import SearchIcon from "../UI/Icons/SearchIcon";
import CloseIcon from "../UI/Icons/CloseIcon/CloseIcon";

import { COLORS, DEVICE } from "../../utils/constants";

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e?.target?.value || "");

  const handleIconClick = () => {
    if (query) {
      setQuery("");
      inputRef?.current?.blur();
    } else {
      inputRef?.current?.focus();
    }
  };

  const Icon = isFocused || query ? CloseIcon : SearchIcon;

  return (
    <Wrapper isFocused={isFocused}>
      <Input
        value={query}
        placeholder="Search for any recipe"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleQuery}
        ref={inputRef}
      />
      <span onClick={handleIconClick}>
        <Icon />
      </span>
    </Wrapper>
  );
};

const changeBackground = (color: string | number, isImp?: boolean) => {
  return `background: ${color} ${isImp ? "!important" : ""};
    input {
      background: ${color} ${isImp ? "!important" : ""};
    }`;
};

const Wrapper = styled.form<{ isFocused: boolean }>`
  height: 5.6rem;
  border-radius: 0.8rem;
  border: 0.1rem solid
    ${(props) => (props.isFocused ? COLORS["green-600"] : COLORS["gray-200"])};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  span {
    svg {
      width: 2rem;
      height: 2rem;
    }
    cursor: pointer;
  }
  &:hover {
    ${changeBackground(COLORS["gray-50"], false)}
    svg {
      path {
        fill: ${COLORS["gray-700"]};
      }
    }
  }
  width: 100%;
  @media ${DEVICE.tablet} {
    width: 30rem;
  }
  @media ${DEVICE.laptop} {
    width: 40.6rem;
  }
  ${(props) =>
    props.isFocused &&
    `
    box-shadow: 0px 0px 0px 4px #15C4213D;
      ${changeBackground(COLORS["white"], true)}
      &:hover {
      svg {
      path{
        fill: ${COLORS["gray-500"]};
      }}
    }
    `}
`;

const Input = styled.input`
  height: 90%;
  width: calc(100% - 4rem);
  font-size: 1.8rem;
  line-height: 2.4rem;
  color: ${COLORS["primary-black"]};
  outline: none;
  border: none;
  letter-spacing: 0.05rem;
  &:focus {
  }
  &::placeholder {
    color: ${COLORS["gray-400"]};
  }
`;

export default SearchBar;
