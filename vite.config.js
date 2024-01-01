import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude:['**/*.png', '**/*.gif', '**/*.jpg', '**/*.pdf'],
  server: {
    port: 3000,
    open: true,
  },
});
