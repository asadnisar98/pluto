import React, {useEffect, useState} from 'react';
import './App.css';
import AboutToken from './components/AboutToken';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Main from './components/Main';
import Nav from './components/Nav';
import OurTeam from './components/OurTeam';
import PlutoSwap from './components/PlutoSwap';
import Socials from './components/Socials';
import Specialities from './components/Specialities';
import Transactions from './components/Transactions';



function App() {


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  
  return (
       <div className="App">
       {loading ?  <Loader /> : <div>

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

       </div> }
         

      </div>
  );
}

export default App;
