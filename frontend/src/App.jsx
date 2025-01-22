import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'; 
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import Learn from './pages/Learn';
import Navbar from './components/Navbar';



const App = () => (
  <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
  <Router>
    {/* <Navbar /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
   </GoogleOAuthProvider>
);

export default App;