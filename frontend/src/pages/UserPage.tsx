import React from 'react';
import { useParams } from 'react-router-dom';
import UserProfile from '../components/UserProfile';
import FriendsList from '../components/FriendsList';
import StatusUpdate from '../components/StatusUpdate';

interface UserParams {
    userId: string;
}

const UserPage: React.FC = () => {
    const { userId } = useParams<Record<string, string | undefined>>();

    const userIdNumber = userId ? parseInt(userId, 10) : NaN;


    return (
        <div>
            <h1>User Profile</h1>
            <UserProfile user={{ id: userIdNumber, username: 'User' + userId, email: `user${userId}@example.com` }} />
            <StatusUpdate userId={userIdNumber} />
            <FriendsList userId={userIdNumber} />
        </div>
    );
};

export default UserPage;