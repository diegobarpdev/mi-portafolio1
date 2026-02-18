import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { colors, shadows, borderRadius } from "../colors";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.bgPrimary};
  position: relative;
  overflow: hidden;
  padding-top: 80px;
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`;

const Blob = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  animation: float 20s ease-in-out infinite;
  
  &:nth-child(1) {
    top: -10%;
    left: -10%;
    width: 600px;
    height: 600px;
    background: ${colors.accentDark};
    animation-delay: 0s;
  }
  
  &:nth-child(2) {
    bottom: -10%;
    right: -10%;
    width: 500px;
    height: 500px;
    background: #4f46e5; /* Indigo 600 */
    animation-delay: -5s;
    animation-duration: 25s;
  }
  
  &:nth-child(3) {
    top: 40%;
    left: 40%;
    width: 300px;
    height: 300px;
    background: #0ea5e9; /* Sky 500 */
    opacity: 0.3;
    animation-delay: -10s;
    animation-duration: 15s;
  }
`;

const HeroContent = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    gap: 3rem;
  }

  @media (max-width: 900px) {
    padding: 0 1.5rem;
    gap: 2.5rem;
  }

  @media (max-width: 480px) {
    gap: 2rem;
    padding: 0 1.25rem;
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroBadge = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(99, 102, 241, 0.1);
  color: ${colors.accentLight};
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  width: fit-content;
  backdrop-filter: blur(5px);

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
    margin-bottom: 1rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(3rem, 5vw, 5rem);
  font-weight: 800;
  margin: 0 0 1.5rem 0;
  line-height: 1.1;
  color: ${colors.textWhite};
  letter-spacing: -0.02em;

  span {
    background: linear-gradient(135deg, ${colors.accentLight} 0%, ${colors.accent} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
    line-height: 1.2;
  }

  @media (max-width: 360px) {
    font-size: 1.8rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  color: ${colors.textSecondary};
  font-weight: 500;
  margin: 0 0 2rem 0;
  
  strong {
    color: ${colors.textWhite};
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }

  @media (max-width: 360px) {
    font-size: 1.1rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.25rem;
  margin: 0 0 3rem 0;
  color: ${colors.textMuted};
  line-height: 1.7;
  max-width: 700px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  @media (max-width: 360px) {
    font-size: 0.95rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 1rem;
  }
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  border-radius: ${borderRadius.lg};
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
`;

const PrimaryButton = styled(Button)`
  background: ${colors.accent};
  color: #ffffff;
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);

  &:hover {
    background: ${colors.accentDark};
    transform: translateY(-2px);
    box-shadow: 0 0 30px rgba(99, 102, 241, 0.5);
  }
`;

const OutlineButton = styled(Button)`
  background: rgba(255, 255, 255, 0.03);
  color: ${colors.textWhite};
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: ${colors.textWhite};
    transform: translateY(-2px);
  }
`;

function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  // Función para scroll suave
  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Manejar clicks en enlaces de navegación
  const handleNavClick = (e, elementId) => {
    e.preventDefault();
    smoothScrollTo(elementId);
  };

  return (
    <HeroSection id="inicio">
      <BackgroundGradient>
        <Blob />
        <Blob />
        <Blob />
      </BackgroundGradient>

      <HeroContent>
        <HeroText className="section-fade-in visible">
          <HeroBadge>🚀 Available for work</HeroBadge>
          <HeroTitle>
            {t.hero.greeting} <br />
            <span>Diego Barbecho</span>
          </HeroTitle>
          <HeroSubtitle>
            {t.hero.subtitle}
          </HeroSubtitle>
          <HeroDescription>
            {t.hero.description}
          </HeroDescription>
          <HeroButtons>
            <PrimaryButton
              href="#proyectos"
              onClick={(e) => handleNavClick(e, "proyectos")}
            >
              {t.hero.buttons.verProyectos}
            </PrimaryButton>
            <OutlineButton
              href="#contacto"
              onClick={(e) => handleNavClick(e, "contacto")}
            >
              {t.hero.buttons.contactar}
            </OutlineButton>
          </HeroButtons>
        </HeroText>
      </HeroContent>
    </HeroSection>
  );
}

export default Hero;
