import React from 'react';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import { dummyStats } from '../data/dummyStats';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 flex-1">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {dummyStats.map((stat, i) => (
            <Card key={i} title={stat.title} value={stat.value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
