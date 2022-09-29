import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PagesTabs from './components/PagesTabs';

function App() {
  return (
    <div className="App">
      <Header />
      <PagesTabs />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
