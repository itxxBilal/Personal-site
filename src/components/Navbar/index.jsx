import React from 'react';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileMenuLink } from './NavbarStyledComponent';
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import ItxBilal from './Logo-1.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='./'>
          <img src={ItxBilal} alt="ItxBilal" style={{ width: "58px" }} />
          <div style={{ display: "flex", alignItems: "center", color: "white", cursor: 'pointer' }}>
            <Span>ItxBilal</Span>
          </div>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
          <NavLink to="/" onClick={handleNavClick}>Home</NavLink>
          <NavLink to="/projects" onClick={handleNavClick}>Projects</NavLink>
          <NavLink to="/education" onClick={handleNavClick}>Education</NavLink>
          <NavLink to="/contact" onClick={handleNavClick}>Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href="https://github.com/ItxxBilal" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} style={{ marginRight: '8px' }} />
            GitHub
          </GitHubButton>
        </ButtonContainer>
        {/* Using `$` prefix to avoid passing `isOpen` prop to the DOM */}
        <MobileMenu $isOpen={isOpen}>
          <MobileMenuLink to="/" onClick={handleNavClick}>Home</MobileMenuLink>
          <MobileMenuLink to="/projects" onClick={handleNavClick}>Projects</MobileMenuLink>
          <MobileMenuLink to="/education" onClick={handleNavClick}>Education</MobileMenuLink>
          <MobileMenuLink to="/contact" onClick={handleNavClick}>Contact</MobileMenuLink>
        </MobileMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
