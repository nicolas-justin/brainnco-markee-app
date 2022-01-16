import {} from 'styled-components'

import type { Theme } from 'resources/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
