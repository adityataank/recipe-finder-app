import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import { DEVICE } from "../utils/constants";
import SearchSection from "../components/SearchSection";
import FlexBox from "../components/UI/FlexBox";

function Layout() {
  return (
    <LayoutWrapper>
      <NavBar />
      <FlexBox type="column" gap="3.2rem">
        <SearchSection />
        <PageWrapper>
          <Outlet />
        </PageWrapper>
      </FlexBox>
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.main`
  padding-top: 9.2rem;
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

const PageWrapper = styled.div`
  height: calc(100dvh - 24rem);
  overflow: auto;
  // &::-webkit-scrollbar {
  //   display: none;
  // }
  width: 100%;
  @media ${DEVICE.tablet} {
    height: calc(100dvh - 14.4rem);
  }
`;

export default Layout;
