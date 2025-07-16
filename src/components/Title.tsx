"use client";

import { Vampiro_One } from "next/font/google";
import styled from "styled-components";

import type { HTMLAttributes } from "react";

type TitleProps = HTMLAttributes<HTMLParagraphElement>;

const vampiro = Vampiro_One({
  weight: ["400"],
  variable: "--vampiro-one",
  subsets: ["latin"],
});

const Title = styled.h2`
  text-align: center;
  font-family: var(--vampiro-one);
  font-size: min(3rem, 4vw);
  font-style: normal;
  font-weight: 400;
  line-height: 3rem;
  letter-spacing: 0;

  @media (max-width: 768px) {
    font-size: min(2.5rem, 4vw);
  }
`;

export default function TitleWrapper({ children, ...props }: TitleProps) {
  return (
    <div data-component="Title" className={vampiro.className}>
      <Title {...props}>{children}</Title>
    </div>
  );
}
