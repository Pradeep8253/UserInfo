import React from 'react';

const UserList = ({ users }) => {
    return (
        <ul className="list-disc pl-4">
            {users.map(user => (
                <li key={user.id} className="mb-2">
                    {user.name}
                </li>
            ))}
        </ul>
    );
};

export default UserList;
