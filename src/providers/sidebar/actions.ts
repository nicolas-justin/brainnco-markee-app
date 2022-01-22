import type { ActionMap } from 'interfaces/utils'

export enum SidebarActionTypes {
  OPEN = 'OPEN',
  CLOSE = 'CLOSE'
}

export type SidebarPayload = {
  [SidebarActionTypes.OPEN]: undefined;
  [SidebarActionTypes.CLOSE]: undefined;
};

type MappedSidebarPayload = ActionMap<SidebarPayload>;

export type SidebarActions = MappedSidebarPayload[keyof SidebarPayload];
