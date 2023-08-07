import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Navigation from './Navigation';


function App() {
  return (
      <Router>

      <Routes>
        <Route path='/' element={<Navigation />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route exact path="/page1" element={<Page1 />} />
        <Route exact path="/page2" element={<Page2 />} />
        
        <Route exact path="/page3" element={<Page3 />} />
        
      </Routes>

      </Router>
  );
}

export default App;
