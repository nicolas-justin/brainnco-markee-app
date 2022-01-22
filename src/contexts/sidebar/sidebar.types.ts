import React from 'react'

import type { SidebarActions } from 'providers/sidebar/actions'

export type SidebarContextState = {
  isOpen: boolean;
};

export type SidebarContext = {
  state: SidebarContextState;
  dispatch: React.Dispatch<SidebarActions>;
};
