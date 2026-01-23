import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            // Alias '@' to the 'src' directory
            '@': path.resolve(__dirname, './src'),
            // You can add more specific aliases too
            '@services': path.resolve(__dirname, './src/services'),
        }
    },
    plugins: [
        react(),
        tailwindcss(),
    ],
})
