import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
  box-sizing: border-box;
  word-wrap: break-word;
  }
  body {
    min-height: 100%;
    background-color: lightgrey;
  }
`;
