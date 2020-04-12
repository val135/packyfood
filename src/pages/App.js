import React from 'react';
import Bottom from '../components/Bottom';
import Top from '../components/Top';
import About from '../components/About';
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';
import MapContainer  from '../components/MapContainer';


function App() {
  return (
    <>
    <header>
      <Navbar />
      <Top />
    </header>
    <main>  
      <About />
      <Cards />
      <MapContainer />
    </main>
    <footer>
      <Bottom />
    </footer>  
    </>
  );
}

export default App;
    