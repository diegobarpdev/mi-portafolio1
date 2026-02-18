import styled from "styled-components";
import { colors, shadows, borderRadius } from "../colors";
import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const ContactSection = styled.section`
  padding: 8rem 0;
  background: ${colors.bgDark};
  position: relative;
  overflow: hidden;

  @media (max-width: 480px) {
    padding: 5rem 0;
  }
`;

const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const ContactTitle = styled.h2`
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, ${colors.textWhite} 0%, ${colors.textSecondary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: ${borderRadius.lg};
  padding: 2.5rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: rgba(30, 41, 59, 0.3);
    border-color: ${colors.accent};
    transform: translateY(-5px);
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;

const ContactIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(99, 102, 241, 0.1);
  color: ${colors.accentLight};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  ${ContactCard}:hover & {
    background: ${colors.accent};
    color: #ffffff;
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
  }
`;

const ContactCardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${colors.textWhite};
  margin-bottom: 1rem;
`;

const ContactCardText = styled.p`
  color: ${colors.textSecondary};
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ContactLink = styled.a`
  display: inline-block;
  background: transparent;
  color: ${colors.accentLight};
  padding: 0.75rem 1.5rem;
  border-radius: ${borderRadius.md};
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 1px solid ${colors.accent};

  &:hover {
    background: ${colors.accent};
    color: #ffffff;
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
  }
`;

function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  // Datos de contacto
  const contactInfo = [
    {
      id: 1,
      icon: <FaPhone />,
      title: t.contact.phone.title,
      text: t.contact.phone.text,
      text2: "+593 96 930 7527",
      link: "tel:+593969307527",
      linkText: t.contact.phone.linkText,
    },
    {
      id: 2,
      icon: <FaEnvelope />,
      title: t.contact.email.title,
      text: t.contact.email.text,
      text2: "diegobw13@gmail.com",
      link: "mailto:diegobw13@gmail.com",
      linkText: t.contact.email.linkText,
    },
    {
      id: 3,
      icon: <FaLinkedin />,
      title: t.contact.linkedin.title,
      text: t.contact.linkedin.text,
      text2: "diegobarbechoc",
      link: "https://www.linkedin.com/in/diegobarbechoc/",
      linkText: t.contact.linkedin.linkText,
    },
  ];

  return (
    <ContactSection
      id="contacto"
      ref={ref}
      className={`section-fade-in ${isVisible ? "visible" : ""}`}
    >
      <ContactContent>
        <ContactTitle>
          {t.contact.title}
        </ContactTitle>
        <ContactGrid>
          {contactInfo.map((contact) => (
            <ContactCard key={contact.id}>
              <ContactIcon>
                {contact.icon}
              </ContactIcon>
              <ContactCardTitle>
                {contact.title}
              </ContactCardTitle>
              <ContactCardText>
                {contact.text}
              </ContactCardText>
              <ContactLink
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.linkText}
              </ContactLink>
            </ContactCard>
          ))}
        </ContactGrid>
      </ContactContent>
    </ContactSection>
  );
}

export default Contact;
