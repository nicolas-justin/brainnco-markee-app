import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import type { ThemeProviderProps } from './theme.types'

import { theme } from 'styles/theme'

import 'normalize.css'

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props

  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
}
