"use client";

import { useState } from "react";
import styled from "styled-components";

import Modal from "@/components/Modal";
import { percentageOfFigma } from "@/utils/css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Box = styled.div`
  padding: ${percentageOfFigma(50).max};
  border: 5px solid #ffffff;
  color: #ffffff;
  width: fit-content;
  display: flex;
  flex-direction: column;

  gap: 20px;
`;

const Content = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  li {
    list-style-type: none;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    position: relative;
    text-decoration: none;
    display: inline;
    width: fit-content;
    cursor: pointer;

    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      background-color: white;
      transition: transform 0.3s ease;
      width: 100%;
      transform: scaleX(0);
    }

    &:hover::after {
      width: 100%;
      transform: scaleX(1);
      transform-origin: 0% 50%;
    }
  }
`;

export default function Roadmap() {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Box>
        <p>What exactly ARE WE GOING TO DO?</p>
        <Content>
          <li
            onClick={() => {
              setOpen(true);
            }}
          >
            AI-DRIVEN INTERACTIVE NEF
          </li>
          <li
            onClick={() => {
              setOpen(true);
            }}
          >
            APT & IP
          </li>
        </Content>
      </Box>
      <Modal open={open} setOpen={setOpen} />
    </Container>
  );
}
