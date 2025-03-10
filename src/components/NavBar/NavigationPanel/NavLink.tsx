import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import FlexBox from "../../UI/FlexBox";
import Text from "../../UI/Text";

import HomeIcon from "../../UI/Icons/NavIcons/Home";
import RecipeIcon from "../../UI/Icons/NavIcons/Recipe";
import CommunityIcon from "../../UI/Icons/NavIcons/Community";
import SavedIcon from "../../UI/Icons/NavIcons/Saved";
import SettingsIcon from "../../UI/Icons/NavIcons/Settings";

import { COLORS, DEVICE } from "../../../utils/constants";
import { Analytics } from "../../../lib/analytics";

interface NavLinkProps {
  name: string;
  linkKey: string;
  route: string;
}

// mapping side nav icons with link key.
const IconMapping: { [key: string]: React.ReactNode } = {
  home: <HomeIcon />,
  recipes: <RecipeIcon />,
  community: <CommunityIcon />,
  settings: <SettingsIcon />,
  "saved-recipes": <SavedIcon />,
};

const NavLink = ({ name, linkKey, route }: NavLinkProps) => {
  const { pathname } = useLocation();

  const checkActiveLink = () => {
    const path = pathname.split("/");
    return (linkKey === "home" && pathname === "/") || path[1] === linkKey;
  };

  const handleClick = () => {
    Analytics.track("nav-link-click", {
      name,
    });
  };

  const toPath: string = `${route}`;
  const textColor: string = checkActiveLink()
    ? COLORS["green-600"]
    : COLORS["gray-600"];

  return (
    <CustomLink to={toPath} isActive={checkActiveLink()} onClick={handleClick}>
      <FlexBox justify="start" align="center" gap="1.2rem">
        {IconMapping[linkKey]}
        <Text
          styles={{ weight: 500, color: textColor }}
          type={{ mobile: "small", desktop: "small" }}
        >
          {name}
        </Text>
      </FlexBox>
    </CustomLink>
  );
};

const CustomLink = styled(Link)<{ isActive: boolean }>`
  text-decoration: none;
  svg {
    path {
      fill: ${(props) =>
        props.isActive ? COLORS["green-600"] : COLORS["gray-300"]};
    }
  }
  &:last-child {
    margin-top: initial;
  }
  p {
    display: none;
  }
  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
  ${(props) =>
    !props.isActive &&
    `:hover {
    p {color: ${COLORS["gray-700"]};}
    svg path {
      fill: ${COLORS["gray-500"]};
    }
  }`}
  @media ${DEVICE.tablet} {
    svg {
      width: 2rem;
      height: 2rem;
    }
    p {
      display: block;
    }
    &:last-child {
      margin-top: auto;
    }
  }
`;

export default NavLink;
