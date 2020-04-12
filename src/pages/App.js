import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Bottom from '../components/Bottom';
import Top from '../components/Top';
import InitialView from '../pages/InitialView';
import Navbar from '../components/Navbar';
import BuyView from '../pages/BuyView';


function App() {
  return (
    <div>
      <header>
        <Navbar />
        <Top />
      </header>
      <Switch>
        <Route exact path='/' component={InitialView} />
        <Route exact path='/buy-view' component={BuyView} />
      </Switch>      
      <footer>
        <Bottom />
      </footer>  
    </div>
  );
}

export default App;
    