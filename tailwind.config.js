const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },

      screens: {
        xs: "340px",
        "2xs":"390px",
        "2sm":"480px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },

      colors: {
        primary: "#556684",
        secondary: "#f8f7f2",
        border: "rgba(202, 202, 202, .5)",
        title: "rgb(39 39 42)",
        subtitle: "rgb(82 82 91)",
        bgheader: "#ffffff",
        hstitle: "#555",
        text: "#fbffff",
        para: "#666",
        title: "#181818",
        background: "#f5f5f5",
        redcolor: "#e81212",
        blackcolor:"#001524",
        blackcolor1:"rgba(40, 40, 48, 0.633)"

        // maintransition: .5s ease;
        // navtext:#777;
        // navtexthover: #65d2bc;

        // hssubtitle: rgb(161 161 170);
        // hssubtitlehover: #787878;
        // hssubtitlep: #787878;
        // img: #3f3e3e;
        // sec2p: #fff;
        // sec4p: #787878;
        // soapy:#f0655699;
        // soapyhv: #555;
      },
      keyframes: {
        mymove: {
          "0%": { transform: "scale(0)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        mymove: "mymove 1s ease-in-out infinite",
      },
      keyframes: {
        pulse: {
          "0%": {
            opacity: 0.25,
          },
          "50%": {
            opacity: 0.5,
          },
          "75%": {
            opacity: 0.75,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        pulse: "pulse .5s",
      },
    },
  },
  plugins: [],
};
