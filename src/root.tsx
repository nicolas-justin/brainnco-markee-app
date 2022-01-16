import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { App } from './app'

import { theme } from 'resources/theme'

import 'normalize.css'

function Root () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
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
    font-family: 'DM Sans', sans-serif;
  }

  h1 {
    font-size: 1.5rem;
  }
`

export { Root }
