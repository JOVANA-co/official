"use client";

import styled from "styled-components";

import { hexToRgb } from "@/utils/color";
import { flexCenterStyle } from "@/utils/css";

import Demo from "@/assets/images/Demo.png";

interface BackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  backDropProps?: React.HTMLAttributes<HTMLDivElement>;
  center?: boolean;
  image?: string;
}

const BackgroundContainer = styled.div<{ $backgroundImage?: string }>`
  position: relative;
  display: flex;
  background-image: ${({ $backgroundImage }) =>
    `url(${$backgroundImage ?? Demo.src})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const BackDrop = styled.div<{ $opacity?: number }>`
  inset: 0;
  background-color: ${({ theme, $opacity }) =>
    hexToRgb(theme.black, $opacity ?? 0.5)};
  z-index: 0;
  height: min-content;
  flex: 1;
`;

export default function Background({
  image,
  children,
  backDropProps,
  center,
  ...props
}: BackgroundProps) {
  return (
    <BackgroundContainer
      data-component="Background"
      $backgroundImage={image}
      {...props}
    >
      {/* {image && image} */}
      <BackDrop
        {...backDropProps}
        style={
          center
            ? { ...flexCenterStyle, ...backDropProps?.style }
            : backDropProps?.style
        }
      >
        {children}
      </BackDrop>
    </BackgroundContainer>
  );
}
