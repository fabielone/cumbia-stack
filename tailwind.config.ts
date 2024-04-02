import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { transform:'opacity: 0',},
          "100%": { transform:  'opacity: 1',},
        },
        fadeOut: {
          "0%": { transform: 'opacity: 1' },
          "100%": { transform: 'opacity: 0'},
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        fadeOut: "fadeOut 1s ease-in-out",
      },
    },
  },
  plugins: [
   
    require("flowbite/plugin")

  ],
} satisfies Config;
