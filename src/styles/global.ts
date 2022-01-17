import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'DM Sans', sans-serif;
  }

  html,
  body,
  [data-root] {
    width: 100%;
    height: 100%;
  }

  h1 {
    font-size: 1.75rem;
  }
`
