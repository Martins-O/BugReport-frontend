import React, { useEffect, useState } from 'react';
import api from '../services/api';

const BugReportList = () => {
    const [bugReports, setBugReports] = useState([]); // Initialized as an array
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBugReports = async () => {
            try {
                const response = await api.get('/bugs/');
                setBugReports(response.data.userData || []); // Ensure it's an array
            } catch (error) {
                console.error('Error fetching bug reports:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBugReports();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h2>Bug Reports</h2>
            {Array.isArray(bugReports) && bugReports.length > 0 ? (
                bugReports.map((bugReport) => (
                    <div key={bugReport.id} className="bug-report-card">
                        <h3>{bugReport.title}</h3>
                        <p>{bugReport.description}</p>
                    </div>
                ))
            ) : (
                <p>No bug reports available.</p>
            )}
        </div>
    );
};

export default BugReportList;