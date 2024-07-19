import { Outlet, useParams } from "react-router-dom";
import styled from "styled-components";

import Breadcrumb from "../../components/UI/Breadcrumb";
import { COLORS, DEVICE } from "../../utils/constants";
import RouteLink from "../../components/UI/RouteLink";
import FlexBox from "../../components/UI/FlexBox";

const PluralFilterNames: { [key: string]: string } = {
  category: "categories",
  area: "areas",
  ingredient: "ingredients",
};

const RecipesLayout = () => {
  const { filter = "category", filterValue } = useParams();

  const history = [
    {
      name: "Recipes",
      route: `/recipes/${filter}`,
    },
    {
      name: PluralFilterNames[filter],
      route: `/recipes/${filter}`,
    },
    {
      name: filterValue,
      route: `/recipes/${filter}/${filterValue}`,
    },
  ];

  return (
    <FlexBox type="column" gap={"2.4rem"}>
      <FlexBox type="column" height="auto" gap="2.4rem">
        <Breadcrumb history={history} />
        <DividerLine />
        <RouteLink href="" leftArrow shouldGoBack>
          Go back
        </RouteLink>
      </FlexBox>
      <PageWrapper>
        <Outlet />
      </PageWrapper>
    </FlexBox>
  );
};

const PageWrapper = styled.div`
  overflow: auto;
  height: calc(100dvh - 13.8rem);
  width: 100%;
  padding-bottom: 4rem;
  @media ${DEVICE.tablet} {
    height: calc(100dvh - 19rem);
  }
`;

const DividerLine = styled.hr`
  height: 0.1rem;
  width: 100%;
  background: ${COLORS["gray-100"]};
  border: 0;
  margin: 0;
`;

export default RecipesLayout;
