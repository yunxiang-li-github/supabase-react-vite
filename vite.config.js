import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    define: {
      "process.env.SUPABASE_PROJECT_URL": JSON.stringify(
        env.SUPABASE_PROJECT_URL
      ),
      "process.env.SUPABASE_API_KEY": JSON.stringify(env.SUPABASE_API_KEY),
    },
  };
});
