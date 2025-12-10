import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        "lumafin-gradient-start": "#111827",
        "lumafin-gradient-mid": "#1f2937",
        "lumafin-gradient-end": "#334155"
      },
      boxShadow: {
        "glow-lg":
          "0 20px 70px -30px rgba(99, 102, 241, 0.35), 0 10px 40px -20px rgba(34, 211, 238, 0.25)"
      },
      backgroundImage: {
        "lumafin-gradient":
          "linear-gradient(135deg, #111827 0%, #1f2937 45%, #334155 100%)",
        "lumafin-radial":
          "radial-gradient(circle at 22% 16%, rgba(17,24,39,0.08), transparent 36%), radial-gradient(circle at 82% 6%, rgba(31,41,55,0.08), transparent 30%), radial-gradient(circle at 48% 82%, rgba(51,65,85,0.08), transparent 42%)"
      }
    }
  },
  plugins: []
};

export default config;

