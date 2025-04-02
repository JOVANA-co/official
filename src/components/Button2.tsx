"use client";

import styled from "styled-components";

import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const ButtonWrapper = styled.button`
  position: relative;
  font-size: 1.2rem;
  padding: 0.5rem 1.5rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 250ms;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  background-color: rgb(124 58 237);
  color: white;
  border-radius: 0.5rem;
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.3),
    0 2px 0 0 rgb(109 40 217), 0 4px 0 0 rgb(91 33 182),
    0 6px 0 0 rgb(76 29 149), 0 8px 0 0 rgb(67 26 131),
    0 8px 16px 0 rgba(147, 51, 234, 0.5);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.2),
      transparent
    );
  }

  &:hover {
    transform: translateY(4px);
    box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.3),
      0 1px 0 0 rgb(109 40 217), 0 2px 0 0 rgb(91 33 182),
      0 3px 0 0 rgb(76 29 149), 0 4px 0 0 rgb(67 26 131),
      0 4px 8px 0 rgba(147, 51, 234, 0.5);
  }
`;

const ContentWrapper = styled.span`
  justify-content: center;
  align-items: center;
  position: relative;
  display: flex;
  gap: 0.25rem;
`;

export default function Button(props: ButtonProps) {
  return (
    <ButtonWrapper onClick={props.onClick}>
      <ContentWrapper>{props.children}</ContentWrapper>
    </ButtonWrapper>
  );
}
