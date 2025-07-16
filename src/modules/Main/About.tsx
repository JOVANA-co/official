"use client";

import styled from "styled-components";

import Button from "@/components/Button";
import Title from "@/components/Title";
import Carousel from "@/modules/Main/components/Carousel";

import Demo from "@/assets/images/Demo.png";

const AboutSection = styled.section`
  display: flex;
  padding: 4rem 0px;
  flex-direction: column;
  align-items: center;
  gap: calc(1rem * 40 / 16);
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.primary[900]} 0%,
    ${({ theme }) => theme.primary[600]} 100%
  );
`;

const DescriptionWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const Subtitle = styled.p`
  width: 300px;
`;

const images = [
  Demo.src,
  Demo.src,
  Demo.src,
  Demo.src,
  Demo.src,
  Demo.src,
  Demo.src,
] as const;

export default function About() {
  return (
    <AboutSection>
      <DescriptionWrapper>
        <Title>About JOVANA</Title>
        <Subtitle>
          JOVANA creates 10,000 AI cyberpunk NFTs—built to disrupt, made to
          explore.
        </Subtitle>
      </DescriptionWrapper>
      <Button>Learn More</Button>
      <Carousel images={images} />
    </AboutSection>
  );
}
