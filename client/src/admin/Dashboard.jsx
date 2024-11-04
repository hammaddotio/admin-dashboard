import React, { useState, useEffect } from "react";
import axios from "axios";
import { URL } from './../../utils/constants';
import UsersTable from './components/UsersTable';
import SideBar from "./components/SideBar";


const Dashboard = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${URL}/api/get-all-users`);
            setData(response.data.users);
            console.log(response.data.users)
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleRemove = async (userId) => {
        setLoading(true);
        try {
            setLoading(true)
            await axios.delete(`${URL}/api/delete-user/${userId}`);
            fetchData()
            setLoading(false)
        } catch (error) {
            console.error('Error removing item:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-screen">Error: {error}</div>;
    }

    return (
        <div className="flex">
            {/* Sidebar */}
            <SideBar />

            {/* Main content */}
            <UsersTable data={data} handleRemove={handleRemove} loading={loading} />
        </div>
    );
};

export default Dashboard;
