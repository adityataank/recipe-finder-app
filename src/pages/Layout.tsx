import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import styled from "styled-components";

function Layout() {
  return (
    <LayoutWrapper>
      <NavBar />
      <PageWrapper>
        <Outlet />
      </PageWrapper>
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.main`
  height: calc(100dvh - 1.6rem);
  padding-left: 38.6rem;
`;

const PageWrapper = styled.div`
  padding-top: 4rem;
  padding-right: 11.8rem;
`;

export default Layout;
