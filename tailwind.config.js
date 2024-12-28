module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Inter",
      roboto: ["Roboto", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "0",
      },
    },
    screens: {
      sm: "426px",
      md: "769px",
      lg: "1025px",
      xl: "1441px",
      xxl: "2560px",
      mob1: "370px",
      mob2: "640px",
      tab: "768px",
      tab1: "960px",
      tab2: "1024px",
      lap: "1280px",
      lap1: "1440px",
      lap2: "1600px",
      big: "1920px",
    },
    colors: {
      primary: "#9DB350",
      bg1: "#F1E0C6",
      bg2: "#FAF9F6",
      cta1: "#FF8C65",
      cta2: "#1D3557",
      accent1: "#D5C6E0",
      body: "#333333",
      headings1: "#003366",
      headings2: "#4C9F70",
      subtext: "#888888",
      highlight2: "#BFD9DB",
      ctatext1: "#F1E0C6",
      white: "#FFFFFF",
      link: "#FF6F61",
      hover1: "#F8C8A4",
      hover2: "#D4AF37",
      light: "#D3D3D3",

      blue: "#003087",
      white: "#FFFFFF",
      youtube: "#FF0000",
      instagram: "#962fbf",
      facebook: "#316FF6",
      gray: {
        DEFAULT: "#d1d5db",
        100: "#f5f5f5",
        500: "#6b7280",
        600: "#4A5568", // used for text-gray-600
        700: "#374151", // used for text-gray-700 2D3748
        800: "#2B2B2B", // used for text-gray-800
        400: "#CBD5E0", // used for bg-gray-400
      },
      yellow: {
        DEFAULT: "#EDC988",
        600: "#D97706",
      },
      egreen: {
        DEFAULT: "#9CB250",
        70: "#9CB25070",
        90: "#9CB25090",
      },
      orange: {
        DEFAULT: "#FF9F66",
        // 100: "#FFF1E8",
        200: "#FFB081",
        500: "#f97316",
        100: "#ffedd5",
        hover: "#FF9454",
      },
      green: {
        DEFAULT: "#258650",
        50: "#f0fdf4",
        700: "#047857",
        100: "#D4EEE9",
        200: "#94CAC0",
        300: "#45A090",
      },
      pink: {
        DEFAULT: "FF7D6B",
        100: "#FFE9E4",
        200: "#FEAEA3",
      },
      red: {
        100: "#D10000",
        500: "#F56565",
      },
      heading: "#1C0A0A",
      paragraph: "#584F49",
      stroke: {
        1: "#B0B4C0",
        2: "#CFCFCF",
        3: "#F4F5F7",
      },
      section: "#F5F6F9",
      shape: "#E8EEF0",
      transparent: "#000000A0",
    },
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/img/hero/bg.jpg')",
        people: "url('/src/assets/img/hero/guy.png')",
        cardsBg: "url('/src/assets/img/cards/bg.png')",
        video: "url('/src/assets/img/video/video.png')",
        contact: "url('/src/assets/img/contact/bg.png')",
      },
      boxShadow: {
        header: "0px 18px 36px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
