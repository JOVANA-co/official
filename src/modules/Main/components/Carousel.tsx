import styled from "styled-components";

import { MOBILE_WITH } from "@/constants/rwd";

const CarouselContainer = styled.div`
  width: 100%;
  height: min(77vh, 105vw);
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const CarouselTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 120vw;
  flex: none;

  @media (max-width: ${MOBILE_WITH}px) {
    & > :first-child,
    & > :last-child {
      display: none;
    }
  }
`;

const CarouselItem = styled.div`
  flex: 0 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

const CarouselItemImage = styled.div<{ $src: string }>`
  width: 100%;
  object-fit: cover;
  background-image: url(${({ $src }) => $src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 1rem;
`;

export default function Carousel({
  images,
}: {
  images: readonly [string, string, string, string, string, string, string];
}) {
  return (
    <CarouselContainer>
      <CarouselTrack>
        <CarouselItem>
          <CarouselItemImage
            $src={images[0]}
            style={{ height: "calc(100% * 432 / 764)" }}
          />
        </CarouselItem>
        <CarouselItem>
          <CarouselItemImage $src={images[1]} style={{ aspectRatio: "1/1" }} />
          <CarouselItemImage
            $src={images[2]}
            style={{ height: "calc(100% * 346 / 764)" }}
          />
        </CarouselItem>
        <CarouselItem style={{ flex: "0 0.8 100%" }}>
          <CarouselItemImage $src={images[3]} style={{ height: "100%" }} />
        </CarouselItem>
        <CarouselItem>
          <CarouselItemImage
            $src={images[4]}
            style={{ height: "calc(100% * 346 / 764)" }}
          />{" "}
          <CarouselItemImage $src={images[5]} style={{ aspectRatio: "1/1" }} />
        </CarouselItem>
        <CarouselItem>
          <CarouselItemImage
            $src={images[6]}
            style={{ height: "calc(100% * 432 / 764)" }}
          />
        </CarouselItem>
      </CarouselTrack>
    </CarouselContainer>
  );
}
