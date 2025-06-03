"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 40px 18px 24px;
  background: #fff;
  border-bottom: 1px solid #eaeaea;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 700;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const NavLink = styled.button`
  background: none;
  border: none;
  color: #222;
  font-size: 1rem;
  cursor: pointer;
  padding: 0 8px;
  font-family: inherit;
  transition: color 0.2s;
  &:hover {
    color: #666;
  }
`;

const ContactButton = styled.button`
  background: #111;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 18px;
  font-size: 1rem;
  font-weight: 500;
  margin-left: 16px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #333;
  }
`;

export default function Header() {
  const router = useRouter();
  return (
    <HeaderWrapper>
      <Logo>
        <Image
          src="/vercel.svg"
          width={36}
          height={36}
          alt="Logo"
          style={{ marginRight: 8 }}
        />
      </Logo>
      <Nav>
        <NavLink onClick={() => router.push("/about")}>About</NavLink>
        <NavLink onClick={() => router.push("/manifesto")}>Manifesto</NavLink>
        <NavLink onClick={() => router.push("/roadmap")}>Roadmap</NavLink>
        <ContactButton>Contact</ContactButton>
      </Nav>
    </HeaderWrapper>
  );
}
