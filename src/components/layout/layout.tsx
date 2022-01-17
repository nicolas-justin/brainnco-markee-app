import { Sidebar } from 'components/sidebar'
import { Editor } from 'components/editor'

import * as S from './layout.styles'

export const Layout = () => (
  <S.LayoutWrapper>
    <Sidebar />
    <Editor />
  </S.LayoutWrapper>
)
