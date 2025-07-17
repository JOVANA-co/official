import { css } from "styled-components";

import {
  FIGMA_HEIGHT,
  FIGMA_WITH,
  FONT_SIZE,
  MOBILE_WITH,
} from "@/constants/rwd";

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexCenterStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
} as const;

export const percentageOfFigma = (number: number) => {
  const vw = `${(100 * number) / FIGMA_WITH}vw`;
  const vh = `${(100 * number) / FIGMA_HEIGHT}vh`;
  return {
    vw,
    vh,
    max: `max(${vw}, ${vh})`,
    min: `min(${vw}, ${vh})`,
  };
};

export const rwdFontSize = (number: number, mobileScaleRatio = 0.8) => css`
  font-size: ${percentageOfFigma(number).max};
  @media (max-width: ${MOBILE_WITH}px) {
    font-size: clamp(
      ${(number / FONT_SIZE) * mobileScaleRatio}rem,
      ${percentageOfFigma(number).min},
      ${number / FONT_SIZE}rem
    );
  }
`;

export const fullChild = css`
  width: 100%;
  height: 100%;
`;

export const backgroundCenter = css`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const clamp = (number: number, min = 1, max = 2) => {
  const rem = number / FONT_SIZE;
  const minRem = rem <= 4 ? min : max;
  return `clamp(${minRem}rem, ${percentageOfFigma(number).vw}, ${rem}rem)`;
};
