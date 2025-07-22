import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],

    esbuild: {
        jsx: 'automatic',
    },

    resolve: {
        alias: {
            'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
            // Mise à jour du chemin vers le bon dossier 'resources/scss'
            '@sass-variables': resolve(__dirname, 'resources/scss/_variable.scss'),
        },
    },

    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import '@sass-variables';`, // Import automatique du fichier _variable.scss
            },
        },
    },
});
