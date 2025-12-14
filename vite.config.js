import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: './',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                shop: resolve(__dirname, 'shop.html'),
                specials: resolve(__dirname, 'specials.html'),
                contact: resolve(__dirname, 'contact.html'),
            },
        },
    },
});
