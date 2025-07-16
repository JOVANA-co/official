"use client";

import Image from "next/image";
import styled from "styled-components";

import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Title from "@/components/Title";
import About from "@/modules/Main/About";
import Transition from "@/modules/Main/components/Transition";
import FAQ from "@/modules/Main/FAQ";
import Mail from "@/modules/Main/Mail";
import Manifesto from "@/modules/Main/Manifesto";
import RoadMap from "@/modules/Main/RoadMap";

import Demo from "@/assets/images/Demo.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #fff;
`;

const Introduction = styled.div`
  display: flex;
  padding: 4rem calc(1rem * 112 / 16);
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.primary[950]} 0%,
    ${({ theme }) => theme.primary[900]} 100%
  );
`;

const Description = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: calc(1rem * 18 / 16);
  font-weight: 400;
`;

export default function Main() {
  return (
    <Container>
      <Header />
      <Introduction>
        <Image
          src={Demo}
          alt="Picture of the author"
          style={{
            width: "calc(100% * 1240 / 1440)",
            height: "auto",
          }}
        />
        <Title
          style={{ margin: "4rem 0 2rem", fontSize: "calc(1rem * 60 / 16)" }}
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
        <Title>What exactly are we going to do?</Title>
      </Transition>
      <RoadMap />
      <Transition>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Title>We make our holders fucking damn rich!</Title>
          <Title style={{ fontSize: "calc(1rem * 30 / 16)" }}>And...</Title>
        </div>
      </Transition>
      <Background
        center
        backDropProps={{
          style: { margin: "4rem 5rem", padding: "16rem 22rem" },
        }}
      >
        <Title>JOVANA will be all across the world!</Title>
      </Background>
      <FAQ />
      <Mail />
      <Footer />
    </Container>
  );
}
