import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import { DEVICE } from "../utils/constants";
import SearchSection from "../components/SearchSection";

function Layout() {
  return (
    <LayoutWrapper>
      <NavBar />
      <SearchSection />
      <PageWrapper>
        <Outlet />
      </PageWrapper>
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.main`
  height: calc(100dvh - 5.8rem);
  padding-top: 10rem;
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
  
`;

export default Layout;
