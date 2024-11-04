import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import { URL } from '../../utils/constants';

const Login = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                setIsSubmitting(true);

                const response = await axios.post(`${URL}/api/login`, formData);

                toast.success('Login Successfully', { position: 'top-right' });

                setResponseMessage('Login successful!');
                navigate('/')
                console.log('API response:', response.data);

            } catch (error) {
                // console.error('API error:', error);
                console.log('API error:', error.response.data?.error || error.response.data);
                toast.error(error.response.data?.error || error.response.data, { position: 'top-right' });
                setResponseMessage(error.response.data?.error);
            } finally {
                setIsSubmitting(false);
            }
        } else {
            console.log('Form contains errors');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-xs">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Login</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                        />
                        {errors.email && <p className="text-red-500 text-xs italic mt-1">{errors.email}</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                        />
                        {errors.password && <p className="text-red-500 text-xs italic mt-1">{errors.password}</p>}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            {isSubmitting ? 'Signing In...' : 'Sign In'}
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                </form>
                {responseMessage && <p className={`mt-4 text-center font-semibold ${errors ? 'text-red-600' : 'text-green-600'}`}>{responseMessage}</p>}
                <p className="text-center text-gray-500 text-xs mt-4">
                    &copy;2024 Your Company. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Login;
