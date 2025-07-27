"use client";

import { Vampiro_One } from "next/font/google";
import styled from "styled-components";

import type { HTMLAttributes } from "react";

import { rwdFontSize } from "@/utils/css";

interface TitleProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: number;
  mobileScaleRatio?: number;
}

const vampiro = Vampiro_One({
  weight: ["400"],
  variable: "--vampiro-one",
  subsets: ["latin"],
});

const Title = styled.h2<{ $size: number; $mobileScaleRatio?: number }>`
  text-align: center;
  font-family: var(--vampiro-one);
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;

  ${({ $size, $mobileScaleRatio }) =>
    rwdFontSize($size, $mobileScaleRatio ?? 0.5)}
`;

export default function TitleWrapper({
  children,
  size = 48,
  mobileScaleRatio,
  ...props
}: TitleProps) {
  return (
    <div data-component="Title" className={vampiro.className}>
      <Title {...props} $size={size} $mobileScaleRatio={mobileScaleRatio}>
        {children}
      </Title>
    </div>
  );
}
