import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        course: resolve(__dirname, "course.html"),
        about: resolve(__dirname, "about.html"),
        school: resolve(__dirname, "school_programme.html"),
      },
    },
  },
});
