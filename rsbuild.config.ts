import { defineConfig, loadEnv, mergeRsbuildConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import dotenv from "dotenv";
// import { defineConfig } from "@rspack/cli";
import { DefinePlugin } from "@rspack/core";

// Load environment variables from .env
dotenv.config();

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    define: {
      'process.env.API_URL': JSON.stringify(process.env.API_URL),
    }
  }
});

console.log(process.env.FOO); // 'hello'
console.log(process.env.API_URL); // '1'