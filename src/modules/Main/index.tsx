"use client";

import styled from "styled-components";

import Header from "@/components/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #fff;
`;

const VideoSection = styled.section`
  background: #757575;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 800px;
  width: 100vw;
  max-width: 100vw;
`;

const PlayButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 180px;
`;

const PlayButton = styled.div`
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const PlayIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="20" cy="20" r="20" fill="#fff" fillOpacity="0.8" />
    <polygon points="16,13 28,20 16,27" fill="#757575" />
  </svg>
);

const BottomSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 64px 48px 0 48px;
  flex: 1;
  background: #fff;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 32px;
    padding: 32px 16px 0 16px;
  }
`;

const Left = styled.div`
  font-size: 2.8rem;
  font-weight: 700;
  color: #111;
  line-height: 1.2;
`;

const Right = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  margin-top: 12px;
`;

const Desc = styled.p`
  font-size: 1rem;
  color: #222;
`;

const BrowseButton = styled.button`
  background: #111;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 28px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #333;
  }
`;

const AboutSection = styled.section`
  width: 100vw;
  padding: 64px 0 48px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
`;

const AboutTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 12px;
  text-align: center;
`;

const AboutDesc = styled.p`
  font-size: 1rem;
  color: #222;
  margin-bottom: 18px;
  text-align: center;
`;

const AboutButton = styled.button`
  background: #111;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 22px;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 40px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #333;
  }
`;

const GalleryRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
  width: 100vw;
  max-width: 1100px;
  margin-top: 16px;
  @media (max-width: 900px) {
    gap: 8px;
    max-width: 98vw;
  }
`;

const GalleryCard = styled.div<{ size: "small" | "medium" | "large" }>`
  background: #e0e0e0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  width: ${({ size }) =>
    size === "large" ? "220px" : size === "medium" ? "140px" : "90px"};
  height: ${({ size }) =>
    size === "large" ? "300px" : size === "medium" ? "180px" : "110px"};
  @media (max-width: 900px) {
    width: ${({ size }) =>
      size === "large" ? "120px" : size === "medium" ? "80px" : "48px"};
    height: ${({ size }) =>
      size === "large" ? "160px" : size === "medium" ? "90px" : "40px"};
  }
`;

const ImagePlaceholder = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="8" fill="#cccccc" />
    <rect x="10" y="28" width="28" height="10" rx="2" fill="#b3b3b3" />
    <circle cx="18" cy="20" r="4" fill="#b3b3b3" />
    <rect x="24" y="18" width="12" height="10" rx="2" fill="#b3b3b3" />
  </svg>
);

export default function Main() {
  return (
    <Container>
      <Header />
      <VideoSection>
        <PlayButtonWrapper>
          <PlayButton>
            <PlayIcon />
          </PlayButton>
        </PlayButtonWrapper>
      </VideoSection>
      <BottomSection>
        <Left>
          Welcome!
          <br />
          This is JOVANA.
        </Left>
        <Right>
          <Desc>
            We determined to build and shape this world into &quot;the future of
            the future&quot;.
          </Desc>
          <BrowseButton>Browse</BrowseButton>
        </Right>
      </BottomSection>
      <AboutSection>
        <AboutTitle>About JOVANA</AboutTitle>
        <AboutDesc>
          JOVANA creates 10,000 #legendary &amp; 90+ fun stuff to disrupt, made
          to explore.
        </AboutDesc>
        <AboutButton>Learn more</AboutButton>
        <GalleryRow>
          <GalleryCard size="small">
            <ImagePlaceholder />
          </GalleryCard>
          <GalleryCard size="small">
            <ImagePlaceholder />
          </GalleryCard>
          <GalleryCard size="medium">
            <ImagePlaceholder />
          </GalleryCard>
          <GalleryCard size="large">
            <ImagePlaceholder />
          </GalleryCard>
          <GalleryCard size="medium">
            <ImagePlaceholder />
          </GalleryCard>
          <GalleryCard size="small">
            <ImagePlaceholder />
          </GalleryCard>
          <GalleryCard size="small">
            <ImagePlaceholder />
          </GalleryCard>
        </GalleryRow>
      </AboutSection>
    </Container>
  );
}
