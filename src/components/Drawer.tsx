"use client";

import { X } from "lucide-react";
import styled from "styled-components";

import { MOBILE_WITH } from "@/constants/rwd";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const DrawerOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease;
`;

const DrawerContent = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100%;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.primary[950]} 0%,
    ${({ theme }) => theme.primary[900]} 100%
  );
  backdrop-filter: blur(10px);
  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "100%")});
  transition: transform 0.3s ease;
  z-index: 1000;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: ${MOBILE_WITH}px) {
    width: 100%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: ${({ theme }) => theme.white};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.secondary[300]};
  }
`;

export default function Drawer({ isOpen, onClose, children }: DrawerProps) {
  return (
    <>
      <DrawerOverlay
        data-component="DrawerOverlay"
        $isOpen={isOpen}
        onClick={onClose}
      />
      <DrawerContent data-component="DrawerContent" $isOpen={isOpen}>
        <CloseButton onClick={onClose}>
          <X size={24} />
        </CloseButton>
        {children}
      </DrawerContent>
    </>
  );
}
