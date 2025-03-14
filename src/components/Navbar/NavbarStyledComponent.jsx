import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';
// import _default from '../../themes/default';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Edu+TAS+Beginner:wght@500;600&family=Reenie+Beanie&display=swap');
</style>

export const Nav = styled.div`

    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    padding: 8px 5px;
    position: fixed;
    top: 30px;
    left: 30px;
    right: 30px;
    z-index: 100;
  
    @media (max-width: 960px) {
      top: 15px;
        trastion: 0.8s all ease;
    }
`;
export const NavbarContainer = styled.div`
backdrop-filter: blur(16px);
border: solid white 1px;
border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
    // width: 80%;    
    padding: 0 0px;
    display: flex;
    justify-content: start;
    align-items: center;
    color:white;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`;
export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;
export const NavItems = styled.ul`
position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;
    

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

export const NavLink = styled(LinkR)`
  font-family: 'Edu TAS Beginner', cursive;
  font-family: 'Reenie Beanie', cursive;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  transition: border-color 0.3s;

  &:hover {
    border-bottom: 2px solid red;
    color: red;
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;


export const GitHubButton = styled.a`
  border: 1.8px solid #eeedef;
  justify-content: center;
  display: flex;
  align-items: center;
  background: #3D0CB6;
  height: 70%;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  &:hover {
    background: black; 
  }

  @media screen and (max-width: 768px) { 
    font-size: 14px;
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -2px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    bottom:30px;
 color: white;
  }
`


export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  position: absolute;
  top: 59px;
  right: 7.5px;
  width: 95%;
  padding: 16px 40px 28px 40px;
  background: rgba(19, 19, 19, 0.95);
  transition: transform 0.6s ease-in-out, opacity 0.4s ease-in-out;
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-310px)')}; /* Use $isOpen */
  border-left: 2px solid #ffffff;
  border-right: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  opacity: ${({ $isOpen }) => ($isOpen ? '100%' : '0')};
  z-index: ${({ $isOpen }) => ($isOpen ? '1000' : '-1000')}; /* Make sure z-index works with $isOpen */
`;


export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`

export const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileMenuButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

export  const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;


