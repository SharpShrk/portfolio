import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// Конфигурация Vite для сборки проекта
export default defineConfig({
  plugins: [vue()], // Поддержка Vue-компонентов
  base: '/portfolio/', // Базовый путь для GitHub Pages (замени 'portfolio' на имя твоего репозитория)
  build: {
    outDir: 'dist', // Папка для собранных файлов
    assetsDir: 'assets' // Папка для статических ресурсов (CSS, изображения)
  }
});