import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import UserList from './userList';
import UseFetch from './useFetch';

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/user/:userId" element={<UseFetch />} />
      </Routes>
    </Router>
  );
}

export default App;