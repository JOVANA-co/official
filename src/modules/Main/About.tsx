"use client";

import styled from "styled-components";

import Button from "@/components/Button";
import Title from "@/components/Title";
import Carousel from "@/modules/Main/components/Carousel";
import { clamp, rwdFontSize } from "@/utils/css";

import Demo from "@/assets/images/Demo.png";

const AboutSection = styled.section`
  display: flex;
  padding: ${clamp(64)} 0px;
  flex-direction: column;
  align-items: center;
  gap: ${clamp(40, 2)};
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.primary[900]} 0%,
    ${({ theme }) => theme.primary[600]} 100%
  );
`;

const DescriptionWrapper = styled.div`
  padding: 0 ${clamp(128)};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 100%;
`;

const Subtitle = styled.p`
  ${rwdFontSize(16)}
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
        <Title mobileScaleRatio={0.7}>About JOVANA</Title>
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
