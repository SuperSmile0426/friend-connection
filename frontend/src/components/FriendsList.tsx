import React, { useEffect, useState } from 'react';
import { getFriendRequests, updateFriendRequest } from '../services/api';

interface FriendListProps {
    userId: number;
}

const FriendsList: React.FC<FriendListProps> = ({ userId }) => {
    const [friendRequests, setFriendRequests] = useState<any[]>([]);

    useEffect(() => {
        const fetchRequests = async () => {
            const requests = await getFriendRequests(userId);
            setFriendRequests(requests);
        };
        fetchRequests();
    }, [userId]);

    const handleAccept = async (friendId: number) => {
        await updateFriendRequest(friendId, true);
        const requests = await getFriendRequests(userId);
        setFriendRequests(requests);
    };

    const handleDecline = async (friendId: number) => {
        await updateFriendRequest(friendId, false);
        const requests = await getFriendRequests(userId);
        setFriendRequests(requests);
    };

    return (
        <div className="bg-white rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Friend Requests</h2>
            <ul>
                {friendRequests.map((request: any) => (
                    <li key={request.id} className="flex items-center justify-between py-2 border-b border-gray-300">
                        <span className="text-lg text-gray-800">{request.friend.username}</span>
                        <div>
                            <button 
                                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md mr-2 cursor-pointer"
                                onClick={() => handleAccept(request.id)}
                            >
                                Accept
                            </button>
                            <button 
                                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md cursor-pointer"
                                onClick={() => handleDecline(request.id)}
                            >
                                Decline
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FriendsList;