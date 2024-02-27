module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      fontFamily: {
        'NotoSerif' : 'Noto Serif KR',
      },
      colors: {
        primary: "#2155CD",
        primaryLight: '#DBE6FF',
        secondary: "#646464",
        gray: '#333333',
        grayLight: "#666666",
        active: '#82C36C',
        errorRed: '#D4634A',
        darkBlue: '#1F3B6F',
        green: "#27AF76",
        failureRed: "#D5634A",
        apple: "#D4634A",
        islamicGreen : "#1B8F11",
        venetianRed: "#FFF8EC",
        grayBg: "#F5F5F5",
        verseGreen: "#1B8F11",
        celestialBlue : '#3898CD',
        cataGbaCrey: '#5A5A5A',
        lightSilver: '#D9D9D9',
      },
      fontSize: {
        '1xs': '10px',
        '2xs': '8px',
      },
      minWidth: {
        'sm': '150px',
      },
      height: {
        'appScreen': 'calc(100vh - 66px)',
        'smallScreen': 'calc(100vh - 56px)',
      },
      borderWidth: {
        DEFAULT: '1px',
        xs: '0.5px',
      },
      borderRadius: {
        DEFAULT: '3px',
        lg: '8px'
      },
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }

