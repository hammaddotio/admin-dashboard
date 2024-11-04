import React from 'react'
import { Link } from 'react-router-dom'
import { ADMIN_SIDEBAR } from '../../../utils/constants'

const SideBar = () => {
    return (
        <aside className="w-64 bg-gray-800 text-white h-screen">
            <div className="p-4 text-2xl font-bold">One</div>
            <nav className="mt-6">
                {
                    ADMIN_SIDEBAR.map(sidebar =>
                        <Link href="#" key={sidebar} to={sidebar.route} className="block py-2.5 px-4 rounded hover:bg-gray-700">{sidebar.value}</Link>
                    )
                }
            </nav>
            <div className="p-4 mt-4">
                <button className="bg-blue-600 w-full py-2 rounded">Logout</button>
            </div>
        </aside>
    )
}

export default SideBar
