import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './UserList';
import SearchHistory from './SearchHistory';

const UserInfo = () => {
    const [sortOrder, setSortOrder] = useState('asc');
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchHistory, setSearchHistory] = useState([]);

    useEffect(() => {
        const storedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        setSearchHistory(storedHistory);
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleSearch = term => {
        setSearchTerm(term);
        setSearchHistory([...searchHistory, term]);
        localStorage.setItem('searchHistory', JSON.stringify([...searchHistory, term]));
    };

    const handleSort = () => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        const sortedUsers = [...users].sort((a, b) => {
            const comparison = a.name.localeCompare(b.name);
            return newSortOrder === 'asc' ? comparison : -comparison;
        });

        setSortOrder(newSortOrder);
        setUsers(sortedUsers);
    };

    return (
        <div className="container mx-auto my-8 p-8 bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-4">User Info</h1>
            <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="p-2 border rounded mr-2"
            />
            <button
                onClick={() => handleSearch(searchTerm)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Search
            </button>
            <button
                onClick={handleSort}
                className="bg-green-500 text-white px-4 py-2 rounded ml-2"
            >
                Sort by Name
            </button>
            <UserList users={users} />
            <SearchHistory history={searchHistory} onSearch={handleSearch} />
        </div>
    );
};

export default UserInfo;
