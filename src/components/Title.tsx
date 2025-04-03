"use client";

import { Orbitron } from "next/font/google";
import styled from "styled-components";

import type { HTMLAttributes } from "react";

type TitleProps = HTMLAttributes<HTMLParagraphElement>;

export const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const Title = styled.p`
  font-size: 64px;
  color: white;
  text-align: center;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #a54ac4,
    0 0 80px #a54ac4, 0 0 90px #a54ac4;
  z-index: 1;
`;

export default function TitleWrapper({ children, ...props }: TitleProps) {
  return (
    <div data-component="Title" className={orbitron.className} {...props}>
      <Title>{children}</Title>
    </div>
  );
}
