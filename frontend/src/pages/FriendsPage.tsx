import React from 'react';
import { useParams } from 'react-router-dom';
import FriendsList from '../components/FriendsList';

const FriendsPage: React.FC = () => {
    const { userId } = useParams<Record<string, string | undefined>>();

    // Handle the case when userId is undefined or not a valid number
    const userIdNumber = userId ? parseInt(userId, 10) : NaN;

    if (isNaN(userIdNumber)) {
        return <div className="text-2xl font-bold text-center text-red-600 mt-8">Invalid User ID</div>;
    }

    return (
        <div className="container mx-auto px-8 py-12 bg-white rounded-lg shadow-xl">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Friends List for User {userIdNumber}</h1>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <FriendsList userId={userIdNumber} />
            </div>
        </div>
    );
};

export default FriendsPage;