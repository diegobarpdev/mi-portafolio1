import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { colors, shadows, borderRadius } from "../colors";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { FaBars, FaTimes } from "react-icons/fa";

const HeaderNav = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 90px;
  display: flex;
  align-items: center;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(12px);
  z-index: 1000;
  padding: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const Logo = styled.a`
  color: ${colors.textWhite};
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, ${colors.accentLight} 0%, ${colors.accent} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  text-decoration: none;
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${colors.textWhite};
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

// Overlay styled component (will be rendered via Portal)
const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${colors.bgPrimary};
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
  transform: ${({ $isOpen }) => ($isOpen ? "translateX(0)" : "translateX(100%)")};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
`;

const NavLink = styled.a`
  color: ${({ $isActive }) => ($isActive ? colors.textWhite : colors.textSecondary)};
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ $isActive }) => ($isActive ? "100%" : "0")};
    height: 2px;
    background: ${colors.accent};
    transition: width 0.3s ease;
    border-radius: 2px;
  }

  &:hover {
    color: ${colors.textWhite};
    
    &::after {
      width: 100%;
    }
  }
`;

const MobileNavLink = styled(NavLink)`
  font-size: 1.5rem;
`;

const LanguageButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  color: ${colors.textWhite};
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: ${borderRadius.md};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.85rem;
  
  &:hover {
    background: ${colors.accent};
    border-color: ${colors.accent};
    transform: translateY(-1px);
  }
`;

const OverlayCloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  background: none;
  border: none;
  color: ${colors.textWhite};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10000;
  
  @media (max-width: 768px) {
    right: 1.5rem;
  }
`;

function Header() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sections to spy on
  const sectionIds = ["inicio", "sobre-mi", "skills", "proyectos", "contacto"];
  const activeSection = useScrollSpy(sectionIds, 100);

  // Manage body scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Función para manejar el click y cerrar el menú móvil
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    // Allow default anchor behavior (hash update + smooth scroll via CSS)
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { id: "inicio", label: t.header.nav.inicio },
    { id: "sobre-mi", label: t.header.nav.sobreMi },
    { id: "skills", label: t.header.nav.tecnologias },
    { id: "proyectos", label: t.header.nav.proyectos },
    { id: "contacto", label: t.header.nav.contacto },
  ];

  return (
    <>
      <HeaderNav className="header-nav">
        <NavContainer className="nav-container">
          <div>
            <Logo href="#inicio" className="logo" onClick={handleNavClick}>
              {t.header.logo}
            </Logo>
          </div>

          {/* Desktop Menu */}
          <NavMenu className="nav-menu">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                href={`#${item.id}`}
                onClick={handleNavClick}
                $isActive={activeSection === item.id}
              >
                {item.label}
              </NavLink>
            ))}
            <LanguageButton onClick={toggleLanguage} aria-label="Cambiar idioma">
              {language === "es" ? "EN" : "ES"}
            </LanguageButton>
          </NavMenu>

          {/* Mobile Menu Open Button */}
          {!isMobileMenuOpen && (
            <MobileMenuButton
              onClick={toggleMobileMenu}
              aria-label="Menu"
            >
              <FaBars />
            </MobileMenuButton>
          )}

        </NavContainer>
      </HeaderNav>

      {/* Mobile Menu Overlay - Rendered via Portal */}
      {createPortal(
        <OverlayContainer $isOpen={isMobileMenuOpen}>
          <OverlayCloseButton onClick={() => setIsMobileMenuOpen(false)} aria-label="Cerrar menú">
            <FaTimes />
          </OverlayCloseButton>

          {navItems.map((item) => (
            <MobileNavLink
              key={item.id}
              href={`#${item.id}`}
              onClick={handleNavClick}
              $isActive={activeSection === item.id}
            >
              {item.label}
            </MobileNavLink>
          ))}
          <LanguageButton onClick={toggleLanguage} aria-label="Cambiar idioma">
            {language === "es" ? "English" : "Español"}
          </LanguageButton>
        </OverlayContainer>,
        document.body
      )}
    </>
  );
}

export default Header;
