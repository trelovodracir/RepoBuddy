import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 font-mono">
      <div className="container mx-auto text-center">
        <p>Construído em JS (linguagem), React (biblioteca), TailwindCSS (framework de estilização). Gerenciado em Vite (gerencia dev e build).</p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li><a href="https://trelovodracir.github.io" className="hover:underline">Trelov Odracir</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;