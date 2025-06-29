"use client";

import styled from "styled-components";

import Title from "@/components/Title";
import { percentageOfFigma } from "@/utils/css";

const Container = styled.div`
  padding: ${percentageOfFigma(300).max} ${percentageOfFigma(200).max};
  display: flex;
  flex-direction: column;
  row-gap: 50px;
`;

const Content = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;

  li {
    list-style-type: none;
    color: white;
    font-size: 1.5rem;
  }
`;

export default function Manifesto() {
  return (
    <Container>
      <Title style={{ width: "fit-content", fontWeight: "bold" }}>JOVANA</Title>
      <Content>
        <li>JOVANA is a company that produces core chips and cyber rebels.</li>
        <li>JOVANA&apos;s vision is to build a Decentralized World.</li>
        <li>
          JOVANA is dedicated to create a universe owned and shared by the
          people.
        </li>
        <li>
          JOVANA is aimed to push the human race forward. Maximize utility and
          efficiency by taking full advantage of finance.
        </li>
      </Content>
      <Content>
        <li>JOVANA is not only a surging force of WEB3 Internet.</li>
        <li>JOVANA is a movement.</li>
        <li>JOVANA is a spirit.</li>
        <li>JOVANA is a culture.</li>
        <li> JOVANA is a symbol.</li>
      </Content>
    </Container>
  );
}
