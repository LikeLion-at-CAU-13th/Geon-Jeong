import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    
    @font-face {
    font-family: 'Anthony';
    src: url('/Anthony.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

    body {
        font-family: 'Anthony', sans-serif;
    }
    `;