import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

// Theme
const theme = {
  colors: {
    primary: "#2563eb",
    secondary: "#1e40af",
    accent: "#10b981",
    background: "#f8fafc",
    white: "#ffffff",
    gray: {
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      500: "#64748b",
      700: "#334155",
      900: "#0f172a",
    },
    success: "#22c55e",
    warning: "#f59e0b",
    error: "#ef4444",
  },
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    heading: "'Poppins', sans-serif",
  },
  breakpoints: {
    mobile: "768px",
    tablet: "1024px",
    desktop: "1200px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
  },
};

// Global Styles
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: ${(props) => props.theme.fonts.primary};
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.gray[900]};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fonts.heading};
    font-weight: 600;
    line-height: 1.2;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }

  input, textarea, select {
    font-family: inherit;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 80px; // Account for fixed header
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AppContainer>
          <Header />
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/my-bookings" element={<MyBookings />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </MainContent>
          <Footer />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
