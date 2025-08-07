import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.gray[900]};
  color: white;
  padding: 3rem 0 1rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: ${props => props.theme.colors.primary};
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  
  p, a {
    color: ${props => props.theme.colors.gray[300]};
    line-height: 1.6;
    text-decoration: none;
    display: block;
    margin-bottom: 0.5rem;
    
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${props => props.theme.colors.gray[700]};
  padding-top: 1rem;
  text-align: center;
  color: ${props => props.theme.colors.gray[400]};
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  a {
    color: ${props => props.theme.colors.gray[400]};
    font-size: 1.5rem;
    transition: color 0.2s ease;
    
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <h3>BookingPro</h3>
            <p>
              Ihre professionelle Buchungsplattform für Meeting-Räume, 
              Beratungstermine und Event-Locations.
            </p>
            <SocialLinks>
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="Instagram">📷</a>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <h3>Services</h3>
            <a href="/services">Meeting Räume</a>
            <a href="/services">Beratungstermine</a>
            <a href="/services">Event Locations</a>
            <a href="/services">Schulungsräume</a>
            <a href="/services">Fitness Studios</a>
            <a href="/services">Kreativräume</a>
          </FooterSection>

          <FooterSection>
            <h3>Support</h3>
            <a href="/contact">Kontakt</a>
            <a href="#">FAQ</a>
            <a href="#">Hilfe Center</a>
            <a href="#">Buchungshilfe</a>
            <a href="#">Technischer Support</a>
          </FooterSection>

          <FooterSection>
            <h3>Kontakt</h3>
            <p>📞 +49 (0) 123 456 789</p>
            <p>📧 info@bookingpro.de</p>
            <p>📍 Musterstraße 123<br />12345 Musterstadt</p>
            <p>⏰ Mo-Fr: 8:00 - 20:00 Uhr</p>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <p>
            © 2024 BookingPro. Alle Rechte vorbehalten. | 
            <a href="#" style={{ color: 'inherit', marginLeft: '0.5rem' }}>Datenschutz</a> | 
            <a href="#" style={{ color: 'inherit', marginLeft: '0.5rem' }}>AGB</a> | 
            <a href="#" style={{ color: 'inherit', marginLeft: '0.5rem' }}>Impressum</a>
          </p>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;