module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.vue'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#0d2538',
        prmLight: '#0f2d44',
        link: '#af9cef',
      },
      fontFamily: {
        ppnExtraLight: ['poppins extra light'],
        ppnLight: ['poppins light'],
        ppnRegular: ['poppins regular'],
        ppnMedium: ['poppins medium'],
        ppnSemiBold: ['poppins semi bold'],
        ppnBold: ['poppins bold'],
        ppnExtraBold: ['poppins extra bold'],
        ppnBlack: ['poppins black'],
      },
    },
    // container customization
    container: (theme) => ({
      center: true,
      padding: "1rem",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('tailwind-scrollbar-hide'),
  ],
}
