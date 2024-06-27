import React, { useState, useEffect } from 'react';
import { getUsers } from '../services/api';

const UserList: React.FC = () => {
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await getUsers();
            setUsers(users);
        };

        fetchUsers();
    }, []);

    return (
        <div className="bg-white rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id} className="text-lg text-gray-600 mb-2">{user.username}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;