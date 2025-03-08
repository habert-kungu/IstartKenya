/** @type {import('tailwindcss').Config} */

export tailwind.config = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F78154",
        secondary: "#1f2937",
        green: "#AF9164",
        neutral: "#F7F3E3",
        maroon: "#800000 ",
      },
      borderRadius: {
        none: "0px",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        full: "9999px",
        button: "8px",
      },
    },
  },
  plugins: [],
};
