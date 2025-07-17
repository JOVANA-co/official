import styled from "styled-components";

import Background from "@/components/Background";
import Button from "@/components/Button";
import Title from "@/components/Title";
import { MOBILE_WITH } from "@/constants/rwd";
import theme from "@/providers/theme/theme";
import { clamp } from "@/utils/css";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

const Description = styled.p`
  max-width: 55%;
  text-align: center;

  @media (max-width: ${MOBILE_WITH}px) {
    max-width: 100%;
  }
`;

export default function Manifesto() {
  return (
    <Background
      center
      style={{ display: "flex" }}
      backDropProps={{ style: { padding: `${clamp(96)} ${clamp(228)}` } }}
    >
      <ContentContainer>
        <Title mobileScaleRatio={0.7}>JOVANA&apos;s Manifesto</Title>
        <Description>
          JOVANA is a revolutionary movement creating core chips and cyber
          rebels to build a decentralized, people-owned universe—propelling
          human progress and redefining Web3 culture.
        </Description>
        <Button style={{ backgroundColor: theme.white }}>Learn More</Button>
      </ContentContainer>
    </Background>
  );
}
