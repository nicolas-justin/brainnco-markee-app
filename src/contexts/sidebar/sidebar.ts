import { createContext, useContext } from 'react'

import type { SidebarContextState, SidebarContext } from './sidebar.types'

const initialState: SidebarContextState = {
  isOpen: false,
}

const sidebarContext = createContext<SidebarContext>({
  state: initialState,
  dispatch: () => undefined,
})

const useSidebar = () => useContext(sidebarContext)

export { initialState, sidebarContext, useSidebar }
