import React, { useState } from 'react';
import { sendFriendRequest } from '../services/api';

interface StatusUpdateProps {
    userId: number;
}

const StatusUpdate: React.FC<StatusUpdateProps> = ({ userId }) => {
    const [friendId, setFriendId] = useState<number | null>(null);

    const handleSubmit = async () => {
        if (friendId !== null) {
            await sendFriendRequest(userId, friendId);
            alert('Friend request sent!');
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-xl p-6">
            <input
                className="border-2 border-gray-300 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring focus:ring-indigo-300"
                type="number"
                placeholder="Enter Friend ID"
                value={friendId || ''}
                onChange={(e) => setFriendId(Number(e.target.value))}
            />
            <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md cursor-pointer"
                onClick={handleSubmit}
            >
                Send Friend Request
            </button>
        </div>
    );
};

export default StatusUpdate;