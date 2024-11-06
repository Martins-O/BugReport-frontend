import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import BugReportList from './components/BugReportList';
import BugReportDetails from "./components/BugReportDetails";

// Inside your Router setup:

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" element={<Login />} />
                <Route path="/bugs" element={<BugReportList />} />
                <Route path="/bugs/:id" element={<BugReportDetails />} />
            </Routes>
        </Router>
    );
};

export default App;