import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Use the compatibility layer for Next.js configs
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Add your own custom rules
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      // Basic formatting rules
      semi: ["error", "always"],
      "no-extra-semi": "error",
      "no-console": "warn",
      quotes: ["error", "single"],

      // Additional rules you might want
      "no-unused-vars": "warn",
      "prefer-const": "error",
    },
  },
];

export default eslintConfig;
