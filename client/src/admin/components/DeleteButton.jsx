import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import axios from 'axios';

const DeleteButton = ({ userId, handleRemove, loading }) => {


    return (
        <button
            onClick={() => handleRemove(userId)}
            className={`bg-red-500 text-white px-4 py-2 rounded flex items-center justify-center space-x-2 font-semibold tracking-wide shadow-lg hover:bg-red-600 transition-colors duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
        >
            {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
            ) : (
                <FaTrash className="text-xl" />
            )}
        </button>
    );
};

export default DeleteButton;
