import { createGlobalStyle } from 'styled-components';

export const Color = {
  $MainYellow: '#ffe600',
  $MainBlue: '#3483fa',
  $Black: '#333333',
  $DarkGrey: '#666666',
  $Grey: '#999999',
  $LighterGrey: '#eeeeee',
}

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: content-box;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: ${Color.$LighterGrey};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;