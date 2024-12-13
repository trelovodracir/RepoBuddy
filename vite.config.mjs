import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/RepoBuddy/', // substitua 'nome-do-repositorio' pelo nome real do seu repositório
  plugins: [react()],
});
