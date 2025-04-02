"use client";

import styled from "styled-components";

import Header from "@/components/Header";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
`;

export default function Main() {
  return (
    <Container>
      <Header />
      <Content></Content>
    </Container>
  );
}
