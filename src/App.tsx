import React from 'react';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import UsersPage from './pages/UsersPage';

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="users/:userId" element={<UserPage />} />
            <Route path="users" element={<UsersPage />} />
          </Route>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
