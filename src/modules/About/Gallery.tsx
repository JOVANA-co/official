"use client";

import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { BackDrop } from "@/components/Background";
import Title from "@/components/Title";
import { MOBILE_WITH, SMALL_MOBILE_WITH, TABLET_WITH } from "@/constants/rwd";
import { clamp, rwdFontSize } from "@/utils/css";

import Demo from "@/assets/images/Demo.png";

const GalleryContainer = styled.div`
  display: flex;
  padding: 0 ${clamp(16)};
  gap: ${clamp(16)};
  background: ${({ theme }) => theme.black};
  height: 90vh;
  position: relative;

  @media (max-width: ${TABLET_WITH}px) {
    & > :nth-child(5) {
      display: none;
    }
  }

  @media (max-width: ${MOBILE_WITH}px) {
    & > :nth-child(4) {
      display: none;
    }
  }

  @media (max-width: ${SMALL_MOBILE_WITH}px) {
    & > :nth-child(3) {
      display: none;
    }
  }
`;

const GalleryColumn = styled.div`
  flex: 1;
  overflow: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
  &:nth-child(2n) {
    transform: translateY(-150px);
    height: calc(100% + 150px);
  }
`;

const GalleryItem = styled.div<{ $src: string }>`
  width: 100%;
  height: 300px;
  object-fit: cover;
  background-image: url(${({ $src }) => $src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 1rem;
  margin-bottom: 1rem;
`;

export const AboutTitle = styled(Title)`
  margin: ${clamp(288)} ${clamp(352)};

  @media (max-width: ${MOBILE_WITH}px) {
    margin: ${clamp(288)} ${clamp(160)};
  }
`;

const Description = styled.p`
  font-weight: 400;
  ${rwdFontSize(18)}
`;

const ITEM_HEIGHT = 300 + 16; // 圖片高度+間距
const BUFFER = 3; // 上下 buffer

const IMAGES = [
  [Demo, Demo, Demo, Demo, Demo],
  [Demo, Demo, Demo, Demo, Demo],
  [Demo, Demo, Demo, Demo, Demo],
  [Demo, Demo, Demo, Demo, Demo],
  [Demo, Demo, Demo, Demo, Demo],
];

export default function Gallery() {
  const columnRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [scrollTops, setScrollTops] = useState([0, 0, 0, 0, 0]);
  const intervalsRef = useRef<NodeJS.Timeout[]>([]);

  // 滾動時更新 scrollTop
  const handleScroll = (colIdx: number) => {
    const col = columnRefs.current[colIdx];
    if (col) {
      setScrollTops((prev) => {
        const next = [...prev];
        next[colIdx] = col.scrollTop;
        return next;
      });
    }
  };

  // 自動滾動
  useEffect(() => {
    // 清除之前的定時器
    intervalsRef.current.forEach(clearInterval);
    intervalsRef.current = [];

    // 創建新的定時器
    [0, 2, 4].forEach((index) => {
      const interval = setInterval(() => {
        const col = columnRefs.current[index];
        if (col) {
          col.scrollTop += 1;
          // 當滾動到底部時，重置到頂部
          if (col.scrollTop >= col.scrollHeight - col.clientHeight) {
            col.scrollTop = 0;
          }
        }
      }, 50);
      intervalsRef.current.push(interval);
    });
    [1, 3].forEach((index) => {
      const interval = setInterval(() => {
        const col = columnRefs.current[index];
        if (col) {
          col.scrollTop -= 1;
          // 當滾動到頂部時，重置到底部
          if (col.scrollTop <= 0) {
            col.scrollTop = col.scrollHeight - col.clientHeight;
          }
        }
      }, 50);
      intervalsRef.current.push(interval);
    });

    return () => {
      intervalsRef.current.forEach(clearInterval);
      intervalsRef.current = [];
    };
  }, []);

  // 虛擬列表渲染
  const renderColumn = (colIdx: number) => {
    const scrollTop = scrollTops[colIdx] || 0;
    const totalCount = 1000000; // 無限大即可
    const startIdx = Math.max(0, Math.floor(scrollTop / ITEM_HEIGHT) - BUFFER);
    const endIdx = Math.min(
      totalCount,
      Math.ceil((scrollTop + 90 * ITEM_HEIGHT) / ITEM_HEIGHT) + BUFFER
    );
    const items = [];
    for (let i = startIdx; i < endIdx; i++) {
      const imgArr = IMAGES[colIdx % IMAGES.length];
      const img = imgArr[i % imgArr.length];
      items.push(
        <GalleryItem
          key={i}
          $src={img.src}
          style={{
            position: "absolute",
            top: i * ITEM_HEIGHT,
            left: 0,
            right: 0,
          }}
        />
      );
    }
    return (
      <div
        style={{
          position: "relative",
          height: totalCount * ITEM_HEIGHT,
        }}
      >
        {items}
      </div>
    );
  };

  return (
    <GalleryContainer>
      {IMAGES.map((_, gindex) => (
        <GalleryColumn
          key={gindex}
          ref={(el) => {
            columnRefs.current[gindex] = el;
          }}
          onScroll={() => handleScroll(gindex)}
          style={{ position: "relative" }}
        >
          {renderColumn(gindex)}
        </GalleryColumn>
      ))}
      <BackDrop style={{ position: "absolute", height: "100%" }} $opacity={0.6}>
        <AboutTitle>
          JOVANA NFT is a collection of 10,000 AI-Driven interactive cyberpunks.
          <Description>
            JOVANA grant you membership access to the organization: a group of
            rebels who aren&apos;t fond of rules, and have no rules, respect for
            the status quo.
          </Description>
        </AboutTitle>
      </BackDrop>
    </GalleryContainer>
  );
}
