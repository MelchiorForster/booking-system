import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${(props) => props.theme.colors.white};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${(props) => props.theme.colors.gray[200]};
  z-index: 1000;
  padding: 0 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    opacity: 0.8;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: ${(props) => (props.mobileOpen ? "flex" : "none")};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${(props) => props.theme.colors.white};
    flex-direction: column;
    padding: 2rem;
    border-top: 1px solid ${(props) => props.theme.colors.gray[200]};
    box-shadow: ${(props) => props.theme.shadows.lg};
  }
`;

const NavLink = styled(Link)`
  font-weight: 500;
  color: ${(props) =>
    props.active ? props.theme.colors.primary : props.theme.colors.gray[700]};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.colors.gray[100]};
  }

  ${(props) =>
    props.active &&
    `
    background: ${props.theme.colors.gray[100]};
  `}
`;

const BookingButton = styled(motion.button)`
  background: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => props.theme.colors.secondary};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  color: ${(props) => props.theme.colors.gray[700]};
  padding: 0.5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: block;
  }
`;

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <HeaderContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Nav>
        <Logo to="/">📅 BookingPro</Logo>

        <NavLinks mobileOpen={mobileMenuOpen}>
          <NavLink to="/" active={isActive("/")}>
            Home
          </NavLink>
          <NavLink to="/services" active={isActive("/services")}>
            Services
          </NavLink>
          <NavLink to="/my-bookings" active={isActive("/my-bookings")}>
            Meine Buchungen
          </NavLink>
          <NavLink to="/contact" active={isActive("/contact")}>
            Kontakt
          </NavLink>

          <BookingButton
            as={Link}
            to="/booking"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Jetzt Buchen
          </BookingButton>
        </NavLinks>

        <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </MobileMenuButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
