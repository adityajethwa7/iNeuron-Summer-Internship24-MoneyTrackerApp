import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExpenseTracker from './components/ExpenseTracker';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Features from './components/Features';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';


function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="App flex flex-col max-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />

                <ExpenseTracker />
                <Features />
                <FAQ />
              </>
            } />
            <Route path="/features" element={<Features />} />
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
