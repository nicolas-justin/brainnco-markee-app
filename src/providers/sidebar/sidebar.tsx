import { useReducer } from 'react'

import type { SidebarProviderProps } from './sidebar.types'

import { initialState, sidebarContext } from 'contexts/sidebar'

import { sidebarReducer } from './reducers'

export const SidebarProvider = (props: SidebarProviderProps) => {
  const { children } = props

  const [state, dispatch] = useReducer(sidebarReducer, initialState)

  return (
    <sidebarContext.Provider value={{ state, dispatch }}>
      {children}
    </sidebarContext.Provider>
  )
}
