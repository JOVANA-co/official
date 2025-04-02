"use client";

import styled from "styled-components";

import TitleWrapper from "@/components/Title";
import { percentageOfFigma, rwdFontSize } from "@/utils/css";

const Container = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
  justify-content: space-evenly;
`;

const ContentWrapper = styled.div`
  border: 5px solid transparent; /* 需要 transparent 才看得到底下的漸層 */
  border-right: none;
  border-image: linear-gradient(to right, #a93484, white);
  border-image-slice: 1;
  padding: ${percentageOfFigma(70).max} ${percentageOfFigma(150).max}
    ${percentageOfFigma(70).max} ${percentageOfFigma(70).max};
  width: ${percentageOfFigma(1325).max};

  line-height: ${rwdFontSize(54)};
  text-align: justify;
  color: white;

  ${rwdFontSize(54)}
`;

export default function About() {
  return (
    <Container>
      <TitleWrapper style={{ width: "50vw" }}>JOVANA NFT</TitleWrapper>
      <ContentWrapper>
        <p>
          JOVANA NFT is a collection of 10,000 AI-Driven Interactive cyberpunks
          that grant you membership access to the organization: a group of
          rebels who aren’t fond of rules, and have no respect for the status
          quo.
        </p>
        <p>
          JOVANA holders receive access to exclusive experiences, sick stuffs
          and much more.
        </p>
      </ContentWrapper>
    </Container>
  );
}
