import styled from "styled-components";

import SearchSection from "../components/SearchSection";

function Home() {
  return (
    <PageWrapper>
      <SearchSection />
    </PageWrapper>
  );
}

const PageWrapper = styled.section``;

export default Home;
