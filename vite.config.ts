import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	server: {
		port: 3000
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "src/tests/setupTests",
		mockReset: true,
	},
})
