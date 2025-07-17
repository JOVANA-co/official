"use client";

import styled from "styled-components";

import { MOBILE_WITH } from "@/constants/rwd";

import Logo from "@/assets/images/Logo";

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  background: ${({ theme }) => theme.gray[950]};
  color: ${({ theme }) => theme.white};
  gap: 1.5rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${MOBILE_WITH}px) {
    gap: 1rem;
    flex-direction: column;
  }
`;

const NavLink = styled.a`
  font-size: 0.75rem;
  font-weight: 500;
  font-family: var(--exo-2);
  text-decoration: none;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.secondary[400]};
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  color: ${({ theme }) => theme.white};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.secondary[400]};
  }
`;

const Separator = styled.div`
  width: 80%;
  max-width: 400px;
  height: 1px;
  background: ${({ theme }) => theme.gray[500]};
`;

const Copyright = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.gray[300]};
  font-family: var(--exo-2);
`;

// Twitter/X Icon Component
const TwitterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Discord Icon Component
const DiscordIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" />
  </svg>
);

export default function Footer() {
  return (
    <FooterWrapper data-component="Footer">
      <LogoContainer>
        <Logo fontSize={20} />
      </LogoContainer>

      <Navigation>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/manifesto">Manifesto</NavLink>
        <NavLink href="/roadmap">Roadmap</NavLink>
      </Navigation>

      <SocialIcons>
        <SocialIcon
          href="https://twitter.com/jovana"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </SocialIcon>
        <SocialIcon
          href="https://discord.gg/jovana"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DiscordIcon />
        </SocialIcon>
      </SocialIcons>

      <Separator />

      <Copyright>© 2025 JOVANA</Copyright>
    </FooterWrapper>
  );
}
