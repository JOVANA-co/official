"use client";

import styled from "styled-components";

const BackgroundImage = styled.div`
  background-image: url("/background.png");
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  z-index: -1;
  position: fixed;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 0;
`;

export default function Background() {
  return (
    <BackgroundImage>
      <Overlay />
    </BackgroundImage>
  );
}
