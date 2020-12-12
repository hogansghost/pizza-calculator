import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    display: block;
    margin: 0;
    font-family: inherit;
    font-weight: normal;
  }


  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: sans-serif;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
    -webkit-appearance: none;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }
`;
