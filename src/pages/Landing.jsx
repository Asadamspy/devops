import React from 'react';

const Landing = () => {
  return (
    <div className="text-center p-10 bg-gray-50">
      <h1 className="text-5xl font-bold text-blue-600">Welcome to TalentApp</h1>
      <p className="mt-4 text-lg text-gray-600">Simplify hiring and onboarding with ease.</p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Fast", "Reliable", "Scalable"].map((feature) => (
          <div key={feature} className="p-6 border rounded shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">{feature}</h3>
            <p className="mt-2 text-gray-500">This is a {feature.toLowerCase()} solution for your business.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
