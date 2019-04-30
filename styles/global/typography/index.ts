import { createGlobalStyle } from 'styled-components';
import { spacing } from 'styles/spacing';
import { highlightGradient } from 'styles/global/colors';

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
    font-size: 24px;
    line-height: 36px;
  }

  p {
    margin: ${spacing()}px 0 ${spacing(3)}px;
  }

  a {
    text-decoration: none;
    background-clip: text;
    /* stylelint-disable-next-line */
    -webkit-background-clip: text !important;
    color: transparent !important;
    background-image: ${highlightGradient};
    background-size: 100vw;
    transition: border 0.3s ease;
    border-bottom: 2px solid rgba(255, 255, 255, 0);
  }

  a:hover {
    border-bottom: 2px solid #b14677;
  }

  strong {
    font-weight: bold;
  }
`;
