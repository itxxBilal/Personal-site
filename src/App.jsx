import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/Themes.jsx';
import Navbar from './components/Navbar';
import './App.css';
import './globals.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Education from './components/Education';
import ProjectDetails from './components/ProjectDetails';
import styled from 'styled-components';
import Loading from './components/loading/loading.jsx';
import Modal from './components/Alert/Modal.jsx'; // Import the Modal component

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%);
  width: 100%;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [loading, setLoading] = useState(true);
  const [isAlertOpen, setIsAlertOpen] = useState(true); // State for alert modal

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data) for a few seconds
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay as needed
  }, []);

  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        {loading ? (
          <Loading /> // Display the Loading component while loading is true
        ) : (
          <Body>
            <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route path="/skills" element={<Wrapper><Skills /></Wrapper>} />
              <Route path="/experience" element={<Wrapper><Experience /></Wrapper>} />
              <Route
                path="/projects"
                element={<Projects openModal={openModal} setOpenModal={setOpenModal} />}
              />
              <Route path="/education" element={<Wrapper><Education /></Wrapper>} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
            {openModal.state && (
              <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
            )}
          </Body>
        )}
      </Router>
      <Modal isOpen={isAlertOpen} onClose={closeAlert}>
        <h4>Updated website:</h4>
        <p>Separate pages for content, new blog, click menu button.</p>
      </Modal>
    </ThemeProvider>
  );
}

export default App;
