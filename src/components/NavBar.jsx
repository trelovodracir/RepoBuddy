import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  /*const toggleMenu = () => {
    console.log('Menu toggled');
    setIsOpen(!isOpen);
  };*/

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative">
      {/* Botão de Menu Hamburguer */}
      <button
        className="md:hidden p-2 border rounded text-white"
        onClick={toggleMenu} // Alterna o estado do menu
      >
        ☰
      </button>
      
      {/* Menu de navegação */}
      <ul
        className={`absolute md:static bg-gray-800 md:bg-transparent md:flex md:space-x-4 p-4 md:p-0 ${
          isOpen ? 'block' : 'hidden' // Exibe ou oculta o menu com base no estado
        }`}
      >
        <li><a href="https://github.com/trelovodracir" className="hover:underline">My GitHub</a></li>
        <li><a href="https://fisica.ufpr.br" className="hover:underline">Física UFPR</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
