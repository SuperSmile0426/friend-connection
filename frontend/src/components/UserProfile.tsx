import React from 'react';

interface UserProfileProps {
    user: {
        id: number;
        username: string;
        email: string;
    };
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
    return (
        <div className="bg-white rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800">{user.username}</h2>
            <p className="text-gray-600 mt-2"><b>Email:</b> {user.email}</p>
        </div>
    );
};

export default UserProfile;