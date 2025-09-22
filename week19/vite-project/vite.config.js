import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteMockServe } from 'vite-plugin-mock';

// https://vite.dev/config/
export default defineConfig( ({command}) => ({ 
  plugins: [
    react(),
    // 백 서버가 다 나오지 않아도 사용할 수 있도록 설정
    viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve',
    }),
  ],
}));
