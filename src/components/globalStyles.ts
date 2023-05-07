import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Manrope-Regular';
    src: url('/fonts/Manrope-Regular.woff') format('woff');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'RecoletaAlt-Regular';
    src: url('/fonts/RecoletaAlt-Regular.woff') format('woff');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

body {
    background: ${({ theme }: any) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Manrope-Regular';
    transition: all 0.50s linear;
    width: 100%;
}
`
