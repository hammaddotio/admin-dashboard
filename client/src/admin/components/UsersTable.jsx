import React from 'react'
import UpdateButton from './UpdateButton';
import RemoveButton from './DeleteButton';
import { ADMIN_DASHBOARD_USER_HEADERS } from '../../../utils/constants';

const UsersTable = ({ data, handleRemove, loading }) => {

    return (
        <main className="flex-1 p-6 bg-gray-100">
            <header className="flex users-center justify-between mb-6">
                <h1 className="text-3xl font-semibold">Tables</h1>
                <div className="flex users-center space-x-4">
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:outline-none"
                            placeholder="Search"
                        />
                        <span className="absolute inset-y-0 left-0 flex users-center pl-3">
                            🔍
                        </span>
                    </div>
                    <div className="relative">
                        <button className="flex users-center px-4 py-2 bg-white rounded-lg shadow-sm">
                            <span className="mr-2">Sample menu</span>
                            ▼
                        </button>
                    </div>
                    <div className="relative">
                        <button className="flex users-center px-4 py-2 bg-white rounded-full shadow-sm">
                            <span>John Doe</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Responsive Table */}
            <div className="bg-white shadow rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-4">Responsive table. Collapses on mobile</h2>
                <table className="w-full text-left table-auto">
                    <thead>
                        <tr>
                            {
                                ADMIN_DASHBOARD_USER_HEADERS.map(admin_dashboard_user_header =>
                                    <th className="px-4 py-2" key={admin_dashboard_user_header}>{admin_dashboard_user_header}</th>
                                )
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user, index) => (
                            <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                                <td className="px-4 py-2 flex users-center space-x-3">
                                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                                    <span>{user.first_name}</span>
                                </td>
                                <td className="px-4 py-2">{user.last_name}</td>
                                <td className="px-4 py-2">{user.phone_number}</td>
                                <td className="px-4 py-2">
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-blue-600 h-2 rounded-full"
                                            style={{ width: `${user.progress}%` }}
                                        ></div>
                                    </div>
                                </td>
                                <td className="px-4 py-2">{user.role}</td>
                                <td className="px-4 py-2 flex users-center space-x-2">
                                    <UpdateButton id={user._id} />
                                    <RemoveButton userId={user._id} handleRemove={handleRemove} loading={loading} />

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination
    <div className="flex justify-center mt-6">
        <nav className="flex space-x-1">
            <button className="px-3 py-1 bg-white rounded-md shadow">1</button>
            <button className="px-3 py-1 bg-white rounded-md shadow">2</button>
            <button className="px-3 py-1 bg-white rounded-md shadow">3</button>
            <button className="px-3 py-1 bg-white rounded-md shadow">4</button>
        </nav>
    </div> */}
        </main>
    )
}

export default UsersTable
