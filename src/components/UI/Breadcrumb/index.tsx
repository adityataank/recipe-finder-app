import { Children } from "react";
import styled from "styled-components";

import Text from "../Text";
import Image from "../Image";
import RouteLink from "../RouteLink";
import ChevronIcon from "../../../assets/Icons/chevron_right.svg";

import { HistoryItemTypes } from "../../../utils/component-interfaces";

interface BreadcrumbProps {
  history: HistoryItemTypes[];
}

const Breadcrumb = ({ history }: BreadcrumbProps) => {
  return (
    history?.length && (
      <Wrapper>
        {Children.toArray(
          history.map((item) => {
            return (
              item.name &&
              item.name !== "undefined" && (
                <>
                  <RouteLink href={item.route} color="#000">
                    <Text
                      type={{ mobile: "tiny", desktop: "tiny" }}
                      styles={{ color: "#000", weight: 500 }}
                    >
                      {item.name}
                    </Text>
                  </RouteLink>
                  <Image
                    src={ChevronIcon}
                    width="1.2rem"
                    height="1.2rem"
                    alt="chevron"
                  />
                </>
              )
            );
          })
        )}
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  p {
    cursor: pointer;
    text-transform: capitalize;
  }
  img {
    &:last-child {
      display: none;
    }
  }
`;

export default Breadcrumb;
