import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Nav from './Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Foot from './Foot';
function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />}/>
                <Route path="/login" element={<Login />}/>
                
            </Routes>
            <Foot/>
      </Router>
      
      
      
    </div>
  );
}

export default App;
