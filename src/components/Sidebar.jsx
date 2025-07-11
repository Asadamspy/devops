import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 p-4 border-r">
      <h2 className="text-xl font-bold mb-6">Sidebar</h2>
      <ul className="space-y-4">
        <li>Overview</li>
        <li>Users</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
