import './App.css';
import HomePage from './HomePage';
import { BrowserRouter, BrowserRouter as Router, Route ,Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Register from './Pages/Auth_Users/registerPage'
import LoginPage from './Pages/Auth_Users/loginPage';

function App() {
  return (
    <div className='App'>
    <BrowserRouter basename="/Anant-Motors">
    <Router>
    <AuthProvider>
    <Routes>
    <Route  exact path="/Anant-Motors" element={<HomePage />} />
    </Routes>
    <Routes>
      <Route path='register' element={<Register/>}/>
    </Routes>
    <Routes>
      <Route path='login' element={<LoginPage/>}/>
    </Routes>
    </AuthProvider>
    </Router>
    </BrowserRouter>
    </div>
  );
}

export default App;
