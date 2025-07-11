import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-center p-4 mt-10">
      <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} TalentApp. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
