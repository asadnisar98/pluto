import React from 'react';
import './App.css';
import AboutToken from './components/AboutToken';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav';
import OurTeam from './components/OurTeam';
import PlutoSwap from './components/PlutoSwap';
import Socials from './components/Socials';
import Specialities from './components/Specialities';
import Transactions from './components/Transactions';

function App() {
 
  return (
       <div className="App">
          <Nav />
          <Main />
          <AboutToken />
          <AboutUs />
          <PlutoSwap />
          <Specialities />
          <Socials />
          <OurTeam />
          <Transactions />
          <Footer />
      </div>
  );
}

export default App;
