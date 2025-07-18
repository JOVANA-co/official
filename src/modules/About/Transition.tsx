import Image from "next/image";
import styled from "styled-components";

import Title from "@/components/Title";
import { clamp, rwdFontSize } from "@/utils/css";

import Demo from "@/assets/images/Demo.png";

const TransitionContainer = styled.div`
  width: 100%;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.primary[900]} 0%,
    ${({ theme }) => theme.gray[950]} 100%
  );
  padding: ${clamp(64)} ${clamp(80)};
  display: flex;
  align-items: center;
  gap: ${clamp(32)};
`;

const Description = styled.p`
  font-weight: 400;
  ${rwdFontSize(18)}
  margin-top: ${clamp(16)};
`;

export default function Transition() {
  return (
    <TransitionContainer>
      <Title
        size={48}
        mobileScaleRatio={0.2}
        style={{ textAlign: "left", marginBottom: 0 }}
      >
        What do JOVANA holders receive?
        <Description>
          JOVANA holders receive access to exclusive experiences, sick stuffs
          and much more.
        </Description>
      </Title>
      <Image
        src={Demo}
        alt="Picture of the author"
        priority
        style={{
          width: "50%",
          height: "auto",
        }}
      />
    </TransitionContainer>
  );
}
