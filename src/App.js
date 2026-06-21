import {Route,Routes ,Navigate} from "react-router-dom";
import LoginRoute from './components/LoginRoute';
import Dashboard from "./components/Dashboard";
import ProtectedRoute  from "./components/ProtectedRoute";
import NotFound from "./components/NotFound";
import ReferralDetail from "./components/ReferralDetail";

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />

      <Route path="/referrals/:id" element={
        <ProtectedRoute>
          <ReferralDetail />
        </ProtectedRoute>
      } />

    <Route exact path="/login" element={<LoginRoute />} />
    
    <Route path="*" element={
        <ProtectedRoute>
          <NotFound />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default App;
