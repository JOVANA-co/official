import styled from "styled-components";

import Background from "@/components/Background";

type TransitionProps = React.HTMLAttributes<HTMLDivElement>;

const TransitionSection = styled.div`
  display: flex;
  padding: 4rem calc(1rem * 112 / 16);
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.primary[950]} 0%,
    ${({ theme }) => theme.primary[600]} 49.52%,
    ${({ theme }) => theme.primary[950]} 100%
  );
`;

export default function Transition({ children, ...props }: TransitionProps) {
  return (
    <TransitionSection {...props}>
      <Background center backDropProps={{ style: { padding: "18rem 22rem" } }}>
        {children}
      </Background>
    </TransitionSection>
  );
}
