import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.gray[900]};
  margin-bottom: 3rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ServiceCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: ${(props) => props.theme.shadows.md};
  border: 1px solid ${(props) => props.theme.colors.gray[200]};
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
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  margin-bottom: 1.5rem;

  li {
    color: ${(props) => props.theme.colors.gray[600]};
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    position: relative;

    &:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: ${(props) => props.theme.colors.success};
      font-weight: bold;
    }
  }
`;

const ServicePrice = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const BookButton = styled.button`
  width: 100%;
  background: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.2s ease;

  &:hover {
    background: ${(props) => props.theme.colors.secondary};
  }
`;

const Services = () => {
  const services = [
    {
      icon: "🏢",
      title: "Meeting Räume",
      description:
        "Professionelle Konferenzräume für Ihre Geschäftstermine und Präsentationen.",
      features: [
        "Moderne Ausstattung",
        "Beamer & Präsentationstechnik",
        "Whiteboard & Flipchart",
        "Kostenfreies WLAN",
        "Klimaanlage",
        "Catering-Service verfügbar",
      ],
      price: "ab 50€/Stunde",
      capacity: "bis 20 Personen",
    },
    {
      icon: "💼",
      title: "Beratungstermine",
      description:
        "Individuelle Beratung und Consultation in ruhiger, professioneller Atmosphäre.",
      features: [
        "Vertrauliche Gespräche",
        "Ruhige Atmosphäre",
        "Flexible Terminzeiten",
        "Diskrete Lage",
        "Parkplätze vorhanden",
        "Barrierefreier Zugang",
      ],
      price: "ab 80€/Stunde",
      capacity: "bis 4 Personen",
    },
    {
      icon: "🎉",
      title: "Event Locations",
      description:
        "Vielseitige Veranstaltungsräume für Events, Workshops und besondere Anlässe.",
      features: [
        "Flexible Raumaufteilung",
        "Professionelle Beleuchtung",
        "Sound-System",
        "Event-Koordination",
        "Dekoration möglich",
        "Catering-Partner",
      ],
      price: "ab 200€/Tag",
      capacity: "bis 100 Personen",
    },
    {
      icon: "🎓",
      title: "Schulungsräume",
      description:
        "Ideal ausgestattete Räume für Seminare, Schulungen und Workshops.",
      features: [
        "Interaktive Whiteboards",
        "Laptop/PC-Arbeitsplätze",
        "Gruppenarbeitsbereiche",
        "Pausenbereich",
        "Materialien & Supplies",
        "Technischer Support",
      ],
      price: "ab 120€/Tag",
      capacity: "bis 30 Personen",
    },
    {
      icon: "🏋️",
      title: "Fitness Studios",
      description:
        "Private Trainingsräume für Personal Training und kleine Gruppen.",
      features: [
        "Moderne Fitnessgeräte",
        "Freie Gewichte",
        "Yoga/Pilates Bereich",
        "Umkleidekabinen",
        "Duschgelegenheit",
        "Personal Trainer verfügbar",
      ],
      price: "ab 30€/Stunde",
      capacity: "bis 8 Personen",
    },
    {
      icon: "🎨",
      title: "Kreativräume",
      description:
        "Inspirierende Räume für kreative Workshops, Kunstkurse und Design-Sessions.",
      features: [
        "Natürliches Licht",
        "Flexible Arbeitsflächen",
        "Materialien & Werkzeuge",
        "Ausstellungsmöglichkeit",
        "Galerie-Atmosphäre",
        "Künstler-Community",
      ],
      price: "ab 40€/Stunde",
      capacity: "bis 15 Personen",
    },
  ];

  return (
    <Container>
      <Title>Unsere Services</Title>

      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>

            <ServiceFeatures>
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ServiceFeatures>

            <ServicePrice>{service.price}</ServicePrice>
            <p
              style={{
                color: "#64748b",
                marginBottom: "1rem",
                fontSize: "0.9rem",
              }}
            >
              Kapazität: {service.capacity}
            </p>

            <BookButton>Jetzt Buchen</BookButton>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </Container>
  );
};

export default Services;
