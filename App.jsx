import Home from './Home'
import './App.css'
import Login from './Login';
import Signup from "./Signup";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'


function App() {
  return (
    <div>
    <Router>
      <nav>
      <Link to="/" className='home-link'>Dev@Deakin</Link> <Link to="/Login" className='login-link'>Login</Link> 
      </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/SignUp" element={<Signup/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
