import styled from "styled-components";
import { colors, shadows, borderRadius } from "../colors";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const ProjectsSection = styled.section`
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
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: ${colors.accent};
    border-radius: 2px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 2rem;
`;

const ProjectCard = styled.div`
  background: ${colors.bgCard};
  border-radius: ${borderRadius.xl};
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(99, 102, 241, 0.3);
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(99, 102, 241, 0.1);

    h3 {
      color: ${colors.accentLight};
    }
  }
`;

const ProjectContent = styled.div`
  position: relative;
  z-index: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${colors.textWhite};
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
`;

const ProjectCompany = styled.p`
  color: ${colors.accent};
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 20px;
    height: 1px;
    background: ${colors.accent};
  }
`;

const ProjectDescription = styled.p`
  color: ${colors.textSecondary};
  line-height: 1.7;
  margin-bottom: 1.5rem;
  flex-grow: 1;
  font-size: 1.05rem;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2rem;
`;

const TechTag = styled.span`
  background: rgba(99, 102, 241, 0.1);
  color: ${colors.accentLight};
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(99, 102, 241, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(99, 102, 241, 0.2);
    border-color: rgba(99, 102, 241, 0.4);
    transform: translateY(-1px);
  }
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  color: ${colors.textWhite};
  padding: 0.875rem 1.5rem;
  border-radius: ${borderRadius.lg};
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  margin-top: auto;

  &:hover {
    background: ${colors.accent};
    border-color: ${colors.accent};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
  }
`;

const CardGlow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 100% 0%, rgba(99, 102, 241, 0.15) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.4s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

function Projects() {
  const { language } = useLanguage();
  const t = translations[language];
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  // Datos de los proyectos con traducciones
  const projectsData = [
    {
      id: 1,
      technologies: ["React", "Styled Components", "Vite"],
      link: "https://www.maxximundo.com/",
    },
    {
      id: 2,
      technologies: ["React Native", "Supabase", "iOS/Android"],
      link: "https://www.mamakanguroprocare.com/",
    },
    {
      id: 3,
      technologies: ["React", "PostgreSQL", "Tailwind CSS", "Railway"],
      link: "https://www.aimec-ec.com/",
    },
    {
      id: 4,
      technologies: ["React", "Redux", "Material UI"],
      link: "https://heyagendo.com/",
    },
    {
      id: 5,
      technologies: ["React", "TypeScript", "Node.js"],
      link: "https://app.heyagendo.com/",
    },
    {
      id: 6,
      technologies: ["Flutter", "Dart", "Firebase"],
      link: "https://play.google.com/store/apps/details?id=com.cuidatuplata.app&pcampaignid=web_share",
    },
  ];

  // Combinar datos estáticos con traducciones
  const projects = projectsData.map((project, index) => ({
    ...project,
    ...t.projects.items[index],
  }));

  return (
    <ProjectsSection
      id="proyectos"
      ref={ref}
      className={`section-fade-in ${isVisible ? "visible" : ""}`}
    >
      <Container>
        <SectionTitle>{t.projects.title}</SectionTitle>
        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              onClick={() => window.open(project.link, "_blank")}
            >
              <CardGlow />
              <ProjectContent>
                <ProjectCompany>{project.company}</ProjectCompany>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>

                <ProjectTech>
                  {project.technologies.map((tech, index) => (
                    <TechTag key={index}>{tech}</TechTag>
                  ))}
                </ProjectTech>

                <ProjectLink
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  {t.projects.verProyecto}
                </ProjectLink>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
}

export default Projects;
