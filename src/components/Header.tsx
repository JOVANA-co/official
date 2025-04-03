"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "styled-components";

import Button from "@/components/Button2";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export default function Header() {
  const router = useRouter();
  return (
    <HeaderWrapper>
      <Image
        src="/vercel.svg"
        width={30}
        height={30}
        alt="Picture of the author"
      />
      <ButtonsWrapper>
        <Button onClick={() => router.push("/about")}>About</Button>
        <Button onClick={() => router.push("/roadmap")}>ROADMAP</Button>
        <Button onClick={() => router.push("/manifesto")}>Manifesto</Button>
      </ButtonsWrapper>
    </HeaderWrapper>
  );
}
