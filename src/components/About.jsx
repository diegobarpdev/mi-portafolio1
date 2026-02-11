import styled, { keyframes } from "styled-components";
import { colors, borderRadius } from "../colors";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
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

const AboutSection = styled.section`
  padding: 8rem 0;
  background: ${colors.bgPrimary};
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 800;
  text-align: center;
  margin: 0 0 4rem 0;
  background: linear-gradient(135deg, ${colors.textWhite} 0%, ${colors.textSecondary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 6rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const AboutTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const AboutText = styled.p`
  font-size: 1.15rem;
  line-height: 1.8;
  color: ${colors.textSecondary};
  
  strong {
    color: ${colors.accentLight};
    font-weight: 600;
  }
`;

const AboutImageWrapper = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: -20px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%);
    z-index: 0;
  }
`;

const CodeBlock = styled.div`
  background: rgba(30, 41, 59, 0.5);
  border-radius: ${borderRadius.lg};
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  color: ${colors.textSecondary};
  position: relative;
  z-index: 1;
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);

  .keyword { color: #c678dd; }
  .string { color: #98c379; }
  .function { color: #61afef; }
  .comment { color: #5c6370; font-style: italic; }
`;

function About() {
  const { language } = useLanguage();
  const t = translations[language];
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <AboutSection
      id="sobre-mi"
      ref={ref}
      className={`section-fade-in ${isVisible ? "visible" : ""}`}
    >
      <Container>
        <SectionTitle>{t.about.title}</SectionTitle>
        <AboutContent>
          <AboutTextWrapper>
            <AboutText>{t.about.paragraph1}</AboutText>
            <AboutText>{t.about.paragraph2}</AboutText>
          </AboutTextWrapper>

          <AboutImageWrapper>
            <CodeBlock>
              <span className="comment">// AboutMe.js</span><br />
              <span className="keyword">const</span> <span className="function">Diego</span> = {'{'}<br />
              &nbsp;&nbsp;passion: <span className="string">"Full Stack Development"</span>,<br />
              &nbsp;&nbsp;currentFocus: <span className="string">"React & Native Ecosystem"</span>,<br />
              &nbsp;&nbsp;goal: <span className="string">"Building impactful tech"</span><br />
              {'}'};
            </CodeBlock>
          </AboutImageWrapper>
        </AboutContent>
      </Container>
    </AboutSection>
  );
}

export default About;
