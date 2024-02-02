import React from 'react';

const SearchHistory = ({ history, onSearch }) => {
    return (
        <div className="mt-4">
            <p className="text-lg font-semibold mb-2">Search History:</p>
            <ul className="list-none">
                {history.map((term, index) => (
                    <li
                        key={index}
                        className="cursor-pointer text-blue-500 hover:underline mb-1"
                        onClick={() => onSearch(term)}
                    >
                        {term}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchHistory;
