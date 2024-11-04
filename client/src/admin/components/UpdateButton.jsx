import React from 'react'
import { FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const UpdateButton = ({ id }) => {
    const navigate = useNavigate()
    return (
        <button
            className="bg-blue-500 text-white px-2 py-1 rounded"
            onClick={() => navigate(`/dashboard/user/update/${id}`)}
        >
            <FaEdit />
        </button>
    )
}

export default UpdateButton
