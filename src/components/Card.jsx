import React from 'react';

const Card = ({ title, value }) => {
  return (
    <div className="bg-white p-6 rounded shadow text-center">
      <h3 className="text-lg text-gray-700">{title}</h3>
      <p className="text-2xl font-bold text-blue-600 mt-2">{value}</p>
    </div>
  );
};

export default Card;
