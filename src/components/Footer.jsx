import styled from "styled-components";
import { colors } from "../colors";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const FooterSection = styled.footer`
  background: ${colors.bgDark};
  padding: 4rem 0 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  z-index: 10;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  text-align: center;
`;

const Logo = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, ${colors.textWhite} 0%, ${colors.textSecondary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const SocialLink = styled.a`
  color: ${colors.textSecondary};
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${colors.accent};
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  color: ${colors.textMuted};
  font-size: 0.9rem;
  text-align: center;
`;

function Footer() {
    const { language } = useLanguage();
    const t = translations[language];

    const currentYear = new Date().getFullYear();

    return (
        <FooterSection>
            <Container>
                <FooterContent>
                    <Logo>Diegobarpdev</Logo>
                    <SocialLinks>
                        <SocialLink
                            href="https://github.com/diegobarpdev"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </SocialLink>
                        <SocialLink
                            href="https://www.linkedin.com/in/diegobarbechoc/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </SocialLink>
                        <SocialLink
                            href="mailto:diegobw13@gmail.com"
                            aria-label="Email"
                        >
                            <FaEnvelope />
                        </SocialLink>
                    </SocialLinks>
                </FooterContent>
                <Copyright>
                    &copy; {currentYear} Diego Barbecho. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
                </Copyright>
            </Container>
        </FooterSection>
    );
}

export default Footer;
