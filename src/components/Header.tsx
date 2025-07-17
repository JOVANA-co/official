"use client";

import { Menu as MenuIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import styled from "styled-components";

import Button from "@/components/Button";
import { MOBILE_WITH } from "@/constants/rwd";
import theme from "@/providers/theme/theme";

import Logo from "@/assets/images/Logo";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.primary[950]} 0%,
    ${({ theme }) => theme.primary[900]} 100%
  );
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0px;
  z-index: 1000;
  transition: all 0.3s ease;
  width: 100%;

  @media (max-width: ${MOBILE_WITH}px) {
    padding: 0.75rem 1rem;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${MOBILE_WITH}px) {
    display: none;
  }
`;

const NavLink = styled.a`
  position: relative;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  padding: 0.5rem 0;
  cursor: pointer;
  transition: color 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.primary[300]},
      ${({ theme }) => theme.primary[100]}
    );
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.secondary[600]};
    &::after {
      width: 100%;
    }
  }

  &.active {
    color: ${({ theme }) => theme.secondary[600]};
    &::after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: ${MOBILE_WITH}px) {
    display: flex;
  }
`;

export default function Header() {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };

  const handleNavClick = (path: string) => {
    router.push(path);
  };

  return (
    <HeaderWrapper data-component="Header">
      <LogoWrapper data-component="LogoWrapper" onClick={handleLogoClick}>
        <Logo />
      </LogoWrapper>

      <Navigation>
        <NavLink onClick={() => handleNavClick("/about")}>About</NavLink>
        <NavLink onClick={() => handleNavClick("/manifesto")}>
          Manifesto
        </NavLink>
        <NavLink onClick={() => handleNavClick("/roadmap")}>Roadmap</NavLink>
        <span>|</span>
        <Button onClick={() => handleNavClick("/contact")}>Contact</Button>
      </Navigation>

      <MobileMenuButton>
        <MenuIcon color={theme.white} />
      </MobileMenuButton>
    </HeaderWrapper>
  );
}
