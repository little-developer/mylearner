import React, { useState } from 'react';
import { useAuth } from '../api/auth';
const Navbar:React.FC = () => {
    const { user, login, logout } = useAuth();
    const [u, setu] = useState('User')
    const log = () => {
        console.log(user)
        if (user) {
            setu(user)
        }
        setu(login("Saurav"))
    }
    const logo = () => {
        setu(logout())
    }
    return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="flex space-x-4">
            <a href='#'>{u}</a>
            <a href="/" className="hover:text-gray-300">Home</a>
            <a href="/about" className="hover:text-gray-300">About</a>
            <a href="/services" className="hover:text-gray-300">Services</a>
        </div>
        <div>
            {user ? (
                <button onClick={logo} className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 cursor-pointer">Logout</button>
            ) : (
                <button onClick={log} className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700 cursor-pointer">Login</button>
            )}
        </div>
    </div>
  );
};

export default Navbar;
