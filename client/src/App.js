import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register'; // Ensure the path is correct
import TaskBoard from './components/TaskBoard';
import Profile from './pages/Profile';

const PrivateRoute = ({ element }) => {
  const { user } = React.useContext(AuthContext);

  return user ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
          <Route path="/tasks" element={<PrivateRoute element={<TaskBoard />} />} />
          <Route path="/" element={<Navigate to="/tasks" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
