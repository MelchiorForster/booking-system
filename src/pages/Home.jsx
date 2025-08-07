import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.primary}15,
    ${(props) => props.theme.colors.accent}15
  );
  border-radius: 20px;
  margin-bottom: 4rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.gray[900]};
  margin-bottom: 1rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.gray[600]};
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled(motion.button)`
  background: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0.5rem;

  &:hover {
    background: ${(props) => props.theme.colors.secondary};
  }
`;

const SecondaryButton = styled(CTAButton)`
  background: transparent;
  color: ${(props) => props.theme.colors.primary};
  border: 2px solid ${(props) => props.theme.colors.primary};

  &:hover {
    background: ${(props) => props.theme.colors.primary};
    color: white;
  }
`;

const ServicesSection = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.gray[900]};
  margin-bottom: 3rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: ${(props) => props.theme.shadows.md};
  text-align: center;
  border: 1px solid ${(props) => props.theme.colors.gray[200]};

  &:hover {
    box-shadow: ${(props) => props.theme.shadows.lg};
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.gray[900]};
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: ${(props) => props.theme.colors.gray[600]};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ServiceButton = styled(motion.button)`
  background: ${(props) => props.theme.colors.accent};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;

  &:hover {
    background: ${(props) => props.theme.colors.primary};
  }
`;

const FeaturesSection = styled.section`
  background: white;
  padding: 4rem 2rem;
  border-radius: 20px;
  box-shadow: ${(props) => props.theme.shadows.md};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const FeatureCard = styled.div`
  text-align: center;
  padding: 1.5rem;

  .icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  h4 {
    color: ${(props) => props.theme.colors.gray[900]};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${(props) => props.theme.colors.gray[600]};
    font-size: 0.9rem;
  }
`;

const Home = () => {
  const services = [
    {
      icon: "🏢",
      title: "Meeting Räume",
      description:
        "Professionelle Konferenzräume und Besprechungsräume für Ihr Business.",
      path: "/booking?service=meeting",
    },
    {
      icon: "💼",
      title: "Beratungstermine",
      description:
        "Persönliche Beratung und Consultation für Ihre individuellen Bedürfnisse.",
      path: "/booking?service=consultation",
    },
    {
      icon: "🎉",
      title: "Event Buchungen",
      description:
        "Veranstaltungsräume und Event-Locations für besondere Anlässe.",
      path: "/booking?service=event",
    },
  ];

  const features = [
    {
      icon: "⚡",
      title: "Schnell & Einfach",
      description: "Buchung in wenigen Klicks",
    },
    {
      icon: "📱",
      title: "Mobile Optimiert",
      description: "Funktioniert auf allen Geräten",
    },
    {
      icon: "🔒",
      title: "Sicher",
      description: "Ihre Daten sind geschützt",
    },
    {
      icon: "📧",
      title: "Bestätigungen",
      description: "Automatische E-Mail Updates",
    },
  ];

  return (
    <Container>
      <HeroSection>
        <HeroTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Einfach. Schnell. Zuverlässig.
        </HeroTitle>
        <HeroSubtitle>
          BookingPro macht Online-Reservierungen zum Kinderspiel. Buchen Sie
          Termine, Events und Services mit nur wenigen Klicks.
        </HeroSubtitle>
        <div>
          <CTAButton
            as={Link}
            to="/booking"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Jetzt Buchen
          </CTAButton>
          <SecondaryButton
            as={Link}
            to="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Services Entdecken
          </SecondaryButton>
        </div>
      </HeroSection>

      <ServicesSection>
        <SectionTitle>Unsere Services</SectionTitle>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceButton
                as={Link}
                to={service.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Jetzt Buchen
              </ServiceButton>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesSection>

      <FeaturesSection>
        <SectionTitle>Warum BookingPro?</SectionTitle>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <div className="icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </FeaturesSection>
    </Container>
  );
};

export default Home;
