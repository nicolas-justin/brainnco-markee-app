import type { Breakpoint } from 'styles/theme/breakpoints'

import { breakpoints } from 'styles/theme/breakpoints'

export const media = {
  lessThan: (breakpoint: Breakpoint) => {
    return `@media (max-width: calc(${breakpoints[breakpoint]} - 0.01px))`
  },

  greaterThan: (breakpoint: Breakpoint) => {
    return `@media (min-width: calc(${breakpoints[breakpoint]} + 0.01px))`
  },

  lessThanOrEqual: (breakpoint: Breakpoint) => {
    return `@media (max-width: ${breakpoints[breakpoint]})`
  },

  greaterThanOrEqual: (breakpoint: Breakpoint) => {
    return `@media (min-width: ${breakpoints[breakpoint]})`
  },

  between: (
    firstBreakpoint: Breakpoint,
    secondBreakpoint: Breakpoint,
  ) => {
    const first = breakpoints[firstBreakpoint]
    const second = breakpoints[secondBreakpoint]

    return `@media (min-width: ${first}) and (max-width: ${second})`
  },
}
