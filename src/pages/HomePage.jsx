import React from 'react';

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Seção 1</h2>
        <p className="text-gray-700">
          Este é um exemplo de uma seção de conteúdo. Aqui você pode adicionar qualquer texto ou elementos que desejar.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-4">Seção 2</h2>
        <ul className="list-disc pl-5">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;