/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Metal Mania", "sans-serif"],
      body: ["Syne", "sans-serif"],
    },
    extend: {
      width: {
        "180": "45rem"
      },
      maxWidth: {
        "180": "45rem"
      },
      screens:{
        "xs": "470px",
        "md2": "830px"
      },
      colors: {
        Neutral: {
          50: "#F4F5F5",
          100: "#EAECEB",
          200: "#DFE2E1",
          300: "#C9CFCD",
          400: "#A9B1AF",
          500: "#3A403F",
          600: "#303634",
          700: "#242827",
          800: "#1D201F",
          900: "#131515",
        },
        primary01: {
          50: "#F3F7F7",
          100: "#D9E8E8",
          200: "#CCE0E0",
          300: "#9AC1C1",
          400: "#8DB9B9",
          500: "#67A2A2",
          600: "#558B8B",
          700: "#467272",
          800: "#273F3F",
          900: "#1D2F2F",
        },
        primary02: {
          50: "#DBE4E6",
          100: "#C3D2D5",
          200: "#A0B7BB",
          300: "#88A5AA",
          400: "#709299",
          500: "#66888F",
          600: "#557277",
          700: "#445B5F",
          800: "#324548",
          900: "#1D2729",
        },
        primary03: {
          50: "#F4F6F4",
          100: "#E9ECE9",
          200: "#D3D9D3",
          300: "#9DAA9D",
          400: "#879787",
          500: "#687868",
          600: "#535F53",
          700: "#4C574C",
          800: "#394139",
          900: "#1C211C",
        },
        primary04: {
          50: "#E5E5DC",
          100: "#D4D3C4",
          200: "#C2C2AD",
          300: "#A6A587",
          400: "#979672",
          500: "#81805F",
          600: "#6A694E",
          700: "#464534",
          800: "#3B3A2B",
          900: "#171711",
        },
      },
      boxShadow: {
        glow: [
          "0px 0px 0.271px rgba(166, 165, 135, .9)",
          "0px 0px 0.542px rgba(166, 165, 135, .8)",
          "0px 0px 1.898px rgba(166, 165, 135, .7)",
          "0px 0px 3.797px rgba(166, 165, 135, .8)",
          "0px 0px 6.509px rgba(166, 165, 135, .9)",
          "0px 0px 11.39px rgba(166, 165, 135, 1)",
        ],
      },
      backgroundImage: {
        "hero-pattern": "url('/bg-02-darkened.svg')",
        "home-pattern": "url('/Home.svg')",
        "duellistZone-pattern": "url('/DuellistZone.svg')",

        event01: "url('/event_01.jpg')",
        event02: "url('/event_02.jpg')",
        event03: "url('/event_03.jpg')",
        event04: "url('/event_04.jpg')",
        event05: "url('/event_05.jpg')",
        event06: "url('/event_06.jpeg')",
        event07: "url('/event_07.jpg')",
        event08: "url('/event_08.jpg')",
        event09: "url('/event_09.jpg')",
        event10: "url('/event_10.jpg')",

        avatar0: "url('/avatar0.svg')",
        avatar1: "url('/avatar1.svg')",
        avatar2: "url('/avatar2.svg')",
        avatar3: "url('/avatar3.svg')",
        avatar4: "url('/avatar4.svg')",
        avatar5: "url('/avatar5.svg')",
        avatar6: "url('/avatar6.svg')",
        avatar7: "url('/avatar7.svg')",
        avatar8: "url('/avatar8.svg')",
        avatar9: "url('/avatar9.svg')",
        avatar10: "url('/avatar10.svg')",
        avatar11: "url('/avatar11.svg')",
        avatar12: "url('/avatar12.svg')",
        avatar13: "url('/avatar13.svg')",
        avatar14: "url('/avatar14.svg')",
        avatar15: "url('/avatar15.svg')",
        avatar16: "url('/avatar16.svg')",
        avatar17: "url('/avatar17.svg')",
        avatar18: "url('/avatar18.svg')",
        avatar19: "url('/avatar19.svg')",
        avatar20: "url('/avatar20.svg')",
        avatar21: "url('/avatar21.svg')",
        avatar22: "url('/avatar22.svg')",
        avatar23: "url('/avatar23.svg')",
        avatar24: "url('/avatar24.svg')",
        avatar25: "url('/avatar25.svg')",
        avatar26: "url('/avatar26.svg')",
        avatar27: "url('/avatar27.svg')",
        avatar28: "url('/avatar28.svg')",
        avatar29: "url('/avatar29.svg')",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
