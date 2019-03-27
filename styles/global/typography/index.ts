import { createGlobalStyle } from 'styled-components';

export const Typography = createGlobalStyle`
  html,
  body {
    font-synthesis: none;
    font-feature-settings: "kern";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    direction: ltr;
    text-align: left;
    font-family: 'Montserrat', sans-serif;
  }
`;
