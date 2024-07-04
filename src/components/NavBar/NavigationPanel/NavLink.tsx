import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import FlexBox from "../../UI/FlexBox";
import Text from "../../UI/Text";

import HomeIcon from "../../UI/Icons/NavIcons/Home";
import RecipeIcon from "../../UI/Icons/NavIcons/Recipe";
import CommunityIcon from "../../UI/Icons/NavIcons/Community";
import SavedIcon from "../../UI/Icons/NavIcons/Saved";
import SettingsIcon from "../../UI/Icons/NavIcons/Settings";

import { DEVICE } from "../../../utils/constants";

interface NavLinkProps {
  name: string;
  linkKey: string;
}

// mapping side nav icons with link key.
const IconMapping: { [key: string]: React.ReactNode } = {
  home: <HomeIcon />,
  recipes: <RecipeIcon />,
  community: <CommunityIcon />,
  settings: <SettingsIcon />,
  "saved-recipes": <SavedIcon />,
};

const NavLink = ({ name, linkKey }: NavLinkProps) => {
  const { pathname } = useLocation();

  const checkActiveLink = () => {
    const path = pathname.split("/");
    return path[1] === linkKey || (!path[1] && linkKey === "home");
  };

  const toPath: string = `/${linkKey}`;

  return (
    <CustomLink to={toPath} isActive={checkActiveLink()}>
      <FlexBox
        type="row"
        style={{ "justify-content": "flex-start", gap: "1.2rem" }}
      >
        <SvgWrapper>{IconMapping[linkKey]}</SvgWrapper>
        <Text styles={{ "font-weight": "500" }} type="small">
          {name}
        </Text>
      </FlexBox>
    </CustomLink>
  );
};

const CustomLink = styled(Link)<{ isActive: boolean }>`
  text-decoration: none;
  color: ${(props) => (props.isActive ? "#089B12" : "#647181")};
  svg {
    path {
      fill: ${(props) => (props.isActive ? "#089B12" : "#AAB1BB")};
    }
  }
  @media ${DEVICE.desktop} {
    &:last-child {
      margin-top: auto;
    }
  }
  @media ${DEVICE.mobile} {
    p {
      display: none;
    }
  }
  ${(props) =>
    !props.isActive &&
    `:hover {
    color: #44505f;
    svg path {
      fill: #727e8d;
    }
  }`}
`;

const SvgWrapper = styled.span`
  width: 2rem;
  height: 2rem;
  display: grid;
  place-items: center;
  align-content: center;
  svg {
    @media ${DEVICE.tablet} {
      transform: scale(0.8);
    }
    @media ${DEVICE.mobile} {
      transform: scale(1.2);
    }
  }
`;

export default NavLink;
