import { defineConfig } from "vite";

export default defineConfig({
	test: {
		environment: "jsdom",
	},
	resolve: {
		alias: {
			src: "/src",
		},
	},
});
