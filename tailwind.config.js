/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        yayyuYellow: "#FCBA41",
        yayyuGrey: "#373435",
        titusLightBorder: "#ffffff1f",
        titusText: "#828C9B",
        titusDark: "#060606",
        titusDarkLight: "#111111",
        titusDarkGray: "#1F1F1F",
        titusDarkPurple: "#280934",
        titusLilac: "#D401F0",
        titusBlue: "#5904D3",
        titusSky: "#C3EBFA",
        titusLight: "#EDF9FD",
        titusPurple: "#A855F7",
        titusPurpleLight: "#F1F0FF",
        titusYellow: "#FAE27C",
        titusYellowLight: "#FEFCE8",
      },
    },
  },
  plugins: [],
};
