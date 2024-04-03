import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import config from './config';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    root: './frontend',
    base: './',
    define: {
        __API_URL__: JSON.stringify(
            `http://127.0.0.1:5000${config.routerBasePath}`
        ),
    },
});
