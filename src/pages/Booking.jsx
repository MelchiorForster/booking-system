import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const BookingTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.gray[900]};
  margin-bottom: 3rem;
`;

const BookingForm = styled(motion.form)`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: ${(props) => props.theme.shadows.lg};
`;

const FormSection = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  color: ${(props) => props.theme.colors.gray[900]};
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns || "1fr"};
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 500;
  color: ${(props) => props.theme.colors.gray[700]};
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 2px solid ${(props) => props.theme.colors.gray[300]};
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
    border-color: ${props.theme.colors.error};
  `}
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 2px solid ${(props) => props.theme.colors.gray[300]};
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

const Textarea = styled.textarea`
  padding: 0.75rem;
  border: 2px solid ${(props) => props.theme.colors.gray[300]};
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

const ServiceCard = styled(motion.div)`
  padding: 1.5rem;
  border: 2px solid
    ${(props) =>
      props.selected
        ? props.theme.colors.primary
        : props.theme.colors.gray[300]};
  border-radius: 12px;
  cursor: pointer;
  text-align: center;
  transition: all 0.2s ease;
  background: ${(props) =>
    props.selected ? props.theme.colors.primary + "10" : "white"};

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

const ServiceIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const ServiceName = styled.h4`
  color: ${(props) => props.theme.colors.gray[900]};
  margin-bottom: 0.5rem;
`;

const ServicePrice = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
`;

const TimeSlot = styled(motion.button)`
  padding: 0.75rem 1rem;
  border: 2px solid
    ${(props) =>
      props.selected
        ? props.theme.colors.primary
        : props.theme.colors.gray[300]};
  border-radius: 8px;
  background: ${(props) =>
    props.selected ? props.theme.colors.primary : "white"};
  color: ${(props) =>
    props.selected ? "white" : props.theme.colors.gray[700]};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: ${(props) => props.theme.colors.primary};
  color: white;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 2rem;

  &:hover {
    background: ${(props) => props.theme.colors.secondary};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.span`
  color: ${(props) => props.theme.colors.error};
  font-size: 0.9rem;
  margin-top: 0.25rem;
`;

const Booking = () => {
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const services = [
    {
      id: "meeting",
      name: "Meeting Raum",
      icon: "🏢",
      price: "50€/Stunde",
      description: "Professioneller Konferenzraum",
    },
    {
      id: "consultation",
      name: "Beratung",
      icon: "💼",
      price: "80€/Stunde",
      description: "Persönliche Beratung",
    },
    {
      id: "event",
      name: "Event Location",
      icon: "🎉",
      price: "200€/Tag",
      description: "Veranstaltungsraum",
    },
  ];

  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  const onSubmit = (data) => {
    const bookingData = {
      ...data,
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      timestamp: new Date().toISOString(),
    };

    console.log("Booking Data:", bookingData);

    // Hier würdest du die Daten an dein Backend senden
    alert("Buchung erfolgreich! Sie erhalten eine Bestätigungs-E-Mail.");
  };

  // Get today's date for min date
  const today = new Date().toISOString().split("T")[0];

  return (
    <Container>
      <BookingTitle>Neue Buchung</BookingTitle>

      <BookingForm
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Service Selection */}
        <FormSection>
          <SectionTitle>1. Service auswählen</SectionTitle>
          <FormRow columns="repeat(auto-fit, minmax(200px, 1fr))">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                selected={selectedService === service.id}
                onClick={() => setSelectedService(service.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceName>{service.name}</ServiceName>
                <ServicePrice>{service.price}</ServicePrice>
              </ServiceCard>
            ))}
          </FormRow>
        </FormSection>

        {/* Date & Time Selection */}
        <FormSection>
          <SectionTitle>2. Datum & Uhrzeit</SectionTitle>
          <FormRow columns="1fr 1fr">
            <FormGroup>
              <Label>Datum</Label>
              <Input
                type="date"
                min={today}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Dauer</Label>
              <Select {...register("duration", { required: true })}>
                <option value="">Bitte wählen</option>
                <option value="1">1 Stunde</option>
                <option value="2">2 Stunden</option>
                <option value="4">Halber Tag (4h)</option>
                <option value="8">Ganzer Tag (8h)</option>
              </Select>
              {errors.duration && (
                <ErrorMessage>Bitte Dauer auswählen</ErrorMessage>
              )}
            </FormGroup>
          </FormRow>

          {selectedDate && (
            <FormGroup>
              <Label>Verfügbare Zeiten</Label>
              <FormRow columns="repeat(auto-fit, minmax(80px, 1fr))">
                {timeSlots.map((time) => (
                  <TimeSlot
                    key={time}
                    type="button"
                    selected={selectedTime === time}
                    onClick={() => setSelectedTime(time)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {time}
                  </TimeSlot>
                ))}
              </FormRow>
            </FormGroup>
          )}
        </FormSection>

        {/* Personal Information */}
        <FormSection>
          <SectionTitle>3. Ihre Kontaktdaten</SectionTitle>
          <FormRow columns="1fr 1fr">
            <FormGroup>
              <Label>Vorname *</Label>
              <Input
                {...register("firstName", {
                  required: "Vorname ist erforderlich",
                })}
                error={errors.firstName}
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
              />
              {errors.lastName && (
                <ErrorMessage>{errors.lastName.message}</ErrorMessage>
              )}
            </FormGroup>
          </FormRow>

          <FormRow columns="1fr 1fr">
            <FormGroup>
              <Label>E-Mail *</Label>
              <Input
                type="email"
                {...register("email", {
                  required: "E-Mail ist erforderlich",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Ungültige E-Mail-Adresse",
                  },
                })}
                error={errors.email}
              />
              {errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}
            </FormGroup>
            <FormGroup>
              <Label>Telefon</Label>
              <Input type="tel" {...register("phone")} />
            </FormGroup>
          </FormRow>

          <FormGroup>
            <Label>Besondere Wünsche / Anmerkungen</Label>
            <Textarea
              {...register("notes")}
              placeholder="Optional: Zusätzliche Informationen zu Ihrer Buchung..."
            />
          </FormGroup>
        </FormSection>

        <SubmitButton
          type="submit"
          disabled={!selectedService || !selectedDate || !selectedTime}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Buchung Bestätigen
        </SubmitButton>
      </BookingForm>
    </Container>
  );
};

export default Booking;
