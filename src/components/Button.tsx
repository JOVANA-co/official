import styled from "styled-components";

import type { Theme } from "@/providers/theme/theme";
import type { ReactNode } from "react";

import { MOBILE_WITH } from "@/constants/rwd";

type ButtonColor = Exclude<keyof Theme, "white" | "black">;

interface ButtonProps extends React.ComponentProps<"button"> {
  children: ReactNode;
  color?: ButtonColor;
}

const ButtonWrapper = styled.button<{ $color?: ButtonColor }>`
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  font-family: var(--exo-2);
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(88, 136, 161, 0.3);
  background: ${({ theme, $color = "secondary" }) => theme[$color][600]};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 20px rgba(88, 136, 161, 0.4);
    background: ${({ theme, $color = "secondary" }) => theme[$color][100]};
  }

  &:active {
    transform: translateY(0);
    background: ${({ theme, $color = "secondary" }) => theme[$color][900]};
  }

  @media (max-width: ${MOBILE_WITH}px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
`;

export default function Button({ color = "secondary", ...props }: ButtonProps) {
  return (
    <ButtonWrapper data-component="Button" $color={color} {...props}>
      {props.children}
    </ButtonWrapper>
  );
}
