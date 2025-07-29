import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom';
import Header from './Header/Header';
import Dashboard from './dashboard/Dashboard';
import Customer from './customer/Customer';
import Project from './project/Project';
import Login from './login/Login';

function AppContent() {
  const location = useLocation();

  // Check if current path is NOT login page
  const showHeader = location.pathname !== '/';

  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/customer" element={<Customer />} />
        <Route path="/project" element={<Project />} />
        {/* <Route path="*" element={<Navigate to="/dashboard" />} /> */}
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
