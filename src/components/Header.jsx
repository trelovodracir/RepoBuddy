import React from 'react';
import NavBar from './NavBar';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Trelov Odracir</h1>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;