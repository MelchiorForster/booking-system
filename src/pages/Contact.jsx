import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.gray[900]};
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.gray[600]};
  margin-bottom: 3rem;
  font-size: 1.1rem;
`;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const InfoCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: ${(props) => props.theme.shadows.md};
  text-align: center;
`;

const InfoIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const InfoTitle = styled.h3`
  color: ${(props) => props.theme.colors.gray[900]};
  margin-bottom: 0.5rem;
`;

const InfoText = styled.p`
  color: ${(props) => props.theme.colors.gray[600]};
  line-height: 1.6;
`;

const FormSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: ${(props) => props.theme.shadows.md};
  margin-bottom: 2rem;
`;

const FormTitle = styled.h2`
  color: ${(props) => props.theme.colors.gray[900]};
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: ${(props) => props.theme.colors.gray[700]};
  font-weight: 600;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 2px solid ${(props) => props.theme.colors.gray[200]};
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }

  ${(props) =>
    props.error &&
    `
    border-color: ${props.theme.colors.danger};
  `}
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 2px solid ${(props) => props.theme.colors.gray[200]};
  border-radius: 8px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }

  ${(props) =>
    props.error &&
    `
    border-color: ${props.theme.colors.danger};
  `}
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 2px solid ${(props) => props.theme.colors.gray[200]};
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

const ErrorMessage = styled.span`
  color: ${(props) => props.theme.colors.danger};
  font-size: 0.875rem;
`;

const SubmitButton = styled(motion.button)`
  background: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: background 0.2s ease;

  &:hover {
    background: ${(props) => props.theme.colors.secondary};
  }

  &:disabled {
    background: ${(props) => props.theme.colors.gray[400]};
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: ${(props) => props.theme.colors.success}20;
  border: 1px solid ${(props) => props.theme.colors.success};
  color: ${(props) => props.theme.colors.success};
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 2rem;
`;

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Contact form data:", data);
    setIsSubmitted(true);
    reset();

    // Success message für 5 Sekunden anzeigen
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: "📞",
      title: "Telefon",
      text: "+49 (0) 123 456 789\nMo-Fr: 9:00 - 18:00 Uhr",
    },
    {
      icon: "📧",
      title: "E-Mail",
      text: "info@bookingpro.de\nsupport@bookingpro.de",
    },
    {
      icon: "📍",
      title: "Adresse",
      text: "Musterstraße 123\n12345 Musterstadt\nDeutschland",
    },
    {
      icon: "⏰",
      title: "Öffnungszeiten",
      text: "Mo-Fr: 8:00 - 20:00 Uhr\nSa: 9:00 - 16:00 Uhr\nSo: Geschlossen",
    },
  ];

  return (
    <Container>
      <Title>Kontakt</Title>
      <Subtitle>
        Haben Sie Fragen oder benötigen Sie Unterstützung? Wir sind gerne für
        Sie da!
      </Subtitle>

      {isSubmitted && (
        <SuccessMessage
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ✅ Vielen Dank für Ihre Nachricht! Wir melden uns schnellstmöglich bei
          Ihnen.
        </SuccessMessage>
      )}

      <ContactInfo>
        {contactInfo.map((info, index) => (
          <InfoCard key={index}>
            <InfoIcon>{info.icon}</InfoIcon>
            <InfoTitle>{info.title}</InfoTitle>
            <InfoText style={{ whiteSpace: "pre-line" }}>{info.text}</InfoText>
          </InfoCard>
        ))}
      </ContactInfo>

      <FormSection>
        <FormTitle>Nachricht senden</FormTitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
            }}
          >
            <FormGroup>
              <Label>Vorname *</Label>
              <Input
                {...register("firstName", {
                  required: "Vorname ist erforderlich",
                })}
                error={errors.firstName}
                placeholder="Ihr Vorname"
              />
              {errors.firstName && (
                <ErrorMessage>{errors.firstName.message}</ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <Label>Nachname *</Label>
              <Input
                {...register("lastName", {
                  required: "Nachname ist erforderlich",
                })}
                error={errors.lastName}
                placeholder="Ihr Nachname"
              />
              {errors.lastName && (
                <ErrorMessage>{errors.lastName.message}</ErrorMessage>
              )}
            </FormGroup>
          </div>

          <FormGroup>
            <Label>E-Mail Adresse *</Label>
            <Input
              type="email"
              {...register("email", {
                required: "E-Mail ist erforderlich",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Ungültige E-Mail Adresse",
                },
              })}
              error={errors.email}
              placeholder="ihre.email@beispiel.de"
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Label>Telefon</Label>
            <Input {...register("phone")} placeholder="+49 (0) 123 456 789" />
          </FormGroup>

          <FormGroup>
            <Label>Betreff *</Label>
            <Select
              {...register("subject", {
                required: "Bitte wählen Sie einen Betreff",
              })}
            >
              <option value="">Bitte wählen...</option>
              <option value="booking">Buchungsanfrage</option>
              <option value="support">Technischer Support</option>
              <option value="billing">Abrechnung</option>
              <option value="partnership">Partnerschaft</option>
              <option value="feedback">Feedback</option>
              <option value="other">Sonstiges</option>
            </Select>
            {errors.subject && (
              <ErrorMessage>{errors.subject.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Label>Nachricht *</Label>
            <TextArea
              {...register("message", {
                required: "Nachricht ist erforderlich",
                minLength: {
                  value: 10,
                  message: "Nachricht muss mindestens 10 Zeichen lang sein",
                },
              })}
              error={errors.message}
              placeholder="Teilen Sie uns mit, wie wir Ihnen helfen können..."
            />
            {errors.message && (
              <ErrorMessage>{errors.message.message}</ErrorMessage>
            )}
          </FormGroup>

          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Nachricht senden
          </SubmitButton>
        </Form>
      </FormSection>
    </Container>
  );
};

export default Contact;
