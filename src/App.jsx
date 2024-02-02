import React from 'react';
import UserInfo from './component/UserInfo';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-green-300 p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center ">User Info App</h1>
        <UserInfo />
      </div>
    </div>
  );
}

export default App;
