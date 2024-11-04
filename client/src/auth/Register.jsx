import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import { URL } from '../../utils/constants';

const Register = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        phone_number: '',
        about: '',
        balance: '',
        current_balance: '',
        ibn_number: '',
        bank_name: '',
        credit: '',
        deposit: '',
        withdrawal: '',
        standard: '',
        verify: '',
        role: '',
        status: ''
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

        if (!formData.first_name.trim()) {
            newErrors.first_name = 'First_name is required';
        }

        if (!formData.last_name.trim()) {
            newErrors.last_name = 'Last_name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
        }

        // Add more validations as needed for other fields

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                setIsSubmitting(true);

                const response = await axios.post(`${URL}/api/register`, formData);

                navigate('/login')
                toast.success('Register Successfully', { position: 'top-right' });

                setResponseMessage('Form submitted successfully!');
                console.log('API response:', response.data);
            } catch (error) {
                // console.error('API error:', error);
                console.log('API error:', error.response.data);
                toast.error(error.response.data?.error || error.response.data, { position: 'top-right' });
                setResponseMessage(error.response.data?.error || error.response.data);
            } finally {
                setIsSubmitting(false);
            }
        } else {
            console.log('Form contains errors');
        }
    };

    return (
        <div className="flex items-center justify-center bg-gray-50">
            <form onSubmit={handleSubmit} className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-4xl">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Register</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="form-group">
                        <label className="block text-gray-700 text-sm font-bold mb-2">First_name</label>
                        <input
                            type="text"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : 'border-gray-300"
                        />
                        {errors.first_name && <span className="text-red-500 text-sm mt-1">{errors.first_name}</span>}
                    </div>
                    <div className="form-group">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Last_name</label>
                        <input
                            type="text"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : 'border-gray-300"
                        />
                        {errors.last_name && <span className="text-red-500 text-sm mt-1">{errors.last_name}</span>}
                    </div>
                    <div className="form-group">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : 'border-gray-300"
                        />
                        {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : 'border-gray-300"
                        />
                        {errors.password && <span className="text-red-500 text-sm mt-1">{errors.password}</span>}
                    </div>
                    <div className="form-group">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
                        <input
                            type="text"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : 'border-gray-300"
                        />
                    </div>
                    <div className="form-group">
                        <label className="block text-gray-700 text-sm font-bold mb-2">About</label>
                        <input
                            type="text"
                            name="about"
                            value={formData.about}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : 'border-gray-300"
                        />
                    </div>
                    <div className="form-group">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Balance</label>
                        <input
                            type="text"
                            name="balance"
                            value={formData.balance}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : 'border-gray-300"
                        />
                    </div>
                    <div className="form-group">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Current Balance</label>
                        <input
                            type="text"
                            name="current_balance"
                            value={formData.current_balance}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : 'border-gray-300"
                        />
                    </div>
                    <div className="form-group">
                        <label className="block text-gray-700 text-sm font-bold mb-2">IBN Number</label>
                        <input
                            type="text"
                            name="ibn_number"
                            value={formData.ibn_number}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : 'border-gray-300"
                        />
                    </div>
                    <div className="form-group">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Bank Name</label>
                        <input
                            type="text"
                            name="bank_name"
                            value={formData.bank_name}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : 'border-gray-300"
                        />
                    </div>
                    <div className="form-group">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Credit</label>
                        <input
                            type="text"
                            name="credit"
                            value={formData.credit}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : 'border-gray-300"
                        />
                    </div>
                    <div className="form-group">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Deposit</label>
                        <input
                            type="text"
                            name="deposit"
                            value={formData.deposit}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : 'border-gray-300"
                        />
                    </div>
                    <div className="form-group">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Withdrawal</label>
                        <input
                            type="text"
                            name="withdrawal"
                            value={formData.withdrawal}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : 'border-gray-300"
                        />
                    </div>
                    <div className="form-group">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Standard</label>
                        <select
                            name="standard"
                            value={formData.standard}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : 'border-gray-300"
                        >
                            <option value="">Select</option>
                            <option value="standard1">Standard 1</option>
                            <option value="standard2">Standard 2</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Verify</label>
                        <select
                            name="verify"
                            value={formData.verify}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : 'border-gray-300"
                        >
                            <option value="">Select</option>
                            <option value="verified">Verified</option>
                            <option value="unverified">Unverified</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Role</label>
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : 'border-gray-300"
                        >
                            <option value="">Select</option>
                            <option value="subscriber">Subscriber</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Status</label>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : 'border-gray-300"
                        >
                            <option value="">Select</option>
                            <option value="active">Activate</option>
                            <option value="inactive">Deactivate</option>
                        </select>
                    </div>
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-8 bg-blue-600 text-white py-3 rounded-lg w-full hover:bg-blue-700 transition focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
                {responseMessage && <p className={`mt-4 text-center font-semibold ${errors ? 'text-red-600' : 'text-green-600'}`}>{responseMessage}</p>}
            </form>
        </div>
    );
};

export default Register;
