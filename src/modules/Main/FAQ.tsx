"use client";

import { useState } from "react";
import styled from "styled-components";

import Title from "@/components/Title";

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem calc(1rem * 112 / 16);
  background: linear-gradient(180deg, #4600ea 0%, #190052 100%);
`;

const FAQTitle = styled(Title)`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.white};
`;

const FAQSubtitle = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: calc(1rem * 18 / 16);
  font-weight: 400;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0;
`;

const FAQItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.5;
  }
`;

const FAQQuestion = styled.h3`
  color: ${({ theme }) => theme.white};
  font-size: calc(1rem * 20 / 16);
  font-weight: 500;
  margin: 0;
  flex: 1;
`;

const ChevronIcon = styled.div<{ $isOpen: boolean }>`
  width: 20px;
  height: 20px;
  position: relative;
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    border-right: 2px solid ${({ theme }) => theme.gray[500]};
    border-bottom: 2px solid ${({ theme }) => theme.gray[500]};
    transform: translate(-50%, -75%) rotate(45deg);
  }
`;

const Separator = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.gray[700]};
  width: 100%;
  margin: 0;
`;

const FAQAnswer = styled.div<{ $isOpen: boolean }>`
  color: ${({ theme }) => theme.white};
  font-size: calc(1rem * 16 / 16);
  font-weight: 400;
  line-height: 1.6;
  padding: ${({ $isOpen }) => ($isOpen ? "1rem 0 1.5rem" : "0")};
  max-height: ${({ $isOpen }) => ($isOpen ? "200px" : "0")};
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
`;

const FAQData = [
  {
    question: "What is JOVANA?",
    answer:
      "JOVANA is an innovative platform dedicated to building and shaping the future. We are determined to create 'the future of the future' through cutting-edge technology and visionary thinking.",
  },
  {
    question: "How to get started?",
    answer:
      "Getting started with JOVANA is simple. Explore our platform, understand our vision, and join our community of forward-thinkers and innovators who are shaping tomorrow's world.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive suite of services including innovative technology solutions, community building, and strategic partnerships that drive the future of digital transformation.",
  },
  {
    question: "Is there customer support?",
    answer:
      "Yes, we provide dedicated customer support to ensure you have the best experience with JOVANA. Our team is here to help you navigate our platform and answer any questions.",
  },
  {
    question: "Where can I learn more?",
    answer:
      "You can learn more about JOVANA through our detailed roadmap, manifesto, and about sections. We also encourage you to join our community and stay updated with our latest developments.",
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <FAQContainer>
      <FAQTitle>FAQs</FAQTitle>
      <FAQSubtitle>
        Find answers to your questions about JOVANA and our innovative
        offerings.
      </FAQSubtitle>
      <FAQList>
        {FAQData.map((item, index) => (
          <div key={index}>
            <FAQItem onClick={() => toggleItem(index)}>
              <FAQQuestion>{item.question}</FAQQuestion>
              <ChevronIcon $isOpen={openItems.includes(index)} />
            </FAQItem>
            <FAQAnswer $isOpen={openItems.includes(index)}>
              {item.answer}
            </FAQAnswer>
            {index < FAQData.length - 1 && <Separator />}
          </div>
        ))}
      </FAQList>
    </FAQContainer>
  );
}
