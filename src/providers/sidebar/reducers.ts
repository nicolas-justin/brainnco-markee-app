import type { RecursivePartial } from 'interfaces/utils'
import type { SidebarContextState } from 'contexts/sidebar/sidebar.types'

import { SidebarActions, SidebarActionTypes } from './actions'

import { deepMerge } from 'utils/object'

const createNewState = <T extends SidebarContextState>(
  currentState: T,
  newState: RecursivePartial<T>,
): T => {
  return deepMerge({} as T, currentState, newState)
}

export const sidebarReducer = (
  state: SidebarContextState,
  action: SidebarActions,
) => {
  switch (action.type) {
    case SidebarActionTypes.OPEN: {
      return createNewState(state, {
        isOpen: true,
      })
    }

    case SidebarActionTypes.CLOSE: {
      return createNewState(state, {
        isOpen: false,
      })
    }

    default: {
      // @ts-expect-error
      throw Error(`Unhandled action type: ${action.type}`)
    }
  }
}
