import styled from "styled-components";
import { colors, shadows, borderRadius } from "../colors";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const SkillsSection = styled.section`
  padding: 8rem 0;
  background: ${colors.bgSecondary};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const SkillsTitle = styled.h2`
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 800;
  color: ${colors.textWhite};
  margin-bottom: 1.5rem;
  text-align: center;
  z-index: 2;
  background: linear-gradient(135deg, ${colors.textWhite} 0%, ${colors.textSecondary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SkillsSubtitle = styled.p`
  font-size: 1.25rem;
  color: ${colors.textSecondary};
  margin-bottom: 4rem;
  text-align: center;
  max-width: 600px;
  line-height: 1.6;
  z-index: 2;
  padding: 0 1rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const SkillCard = styled.div`
  background: rgba(30, 41, 59, 0.5);
  border-radius: ${borderRadius.lg};
  padding: 2rem 1.5rem;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  &:hover {
    transform: translateY(-5px);
    background: rgba(30, 41, 59, 0.8);
    border-color: ${colors.accent};
    box-shadow: 0 10px 30px -10px rgba(99, 102, 241, 0.3);
  }
`;

const SkillIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  padding: 15px;

  ${SkillCard}:hover & {
    transform: scale(1.1);
    border-color: rgba(99, 102, 241, 0.3);
  }
`;

const SkillIconImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const SkillName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${colors.textPrimary};
  margin: 0;
`;

const SkillLevel = styled.span`
  font-size: 0.8rem;
  color: ${colors.accentLight};
  background: rgba(99, 102, 241, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-weight: 500;
`;

const SkillDescription = styled.p`
  font-size: 0.85rem;
  color: ${colors.textMuted};
  line-height: 1.5;
  margin-top: 0.5rem;
`;

const GlowBg = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 1;
`;

function Skills() {
  const { language } = useLanguage();
  const t = translations[language];
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  // Datos de las tecnologías
  const technologies = [
    {
      id: 1,
      name: "JavaScript",
      levelKey: "avanzado",
      descriptionKey: "javascript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      id: 2,
      name: "React",
      levelKey: "avanzado",
      descriptionKey: "react",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      id: 3,
      name: "Python",
      levelKey: "intermedio",
      descriptionKey: "python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      id: 4,
      name: "HTML/CSS",
      levelKey: "avanzado",
      descriptionKey: "htmlcss",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      id: 5,
      name: "Git",
      levelKey: "basico",
      descriptionKey: "git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      id: 6,
      name: "SQL",
      levelKey: "intermedio",
      descriptionKey: "sql",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", // Changed to PostgreSQL generic or explicit
    },
    {
      id: 7,
      name: "VS Code",
      levelKey: "avanzado",
      descriptionKey: "vscode",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      id: 8,
      name: "Node.js",
      levelKey: "basico",
      descriptionKey: "nodejs",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      id: 9,
      name: "Flutter",
      levelKey: "intermedio",
      descriptionKey: "flutter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      id: 10,
      name: "React Native",
      levelKey: "intermedio",
      descriptionKey: "reactnative",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", // React logo is often used
    },
    {
      id: 11,
      name: "Supabase",
      levelKey: "intermedio",
      descriptionKey: "supabase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    },
  ];

  return (
    <SkillsSection
      id="skills"
      ref={ref}
      className={`skills-section section-fade-in ${isVisible ? "visible" : ""}`}
    >
      <GlowBg />
      <SkillsTitle>{t.skills.title}</SkillsTitle>
      <SkillsSubtitle>{t.skills.subtitle}</SkillsSubtitle>

      <SkillsGrid>
        {technologies.map((tech) => (
          <SkillCard key={tech.id}>
            <SkillIcon>
              <SkillIconImg src={tech.icon} alt={tech.name} />
            </SkillIcon>
            <SkillName>{tech.name}</SkillName>
            <SkillLevel>
              {t.skills.levels[tech.levelKey]}
            </SkillLevel>
            <SkillDescription>
              {t.skills.technologies[tech.descriptionKey].description}
            </SkillDescription>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
}

export default Skills;
