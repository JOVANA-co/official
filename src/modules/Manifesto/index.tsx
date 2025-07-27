"use client";

import styled from "styled-components";

import Background from "@/components/Background";
import Title from "@/components/Title";
import { clamp } from "@/utils/css";

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${clamp(96)} ${clamp(431)};
  width: 100%;
  gap: ${clamp(32)};
  background-color: ${({ theme }) => theme.black};
`;

export default function Manifesto() {
  return (
    <>
      <Intro>
        <Title>Manifesto</Title>
        Join us in shaping a decentralized future where everyone has a stake in
        success.
      </Intro>
      <Background center>
        <Title>JOVANA will be all across the world!</Title>
      </Background>
    </>
  );
}
