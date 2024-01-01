import type { Config } from "tailwindcss";

const config: Config = { 
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         
            'php_code.webp': "url('/assets/images/php_code.webp')",
            // Add more background image definitions as needed
          
      },
      fontFamily: {
        custom: ["CustomFont", "sans"],
      },
    },
  },
  plugins: [],
};
export default config;
