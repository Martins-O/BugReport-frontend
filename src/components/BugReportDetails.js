import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const BugReportDetails = () => {
    const { id } = useParams();
    const [bugReport, setBugReport] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch the specific bug report by ID
        const fetchBugReport = async () => {
            try {
                const response = await api.get(`/bugs/${id}`);
                setBugReport(response.data.userData);
            } catch (error) {
                console.error('Error fetching bug report:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBugReport();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!bugReport) return <p>Bug report not found.</p>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{bugReport.title}</h1>
            <div className="mb-4">
                <p><strong>Description:</strong> {bugReport.description}</p>
                <p><strong>Status:</strong> {bugReport.status}</p>
                <p><strong>Priority:</strong> {bugReport.priority}</p>
                <p><strong>Project:</strong> {bugReport.project || 'N/A'}</p>
                <p><strong>Reported By:</strong> {bugReport.reportBy?.username}</p>
                <p><strong>Assigned Developer:</strong> {bugReport.assignedDeveloper?.username || 'Unassigned'}</p>
            </div>
            {/* Additional actions like comments, status update, or assignment can go here */}
        </div>
    );
};

export default BugReportDetails;