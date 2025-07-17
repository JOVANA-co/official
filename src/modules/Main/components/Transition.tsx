import styled from "styled-components";

import Background from "@/components/Background";
import Title from "@/components/Title";
import { MOBILE_WITH } from "@/constants/rwd";
import { clamp } from "@/utils/css";

type TransitionProps = React.HTMLAttributes<HTMLDivElement>;

const TransitionSection = styled.div`
  display: flex;
  padding: ${clamp(64)} ${clamp(80)};
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.primary[950]} 0%,
    ${({ theme }) => theme.primary[600]} 49.52%,
    ${({ theme }) => theme.primary[950]} 100%
  );

  @media (max-width: ${MOBILE_WITH}px) {
    padding: ${clamp(80)} ${clamp(80)};
  }
`;

export default function Transition({ children, ...props }: TransitionProps) {
  return (
    <TransitionSection {...props}>
      <Background center>{children}</Background>
    </TransitionSection>
  );
}

export const TransitionTitle = styled(Title)`
  margin: ${clamp(288)} ${clamp(352)};

  @media (max-width: ${MOBILE_WITH}px) {
    margin: ${clamp(288)} ${clamp(160)};
  }
`;
