import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <Nav>
            <LogoLink to='/'>
                <LogoImg src="../leejuyong.jpeg" alt="logo"></LogoImg>
            </LogoLink>

            <Menu>
                <NavItem to='/album'>album</NavItem>
                <NavItem to='/about'>about me</NavItem>
                <NavItem to='/contact'>contact</NavItem>
            </Menu>
        </Nav>
    );
};

export default Navbar;

const Nav = styled.nav`
  width: 90%;
  height: 60px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 0;
  z-index: 10;
  font-family: Anthony;
`;

const LogoLink = styled(Link)`
  border: 2px solid orange;
  padding: 4px 8px;
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 30px;
  object-fit: contain;
`;

const Menu = styled.div`
  display: flex;
  gap: 32px;
`;

const NavItem = styled(Link)`
  font-size: 16px;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
