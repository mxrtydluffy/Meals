import React from 'react';
// Changed from BrowserRouter to HashRouter inorder to work with GH Pages.
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import About from './pages/About';
import SingleMeal from './pages/IndivMeal';
import Error from './pages/Error';
// import components
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        {/* Want to direct user to homepage where options will be visible. */}
        <Route exact path='/' element={<Home/>}/>
        {/* Shows about page */}
        <Route path='/about' element={<About/>}/>
        {/* Shows meal page */}
        <Route path='/meal/:id' element={<SingleMeal/>}/>
        {/* If user goes to a different undefined link */}
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;