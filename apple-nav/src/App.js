import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavWrapper from './components/NavWrapper';
import SubNav from './components/SubNav';
 


function App() {
  return (
    <div className="App">
        <Route path='/'>
          <NavWrapper />
        </Route>
          <SubNav  />
        </Route>
        
          
       
    </div>
  );
}

export default App;
