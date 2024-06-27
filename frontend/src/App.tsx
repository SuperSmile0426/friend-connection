import React from 'react';
import './index.css'; // Import the CSS file with Tailwind styles
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import FriendsPage from './pages/FriendsPage';

const App: React.FC = () => {
    return (
        <Router>
            <nav className="bg-gray-800 text-white p-4">
                <ul className="flex space-x-4">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/user/1">User Profile</Link></li>
                    <li><Link to="/friends/1">Friends List</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/user/:userId" element={<UserPage />} />
                <Route path="/friends/:userId" element={<FriendsPage />} />
            </Routes>
        </Router>
    );
};

export default App;