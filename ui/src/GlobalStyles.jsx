import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 *{
    font-family: Helvetica;
    box-sizing: border-box;
  }

  html, body {
    font-size: 14px;
    margin: 0;
    padding: 0;
    background-color: #fff;
    height: 100vh;
    max-height: 100vh;
    overflow: "hidden";
  }

  .p-password .p-icon-field {
    width: 100%;
    input {
      width: 100%;
    }
  }

  // color
  .gatepex-gray{
    color: #ffffff;
    background: #27272a;
    border: 0 none;
  }

  // size
  .input-sm{
    font-size: 0.875rem;
    padding: 0.62475rem  0.875rem 0.62475rem  2.3rem;
  }
`

export default GlobalStyles;
