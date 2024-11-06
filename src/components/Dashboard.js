import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await api.get('/auth/me'); // Ensure the route exists on the backend
                setUserData(response.data.userData);
                // console.log(userData.username)username
            } catch (err) {
                navigate('/login');
            }
        };

        fetchUserData();
    }, [navigate]);

    return (
        <div className="min-h-screen p-8 bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            {userData ? (
                <div>
                    <h2>Welcome, {userData.username}</h2>
                    <p>Your role: {userData.role}</p>
                    <button
                        className="mt-4 bg-red-500 text-white p-2 rounded"
                        onClick={() => {
                            localStorage.removeItem('token');
                            navigate('/login');
                        }}
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Dashboard;