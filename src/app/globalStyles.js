import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const globalStyles = `
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');
:root {
  --grey-color-50: #fbf0f2;
  --grey-color-100: #dcd8d9;
  --grey-color-200: #bfbfbf;
  --grey-color-300: #a6a6a6;
  --grey-color-400: #8c8c8c;
  --grey-color-500: #737373;
  --grey-color-600: #595959;
  --grey-color-700: #404040;
  --grey-color-800: #282626;
  --grey-color-900: #150a0d;
  --border-radius-md: 15px;
  --border-radius-lg: 25px;
  --font-size-sm: 0.8rem;
  --font-size-md: 1.2rem;
  --font-size-xs: 1.8rem;
  --font-size-lg: 2.1rem;
  --depth-hide: -1;
  --depth-auto: auto;
  --depth-base: 0;
  --depth-docked: 10;
  --depth-dropdown: 1000;
  --depth-sticky: 1100;
  --depth-banner: 1200;
  --depth-overlay: 1300;
  --depth-modal: 1400;
  --depth-popover: 1500;
  --depth-skipLink: 1600;
  --depth-toast: 1700;
  --depth-tooltip: 1800;
}

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body{
  font-family: 'Roboto', sans-serif !important;
  color: var(--grey-color-800);
}

button {
  background-color: hsla(0, 0%, 100%, 0.2) !important;
  backdrop-filter: blur(3px);
  &:disabled{
    cursor: not-allowed !important;
    pointer-events: all !important;
    background-color: transparent !important;
  }
}
`;

export default globalStyles;