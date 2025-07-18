"use client";

import Image from "next/image";
import styled from "styled-components";

import Background from "@/components/Background";
import Title from "@/components/Title";
import Mail from "@/modules/About/Mail";
import About from "@/modules/Main/About";
import Transition, {
  TransitionTitle,
} from "@/modules/Main/components/Transition";
import FAQ from "@/modules/Main/FAQ";
import Manifesto from "@/modules/Main/Manifesto";
import RoadMap from "@/modules/Main/RoadMap";
import { clamp, rwdFontSize } from "@/utils/css";

import Demo from "@/assets/images/Demo.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Introduction = styled.section`
  display: flex;
  padding: ${clamp(64)} ${clamp(128)};
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.primary[950]} 0%,
    ${({ theme }) => theme.primary[900]} 100%
  );
`;

const Description = styled.p`
  font-weight: 400;
  ${rwdFontSize(18)}
`;

export default function Main() {
  return (
    <Container>
      <Introduction>
        <Image
          src={Demo}
          alt="Picture of the author"
          priority
          style={{
            width: "calc(100% * 1240 / 1440)",
            height: "auto",
          }}
        />
        <Title
          size={60}
          style={{
            margin: `${clamp(64)} 0 ${clamp(32)}`,
          }}
        >
          Welcome! This is JOVANA.
        </Title>
        <Description>
          We determined to build and shape this world into &quot;the future of
          the future&quot;.
        </Description>
      </Introduction>
      <About />
      <Manifesto />
      <Transition>
        <TransitionTitle>What exactly are we going to do?</TransitionTitle>
      </Transition>
      <RoadMap />
      <Transition>
        <TransitionTitle
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Title>We make our holders fucking damn rich!</Title>
          <Title size={30}>And...</Title>
        </TransitionTitle>
      </Transition>
      <Background
        center
        backDropProps={{
          style: {
            margin: `${clamp(64)} ${clamp(80)}`,
          },
        }}
      >
        <TransitionTitle>JOVANA will be all across the world!</TransitionTitle>
      </Background>
      <FAQ />
      <Mail />
    </Container>
  );
}
