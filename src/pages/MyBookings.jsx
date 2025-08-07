import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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

const BookingsGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const BookingCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: ${(props) => props.theme.shadows.md};
  border: 1px solid ${(props) => props.theme.colors.gray[200]};
  position: relative;
`;

const BookingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const BookingTitle = styled.h3`
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.gray[900]};
  margin-bottom: 0.5rem;
`;

const BookingDate = styled.p`
  color: ${(props) => props.theme.colors.gray[600]};
  font-size: 0.9rem;
`;

const StatusBadge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  ${(props) => {
    if (props.status === "confirmed") {
      return `
        background: ${props.theme.colors.success}20;
        color: ${props.theme.colors.success};
      `;
    }
    if (props.status === "pending") {
      return `
        background: ${props.theme.colors.warning}20;
        color: ${props.theme.colors.warning};
      `;
    }
    return `
      background: ${props.theme.colors.gray[200]};
      color: ${props.theme.colors.gray[600]};
    `;
  }}
`;

const BookingDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const DetailItem = styled.div`
  h4 {
    font-size: 0.9rem;
    color: ${(props) => props.theme.colors.gray[500]};
    margin-bottom: 0.25rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  p {
    color: ${(props) => props.theme.colors.gray[900]};
    font-weight: 500;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease;

  ${(props) =>
    props.variant === "primary"
      ? `
    background: ${props.theme.colors.primary};
    color: white;
    
    &:hover {
      background: ${props.theme.colors.secondary};
    }
  `
      : `
    background: transparent;
    color: ${props.theme.colors.gray[600]};
    border: 1px solid ${props.theme.colors.gray[300]};
    
    &:hover {
      background: ${props.theme.colors.gray[50]};
    }
  `}
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: ${(props) => props.theme.colors.gray[500]};

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.colors.gray[700]};
  }

  p {
    margin-bottom: 2rem;
  }
`;

const MyBookings = () => {
  // Beispiel-Buchungen (in echter App würden diese von einer API kommen)
  const [bookings, setBookings] = useState([
    {
      id: 1,
      service: "Meeting Raum A",
      date: "2024-01-15",
      time: "14:00 - 16:00",
      duration: "2 Stunden",
      price: "100€",
      status: "confirmed",
      location: "Hauptgebäude, 2. OG",
      participants: "8 Personen",
      bookingRef: "MB-2024-001",
    },
    {
      id: 2,
      service: "Beratungstermin",
      date: "2024-01-20",
      time: "10:00 - 11:00",
      duration: "1 Stunde",
      price: "80€",
      status: "pending",
      location: "Beratungsraum 3",
      participants: "2 Personen",
      bookingRef: "BT-2024-005",
    },
    {
      id: 3,
      service: "Event Location",
      date: "2024-02-01",
      time: "09:00 - 18:00",
      duration: "1 Tag",
      price: "200€",
      status: "confirmed",
      location: "Eventbereich",
      participants: "50 Personen",
      bookingRef: "EV-2024-012",
    },
  ]);

  const getStatusText = (status) => {
    switch (status) {
      case "confirmed":
        return "Bestätigt";
      case "pending":
        return "Wartend";
      case "cancelled":
        return "Storniert";
      default:
        return status;
    }
  };

  const handleCancelBooking = (id) => {
    setBookings(bookings.filter((booking) => booking.id !== id));
  };

  return (
    <Container>
      <Title>Meine Buchungen</Title>

      {bookings.length === 0 ? (
        <EmptyState>
          <h3>Keine Buchungen gefunden</h3>
          <p>Sie haben noch keine Buchungen vorgenommen.</p>
          <Button variant="primary">Jetzt Buchen</Button>
        </EmptyState>
      ) : (
        <BookingsGrid>
          {bookings.map((booking, index) => (
            <BookingCard
              key={booking.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <BookingHeader>
                <div>
                  <BookingTitle>{booking.service}</BookingTitle>
                  <BookingDate>Referenz: {booking.bookingRef}</BookingDate>
                </div>
                <StatusBadge status={booking.status}>
                  {getStatusText(booking.status)}
                </StatusBadge>
              </BookingHeader>

              <BookingDetails>
                <DetailItem>
                  <h4>Datum & Zeit</h4>
                  <p>
                    {new Date(booking.date).toLocaleDateString("de-DE")} -{" "}
                    {booking.time}
                  </p>
                </DetailItem>
                <DetailItem>
                  <h4>Dauer</h4>
                  <p>{booking.duration}</p>
                </DetailItem>
                <DetailItem>
                  <h4>Ort</h4>
                  <p>{booking.location}</p>
                </DetailItem>
                <DetailItem>
                  <h4>Teilnehmer</h4>
                  <p>{booking.participants}</p>
                </DetailItem>
                <DetailItem>
                  <h4>Preis</h4>
                  <p>{booking.price}</p>
                </DetailItem>
              </BookingDetails>

              <ActionButtons>
                <Button variant="primary">Details anzeigen</Button>
                <Button variant="secondary">Ändern</Button>
                <Button
                  variant="secondary"
                  onClick={() => handleCancelBooking(booking.id)}
                >
                  Stornieren
                </Button>
              </ActionButtons>
            </BookingCard>
          ))}
        </BookingsGrid>
      )}
    </Container>
  );
};

export default MyBookings;
