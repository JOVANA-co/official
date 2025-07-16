"use client";

import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const float = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
`;

const sparkle = keyframes`
  0%, 100% {
    transform: scale(0) rotate(0deg);
    opacity: 0;
  }
  50% {
    transform: scale(1) rotate(180deg);
    opacity: 1;
  }
`;

const wave = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const AnimatedParticle = styled.div<{
  delay: number;
  size: number;
  color: string;
}>`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: ${(props) => props.color};
  border-radius: 50%;
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
  opacity: 0.6;
  pointer-events: none;
`;

const SparkleEffect = styled.div<{ delay: number }>`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${({ theme }) => theme.secondary[300]};
  border-radius: 50%;
  animation: ${sparkle} 3s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
  pointer-events: none;
`;

const WaveEffect = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    ${({ theme }) => theme.secondary[400]},
    transparent
  );
  animation: ${wave} 4s linear infinite;
  opacity: 0.7;
`;

const GlowEffect = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.primary[400]}20 0%,
    transparent 70%
  );
  animation: ${pulse} 4s ease-in-out infinite;
  pointer-events: none;
`;

const AnimatedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
  pointer-events: none;
`;

export default function AnimatedBackgroundComponent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 创建动态粒子
    const createParticle = () => {
      const particle = document.createElement("div");
      const size = Math.random() * 4 + 2;
      const colors = ["#60a5fa", "#a78bfa", "#34d399", "#fbbf24"];
      const color = colors[Math.floor(Math.random() * colors.length)];

      particle.style.position = "absolute";
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.background = color;
      particle.style.borderRadius = "50%";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animation = `float 8s ease-in-out infinite`;
      particle.style.opacity = "0.6";
      particle.style.pointerEvents = "none";

      container.appendChild(particle);

      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 8000);
    };

    // 定期创建粒子
    const interval = setInterval(createParticle, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatedBackground ref={containerRef}>
      <GlowEffect />
      <WaveEffect />

      {/* 静态粒子 */}
      {Array.from({ length: 15 }).map((_, i) => (
        <AnimatedParticle
          key={i}
          delay={i * 0.4}
          size={Math.random() * 6 + 3}
          color={["#60a5fa", "#a78bfa", "#34d399", "#fbbf24"][i % 4]}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* 闪烁效果 */}
      {Array.from({ length: 8 }).map((_, i) => (
        <SparkleEffect
          key={`sparkle-${i}`}
          delay={i * 0.5}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </AnimatedBackground>
  );
}
