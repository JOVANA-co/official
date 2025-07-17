import { useRef } from "react";
import styled from "styled-components";

import Button from "@/components/Button";
import Title from "@/components/Title";
import { MOBILE_WITH } from "@/constants/rwd";
import Card from "@/modules/Main/components/Card";
import { clamp } from "@/utils/css";

import Demo from "@/assets/images/Demo.png";

const RoadMapContainer = styled.div`
  display: flex;
  padding: ${clamp(80)} ${clamp(80)};
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  background: ${({ theme }) => theme.primary[950]};

  @media (max-width: ${MOBILE_WITH}px) {
    align-items: center;
    text-align: center;
  }
`;

const RollingBarContainer = styled.div`
  display: flex;
  padding: 4rem calc(1rem * 80 / 16);
  align-items: center;
  gap: 2rem;
  background: ${({ theme }) => theme.primary[900]};
  overflow-x: auto;

  /* 隱藏滾動條 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }
`;

const RollingBarItem = styled(Card)`
  align-self: stretch;
  flex-basis: 300px;
  flex-shrink: 0;
`;

export default function RoadMap() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  // const roadMapRef = useRef<HTMLDivElement>(null);
  // const [isHorizontalScrollingActive, setIsHorizontalScrollingActive] =
  //   useState(false);
  // const scrollSpeed = 1;

  //   useEffect(() => {
  //     const handleGlobalWheel = (e: WheelEvent) => {
  //       if (!scrollContainerRef.current || !roadMapRef.current) return;

  //       const container = scrollContainerRef.current;
  //       const roadMapElement = roadMapRef.current;

  //       // 獲取 RollingBar 在頁面中的位置
  //       const roadMapRect = roadMapElement.getBoundingClientRect();
  //       const rollingBarRect = container.getBoundingClientRect();

  //       console.log(roadMapRect, rollingBarRect);

  //       // 檢查是否滾動到 RollingBar 的底部
  //       const isAtRollingBarBottom =
  //         rollingBarRect.bottom <= window.innerHeight + 10; // 50px 緩衝區
  //       const isInRollingBarArea =
  //         roadMapRect.top <= window.innerHeight && roadMapRect.bottom >= 0;

  //       // 如果已經在水平滾動模式，或者滾動到 RollingBar 底部
  //       if (
  //         isHorizontalScrollingActive ||
  //         (isAtRollingBarBottom && isInRollingBarArea)
  //       ) {
  //         // 檢查是否在邊界
  //         const isAtLeftEdge = container.scrollLeft <= 0;
  //         const isAtRightEdge =
  //           container.scrollLeft >= container.scrollWidth - container.clientWidth;
  //         const scrollAmount = e.deltaY * scrollSpeed;

  //         // 如果向右滾動且已經在最右邊
  //         if (scrollAmount > 0 && isAtRightEdge) {
  //           // 結束水平滾動模式，讓頁面自然垂直滾動
  //           setIsHorizontalScrollingActive(false);
  //           return;
  //         }

  //         // 如果向左滾動且已經在最左邊
  //         if (scrollAmount < 0 && isAtLeftEdge) {
  //           // 結束水平滾動模式，讓頁面自然垂直滾動
  //           setIsHorizontalScrollingActive(false);
  //           return;
  //         }

  //         // 否則阻止默認行為並處理水平滾動
  //         e.preventDefault();
  //         container.scrollLeft += scrollAmount;
  //         setIsHorizontalScrollingActive(true);
  //       }
  //     };

  //     const handleGlobalTouchStart = (e: TouchEvent) => {
  //       if (!scrollContainerRef.current || !roadMapRef.current) return;

  //       const container = scrollContainerRef.current;
  //       const roadMapElement = roadMapRef.current;
  //       const roadMapRect = roadMapElement.getBoundingClientRect();
  //       const rollingBarRect = container.getBoundingClientRect();

  //       const isAtRollingBarBottom =
  //         rollingBarRect.bottom <= window.innerHeight + 50;
  //       const isInRollingBarArea =
  //         roadMapRect.top <= window.innerHeight && roadMapRect.bottom >= 0;

  //       if (
  //         isHorizontalScrollingActive ||
  //         (isAtRollingBarBottom && isInRollingBarArea)
  //       ) {
  //         setIsHorizontalScrollingActive(true);
  //       }
  //     };

  //     const handleGlobalTouchMove = (e: TouchEvent) => {
  //       if (!scrollContainerRef.current || !roadMapRef.current) return;

  //       const container = scrollContainerRef.current;
  //       const roadMapElement = roadMapRef.current;
  //       const roadMapRect = roadMapElement.getBoundingClientRect();
  //       const rollingBarRect = container.getBoundingClientRect();

  //       const isAtRollingBarBottom =
  //         rollingBarRect.bottom <= window.innerHeight + 50;
  //       const isInRollingBarArea =
  //         roadMapRect.top <= window.innerHeight && roadMapRect.bottom >= 0;

  //       if (
  //         isHorizontalScrollingActive ||
  //         (isAtRollingBarBottom && isInRollingBarArea)
  //       ) {
  //         const touch = e.touches[0];
  //         const scrollAmount = touch.clientX * scrollSpeed * 0.1;

  //         // 檢查是否在邊界
  //         const isAtLeftEdge = container.scrollLeft <= 0;
  //         const isAtRightEdge =
  //           container.scrollLeft >= container.scrollWidth - container.clientWidth;

  //         // 如果向右滾動且已經在最右邊
  //         if (scrollAmount > 0 && isAtRightEdge) {
  //           setIsHorizontalScrollingActive(false);
  //           return;
  //         }

  //         // 如果向左滾動且已經在最左邊
  //         if (scrollAmount < 0 && isAtLeftEdge) {
  //           setIsHorizontalScrollingActive(false);
  //           return;
  //         }

  //         // 否則阻止默認行為並處理水平滾動
  //         e.preventDefault();
  //         container.scrollLeft += scrollAmount;
  //         setIsHorizontalScrollingActive(true);
  //       }
  //     };

  //     // 監聽整個頁面的滾動事件
  //     document.addEventListener("wheel", handleGlobalWheel, { passive: false });
  //     document.addEventListener("touchstart", handleGlobalTouchStart);
  //     document.addEventListener("touchmove", handleGlobalTouchMove, {
  //       passive: false,
  //     });

  //     return () => {
  //       document.removeEventListener("wheel", handleGlobalWheel);
  //       document.removeEventListener("touchstart", handleGlobalTouchStart);
  //       document.removeEventListener("touchmove", handleGlobalTouchMove);
  //     };
  //   }, [isHorizontalScrollingActive]);

  return (
    <>
      <RoadMapContainer>
        <Title>Explore Our Roadmap Ahead</Title>
        <p>
          Discover the innovative projects we have planned. Each roadmap item
          represents a unique opportunity for growth and engagement.
        </p>
        <Button style={{ marginTop: "0.5rem" }}>Learn More</Button>
      </RoadMapContainer>
      <RollingBarContainer ref={scrollContainerRef}>
        <RollingBarItem
          title="Mastering the Art of Effective Communication"
          description="Discover the key strategies and techniques for effective communication in the workplace. Our…"
          image={Demo.src}
        />
        <RollingBarItem
          title="Navigating the Changing Landscape of SEO"
          description="Stay ahead of the curve with our latest insights on the evolving world of search engine optimization. Learn ho…"
          image={Demo.src}
        />
        <RollingBarItem
          title="Navigating the Changing Landscape of SEO"
          description="Stay ahead of the curve with our latest insights on the evolving world of search engine optimization. Learn ho…"
          image={Demo.src}
        />
        <RollingBarItem
          title="Navigating the Changing Landscape of SEO"
          description="Stay ahead of the curve with our latest insights on the evolving world of search engine optimization. Learn ho…"
          image={Demo.src}
        />
        <RollingBarItem
          title="Navigating the Changing Landscape of SEO"
          description="Stay ahead of the curve with our latest insights on the evolving world of search engine optimization. Learn ho…"
          image={Demo.src}
        />
      </RollingBarContainer>
    </>
  );
}
