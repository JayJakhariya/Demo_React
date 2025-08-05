import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Header from './Header/Header';
import Customer from './customer/Customer';
import Login from './login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';


function AppContent() {
  const location = useLocation();

  // Check if current path is NOT login page
  const showHeader = location.pathname !== '/';

  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/customer" element={<Customer />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
