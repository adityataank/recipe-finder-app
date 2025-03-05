import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import NavBar from "../components/NavBar";
import styled from "styled-components";
import SearchSection from "../components/SearchSection";
import FlexBox from "../components/UI/FlexBox";

import { DEVICE } from "../utils/constants";
import { Analytics } from "../lib/analytics";

const pageHeight: { [key: string]: string } = {
  home: "24rem",
  recipes: "8rem",
  "saved-recipes": "12rem",
};

function Layout() {
  const { pathname } = useLocation();
  const pageName = pathname.split("/")[1];

  useLayoutEffect(() => {
    Analytics.track("page-visit", {
      page_name: "home page",
    });
  }, []);

  return (
    <LayoutWrapper page={pageName}>
      <NavBar />
      <FlexBox type="column" gap="3.2rem">
        <SearchWrapper hideSearch={pageName === "recipes"}>
          <SearchSection />
        </SearchWrapper>
        <PageWrapper page={pageName}>
          <Outlet />
        </PageWrapper>
      </FlexBox>
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.main<{ page: string }>`
  padding-top: ${(props) => (!props.page ? "9.2rem" : "0")};
  @media ${DEVICE.tablet} {
    margin-left: 26.8rem;
    padding: 0 4rem;
    padding-top: 4rem;
  }
  @media (min-width: 1100px) and (max-width: 1279px) {
    padding: 0 11.8rem;
    padding-top: 4rem;
  }
  @media ${DEVICE.desktop} {
    margin-left: 26.8rem;
    padding: 0 11.8rem;
    padding-top: 4rem;
  }
`;

const PageWrapper = styled.div<{ page: string }>`
  height: calc(100dvh - ${(props) => pageHeight[props.page] ?? "24rem"});
  overflow: auto;
  width: 100%;
  @media ${DEVICE.tablet} {
    height: calc(100dvh - 15.2rem);
    margin-top: ${(props) => (props.page ? "0.8rem" : "0.4rem")};
    ${(props) => props.page && "overflow: hidden;"}
  }
`;

const SearchWrapper = styled.div<{ hideSearch: boolean }>`
  width: 100%;
  display: ${(props) => (props.hideSearch ? "none" : "block")};
  @media ${DEVICE.tablet} {
    display: block;
  }
`;

export default Layout;
