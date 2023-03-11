import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import Login from './Login';

import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
