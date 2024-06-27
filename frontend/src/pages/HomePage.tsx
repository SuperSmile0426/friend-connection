import React from 'react';
import UserList from '../components/UserList';

const HomePage: React.FC = () => {
    return (
        <div className="container mx-auto px-8 py-12 bg-white rounded-lg shadow-xl">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Welcome to the Social Media App</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                    <UserList />
                </div>
                <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                    {/* Add another component here if needed */}
                </div>
            </div>
        </div>
    );
};

export default HomePage;