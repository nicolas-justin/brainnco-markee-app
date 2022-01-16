export const theme = {
  colors: {
    black: '#1E293B',
    lightBlack: '#293445',
    gray: '#E4E5E7',
    white: '#FAFAFA',
    primary: '#1FC8E1',
  },
} as const

export type Theme = typeof theme
