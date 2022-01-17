import { StrictMode } from 'react'

import { AppProvider, ThemeProvider } from 'providers'

export const Root = () => (
  <StrictMode>
    <ThemeProvider>
      <AppProvider />
    </ThemeProvider>
  </StrictMode>
)
